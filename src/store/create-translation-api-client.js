let translation_api
const apikey = 'AIzaSyD4tOiDK19rzKGeBFmjzIfdTuWT93MCGi0'
translation_api = {
  translate: function (src) {
    return new Promise((resolve, reject)=>{
      requestAjax('https://translation.googleapis.com/language/translate/v2?key=' + apikey + '&source=en&target=ja&q=' + src, (response) => {
        resolve([response.data.translations[0].translatedText]);
      })
    })
  }
}


var requestAjax = function (endpoint, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.response);
    }
  };
  xhr.responseType = 'json';
  xhr.open('GET', endpoint, true);
  xhr.send();
};

export default translation_api