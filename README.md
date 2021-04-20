## Task Manager Pro

Task manager is a simple to-do web app. There is no need for a login / register system. Any user who has access to the deployment
link [https://manage-all-tasks.herokuapp.com] can perform any operation.

## Design Decisions

No authentication system implemented because the main goal of the project is to demostrate good knowledge and understanding of CRUD and state management in React using Redux. 

## Tool and external libraries used

React, TypeScripe, Redux, Redux-Saga, Jest and React Testing Library 

## Deployment
Heroku, Heroku CLI and Git

## ENVIRONMENT VARIABLES
Create .env.local file in your root directory and add `REACT_APP_BASE_URL=https://api-web-services.herokuapp.com/api/` into it.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.