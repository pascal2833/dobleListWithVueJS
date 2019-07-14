export const sortListMutation = (state, objToPass) => {
  const sort = function (a, b) {
    const item = objToPass.itemToOrder
    const increaseOrDecrease = objToPass.increaseOrDecrease
    const itemA = a[item]
    const itemB = b[item]

    let comparison = 0
    if (itemA > itemB) {
      increaseOrDecrease === 'increase' ? comparison = 1 : comparison = -1
    } else if (itemA < itemB) {
      increaseOrDecrease === 'increase' ? comparison = -1 : comparison = 1
    }
    return comparison
  }
  state.listNamesAndDataAssociated[objToPass.indexList].listData.sort(sort)
}
