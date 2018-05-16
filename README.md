# Chess Knight Web Application
![AngularJs Badge](https://img.shields.io/badge/AngulaJS-1.5.9-brightgreen.svg) ![Gulp Badge](https://img.shields.io/badge/Gulp-3.9.1-green.svg) ![Typesccript Badge](https://img.shields.io/badge/Typesccript-2.8.3-green.svg)![HttpServer Badge](https://img.shields.io/badge/http_server-0.11.1-green.svg)![Building Badge](https://img.shields.io/badge/building-passing-brightgreen.svg)

## How to execute

Get Visual Studio Code, NodeJS and npm on your machine and 
download this web application or clone this git repository.

After this, open one command interface like Windows cmd or 
Visual Studio Code Cosole and execute this following command:
```
npm install –g gulp typescript tsc http-server
```
Now install all project dependencies with this following command:
```
npm install
```
Execute gulp build to prepare the project to execute:
```
gulp default
```
Obs.: You found all build command processes in gulpfile.js

Wait gulp finish the build and use the following command to execute the project:
```
http-server
```
Obs.: You need the 'chessknight-api' in running state to use all functions 
present in this project,
use the following link to download it:
https://github.com/EnriquePSouza/chessknight-api-2018
