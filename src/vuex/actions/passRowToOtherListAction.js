export const passRowToOtherListAction = ({ state, commit }, dataToPass) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a 'real world', we would have to do a Request to delete original row from db and to add it to the pther list / db.
      const indexOriginalList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(dataToPass.originListName)
      const indexDestinationList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(dataToPass.destinationListName)
      const indexRowOriginalListToDelete = state.listNamesAndDataAssociated[indexOriginalList].listData.map((listObj) => listObj.id).indexOf(dataToPass.rowId)
      const rowToTranslate = state.listNamesAndDataAssociated[indexOriginalList].listData[indexRowOriginalListToDelete]
      // Add row object to destination list:
      commit('passRowToOtherListMutation', {rowToTranslate, indexDestinationList})
      // Delete row in original list:
      commit('deleteRowMutation', {indexList: indexOriginalList, indexRowToDelete: indexRowOriginalListToDelete})
      resolve('success')
    }, 2000)
  })
}
