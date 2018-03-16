
import React from 'react';

export default class  Profile extends React.Component {
  render() {
    return (
      <div className="profileUser">
        <h1>User profile {this.props.name}</h1>
        <div className="profileHeader">
         <ul> 
         <li>My profile</li>
          <li> Contact for information</li>
         </ul>
         </div>
        <ul>
          <li>Experiance</li>
          <li>Skill</li>
          <li>WishList</li>
        </ul>
      </div>
    );
  }
}