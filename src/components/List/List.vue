<template>
  <div class="list">
    <search-in-list :listNameToFilter="listName" @searchEvent="adaptListWhenSearch($event)"></search-in-list>
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
          <i
            class="far fa-plus-square rows__methods icons"
            title="Add a row"
            @click="addRow()"
          >
          </i>
        </div>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in getListData" :key="row.id" class="rows">
        <td v-for="listItem in getListItemsName" :key=listItem.dataKey>{{row[listItem.dataKey]}}</td>
        <div class="rows__methods">
          <i
            class="far fa-trash-alt icons"
            @click="deleteRow({rowId: row.id, listName})"
            title="Delete this row"
          >
          </i>
          <i
            class="fas fa-edit icons"
            @click="editRow({gender: row.gender, firstName: row.first_name, lastName: row.last_name, email: row.email, rowId: row.id})"
            title="Edit this row"
          >
          </i>
          <i
            class="fas fa-arrows-alt-h icons"
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
      :formType="formNames.toEdit"
      :isVisible="formModalDataToEdit.formModalIsVisible"
      @clickOnCloseModalEvent="closeFormModal()"
      :doWhenSubmit="submitWhenEditOrAdd"
    >
    </form-modal>
    <form-modal
      :data="formModalDataToAdd"
      :formType="formNames.toAdd"
      :isVisible="formModalDataToAdd.formModalIsVisible"
      @clickOnCloseModalEvent="closeFormModal()"
      :doWhenSubmit="submitWhenEditOrAdd"
    >
    </form-modal>
  </div>
</template>

<script>
import SearchInList from '../SearchInList/SearchInList'
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
        rowId: '',
        formModalIsVisible: false,
        formModalTitle: 'Edit row items:',
        gender: '',
        gendersTitle: 'Gender:',
        firstName: '',
        firstNameTitle: 'First Name:',
        lastName: '',
        lastNameTitle: 'Last Name:',
        email: '',
        emailTitle: 'Email:',
        titleSubmitButton: 'Edit items'
      },
      formModalDataToAdd: {
        formModalIsVisible: false,
        formModalTitle: 'Add a row',
        gender: '',
        gendersTitle: 'Gender:',
        firstName: '',
        firstNameTitle: 'First Name:',
        lastName: '',
        lastNameTitle: 'Last Name:',
        email: '',
        emailTitle: 'Email:',
        titleSubmitButton: 'Add row'
      },
      formNames: {
        toAdd: 'toAdd',
        toEdit: 'toEdit'
      },
      characterFromSearch: ''
    }
  },
  components: {
    Loading,
    FormModal,
    SearchInList
  },
  methods: {
    ...mapActions([
      'getListDataFromApiAction',
      'sortListAction',
      'deleteRowAction',
      'passRowToOtherListAction',
      'editRowAction',
      'addRowAction'
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
    addRow () {
      this.formModalDataToAdd.formModalIsVisible = true
    },
    editRow (rowData) {
      this.formModalDataToEdit.formModalIsVisible = true
      this.formModalDataToEdit.rowId = rowData.rowId
      this.formModalDataToEdit.gender = rowData.gender
      this.formModalDataToEdit.firstName = rowData.firstName
      this.formModalDataToEdit.lastName = rowData.lastName
      this.formModalDataToEdit.email = rowData.email
    },
    submitWhenEditOrAdd (formName, formData) {
      if (formName === 'toEdit') {
        this.loading.isLoading = true
        this.editRowAction({rowId: this.formModalDataToEdit.rowId, listName: this.listName, email: formData.email, gender: formData.gender, firstName: formData.firstName, lastName: formData.lastName})
          .then(() => {
            this.formModalDataToEdit.formModalIsVisible = false
            this.loading.isLoading = false
          })
      } else if (formName === 'toAdd') {
        this.loading.isLoading = true
        this.addRowAction({listName: this.listName, email: formData.email, gender: formData.gender, firstName: formData.firstName, lastName: formData.lastName})
          .then(() => {
            this.formModalDataToAdd.formModalIsVisible = false
            this.loading.isLoading = false
          })
      }
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
    adaptListWhenSearch (dataFromSearch) {
      this.characterFromSearch = dataFromSearch.character
    }
  },
  computed: {
    getListItemsName () {
      return this.$store.getters.getListItemsNameGetter(this.listName)
    },
    getListData () { // Take in account filter/search and order by items.
      return this.$store.getters.getListDataGetter({listName: this.listName, characterFromSearch: this.characterFromSearch})
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
