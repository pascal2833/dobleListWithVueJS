export const deleteRowAction = ({ state, commit }, dataToPass) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a 'real world', we would have to do a Request to delete row from db.
      const indexList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(dataToPass.listName)
      const indexRowToDelete = state.listNamesAndDataAssociated[indexList].listData.map((listObj) => listObj.id).indexOf(dataToPass.rowId)
      commit('deleteRowMutation', {indexList, indexRowToDelete})
      resolve('success')
    }, 2000)
  })
}
