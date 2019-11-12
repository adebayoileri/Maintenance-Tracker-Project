# Maintenance-Tracker-Project
Maintenance Tracker App is an application that provides users with the ability to reach out to operations or repairs department regarding repair or maintenance requests and monitor the status of their request.

## API Endpoints
| Endpoint | Functionality |
| ----------- | ----------- |
| POST /auth/signup | Register a user |
| POST /auth/login | Login a user |
| GET /users/requests | Fetch all the requests of a logged in user |
| GET /users/requests/<requestId>| Fetch a request that belongs to a logged in user |
| POST /users/requests | Create a request. |
| PUT /users/requests/<requestId> | Modify a request. |
| GET /requests/ | Fetch all the requests. |
| PUT /requests/<requestId>/approve | Approve request |
| PUT /requests/<requestId>/disapprove | Disapprove request |
| PUT /requests/<requestId>/resolve | Resolve request |
  
## Installation
Clone the repo to your local machine 
- Run `npm install` to install all dependencies
- Run `npm start` to start up server
- Run `npm run test` for testing 

## Hosted Pages
https://trackman.herokuapp.com

## Badges
[![Build Status](https://travis-ci.com/adebayoileri/Maintenance-Tracker-Project.svg?branch=API)](https://travis-ci.com/adebayoileri/Maintenance-Tracker-Project)
[![Coverage Status](https://coveralls.io/repos/github/adebayoileri/Maintenance-Tracker-Project/badge.svg?branch=API)](https://coveralls.io/github/adebayoileri/Maintenance-Tracker-Project?branch=API)
[![Maintainability](https://api.codeclimate.com/v1/badges/97151e693fa612e330b7/maintainability)](https://codeclimate.com/github/adebayoileri/Maintenance-Tracker-Project/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/97151e693fa612e330b7/test_coverage)](https://codeclimate.com/github/adebayoileri/Maintenance-Tracker-Project/test_coverage)

## License
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Contribute To This Project
PRs Welcome 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

### Author
 Adebayo Ilerioluwa
