export const editRowAction = ({state, commit}, dataToPassFromAction) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a 'real world', we would have to do a Request to edit row from db.
      const indexList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(dataToPassFromAction.listName)
      const indexRowToEdit = state.listNamesAndDataAssociated[indexList].listData.map((listObj) => listObj.id).indexOf(dataToPassFromAction.rowId)
      commit('editRowMutation', {indexList, indexRowToEdit, dataToPassFromAction})
      resolve('success')
    }, 2000)
  })
}
