const vfilter = {
  cutStrByLength: function (value, length) {
    console.log(value);
    value = value.substr(0, length);
    return value
  },
  toFixed: function () {

  }
}

export default vfilter
