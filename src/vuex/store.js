import * as actions from './actions/'
import * as mutations from './mutations/'
import { state } from './state'

export default {
  state,
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  getters: {
    getListItemsNameGetter: state => listName => {
      const objToReturn = state.listNamesAndDataAssociated.filter((listObj) => listObj.listName === listName)[0]
      if (objToReturn) {
        return objToReturn['listItemsName']
      }
    },
    getListDataGetter: state => listName => {
      const objToReturn = state.listNamesAndDataAssociated.filter((listObj) => listObj.listName === listName)[0]
      if (objToReturn) {
        return objToReturn['listData']
      }
    }
  }
}
