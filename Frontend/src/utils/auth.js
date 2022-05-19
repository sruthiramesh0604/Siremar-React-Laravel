const axios = require("axios");

// module.exports.url = "http://backend.sst0847.uta.cloud/functions/";
module.exports.url = "http://localhost:8000/api/";

module.exports.loginAuth = (email, password) => {
  const getList = () => {
    return axios({
      url: module.exports.url + "getlist",
      method: "post",
      data: {
        table: "Users",
      },
    }).then((res) => {
      var data = res.data.filter(
        (user) => user.email_id === email && user.Password === password
      );
      if (data.length && data[0].Name) {
        window.sessionStorage.setItem("user", JSON.stringify(data[0]));
        window.location.assign("/dashboard");
      } else {
        alert("Invalid credentials!");
      }
    });
  };
  getList();
};

module.exports.deleteByID = (table, id) => {
  axios({
    url: module.exports.url + "delete",
    method: "post",
    data: {
      table: table,
      id: id,
    },
  });
};

module.exports.registerUser = (data, third = false) => {
  const regUser = () => {
    return axios({
      url: module.exports.url + "insertusers",
      method: "post",
      data: data,
    }).then((res) => {
      console.log(res);
    });
  };
  if (data.Password === data.confirm_password && !third) {
    regUser();
    module.exports.loginAuth(data.email_id, data.Password);
  } else {
    alert("Password mismatch");
  }
};

module.exports.registerEntity = (data, Xurl) => {
  axios({
    url: module.exports.url + Xurl,
    method: "post",
    data: data,
  }).then((res) => {
    console.log(res);
  });
};
