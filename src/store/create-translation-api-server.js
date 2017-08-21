let translation_api
const googleTranslate = require('@google-cloud/translate')
const translateClient = googleTranslate({
  projectId: 'hacker-news-jp'
});

translation_api = {
  translate: function (src) {
    // The target language
    const target = 'ja';
    // Translates some text into Japanese
    return translateClient.translate(src, target)
  }
}
export default translation_api