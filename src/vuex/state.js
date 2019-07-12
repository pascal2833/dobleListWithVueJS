import { listNameDictionary } from '../../src/dictionnaries/listNameDictionnary'

export const state = {
  listNamesAndDataAssociated: [
    {
      listName: listNameDictionary.LIST1,
      listData: []
    },
    {
      listName: listNameDictionary.LIST2,
      listData: []
    }
  ],
  paramsToAdaptLists: {
    listName: '',
    paramsToOrderList: {},
    paramsToFilterList: {}
  }
}
