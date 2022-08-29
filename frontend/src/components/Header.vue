<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-switch
        v-model="$vuetify.theme.dark"
        hint="change theme"
        inset
        persistent-hint>
        </v-switch>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name:'header-comp',

    data: () => ({ 
      drawer: null 
    }),

    props:{
      title:''
    }
  }
</script>

<style scoped lang="stylus">
  
</style>