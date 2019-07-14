/*
We use a setTimeout to simulate a asynchronous call to an API.
In the real life, it would be a call to an async request from services and then((response) => resolve(response) or error())
 */
import { contactsInJsObject } from '../../../Api/contacts'
export const getListDataFromApiAction = ({ commit, state }, listName) => { // In a real world, we would need to pass for ex url and listName in params to choose the good data.
  return new Promise((resolve) => {
    setTimeout(() => {
      commit('getListDataFromApiMutation', contactsInJsObject[`data_${listName}`]) // In real worl, = response from ajax request.
      const indexList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(listName)
      const defaultItemToOrder = contactsInJsObject[`data_${listName}`].listItemsName[0].dataKey // By default, order by first item.
      commit('sortListMutation', {increaseOrDecrease: 'increase', itemToOrder: defaultItemToOrder, indexList})
      resolve('success')
    }, 2000)
  })
}
