
import React from 'react';
import {ul } from 'react-bootstrap';

export default class  Profile extends React.Component {
  render() {
    return (
      <div className="profileUser">
        <h1>User profile {this.props.name}</h1>
       <div className="profileHeader">
        <ul class="list-group">
          <li class="list-group-item">My profile</li>
          <li class="list-group-item">Contact information</li>
          <li class="list-group-item">Experiance</li>
          <li class="list-group-item">Skill</li>
          <li class="list-group-item">WishList</li>
        </ul>
         </div>
      </div>
    );
  }
}