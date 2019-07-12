<template>
  <div class="list">
    <table class="list__data">
      <thead>
      <tr>
        <th>Firstname</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Jill</td>
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
      'getListDataFromApiAction'
    ])
  },
  created () {
    this.loading.isLoading = true
    this.getListDataFromApiAction()
      .then(() => {
        this.loading.isLoading = false
      })
  }

}

</script>

<style src="./List.scss" scoped lang="scss"></style>
