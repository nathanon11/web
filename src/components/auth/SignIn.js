import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import bg from './pp.png'
import lg from './22.png'


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (

      <div  style={{ backgroundImage: `url(${bg})`,
      height:'100vh',
      marginTop:'65px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
     }}>
    

      <div className='right'   style={{ marginRight:'200px'}}>
      <div className="container "  >
        <form className=""  onSubmit={this.handleSubmit}>
        <div>  
        
          <img src={lg} style={{ display:'relative' ,width:'85px',fontSize:'25px',color: 'blue darken-4 '}} />URS   </div>
    
        <h4 className="blue-text text-darken-4" style={{fontSize:'60px',marginTop:'25px' }}>Welcome </h4>
          <h5 className="grey-text text-darken-3" >Sign In</h5>
          <div className="input-field">
            <label htmlFor="email"style={{fontSize:'18px',marginTop:'25px'}} >Email</label>
            <input type="email" style={{ borderRadius:"20px", backgroundColor:"white",width:'70vh' }} id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password" style={{fontSize:'18px',marginTop:'25px'}}   >Password</label>
            <input type="password" style={{borderRadius:"20px" , backgroundColor:"white" }} id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn btn blue lighten-1 z-depth-1" style={{marginTop:'65px',color:'white',borderRadius:"20px"}}>Login</button>
            <div className=" red-text">
              { authError ? <p>{authError}</p> : null }

            </div>
            <div className="text" style={{fontSize:'12px',marginTop:'25px',color:'gray'}}   >
               DON’T HAVE ACCOUNT?<a href="/signup">Sign up Now</a>
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
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
