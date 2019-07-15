export const addRowMutation = (state, objToPass) => {
  const newRowObj = {
    id: objToPass.dataToPassFromAction.idToPass,
    gender: objToPass.dataToPassFromAction.gender,
    first_name: objToPass.dataToPassFromAction.firstName,
    last_name: objToPass.dataToPassFromAction.lastName,
    email: objToPass.dataToPassFromAction.email
  }
  state.listNamesAndDataAssociated[objToPass.indexList].listData.push(newRowObj)
}
