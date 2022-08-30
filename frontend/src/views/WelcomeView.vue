<template>
  <v-app>
    <v-main>
    	<welcome-comp msg="WELCOME TO TO-DO'S LIST" />
    </v-main>
  </v-app>
</template>

<script>
  import WelcomeComp from '../components/WelcomeComp.vue'

  export default {
    name: 'home',
      data: () => ({
    //
  }),

    components: {
      WelcomeComp,
    },
  }
</script>
