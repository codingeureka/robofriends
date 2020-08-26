import { 
   CHANGE_SEARCH_FIELD,
   REQUEST_ROBOTS_PENDING,
   REQUEST_ROBOTS_FAILED,
   REQUEST_ROBOTS_SUCCESS

} from './constants.js'


export const setSearchField = (text) => {
    console.log(text)
 return{
    type: CHANGE_SEARCH_FIELD,
    payload: text
 }  
}

// we create a high order function, a function that returns a function
//dispatch funtion provide the intern function

//Redux would understand it, because it waits a object for action not a function,that why you use the thunkmiddleware
//now you listen to action, the request get trigger return a function from redux-thunk, then give us a dispatch
//to send a function, so we can call some action with dispatch,then we run our action 
//requestRobos has 2 Functions
export const requestRobots = () => (dispatch) => {
   dispatch({ type: REQUEST_ROBOTS_PENDING});
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
      
      }