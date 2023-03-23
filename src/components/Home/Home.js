import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from '../dashboard/Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import './assets/vendors/themify-icons/css/themify-icons.css'
// import'./css/bootstrap.min.css'
import './assets/css/steller.css'
import bg from './assets/imgs/ll.png'
import kidney from './assets/imgs/kidney.jpg'



class Home extends Component {
  render() {
    
    const { projects, auth, notifications } = this.props;
    if (!auth.uid){
      if(auth  == 0){
        return < Redirect to ='/' />
      }else{
       return < Redirect to='/dashboard' />
      }
    }
    
     return (
      <div  style={{ backgroundImage: `url(${bg})`,
      // height:'110vh',
      // marginTop:'65px',
      // fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
     }}>
   <header class="header" id="home"   >
   <div class="container" style={{ marginLeft:'70px'}}>
           
            <div class="infos" >
                <h1 class="subtitle" >Welcome to</h1>
                <h6 class="title">URS</h6>
                Urinary tract stone risk screening system with AI
                <p>ระบบช่วยวินิจฉัยความเสี่ยงการเกิดนิ่วในระบบทางเดินปัสสาวะ</p>
                  <p > ด้วยระบบปัญญาประดิษฐ์</p>
              
                {/* <div class="buttons pt-3">
                    <button class="btn btn-primary rounded">HIRE ME</button>
                    <button class="btn btn-dark rounded">DOWNLOAD CV</button>
                </div>       

                 <div class="socials mt-4">
                    <a class="social-item" href="javascript:void(0)"><i class="ti-facebook"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-google"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-github"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-twitter"></i></a>
                </div>  */}
            </div>              
            {/* <div class="img-holder" >
                <img src={lg} alt="Logo"  />
                 
            </div>      */}
      
        </div>

      
       {/* <div class="widget">
            <div class="widget-item">
                <h2>124</h2>
                <p>Happy Clients</p>
            </div>
            <div class="widget-item">
                <h2>456</h2>
                <p>Project Completed</p>
            </div>
            <div class="widget-item">
                <h2>789</h2>
                <p>Awards Won</p>
            </div> 
        </div>  */}
    </header>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Home)
