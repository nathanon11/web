import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import bg from './pp.png'
import lg from './22.png'



class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (

      <div  style={{ backgroundImage: `url(${bg})`,
      height:'110vh',
      marginTop:'65px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
     }}>

<div className='right'   style={{ marginRight:'200px'}}>
  

      <div className="container center">
        
        <form className="" onSubmit={this.handleSubmit}>
        <div>  
        <img src={lg} style={{ display:'relative' ,width:'100px',fontSize:'60px',color: 'blue darken-4 '}} />URS   </div>
         <h4 className="grey-text text-darken-3"  style={{marginTop:'5px'}}>Welcome </h4>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field" >
            <label htmlFor="email" style={{fontSize:'15px',marginTop:'25px'}} >Email</label>
            <input type="email" id='email'style={{ borderRadius:"20px", backgroundColor:"white",width:'70vh' }} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password" style={{fontSize:'15px',marginTop:'25px'}}>Password</label>
            <input type="password" id='password' style={{ borderRadius:"20px", backgroundColor:"white",width:'70vh' }} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName" style={{fontSize:'15px',marginTop:'25px'}}>First Name</label>
            <input type="text" id='firstName'  style={{ borderRadius:"20px", backgroundColor:"white",width:'70vh' }}onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName" style={{fontSize:'15px',marginTop:'25px'}}>Last Name</label>
            <input type="text" id='lastName' style={{ borderRadius:"20px", backgroundColor:"white",width:'70vh' }} onChange={this.handleChange} />
          </div>
         
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-1" style={{ marginTop:'2px',color:'white',borderRadius:"10px"}}>Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
