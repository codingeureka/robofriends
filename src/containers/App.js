import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

import { setSearchField, requestRobots } from '../actions'

//reducer searchRobots 
const mapStateToProps = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPendig,
        error: state.requestRobots.error
    }
} 

const mapDispatchToProps = (dispatch) => {
 return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: (event) => dispatch(requestRobots())
    //we want to return a function remenber the thunkMiddleware wait a function
}
 }   





class App extends Component {
 
    componentDidMount() {
     //   console.log(this.props.store.getState())
        this.props.onRequestRobots();
    }


    render() {
        
        const { searchField, onSearchChange,robots, isPendig } = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
    return isPendig ?
        <h1>Loading</h1> :
         (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                    <CardList robots = {filteredRobots}/>
                    </ErrorBoundry>
                                        
                </Scroll>
                
               
            </div>
            
            );

    }
       
}   

//mapStateToPros -> State
//mapDispatchToProps -> Action Dispatch
export default connect(mapStateToProps,mapDispatchToProps)(App);
