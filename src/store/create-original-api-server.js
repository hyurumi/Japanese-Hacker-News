import Firebase from 'firebase'
import LRU from 'lru-cache'
import { fetchItems } from './api'

let original_api
var original_api_server
const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
}
const version = '/v0'

if (process.__ORIGINAL_API__) {
  original_api = process.__ORIGINAL_API__
} else {
  original_api_server = Firebase.initializeApp(config,"secondary")
  original_api = process.__ORIGINAL_API__ = original_api_server.database().ref(version)
  original_api.onServer = true

  // fetched item cache
  original_api.cachedItems = LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15 // 15 min cache
  })

  // cache the latest story ids
  original_api.cachedIds = {}
  ;['top', 'new', 'show'].forEach(type => {
    original_api.child(`${type}stories`).on('value', snapshot => {
      original_api.cachedIds[type] = snapshot.val()
    })
  })
}

export default original_api
