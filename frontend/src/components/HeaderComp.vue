<template>
  <header>
    
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        class="pa-4"
        color="#ab92b3"
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
        >
          <v-list-item-icon>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Favourites</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
        v-if="isUserLoggedIn"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-cog-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Update Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item
        to="/about"
        >
          <v-list-item-icon>
            <v-icon>mdi-alert-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
        to="/contact"
        >
          <v-list-item-icon>
            <v-icon>mdi-email-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
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
      <v-toolbar-items>
        <v-switch
        v-model="$vuetify.theme.dark"
        label="change theme"
        class="mt-5"
        color="#ab92b3"
        >
        </v-switch>
      </v-toolbar-items>
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
