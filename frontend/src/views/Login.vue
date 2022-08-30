<template>
  <v-app>
    <v-main>
    	<form-comp msg="LOGIN" />
    </v-main>
  </v-app>
</template>

<script>
  import FormComp from '../components/FormComp.vue'

  export default {
    name: 'login',
      data: () => ({
    //
  }),

    components: {
      FormComp,
    },
  }
</script>
