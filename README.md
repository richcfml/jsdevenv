# jsdevenv
Pluralsight JS Dev setup course sample repository. 

# Code Editor

I prefer ST3 or Visual Studio Code for JS projects. Since this course was oriented to JS and the author decided to go with `VSC I am writing and using VSC for all of the planning and setup of the environment.

# EditorConfig

To consolidate editor configuration and be able to handle things such as spaces across code editors or IDEs and with team members the course is suggesting http://editorconfig.org/
Please install the plugin for your editor and go ahead and cloge the repository for this guide and that will give you a starting editorconfig file that will have starting settings

# Package Management

NPM is the default package manager that we will use. JSPM is an alternative. The base package.json file is already included and provides a starting point for any project.

# Security 

Use node security for checks against the modules for vulnerabilities. https://nodesecurity.io/, use npm install nsp to install and nsp check command to check for vulnerabilities.

# Development Server

Browsersync is an option but Express is the de-facto option

# Sharing work-in-progress options

Some of the available options are localtunnel, ngrok, surge and now.

## localtunnel
    - To install run npm install localtunner -g
    - Start app
    - type lt --port 3000 or the port where the app is running and this will allow the access from local on the internet
    - if needed use lt --port 3000 --subdomain rick where rick is the name of the subdomain you want lt to server the pages

## ngrok
    - sign up
    - install ngrok
    - install authtoken
    - start the app
    - ./ngrok http 80

## now
    - npm install -g now
    - create start script
    - type now


# Automation

    Use npm scripts for automation. The start script will handle app start and running npm start or npm start -s(to suppress messages) will do the automation

# Transpiling
    Some of the choices are Babel, TypeScript or Elm. In the course Babel is selected.
    Helpful plug-ins for Babel are:
    Use babel-preset-es2015-node for version detection approach to transpiling. This is NodeJS specific
    Use babel-preset-latest-minimal for feature detection approach to transpiling. 

# Builds
    There are many options here but we will be using webpack as the build tool per the selection of the course

# Linter
    There are many options here but ESLint is the one choose for this course
    - Config format
    - Which built-in rules to enable
    - Warning or Errors
    - Which plugins
    - Use preset?
    - Use eslint-watch

# Testing
    Unit testing
    We are going to use Mocha as the testing framework
    We are going to use Chai as the assertion library
    We are going to use JSDOM as a helper library (Cheerio is another helper for JQUERY)
    The test files will be placed alongside the code
    The test should be run everytime the code file is saved
