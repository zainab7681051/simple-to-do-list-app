<template>
  <v-app>
    <v-main>
    	<v-layout column>
    <v-layout>
      <v-container>
        <v-flex>
          <v-card>
            
            <v-card-title 
            style="background-color:#ab92b3;">
            LOGIN
            </v-card-title>
            
            <form 
            class="ml-2 mr-2"
            >
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Name or Email"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()">
              </v-text-field>
              <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                label="Password"
                required
                type="password"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              ></v-text-field>
              <v-checkbox
                v-model="checkbox"
                label="Stay Logged in?"
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>

              <v-btn
              to="/register"
              text
              plain
              color="#fd6767"
              class="mb-2">
                Not registered? SignUp!
              </v-btn>
              <br>
              <v-btn
                class="mr-4 ml-4"
                @click="submit"
              >
                submit
              </v-btn>
              <v-btn 
              @click="clear">
                clear
              </v-btn>
            </form>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
  </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  mixins: [validationMixin],
  data: () => ({
      name: '',
      password:'',
      checkbox: false,
    }),

  validations: {
    name: { 
      required, 
    },
    password:{
      required,
      maxLength: maxLength(10),
      minLength: minLength(5),
    },
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        //FOR LATER==>!this.$v.email.email && errors.push('password must have one or more letters, small and cap')
        !this.$v.password.required && errors.push('Password is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.password = ''
        this.checkbox = false
      },
    },
  }

</script>
