import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

var base64 = "";
class CreateProject extends Component {
  
  handleFileRead = async (event) => {
    const files = event.target.files
    const base64s = []
    for (const file of files) {
      const base64 = await this.convertBase64(file)
      base64s.push(base64)
    }
    this.setState({ base64s })
  }

  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  state = {
    firstName: '',
    lastName:'',
    age: '' ,
    WBC: '',
    blood:'',
    gravity: '' ,
    ph: '',
    glu: '',
    ketone: '',
    calox: '',
   
    Ai:"1"
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    
    this.props.createProject(this.state);
    this.props.history.push('/Dashboard');
  }

  
  
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">เพิ่มข้อมูลผู้ป่วย</h5>
          <div className="input-field"   >
            <label htmlFor="title">ชื่อ</label>
            <input type="text"    id='firstName' style={{borderRadius:"10px",backgroundColor:"white"}} onChange={this.handleChange} />
        
          </div>
          <div className="input-field"   >
            <label htmlFor="title">สกุล</label>
            <input type="text"    id='lastName' style={{borderRadius:"10px",backgroundColor:"white"}} onChange={this.handleChange} />
        
          </div>

          <div className="input-field" >
            <input type="Number" id='age' style={{borderRadius:"10px",backgroundColor:"white"}} onChange={this.handleChange} />
            <label htmlFor="content">อายุ</label>
          </div>

          <div className="input-field">
            <input type="Number" step="any" id='WBC' style={{borderRadius:"10px",backgroundColor:"white"}} onChange={this.handleChange} />
            <label htmlFor="content">WBC ( 0 - 500 )</label>
          </div>

          <div className="input-field">
            <input type="Number" step="any" id='blood'style={{borderRadius:"10px",backgroundColor:"white"}} onChange={this.handleChange} />
            <label htmlFor="content">Blood ( 0 - 200 )</label>
          </div>

          <div className="input-field">
            <input type="Number" step="any" id='gravity'style={{borderRadius:"10px",backgroundColor:"white"}}  onChange={this.handleChange} />
            <label htmlFor="content">Specific gravity of urine ( 1 - 1.030 ) </label>
          </div>

          <div className="input-field">
            <input type="Number" step="any" id='ph'style={{borderRadius:"10px",backgroundColor:"white"}} onChange={this.handleChange} />
            <label htmlFor="content">ph of urine ( 5.0 - 8.5 )</label>
          </div>

          <div className="input-field">
            <input type="Number" step="any" id='glu'style={{borderRadius:"10px",backgroundColor:"white"}} onChange={this.handleChange} />
            <label htmlFor="content">glucose of urine ( 0 - 110 ) </label>
          </div>
          <div className="input-field">
            <input type="Number" step="any" id='ketone' style={{borderRadius:"10px",backgroundColor:"white"}}onChange={this.handleChange} />
            <label htmlFor="content">ketone of urine ( 0 - 16 )</label>
          </div>
          
           <div className="input-field">
           <label htmlFor="content">Image calcium oxalate of urine (จำนวน 15 ภาพ)</label>
           <br></br>
           <br></br>
        
              <input
                id="base64"
                type="file"
                inputProps={{ accept: 'image/*, .xlsx, .xls, .csv, .pdf, .pptx, .pptm, .ppt' }}
                required
                label="Document"
                name="originalFileName"
                onChange={this.handleFileRead}
                size="small"
                variant="standard"
                multiple 
              />

          </div>



          <div className="button">
            <button className="btn blue lighten-1" style={{color:'white'}}>Submit</button>
          </div>
          
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
