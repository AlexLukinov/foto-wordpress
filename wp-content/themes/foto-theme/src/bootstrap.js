import axios from "axios";

var _ = require('lodash');

try {
  axios.defaults.headers.common = {
    "X-CSRF-TOKEN":
      typeof window.WordPress !== "undefined" ? window.WordPress.csrfToken : "",
    "X-Requested-With": "XMLHttpRequest"
  };
} catch (e) {
  console.log(e);
}
