<template>
    <div class="home">
      <search-in-list></search-in-list>
      <list></list>
    </div>
</template>

<script>

import SearchInList from '../SearchInList/SearchInList'
import List from '../List/List'
export default {
  name: 'Home',
  components: {
    SearchInList,
    List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./home.scss"></style>
