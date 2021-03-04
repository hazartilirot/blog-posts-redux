import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
/*A great disadvantage of fetching a user for each comment would be hundreds 
unnecessary requests. Getting a rational amount of requests we need to use
a way which somewhat reminds of a _.memoize which can cache requests alike.*/
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const {user} = this.props 
    
    if (!user) return null;
    
    return <div className="header">{user.name}</div>;
  }
}
/*NOTE the 2 arg ownProps is a reference to this.props.*/
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(u => u.id === ownProps.userId) };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);