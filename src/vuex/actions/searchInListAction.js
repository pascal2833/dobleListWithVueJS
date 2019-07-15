export const searchInListAction = ({ state, commit }, dataToPass) => {
  const indexList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(dataToPass.listNameToFilter)
  const listDataObjFiltered = state.listNamesAndDataAssociated[indexList].listData.filter((dataObj) => dataObj.first_name.toLowerCase().indexOf(dataToPass.character.toLowerCase()) >= 0)
  commit('searchInListMutation', {indexList, listDataObjFiltered})
}
