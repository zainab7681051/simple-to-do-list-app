<template>
  <v-app>
    <v-main>
    	  <main-comp msg="THIS IS A CONTACT PAGE" />
    </v-main>
  </v-app>
</template>

<script>
  import MainComp from '../components/MainComp.vue'

  export default {
    name: 'contact',
	
	data: () => ({
    //
  }),

    components: {
      MainComp,
    },
  }
</script>
