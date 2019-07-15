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
      const indexList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(listName)
      const objToReturn = state.listNamesAndDataAssociated[indexList]
      if (objToReturn) {
        return objToReturn['listItemsName']
      }
    },
    getListDataGetter: state => data => {
      const indexList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(data.listName)
      const objToReturn = state.listNamesAndDataAssociated[indexList]
      if (objToReturn) {
        return objToReturn.listData.filter((dataObj) => dataObj.first_name.toLowerCase().indexOf(data.characterFromSearch.toLowerCase()) >= 0)
      }
    }
  }
}
