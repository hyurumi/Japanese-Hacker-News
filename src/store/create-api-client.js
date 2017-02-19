import Firebase from 'firebase/app'
import 'firebase/database'

const config = {
  databaseURL: 'https://axiomatic-folio-98602.firebaseio.com/'
}
const version = '/v0'

Firebase.initializeApp(config)
const api = Firebase.database().ref(version)
export default api