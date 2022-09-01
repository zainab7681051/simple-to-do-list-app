<template>
  <v-layout column>
  <v-layout>
    <v-container>
    <v-flex xs12>
      <v-card height="200">
        <v-card-title
        style="background-color:#ab92b3;">
          {{msg}}
        </v-card-title>
        <v-card-text
        v-if="msg=='WELCOME TO YOUR TO-DO\'S LIST'">
        LIST LIST LIST
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
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
