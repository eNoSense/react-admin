import JsonP from "jsonp";
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      const { url } = options;
      JsonP(
        url,
        {
          param: "callback"
        },
        function(error, response) {
          if (response.status === "ok") {
            resolve(response);
          } else {
            reject(response.message);
          }
        }
      );
    });
  }
}
