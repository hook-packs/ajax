const formSymbol = Symbol("form");
const Ajax = HookAjax;

const url = "./test.json";
Ajax.create(url, "get")
  .params({
    a: 1,
    b: 2
  })
  .params("a", 222)
  .on("netError", function (err) {
    console.log("reqerror: ", err.request);
    console.log("reserror: ", err.response);
  })
  .rewrite("convertData", async function (data, res) {
    console.log("data: ", data);
    console.log("res: ", res);
    await new Promise((resolve) => {
      setTimeout(resolve, 300);
    });
    data.c = 3;
    return data;
  })
  .on("netSuccess", function (res, raw) {
    console.log("有效数据: ", res);
    console.log("原数据: ", raw);
    console.log("params: ", this.getParams());
  })
  .on("netSuccess.500", () => {
    console.log("I am the first success callback!");
  })
  .on("request", function () {
    console.log("begin fetch");
  })
  .fetch();
