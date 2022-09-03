<template>
  <v-app>
    <v-main>
    	  <main-comp msg="YOUR FAVOURITES" />
    </v-main>
  </v-app>
</template>

<script>
  import MainComp from '../components/MainComp.vue'

  export default {
    name: 'favourites',
	
	data: () => ({
    //
  }),

    components: {
      MainComp,
    },
  }
</script>
