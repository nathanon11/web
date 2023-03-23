import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import ProjectDetails from '../projects/ProjectDetails'
import { compose } from 'redux'
import ProjectSummary from '../projects/ProjectSummary'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'





class Dashboard extends Component {
  render() {
    const { projects, auth, firebase,users,profile } = this.props;

    if (!auth.uid) return <Redirect to='/signin' /> 
    

    if(profile.Doctor){
      
      // if(projects.authurId == auth.uid){
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col-xl">
              <ProjectList projects={projects} auth={auth} />
            </div>
          </div>
        </div>
      )

    }else{
      return (
      
        <div className="center  project-list section" style={{backgroundColor:"transparent"}}>
           <div className='left'>
            <p style={{color:'gray',marginLeft:'80px'}}>ชื่อ</p>
          </div>
          <div className='right'>
          <p  style={{color:'gray',marginRight:'50px'}}>แพทย์เจ้าของไข้</p>
          </div>
          <div className='right'>
            <p style={{color:'gray',marginRight:'70px'}} >วันที่ตรวจ</p>
          </div>
          <br></br>
          <br></br>
          {projects && projects.map(project => {
        
        
          if (project.firstName == profile.firstName) {

            return (
              <Link to={'/project/' + project.id} key={project.id}   >
                <ProjectSummary project={project} />
              </Link>
            )

          }else{

            <div className="dashboard container">
              <div className="row">
                <div className="col-xl">
                  ยังไม่ได้เข้ารับการตรวจ
                </div>
              </div>
            </div>
          }
          })}
        </div>
      )



      
      
    }
    
   
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'users'},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
