import React, { Component } from 'react';
import axios from 'axios';
import {ProgressBar, Button, InputGroup, FormControl} from 'react-bootstrap'
import "./Upload2.css"
import cloud from "./../cloud.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
class FileUploadComponent extends Component {
    state = {
            selectedFile:null,
            emptyFileErr:null,
            fileUploadedSucessfully:null,
            status: '',
            progress:0,
            bucketName:'',
            emptyBucErr:null
        }
    
    selectFileHandler = (event)=>{
      console.log("inside selectFileHandle...");
        let file = event.target.files[0];
        console.log(`event ${event}`);
        console.log(`event ${event.target.files[0]}`);
       let errMessage = [];

       this.setState({selectedFile: event.target.files[0],
          progress:0,
          fileUploadedSucessfully:null,
          emptyFileErr:""
        },
          function(){
            console.log("selectedFile:",this.state.selectedFile);}
         ); 
    };

    // method contain logic to upload file
    uploadHandler = () => {
        console.log("inside uploadHnadler...");
        console.log("selectedFile:",this.state.selectedFile);
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        console.log("formdata:",formData);
        
        this.setState({emptyFileErr:"",emptyBucErr:""})
        // if(this.state.selectedFile!=null){
          
           axios.post("https://localhost:5001/s3/AddFile?bucketName="+this.state.bucketName, formData, {
            onUploadProgress: progressEvent => {
              console.log("progress:",this.state.progress);
              this.setState({
                progress: (progressEvent.loaded / progressEvent.total*70)
              })
              console.log("progress:",this.state.progress);
            }
          })
            .then((response) => { 
              console.log("Response after api call",response);
              this.setState({status:`upload success ${response.data}`});
              console.log("status=>",this.state.status);
              // this.setState({selectedFile:null});
              this.setState({fileUploadedSucessfully:true});
              this.setState({progress:100});
            })
            .catch((error) => { 
              console.log("Error after api call",error);
              this.setState({status:`Upload Failed ${error}`});
              this.setState({progress:0});
              this.setState({fileUploadedSucessfully:false});
            })
          // }
    }
    
    checkValidation=(e)=>{
      let formValid = true;
      // if(this.state.bucketName!=null && this.state.selectedFile!= null){
      //   this.uploadHandler();
      // }
      if(this.state.bucketName==null || this.state.bucketName==''){
        this.setState({emptyBucErr:"Please Enter Bucket Name."})
        formValid=false;
      }
      if(this.state.selectedFile==null || this.state.selectedFile==''){
        this.setState({emptyFileErr:"Please Select a File."})
        formValid=false;
      }
      // e.preventDefault()
      if(formValid){
        
        this.uploadHandler();
      }
    }

    fileData=()=>{
      console.log("inside filedata");
      console.log("this.state.selectedFile-",this.state.selectedFile);
      if(this.state.selectedFile!=null && this.state.fileUploadedSucessfully!=true){
        console.log("pass");
      return(
        <div className="file-details">
          <h5>File Details</h5>
          <p>File Name:{this.state.selectedFile.name}</p>
          <p>File Type:{this.state.selectedFile.type}</p>
          <p>File Last Modified:{this.state.selectedFile.lastModifiedDate.toDateString()}</p>
          <p>File Size:{(this.state.selectedFile.size / (1024*1024)).toFixed(2)} MB</p>
        </div>
        
      );
      }
      else if(this.state.fileUploadedSucessfully){
        return(
          <div>
            <h2>File Uploaded Sucessfully...</h2>
          </div>
        );

      }
      
      else{console.log("fail");
        return(
          <div>
            <h5>Select a file ...</h5>
          </div>
        );
      }
    }

    handleChange= (e)=> {  
      this.setState({[e.target.name]:e.target.value});  
      this.setState({emptyBucErr:""})
      }  
      
    render() {
        return (
            <div className="uploadContainer" >
              <div class="card text-center">
                {/* <div class="card-header">
                  Upload your file
                </div> */}
                  <div class="card-body" >
                    <img src={cloud} className="file" alt="Italian Trulli"/>
                    <h5 class="card-title">File Uploader</h5>
                    <p class="card-text">Simple multi-part system to upload CSV Files</p>

                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">Bucket Name</InputGroup.Text>
                      <FormControl
                        placeholder="s3-Bucket-Name"
                        id="inputField" type="text"  name="bucketName" onChange={this.handleChange
                          // (event)=>{this.setState({bucketName:event.target.value})
                          // console.log(this.state.bucketName);}
                        }
                        value={this.state.bucketName}
                      />
                    </InputGroup>
                    <span style={{ color: "red"}}>{this.state.emptyBucErr}</span>

                    <div class="mb-3">
                    
                      <input class="form-control" type="file" id="formFile" onChange={this.selectFileHandler} />
                      <span style={{ color: "red"}}>{this.state.emptyFileErr}</span>
                    </div>
                    
                    <Button variant="outline-success" id="button-addon2" onClick={this.checkValidation}>Upload</Button>
                    <div className="Progbar"><ProgressBar animated now={this.state.progress} label={`${this.state.progress}%`}/>
                    </div>
                    {/* {this.fileData()}
                    {this.state.status} */}
                  </div>
                  <div>{this.state.fileUploadedSucessfully==false?<span style={{ color: "red"}} >{this.state.status}</span>:this.fileData()}</div>
                  <br/>
                  {/* <div class="card-footer text-muted">
                      Phynd Uploader
                  </div> */}
              </div> 
            </div>
);
    }
}

export default FileUploadComponent;
