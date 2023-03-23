import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import { collection, query, where, getDocs } from "firebase/firestore";
import bg from './qq.png'
// import{authurId,auth,projects} from ".../store/projectActions"
// import { doc} from "firebase/firestore"; 


// const q = query(collection('projects'), where(projects.authurId, "==" ,auth.uid, "==", true));

const ProjectList = ({projects, auth}) => {
  
  // console.log(doc.id, " => ", doc.data());

  return (
    
    <div className="project-list section" style={{backgroundColor:"transparent"}}>
      <div className='left'>
        <p style={{color:'gray'}}>รายชื่อผู้เข้ารับการครวร</p>
      </div>
      <div className='right'>
        <p  style={{color:'gray',marginRight:'50px'}}>แพทย์เจ้าของไข้</p>
      </div>
      <div className='right'>
        <p style={{color:'gray',marginRight:'30px'}} >วันที่ตรวจ</p>
      </div>
      <br></br>
      <br></br>
      { projects && projects.map(project => {
        console.log(auth.uid == projects[0].authurId)
        if (project.authurId === auth.uid) {
          return (
            <Link to={'/project/' + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          )

        }
       
      })}  
    </div>
    
    
  )
    }
    


export default ProjectList
 