export const searchInListMutation = (state, objToPass) => {
  state.listNamesAndDataAssociated[objToPass.indexList].listData = objToPass.listDataObjFiltered
}
