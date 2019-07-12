export const getListDataFromApiMutation = (state, objToPass) => {
  state.listNamesAndDataAssociated[objToPass.indexList].listData = objToPass.dataToReturn
}
