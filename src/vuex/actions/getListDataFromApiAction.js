/*
We use a setTimeout to simulate a asynchronous call to an API.
In the real life, it would be something call an asyn request from services and then(() => resolve() or error)
 */
import { contactInJsObject } from '../../../Api/contact'
export const getListDataFromApiAction = ({commit}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const dataToReturn = contactInJsObject
      commit('getListDataFromApiMutation', dataToReturn.data)
      resolve('success')
    }, 2000)
  })
}
