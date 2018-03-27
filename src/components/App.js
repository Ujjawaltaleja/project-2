import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.css';
import{
  fetchAllPosts,
  fetchCategories
} from '../actions'
import ListPosts from './ListPosts'
import ViewPost from './ViewPost'
import {Route, withRouter, Switch} from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchAllPosts())
    this.props.dispatch(fetchCategories())
  }


  render() {
    return (
      <div>
  
        <Switch>
          <Route exact path="/" component={ListPosts}/>
          <Route exact path="/:category" component={ListPosts}/>
          <Route path="/:category/:postid" render={({history}) => (
            <ViewPost
              onDeletePost={(id) => {
                this.deletePost(id)
                history.push('/')
            }}/>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App))
