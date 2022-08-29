<template>
  <v-app>
    <v-main>
    	<main-comp msg="WELCOME TO YOUR TO-DO'S LIST" />
    </v-main>
  </v-app>
</template>

<script>
  import MainComp from '../components/Main.vue'

  export default {
    name: 'Home',
      data: () => ({
    //
  }),

    components: {
      MainComp,
    },
  }
</script>
