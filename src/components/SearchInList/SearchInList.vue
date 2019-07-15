<template>
  <div class="search-in-list">
    <label class="labels-4-inputs search-in-list__input-label">Search by first name:</label>
    <input type="search" @keyup="onKeyUp($event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'SearchInList',
  props: {
    listNameToFilter: {
      type: String,
      required: true
    }
  },
  methods: {
    onKeyUp (value) {
      this.$emit('searchEvent', {listNameToFilter: this.listNameToFilter, character: value})
    }
  }
}
</script>

<style lang="scss" scoped src="./searchInList.scss"></style>
