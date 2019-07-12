/*
We use a setTimeout to simulate a asynchronous call to an API.
In the real life, it would be a call to an async request from services and then(() => resolve() or error)
 */
// TODO: test: must return a promise.
import { contactsInJsObject } from '../../../Api/contacts'
export const getListDataFromApiAction = ({commit, state}, listName) => {
  const indexList = state.listNamesAndDataAssociated.map((list) => list.listName).indexOf(listName)
  if (indexList !== -1) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const objToPass = {
          dataToReturn: contactsInJsObject[listName],
          indexList
        }
        commit('getListDataFromApiMutation', objToPass)
        resolve('success')
      }, 2000)
    })
  }
}
