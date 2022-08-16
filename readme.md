Backend:
1.npm init
2. Installing packages:
   express - npm i express

   Babel: JS Compiler that converts ES6 code into browser compatible code
   Installing Babel:
   1. npm i --save-dev @babel/core
   2. create .babelrc file
   3. npm install @babel/preset-env @babel/cli @babel/node --save-dev
   4. package.json:
      "scripts": {
        "start": "babel-node index"
     }
     command to run server: npm run start

   nodemon: automatically restarts the server every time you save the file
   npm i nodemon -D
   "scripts": {
    "dev": "nodemon --exec babel-node index"
    }
    command to run server: npm run dev

    mongoose:package for creating schemas and connecting to mongoDB
    cors: cross origin requests(Acts as a middleware whenever my frontend needs to make third party API requests(server))
    helmet: used for security reasons(middleware that makes server more secure)
    command for installation:
    npm i mongoose cors helmet

database --> folder for storing schemas:
7 schemas:
1.Users
2.Restaurants
3.Images
4.Orders
5.Reviews 
6.Food
7.Menu

APIs --> 
-Auth
-Foods
-Restaurants
-Menu
-Order
-Payments (razorpay)
-Reviews
-Users
-Images

Auth -->
password encryption: npm i bcrypt
hashing: converting password into hashed(encrypted) value using bcrypt.js
salting: encrypt password in loops

For both signup and login: Token will be generated for user
Generating JWT auth token for session storage: npm i json-web-token
JWT Token - object to store user data in an encrypted form

//store all sensitive data in .env file: npm i dotenv

//Statics and Methods in mongoose (functions that can be used in schema)
statics -> can be used directly with the model (predefined). Available even before data not saved to db
methods -> (pre instantiated) needs to be assigned to a var/const first. Methods can only be used only when u have started with processing the data (after creating user)

pre ->predefine function in mongoose that is executed at a particular state while performing a particular transaction in mongoDB
