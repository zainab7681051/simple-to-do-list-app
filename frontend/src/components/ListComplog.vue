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
                    class="mt-3"
                    large
                    icon
                    color="#ab92b3"
                    @click="isUserLoggedIn ? submit():guestSubmit()">
                      <v-icon>
                        mdi-plus
                      </v-icon>
                    </v-btn>
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
                    @click="isUserLoggedIn ? check(todo.id,todo):guestCheck(todo)"
                    >
                      <v-icon>mdi-check-bold</v-icon>
                    </v-btn>

                    <v-btn 
                    color='#ff6f69'
                    class="ml-2"
                    @click="isUserLoggedIn ? deleteOne(todo.id):guestDeleteOne(todo)"
                    >
                      <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                    <p  
                    :style="todo.toDoDone?'text-decoration-line:line-through':'none'">{{todo.toDoText}}---{{todo.toDoDate}}</p>
                </v-list-item>
              </v-list>
            </v-card-subtitle>

              <v-card-actions>
                  <v-btn 
                  block 
                  color="#ff6f69"
                  @click="isUserLoggedIn ? deleteAll():guestDeleteAll()">
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
      'user',
    ]),

  },

    methods: {
      async submit () {
        if(!this.$v.toDoText.$invalid&&
          !this.$v.toDoDate.$invalid)
          {
            try {
              const response=await listService.sumbit({
                toDoText:this.toDoText,
                toDoDate:this.toDoDate,
                })
              this.toDoList=(await listService.getAll()).data
              this.clear()

          }catch(error) {
            this.fatalError=error.response.data.error;
            this.dialog=true
          }
      }else{
        this.fatalError='no empty or invalid forms'
        this.dialog=true
        }
      },

      async check(id,todo){ 
      try {
        await listService.update(id,todo)
        this.toDoList=(await listService.getAll()).data  
        this.clear()            
         
      } catch (error) {
        this.fatalError=error.response.data.error;
        this.dialog=true
      }
      
      },

      async deleteOne(id){
      try {
        await listService.deleteOne(id)
        this.toDoList=(await listService.getAll()).data  
        this.clear()            
         
      } catch (error) {
        this.fatalError=error.response.data.error;
        this.dialog=true
      }
      },

      async deleteAll(){
      try {
        await listService.deleteAll()
        this.toDoList=(await listService.getAll()).data  
        this.clear()            
         
      } catch (error) {
        this.fatalError=error.response.data.error;
        this.dialog=true   
      }
      
      },

      async guestSubmit () {
        if(!this.$v.toDoText.$invalid&&
          !this.$v.toDoDate.$invalid)
          {
            try {
              const data={
                id:this.$store.state.id,
                toDoText:this.toDoText,
                toDoDate:this.toDoDate,
                toDoDone:false
              }
              await this.$store.dispatch(
              'setData',data)
              await this.$store.dispatch(
              'Increment')
              this.toDoList=await this.$store.state.todo
              this.clear()
               

          }catch(error) {
            this.fatalError=error;
            this.dialog=true
          }
      }else{
        this.fatalError='no empty or invalid forms'
        this.dialog=true
      }
    },

    async guestCheck(todo){ 
      try {
        
        await this.$store.dispatch(
        'Check',todo)
        this.toDoList=await this.$store.state.todo
        this.clear()            
         
      } catch (error) {
        this.fatalError=error.response.data.error;
        this.dialog=true
      }
      
      },

      async guestDeleteOne(todo){
      try {
        await this.$store.dispatch(
        'DeleteOne',todo)
        this.toDoList=await this.$store.state.todo
        this.clear()            
         
      } catch (error) {
        this.fatalError=error.response.data.error;
        this.dialog=true
      }
      },

      async guestDeleteAll(){
      try {
   
        await this.$store.dispatch(
        'DeleteAll')
        this.toDoList={}
        this.clear()

         
      } catch (error) {
        this.fatalError=error.response.data.error;
        this.dialog=true   
      }
      
      },


      clear(){
        this.$v.$reset()
        this.add=false
        this.toDoText=''
        this.toDoDate=new Date().toISOString().substr(0, 10)
        this.fatalError=''
      },

  },

    async mounted(){      
      try {
        if (this.isUserLoggedIn){
          this.toDoList=(await listService.getAll()).data
        }else{
          this.toDoList=await this.$store.state.todo
        }
      } catch (e) {
      console.log(e)
      }
      
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
 
</style>
