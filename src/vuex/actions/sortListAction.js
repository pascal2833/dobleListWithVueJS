export const sortListAction = ({ state, commit }, objToPass) => {
  objToPass.indexList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(objToPass.listName)
  commit('sortListMutation', objToPass)
}
