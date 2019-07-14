<template>
  <div class="list">
    <table class="list__data">
      <thead class="list__data__header">
      <tr class="rows">
        <th
          class="header-titles"
          v-for="listItem in getListItemsName"
          :key=listItem.dataKey
          @click="sortList({listName, itemToOrder: listItem.dataKey, increaseOrDecrease: 'increase'})"
        >
          {{listItem.columnName}}
        </th>
        <div class="rows__methods">
          <i class="far fa-plus-square rows__methods__icons"></i>
        </div>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in getListData" :key="row.id" class="rows">
        <td v-for="listItem in getListItemsName" :key=listItem.dataKey>{{row[listItem.dataKey]}}</td>
        <div class="rows__methods">
          <i
            class="far fa-trash-alt rows__methods__icons"
            @click="deleteRow({rowId: row.id, listName})"
            title="Delete this row"
          >
          </i>
          <i
            class="fas fa-edit rows__methods__icons"
            title="Edit this row"
          >
          </i>
          <i
            class="fas fa-arrows-alt-h rows__methods__icons"
            @click="passRowToOtherList({rowId: row.id, originListName: listName})"
            title="Pass this row to the other list"
          >
          </i>
        </div>
      </tr>
      </tbody>
    </table>
    <loading
      :active.sync="loading.isLoading"
      :can-cancel="true"
      :is-full-page="loading.fullPage">
    </loading>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { listNameDictionary } from '../../dictionnaries/listNameDictionnary'
export default {
  name: 'List',
  props: {
    listName: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      loading: {
        isLoading: false,
        fullPage: true
      },
      listNameDictionary: listNameDictionary
    }
  },
  components: {
    Loading
  },
  methods: {
    ...mapActions([
      'getListDataFromApiAction',
      'sortListAction',
      'deleteRowAction',
      'passRowToOtherListAction'
    ]),
    sortList (dataObj) {
      this.sortListAction(dataObj)
    },
    deleteRow (dataObj) {
      this.loading.isLoading = true
      this.deleteRowAction(dataObj)
        .then(() => {
          this.loading.isLoading = false
        })
    },
    passRowToOtherList (dataObj) {
      this.loading.isLoading = true
      dataObj.originListName === listNameDictionary.LIST1 ? dataObj.destinationListName = listNameDictionary.LIST2 : dataObj.destinationListName = listNameDictionary.LIST1
      this.passRowToOtherListAction(dataObj)
        .then(() => {
          this.loading.isLoading = false
        })
    }
  },
  computed: {
    getListItemsName () {
      return this.$store.getters.getListItemsNameGetter(this.listName)
    },
    getListData () {
      return this.$store.getters.getListDataGetter(this.listName)
    }
  },
  created () {
    this.loading.isLoading = true
    this.getListDataFromApiAction(this.listName) // In a real world, we would need to pass for ex url and listName in params to choose the good data.
      .then(() => {
        this.loading.isLoading = false
      })
  }

}

</script>

<style src="./List.scss" scoped lang="scss"></style>
