export const sortListAction = ({ state, commit }, objToPass) => {
  // Here we don't need to simulate a requets to the db, changes are locals only.
  objToPass.indexList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(objToPass.listName)
  commit('sortListMutation', objToPass)
}
