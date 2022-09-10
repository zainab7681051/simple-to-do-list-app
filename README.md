# simple-to-do-list-app
##a simple to-do list web app with interface in vue and web server in nodejs express and database in postgresql

###user can log in or sign up and save their to-do list in a database or
they can use the app as guests, and their list will be saved in the browser
cache.

///////////////////////////////////////////////////////////////////////

#database:
postgres, object-relational database

#backend:
nodejs express for the web server
sequelize as the object relational mapper
jwt (json web token) and passport for user account authentication
Joi framework for validations of input fields on the server side
bcrypt for password hashing

#frontnd:
vuejs 2
vuetify framework for design 
axios to make requests to the API's in the backend
vuelidate for validations of input fields on the client side
vuex, vuex-router-sync, vue-persistedstate frameworks for state management

