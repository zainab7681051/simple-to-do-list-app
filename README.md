# simple-to-do-list-app
a simple to-do list web app with interface in vue and web server in nodejs express and database in postgresql.
# 
user can log in or sign up and save their to-do list in a database or
they can use the app as guests, and their list will be saved in the browser cache.
# 
# tools & frameworks
the following `stack` of tools and frameworks were used in this project
* database:
  * postgres, object-relational database with associated tables 

* backend:
   * nodejs express for the web server
   * sequelize as the object relational mapper
   * jwt (json web token) and passport for user account authentication
   * Joi framework for validations of input fields on the server side
   * bcrypt for password hashing

* frontend:
   * vuejs 2
   * vuetify framework for design 
   * axios to make requests to the API's in the backend
   * vuelidate for validations of input fields on the client side
   * vuex, vuex-router-sync, vue-persistedstate frameworks for state management


# how to run
first, make sure you have a postgres database with the same name as the one you type in ```config``` file. then, after cloning the project, for each of the directories-`frontend` and `backend` open a `command prompt` or a `git BASH`
for the `backend` run the following code in prompt or git to setup the server side
```
npm install --save
```
to run the web server type the following
```
npm run dev
```
***the above code will run the `nodemon` framework in nodejs server which will be helpful for quickly restarting the server after changes***

and for the frontend run
```
npm install --save
```
then, to run it, type
```
vue serve
```
and click or copy the pagelink in the vue CLI prompt/git window and head towards the browser to see the app.
