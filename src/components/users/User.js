import React, { Component } from 'react';

class User extends Component {
  componentDidMount() {
    // params.login is from /user/:login
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bui,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}

export default User;
