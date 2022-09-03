<template>
  <v-layout column>
  <v-layout>
    <v-container>
    <v-flex xs12>
      <v-card >
        <v-card-title
        style="background-color:#ab92b3;">
          {{title}}
        </v-card-title>
        <v-card-text>
        LIST LIST LIST unlogged
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
  </v-layout>
</v-layout>
</template>

<script>
export default {
  name: 'list-comp-unlog',
  props: {
    title: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
