<template>
  <div class="search-in-list">
    <label class="labels-4-inputs search-in-list__input-label">Search by first name:</label>
    <!--<input type="search">-->
    <input type="search" @keyup="onKeyUp($event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'SearchInList',
  data () {
    return {
      search: ''
    }
  },
  props: {
    listNameToFilter: {
      type: String,
      required: true
    }
  },
  methods: {
    onKeyUp (value) {
      this.$store.dispatch('searchInListAction', {listNameToFilter: this.listNameToFilter, character: value})
    }
  }
}
</script>

<style lang="scss" scoped src="./searchInList.scss"></style>
