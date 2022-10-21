<template>
  <v-layout column>
  <v-layout><!-- 
    <v-container> -->
    <v-flex xs12>
      <v-card>
        <v-card-title
        style="background-color:#088da5;">
          {{msg}}
        </v-card-title>
          <list-comp-log v-if="msg=='WELCOME TO YOUR TO-DO\'S LIST'"/>
          
        </v-card>
    </v-flex><!-- 
  </v-container> -->
  </v-layout>
</v-layout>
</template>

<script>
import ListCompLog from '../components/ListCompLog.vue'
import {mapState} from 'vuex'

export default {
  name: 'main-comp',

  data: () => ({
  }),

  props: {
    msg: String
  },

  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },

  components:{
    ListCompLog,
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
