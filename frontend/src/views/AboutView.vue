<template>
  <v-app>
    <v-main>
    	  <main-comp msg="THIS IS AN ABOUT PAGE" />
    </v-main>
  </v-app>
</template>

<script>
  import MainComp from '../components/Main.vue'

  export default {
    name: 'about',
	
	data: () => ({
    //
  }),

    components: {
      MainComp,
    },
  }
</script>
