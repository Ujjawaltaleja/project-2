import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'


import serializeForm from 'form-serialize'
import {getDateString} from '../utils/utils'


class ViewPost extends Component{
  state = {
    post : {},
    comments : [],
    editComment : ''
  }

  
  componentWillReceiveProps(newProps){
    this.getCurrPostAndComments(newProps)
  }

  componentDidMount(){
    this.getCurrPostAndComments(this.props)
  }
  render(){
    return 
  }
}

function mapStateToProps({posts}){
  return {
    posts
  }
}

function mapDispatchToProps(dispatch){
  return{
    
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewPost))
