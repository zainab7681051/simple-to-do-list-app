<template>
  <header>
    
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        class="pa-4"
        color="#088da5"
      >
         <v-avatar
            class="mb-4"
            size="64">
          <v-icon
          v-if="!isUserLoggedIn" 
          size="64">
            mdi-account-circle
          </v-icon>
          <v-img
          v-if="isUserLoggedIn"
          src='../assets/logo.png'>
        </v-img>
        </v-avatar>

          <div v-if="!isUserLoggedIn">
            You Are Logged Out
          </div>

          <div v-if="isUserLoggedIn">
            <p style="font-size:x-large;">
            {{user.name}}</p>
            <p>{{user.email}}</p>
          </div>
      </v-sheet>

    <v-divider></v-divider>

      <v-list>
        <v-list-item
        to="/login"
        v-if="!isUserLoggedIn"
        >
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
        to="/register"
        v-if="!isUserLoggedIn"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>SignUp</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
        v-if="isUserLoggedIn"
        @click="logout"
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

   <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
              @click="$router.push('/list')"
              class="display-1"
              style="cursor:pointer">TO DO'S</v-toolbar-title>
      <v-spacer/>
        <v-btn
        @click="$vuetify.theme.dark=!$vuetify.theme.dark"
        color="#088da5"
        icon
        >
        <v-icon v-if="!$vuetify.theme.dark">
          mdi-moon-waning-crescent
        </v-icon>

        <v-icon v-if="$vuetify.theme.dark">
          mdi-white-balance-sunny
        </v-icon>
        </v-btn>
    </v-app-bar> 
  </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'main-comp',
  
  data: () => ({
    drawer:null
  }),

  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods:{
    logout(){
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'welcome'
      })

    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
