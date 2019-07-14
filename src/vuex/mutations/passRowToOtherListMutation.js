export const passRowToOtherListMutation = (state, dataToPass) => {
  state.listNamesAndDataAssociated[dataToPass.indexDestinationList].listData.push(dataToPass.rowToTranslate)
}
