import axios from "axios";
import BaseHook from "@hook/hook";
const abortableSymbol = Symbol("abortable");
const ableSymbol = Symbol("able");
class Ajax extends BaseHook {
  static create = function (url, method) {
    const ajax = new this();
    if (typeof url !== "undefined") {
      ajax.url(url);
    }
    if (typeof method !== "undefined") {
      ajax.method(method);
    }
    return ajax;
  };
  constructor() {
    super();
    this[ableSymbol] = true;
    this.addSetAndGetMethods("config", "getConfig");
    this.addSetAndGetMethods("params", "getParams");
  }
  method(method) {
    this.config("method", method);
    return this;
  }
  url(url) {
    this.config("url", url);
    return this;
  }
  abortable() {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    this[abortableSymbol] = source;
    this.config("cancelToken", source.token);
    return this;
  }
  abort(message) {
    const source = this[abortableSymbol];
    if (source) {
      source.cancel(message);
    }
    return this;
  }
  disable() {
    this[ableSymbol] = false;
  }
  enable() {
    this[ableSymbol] = true;
  }
  isDisabled() {
    return this[ableSymbol] === false;
  }

  async convertResponse(res) {
    return res;
  }
  async convertData(data) {
    return data;
  }
  async convertError(error) {
    return error;
  }
  async fetch() {
    if (!this[ableSymbol]) {
      return this;
    }
    try {
      await this.emit("request");
    } catch (err) {}
    try {
      const config = this.getConfig();
      const method = (config.method || "get").toUpperCase();
      if (method === "PUT" || method === "POST" || method === "PATCH") {
        this.config({
          data: this.getParams()
        });
      } else {
        this.config({
          params: this.getParams()
        });
      }
    } catch (err) {}

    await axios
      .request(this.getConfig())
      .then(async (raw) => {
        let res = raw;
        try {
          res = await this.convertResponse(res);
        } catch (err) {}
        try {
          res.data = await this.convertData(res.data, res);
        } catch (err) {}
        try {
          await this.emit("netComplete", true, res);
        } catch (err) {}
        try {
          await this.emit("netSuccess", res.data, res);
        } catch (err) {}
        try {
          await this.emit("netCompleted", true, res);
        } catch (err) {}
      })
      .catch(async (rawError) => {
        let error = rawError;
        try {
          error = await this.convertError(error);
        } catch (err) {}
        try {
          await this.emit("netComplete", false, error);
        } catch (err) {}
        try {
          if (error.response) {
            await this.emit("netResponseError", error.response, error);
          } else if (error.request) {
            await this.emit("netRequestError", error.request, error);
          } else {
            await this.emit("netUnknownError", error);
          }
        } catch (err) {}
        try {
          await this.emit("netError", error);
        } catch (err) {}
        try {
          await this.emit("netCompleted", false, error);
        } catch (err) {}
      });
    return this;
  }
}
Ajax.axios = axios;
export default Ajax;
