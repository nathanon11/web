import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import lg from './22.png'

import DoctorLinks from './DoctorLinks';
import NonDoctorLinks from './NonDoctorLinks';

const SignedInLinks = (props) => {
  const { profile } = props;

  if (profile.Doctor) {
    return <DoctorLinks />;
  } else {
    return <NonDoctorLinks />;
  }
  
};
``


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
