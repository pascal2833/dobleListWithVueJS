export const deleteRowMutation = (state, objToPass) => {
  state.listNamesAndDataAssociated[objToPass.indexList].listData.splice(objToPass.indexRowToDelete, 1)
}
