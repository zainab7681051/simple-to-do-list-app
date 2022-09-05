<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
    <template v-slot:activator="{ on, attrs }">
      <v-layout column>
        <v-layout>
          <v-container>
          <v-flex xs12>
            <v-card 
            style="border:3px solid #ab92b3;">
              <v-card-title>
                <v-btn 
                block 
                color="#ab92b3"
                @click="add=!add">
                  Add
                  <v-icon>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </v-card-title>
              <v-card-subtitle>
                <v-layout column v-if="add==true">
                  <v-layout>
                    <v-flex xs8>
                      <v-text-field
                        v-model="toDoText"
                        :error-messages="textErrors"
                        label="text"
                        required
                        @input="$v.toDoText.$touch()"
                        @blur="$v.toDoText.$touch()">
                      </v-text-field>
                    </v-flex>
                    <v-spacer/>
                    <v-flex>
                      <v-menu
                      v-model="dateMenu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="toDoDate"
                            :error-messages="dateErrors"
                            label="date"
                            required
                            readonly
                            v-on='on'
                            @input="$v.toDoDate.$touch()"
                            @blur="$v.toDoDate.$touch()">
                          </v-text-field>
                        </template>
                        <v-date-picker 
                        v-model="toDoDate"
                        @input="dateMenu = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-spacer/>
                    <v-btn
                    v-if="isUserLoggedIn"
                    class="mt-3"
                    large
                    icon
                    color="#ab92b3"
                    @click="submitlog">
                      <v-icon>
                        mdi-plus
                      </v-icon>
                    </v-btn>

                    <!-- <v-btn
                    v-if="!isUserLoggedIn"
                    class="mt-3"
                    icon
                    outlined
                    large
                    tile
                    color="#ab92b3"
                    @click="submit">
                      <v-icon>
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  -->
                  </v-layout>
                </v-layout>
                <v-list>
                  <v-list-item
                  v-for="todo in toDoList.list"
                  class="mt-2 mb-2"
                  :key="todo.id"
                  block
                  style="border:3px solid #ab92b3;">
                  <v-list-item-icon>
                    <v-btn 
                    :color="todo.toDoDone==false ? '#777777' : '#88d8b0'"
                    @click="check(todo.id,todo)"
                    >
                      <v-icon>mdi-check-bold</v-icon>
                    </v-btn>
                    
                    <v-btn 
                    color='#ab92b3'
                    class="ml-2"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>

                    <v-btn 
                    color='#ff6f69'
                    class="ml-2"
                    @click="deleteOne(todo.id)"
                    >
                      <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                    <p  
                    :style="todo.toDoDone?'text-decoration-line:line-through':'none'">{{todo.toDoText}}---{{todo.toDoDate}}</p>
                </v-list-item>
                  <!-- 
                  <v-btn
                  icon
                  outlined
                  tile
                  color="#ab92b3"
                  style="position:">
                  </v-btn> -->
              </v-list>
            </v-card-subtitle>

              <v-card-actions v-if="toDoList.list">
                  <v-btn 
                  block 
                  color="#ff6f69"
                  @click="deleteAll">
                    <v-icon>
                      mdi-trash-can-outline
                    </v-icon>
                  </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-container>
        </v-layout>
      </v-layout>
      </template>
      <v-card>
        <v-card-title>
          ERROR!
        </v-card-title>

        <v-card-text>
          {{fatalError}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'
import {mapState} from 'vuex'
import listService from '../service/list.js'
export default {
  name: 'list-comp',
  mixins: [validationMixin],
  data:()=>({
    add:false,
    toDoText:'',
    toDoDate:new Date().toISOString().substr(0, 10),
    fatalError:'',
    dialog:false,
    dateMenu:false,
    checked:false,
    toDoList:{}
  }),

  validations: {
    toDoText: { 
      required, 
    },
    toDoDate:{
      required,
    }
  },
    computed: {
      textErrors () {
        const errors = []
        if (!this.$v.toDoText.$dirty) return errors
        !this.$v.toDoText.required && errors.push('text field is required.')
        return errors
      },
      dateErrors () {
        const errors = []
        if (!this.$v.toDoDate.$dirty) return errors
        !this.$v.toDoDate.required && errors.push('date field is required')
        return errors
      },

      ...mapState([
        'isUserLoggedIn',
        'user'
      ]),

    },

    methods: {
      //async sumbit(){return;},
      async submitlog () {
        if(!this.$v.toDoText.$invalid&&
          !this.$v.toDoDate.$invalid)
          {
            try {
              const response=await listService.sumbit({
                toDoText:this.toDoText,
                toDoDate:this.toDoDate,
                })
              this.clear()
              window.location.reload()

          }catch(error) {
            console.log(error.response)
            this.fatalError=error.response.data.error;
            this.dialog=true
          }
      }else{
        this.fatalError='no empty or invalid forms'
        this.dialog=true
        }
      },

      clear(){
        this.$v.$reset()
        this.toDoText=''
        this.toDoDate=''
        this.add=false
      },

      async check(id,todo){
      await listService.update(id,todo)  
      this.clear()            
      window.location.reload()
      },

      async deleteOne(id){
      await listService.deleteOne(id)  
      this.clear()            
      window.location.reload()
      },

      async deleteAll(){
      await listService.deleteAll()  
      this.clear()            
      window.location.reload()
      },
    },

    async mounted(){     
      if (this.isUserLoggedIn){
        this.toDoList=(await listService.getAll()).data
      }
      
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
 
</style>
