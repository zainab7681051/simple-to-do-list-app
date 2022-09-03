<template>
  <v-layout column>
  <v-layout>
    <v-container>
    <v-flex xs12>
      <v-card style="border:3px solid #ab92b3" >
        <v-card-title>
          <v-btn 
          block 
          color="#ab92b3"
          @click="add=true">
            Add
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>
          <v-layout column v-if="add==true">
            <v-layout>
              <v-flex xs6>
                <v-text-field
                  v-model="toDo"
                  :error-messages="toDoErrors"
                  :counter="20"
                  label="to-do"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()">
                </v-text-field>
              </v-flex>
              <v-flex xs6>          
                
              </v-flex>
            </v-layout>
          </v-layout>
          <v-checkbox 
          :label=this.toDo
          block
          style="border:3px solid #ab92b3">
          </v-checkbox>
      </v-card-subtitle>
      </v-card>
    </v-flex>
  </v-container>
  </v-layout>
</v-layout>
</template>

<script>
export default {
  name: 'list-comp',
  data:()=>({
    add:false,
    toDo:{}
  }),

  props: {
    title: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
