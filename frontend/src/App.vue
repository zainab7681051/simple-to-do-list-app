<template>
  <v-app>
  	<header-comp title="TO DO'S"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComp from './components/Header.vue'

export default { 
  name: 'App',

  data: () => ({
    //
  }),

  components:{
  	HeaderComp
  }
};
</script>
