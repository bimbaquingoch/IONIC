XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (urlApi) => {
  return new Promise((resolve, reject) => {
    // recibo la api para conectarme
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("err"));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;
