import JsonP from "jsonp";
import axios from "axios";
import { Modal } from "antd";
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

  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.querySelector('#ajaxLoading')
      loading.style.display = 'block'
    }
    const baseURL = "https://easy-mock.com/mock/5d0342af599408638e6ad79c/raapi";
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: "GET",
        baseURL,
        timeout: 5000,
        params: (options.data && options.data.params) || ""
      }).then(responseText => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.querySelector('#ajaxLoading')
          loading.style.display = 'none'
        }
        const {data, status} = responseText
        if (status === 200) {
          // 业务
          if (data.code === 0) {
            resolve(data)
          } else {
            Modal.info({
              title: "提示",
              content: data.msg
            })
          }
        } else {
          reject(data)
        }
      });
    });
  }
}
