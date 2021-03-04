import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
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
export default connect(mapStateToProps)(UserHeader);