import Firebase from 'firebase/app'
import 'firebase/database'

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
}
const version = '/v0'

var original_api_server = Firebase.initializeApp(config,"secondary")
const original_api = original_api_server.database().ref(version)
export default original_api