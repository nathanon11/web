import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import lg from './22.png'

const NonDoctorLinks = (props) => {
  return (
    <div>
      {/* <ul className="left"> 
        < img src={lg} style={{color:'blue darken-4'}}></img>  
      </ul> */}

      <NavLink to='/' className="brand-logo"style={{color:"blue "}}  >URS</NavLink>
      <ul className="right" >
        <li><NavLink to='/Dashboard' style={{color:"blue "}} >Result</NavLink></li>
        <li><a onClick={props.signOut} style={{color:"blue "}} >Log Out</a></li>
        <li><NavLink to='/project' className="btn btn-floating #ffc107 amber" style={{borderRadius:"15px"}}  >
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NonDoctorLinks);
