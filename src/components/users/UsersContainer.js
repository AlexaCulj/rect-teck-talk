import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import { fetchUsers } from "./UsersActions";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return <Users users={this.props.users} />;
  }
}

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
