
# AUTHENTICATION WITH EXPRESS CONNECTED VIA MONGODB ATLAS
    It is a full stack web application (backend and frontend), which is using JWT Authentication to make login user and finding details of the loggedin user via JWT Token. It is  made with following:
- Frontend
  - HTML
  - CSS
  - JAVASCRIPT
- BACKEND
  - NODEJS
  - EXPRESS
- Database
  - MONGODB ATLAS
## Purpose of this project
- This application program can be used for making a simple user-management between frontend and backend with:
 - Registeration
   :A user is registering in the database by the endpoint **/signup** . You have to given these datas from frontend.
   - USERNAME
   - EMAIL
   - PASSWORD
   - BIO
   - NAME
 - Login
    :A user is logging in the database by the endpoint **/login**. You have to given these information from the frontend.
    - EMAIL
    - PASSWORD
 - Login
    :A user can be logged in by endpoint **/login**. You have to given these information from the frontend.
    - EMAIL
    - PASSWORD

## Feauters
 ### Request/Response Formats
 In this project, A request contains json data from the frontend. Without json data, backend will not work.
 A response gives simply a message in text format to the browser after successfully operated. If it gets any error, it shows a json message in the response.
 ### Error Handling
  The controller part is well handled by trycatch error handling. In registration part, if a user data is already present it will throw an error. If any required part will be missing then it will show an error json message 'User registration failed'.
  In logging part, if anything becomes wrong, it will show a proper json error message.
## Installation
  First, 
  - Nodejs :you have to download nodejs from node server **https://nodejs.org/en/download** into your vs code editor.
  Then..
  - MongoDB Atlas : Go to MongoDB Atlas signup page **https://www.mongodb.com/cloud/atlas/register** and make account 
    there. After login create a database and copy the connect path  of the Atlas connection to insert in .env file MONGODB_URL.
  There are following dependencies you will need to download into your backend directory.
  1. Express : Nodejs framework. Run command **npm install express**
  2. Mongoose : Representrator of mongoDB in nodejs. Run command **npm install mongoose**
  3. Nodemon : Live server of nodejs. Run command **npm install nodemon**
  4. JSON Web Token : Make secure data transfer(eg. make signature). Run command **npm install jsonwebtoken**
  5. Dotenv : Import enviornment variables into process. Run command **npm install dotenv**
  6. CORS : Makes connection with frontend and backend. Run command **npm install cors**
  7. Email-Validator : Validate email format. Run command **npm install email-validator**
  8. Bcrypt : Make hashcode of password. Run command **npm install bcryptjs**
  9. Body-Parser : Parses Data over HTTP request. Run command **npm install body-parser**
  10. CookieParser : Middleware used for cookie parsing. Run command **npm install cookie-parser**
Instructions:
    To install dependencies - npm install
    To run the code in live reload mode, use command - npm run dev
    To run the app - npm start

Note: If you are running an application on a port XXXX, copy the url from the bar  and attach the url with port https://your-url:XXXX to see the output.
