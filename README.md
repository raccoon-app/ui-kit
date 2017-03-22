# RACCOON APP
Raccoon App is a tool to measuring and getting styles of layouts design

### Latest version of app online

<a href="https://raccoon-app-ui-kit.herokuapp.com/">Online version</a>
---------

## Main npm scripts
To build app, start server http://localhost:8080/ and watch for changes:
```
npm run watch
```

To build app:
```
npm start
```

To execute unit test:
```
npm test
```

### Style Guide
* JavaScript: https://github.com/airbnb/javascript
* React: https://github.com/airbnb/javascript/tree/master/react
* CSS: https://github.com/airbnb/css

### Design
https://app.zeplin.io/projects.html

### Environment
NODE_ENV - development|production

### Backend

#### Authorization

Routes for authorization are in \back\controllers\auth.js

* http://localhost:9000/auth/local/login
* http://localhost:9000/auth/local/signup
* http://localhost:9000/auth/logout

Authorization strategies have to be in \back\services\auth\strategies
Initialization of all strategies and common method (logout) are in \back\services\auth\strategies\common.js

Each strategy have to register itself:

const strategies = require('./common');
strategies.register(this);

Success authorization returns token. This token will be used for authentication user on each request.

#### Authentication & Permissions

For user authentication header have to contain token in format:
authorization: Bearer "my_token"

Authentication and check required user role are middleware, that can be added to any route
(file \back\services\auth\auth.middleware.js)

Example:

const auth = require('./../services/auth/auth.middleware');

module.exports = router()
    .post('/add', auth.isAuthenticated, auth.requiredRole('admin'), addProject);


User's RESTs:

* http://localhost:9000/user/
* http://localhost:9000/user/account
* http://localhost:9000/user/get/"id"
* http://localhost:9000/user/find
* http://localhost:9000/user/add
* http://localhost:9000/user/update
* http://localhost:9000/user/delete

Project's RESTs:

* http://localhost:9000/project/get
* http://localhost:9000/project/add
* http://localhost:9000/project/find/"id"
* http://localhost:9000/project/update/"id"
* http://localhost:9000/project/delete/"id"


