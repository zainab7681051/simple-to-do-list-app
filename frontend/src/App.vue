<template>
  <v-app id="inspire">
<!-- ******************************* -->
    <!-- SITE HEADER -->
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        class="pa-4"
      >
       <v-avatar
          class="mb-4"
          size="64">
        <v-icon size="64">
          mdi-account-circle
        </v-icon>
      </v-avatar>

        <div>
          You Are Logged Out
        </div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
        to="/login"
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
        >
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>SignUp</v-list-item-title>
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
      </v-list>
    </v-navigation-drawer>

   <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
              @click="$router.push('/')"
              class="display-1"
              style="cursor:pointer">TO DO'S</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-switch
        v-model="$vuetify.theme.dark"
        label="change theme"
        class="mt-5"
        >
        </v-switch>
      </v-toolbar-items>
    </v-app-bar> 
<!-- ******************************* -->
<!-- SITE MAIN -->
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
<!-- ******************************* -->
<!-- SITE FOOTER -->
<!-- ******************************* -->
  </v-app>

</template>

<script>
export default { 
  name: 'App',

  data: () => ({
    drawer:null
  }),
};
</script>
