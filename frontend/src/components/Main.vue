<template>
	<v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200">{{msg}}</v-card>
          </v-col>
        </v-row>
      </v-container>
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
