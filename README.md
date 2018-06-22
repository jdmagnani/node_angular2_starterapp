# Node_Angular
Repository to store the content of the Node.js &amp; Angular 2+

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

---

### Installing

[links and info could become outdated]

1.) Clone this repository to your local system. In this repository we have a project that was developed sequentially on every class, and the progress is done on each one of the angular_day[1 .. to 5]. In the master branch you can download the final project.

2.) This project is integrated with IBM Cloudant DB, the cloudant credentials can be found on the .env file as described below:

# Cloudant Credentials
cloudantNoSQLDB_credentials_username=xxxxx
cloudantNoSQLDB_credentials_password=xxxxx
cloudantNoSQLDB_credentials_host=xxxxx
cloudantNoSQLDB_credentials_port=xxx
cloudantNoSQLDB_credentials_url=xxxxx

If you're not familiar with IBM Cloud and Cloudant, please take a look on the link below: 

https://console.bluemix.net/docs/services/Cloudant/getting-started.html#getting-started-with-cloudant

3.) In order to run the project, you must have node.js installed in your machine. To install node, please follow the steps on the link below:

https://nodejs.org/

4.) Once you have installed, navigate to the "Node_Angular/starter-projet" directory and run the following commands: 

```
npm install
```

Since the package.json in the web app includes all the dependencies necessary

5.) In your terminal, install Angular CLI module globally, as it is necessary to build the Angular related code:
```
npm install -g @angular/cli
```

6.) Build and run Angular project:
```
npm run dev
```

````
** Attention, if you're running on Windows machine, please follow the instructions described below: 
------
run: 
  npm i concurrently --save-dev

On package.json, inside scripts tag, change "dev" entry to:
"dev": "concurrently \"nodemon server.js\" \"ng build --watch\""

````
7.) Once you run the sequence of commands listed above, the application should be running on: http://localhost:300
