export const deleteRowMutation = (state, objToPass) => {
  console.log(objToPass.indexList)
  console.log(objToPass.indexRowToDelete)
  state.listNamesAndDataAssociated[objToPass.indexList].listData.splice(objToPass.indexRowToDelete, 1)
}
