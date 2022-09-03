<template>
  <v-layout column>
  <v-layout><!-- 
    <v-container> -->
    <v-flex xs12>
      <v-card height="200">
        <v-card-title
        style="background-color:#ab92b3;">
          {{msg}}
        </v-card-title>
          <list-comp-unlog title='dddd' v-if="msg=='WELCOME TO YOUR TO-DO\'S LIST'&& !isUserLoggedIn"/>

          <list-comp-log title='sssss' v-if="msg=='WELCOME TO YOUR TO-DO\'S LIST'&& isUserLoggedIn"/>

          <fav-comp v-if="msg=='YOUR FAVOURITES' && isUserLoggedIn"/>

          <edit-prof-comp v-if="msg=='EDIT YOUR PROFILE' && isUserLoggedIn"/> 

          <about-comp v-if="msg=='ABOUT US'"/>


          <contact-comp v-if="msg=='CONTACT US'"/> 
          
        </v-card>
    </v-flex><!-- 
  </v-container> -->
  </v-layout>
</v-layout>
</template>

<script>
import ListCompLog from './ListCompLog.vue'
import ListCompUnlog from './ListCompUnlog.vue'
import FavComp from './FavComp.vue'
import EditProfComp from './EditProfComp.vue'
import AboutComp from './AboutComp.vue'
import ContactComp from './ContactComp.vue'
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
    ListCompUnlog,
    FavComp,
    EditProfComp,
    AboutComp,
    ContactComp,
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
