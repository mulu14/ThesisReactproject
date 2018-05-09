import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from './../../action/logaction';
import Card, { CardActions, CardContent } from 'material-ui/Card';

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let copyState = Object.assign({}, this.state);
    copyState.user[inputName] = inputValue;
    this.setState(copyState);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.user);

    if (this.state.user.email && this.state.user.password) {
      return this.props.register(this.state.user);
    }
  }

  render() {
    return (
      <div className="root">
        <div className="header" />
        <div className="body">
          <Card>
            <CardContent>
              <form className="formlogin" onSubmit={this.handleSubmit}>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.user.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.user.password}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="loginButton">
                  <button type="submit" className="blue">
                    Register
                  </button>
                  <Link to="/login">Cancel</Link>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="placeholder"> </Card>
        </div>
        <div className="footer"> </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    register: user => dispatch(register(user))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
