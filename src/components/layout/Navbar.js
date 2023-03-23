import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import lg from './22.png'


const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    
    <nav className="nav-wrapper #abdbdbd grey lighten-5 z-depth-0 fixed-top">
      <div className="container">
      <ul className="left"> 
        < img src={lg} style={{display:'relative' ,width:'60px'}}></img>  
      </ul>
         <Link to='/' className="brand-logo" style={{color:"blue "}} >URS</Link> 
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
