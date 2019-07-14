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
          <i class="far fa-plus-square rows__methods icons"></i>
        </div>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in getListData" :key="row.id" class="rows">
        <td v-for="listItem in getListItemsName" :key=listItem.dataKey>{{row[listItem.dataKey]}}</td>
        <div class="rows__methods">
          <i
            class="far fa-trash-alt rows__methods icons"
            @click="deleteRow({rowId: row.id, listName})"
            title="Delete this row"
          >
          </i>
          <i
            class="fas fa-edit rows__methods icons"
            @click="editRow({gender: row.gender, firstName: row.first_name, lastName: row.last_name, email: row.email})"
            title="Edit this row"
          >
          </i>
          <i
            class="fas fa-arrows-alt-h rows__methods icons"
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
    <form-modal
      :data="formModalDataToEdit"
      :isVisible="formModalDataToEdit.formModalIsVisible"
      @clickOnCloseModalEvent="closeFormModal()"
    >
    </form-modal>
    <form-modal
      :data="formModalDataToAdd"
      :isVisible="formModalDataToAdd.formModalIsVisible"
      @clickOnCloseModalEvent="closeFormModal()"
    >
    </form-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Loading from 'vue-loading-overlay'
import FormModal from '../FormModal/FormModal'
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
      listNameDictionary: listNameDictionary,
      formModalDataToEdit: {
        formModalIsVisible: false,
        formModalTitle: 'Edit row items:',
        gender: '',
        gendersTitle: 'Gender:',
        firstName: '',
        firstNameTitle: 'First Name:',
        lastName: '',
        lastNameTitle: 'Last Name:',
        email: '',
        emailTitle: 'Email:'
      },
      formModalDataToAdd: {
        formModalIsVisible: false,
        formModalTitle: 'ss'
      }
    }
  },
  components: {
    Loading,
    FormModal
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
    },
    closeFormModal () {
      this.formModalDataToEdit.formModalIsVisible = false
      this.formModalDataToAdd.formModalIsVisible = false
    },
    editRow (rowData) {
      this.formModalDataToEdit.formModalIsVisible = true
      this.formModalDataToEdit.gender = rowData.gender
      this.formModalDataToEdit.firstName = rowData.firstName
      this.formModalDataToEdit.lastName = rowData.lastName
      this.formModalDataToEdit.email = rowData.email
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
