
export const addRowAction = ({state, commit}, dataToPassFromAction) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a 'real world', we would have to do a Request to add row from db.
      const indexList = state.listNamesAndDataAssociated.map((listObj) => listObj.listName).indexOf(dataToPassFromAction.listName)
      // Calculate id: in a real world, would be added automaticaly in db.
      let maxId
      if (state.listNamesAndDataAssociated[indexList].listData.length === 0) {
        maxId = 0
      } else {
        maxId = Math.max.apply(Math, state.listNamesAndDataAssociated[indexList].listData.map((data) => data.id))
      }
      dataToPassFromAction.idToPass = maxId + 1
      commit('addRowMutation', {indexList, dataToPassFromAction}) // In real life, would be a POST request to add data to db.
      // TODO: Refresh destination list and turn to order f(previous one): -> keep in memory the orders params
      resolve('success')
    }, 2000)
  })
}
