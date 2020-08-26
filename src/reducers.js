import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS
 
 } from './constants.js'

const intialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=intialStateSearch, action={}) => {
   console.log(action.type)
    switch(action.type) {

        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const intialStateRobots = {
    isPending: false,
    robots:[],
}

export const requestRobots = (state=intialStateRobots, action={}) => {
    console.log(action.type)
     switch(action.type) {
 
         case REQUEST_ROBOTS_PENDING:
             return Object.assign({}, state, { isPending: true})
         
         case REQUEST_ROBOTS_SUCCESS:
             return Object.assign({}, state, { robots: action.payload, isPending: false})
  
         case REQUEST_ROBOTS_FAILED:
             return Object.assign({}, state, { error: action.payload, isPending: false })
         
         default:
             return state;
     }
 }