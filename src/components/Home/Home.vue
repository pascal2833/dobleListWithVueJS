<template>
    <div class="home">
      <section class="home__lists">
        <list :listName=list1></list>
      </section>
      <section class="home__lists">
        <list :listName=list2></list>
      </section>
    </div>
</template>

<script>

// import SearchInList from '../SearchInList/SearchInList'
import { listNameDictionary } from '../../dictionnaries/listNameDictionnary'
import List from '../List/List'
export default {
  name: 'Home',
  components: {
    // SearchInList,
    List
  },
  data () {
    return {
      list1: listNameDictionary.LIST1,
      list2: listNameDictionary.LIST2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./home.scss"></style>
