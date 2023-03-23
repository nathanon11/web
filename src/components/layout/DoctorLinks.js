import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import lg from './22.png'

const DoctorLinks = (props) => {
  return (
    <div>
      {/* <ul className="left"> 
        < img src={lg} style={{display:'relative' ,width:'60px'}}></img>  
      </ul> */}

      <NavLink to='/' className="brand-logo" style={{color:"blue"}} >URS</NavLink>
      <ul className="right" >
        <li ><NavLink to='/create' style={{color:"blue "}}>Add Patient</NavLink></li>
        <li><NavLink to='/Dashboard'  style={{color:"blue "}} >Patient</NavLink></li>
        <li><a onClick={props.signOut}  style={{color:"blue "}} >Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating yellow darken-2" style={{borderRadius:"15px"}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorLinks);
