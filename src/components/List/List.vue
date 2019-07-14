<template>
  <div class="list">
    <table class="list__data">
      <thead>
      <tr>
        <th
          v-for="listItem in getListItemsName"
          :key=listItem.dataKey
          @click="sortList({listName, itemToOrder: listItem.dataKey, increaseOrDecrease: 'increase'})"
        >
          {{listItem.columnName}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in getListData" :key="row.id">
        <td v-for="listItem in getListItemsName" :key=listItem.dataKey>{{row[listItem.dataKey]}}</td>
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
      }
    }
  },
  components: {
    Loading
  },
  methods: {
    ...mapActions([
      'getListDataFromApiAction',
      'sortListAction'
    ]),
    sortList (dataObj) {
      this.sortListAction(dataObj)
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
