export const editRowMutation = (state, objToPass) => {
  state.listNamesAndDataAssociated[objToPass.indexList].listData[objToPass.indexRowToEdit].email = objToPass.dataToPassFromAction.email
  state.listNamesAndDataAssociated[objToPass.indexList].listData[objToPass.indexRowToEdit].first_name = objToPass.dataToPassFromAction.firstName
  state.listNamesAndDataAssociated[objToPass.indexList].listData[objToPass.indexRowToEdit].last_name = objToPass.dataToPassFromAction.lastName
  state.listNamesAndDataAssociated[objToPass.indexList].listData[objToPass.indexRowToEdit].gender = objToPass.dataToPassFromAction.gender
}
