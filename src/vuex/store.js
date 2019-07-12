import * as actions from './actions/'
import * as mutations from './mutations/'
import { state } from './state'

export default {
  state,
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  getters: {
    // Get columnsName -> comment le faire pour chacune des 2 ?
    // totalsValue: state => state.tableFormattedData.totals || '',
  }
}
