## A blog with users posts.
Data is fetched using JSONPlaceholder's API. The idea of the insignificant 
project is to get your hands dirty with a Thunk library. 
The Redux cycle changes from:
```
Action Creator => Action => dispatch => Reducers => State
```
to
```
Action Creator => Action => dispatch => MIDDLEWARE => Reducers => State
```
which allow us to use functions asynchronously to get data from API and then
dispatch it to Reducers.

### Prerequisites
* [Node.js](https://nodejs.org/en/)

### Installation
```
npm install
```
### Run
```
npm start
```