export const editRowAction = ({state, commit}, dataToPassFromAction) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const indexList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(dataToPassFromAction.listName)
      const indexRowToEdit = state.listNamesAndDataAssociated[indexList].listData.map((listObj) => listObj.id).indexOf(dataToPassFromAction.rowId)
      commit('editRowMutation', {indexList, indexRowToEdit, dataToPassFromAction})// In a 'real world', we would have to do a PUT Request to edit row from db.
      resolve('success')
    }, 2000)
  })
}
