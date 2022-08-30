<template>
  <v-layout column>
  <v-layout>
    <v-container>
    <v-flex xs12>
      <v-card height="200">{{msg}}</v-card>
    </v-flex>
  </v-container>
  </v-layout>

  <v-layout>
    <v-flex xs12>
      <v-card height="200">{{msg}}</v-card>
    </v-flex>
  </v-layout>
</v-layout>
</template>

<script>
export default {
  name: 'main-comp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
