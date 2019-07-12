<template>
  <div>
    List
    <button @click="getListDataFromApiAction">huhuh</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'List',
  methods: {
    ...mapActions([
      'getListDataFromApiAction'
    ])
  }

}

</script>
