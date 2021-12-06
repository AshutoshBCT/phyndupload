import React, { Component } from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar'
import "./Upload2.css"
import cloud from "./../cloud.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
class FileUploadComponent extends Component {
    state = {
            selectedFile:null,
            fileUploadedSucessfully:null,
            status: '',
            progress:0
        }
    
    selectFileHandler = (event)=>{
      console.log("inside selectFileHandle...");
        let file = event.target.files[0];
        console.log(`event ${event}`);
        console.log(`event ${event.target.files[0]}`);
       let errMessage = [];
       
       this.setState({selectedFile: event.target.files[0],
      progress:0},function(){
         console.log("selectedFile:",this.state.selectedFile);}); 
    };

    // method contain logic to upload file
    uploadHandler = () => {
        console.log("inside uploadHnadler...");
        console.log("selectedFile:",this.state.selectedFile);
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        console.log("formdata:",formData);
        axios.post("https://localhost:5001/s3/AddFile?bucketName=phynduploads", formData, {
      onUploadProgress: progressEvent => {
        console.log("progress:",this.state.progress);
        this.setState({
          progress: (progressEvent.loaded / progressEvent.total*100)
        })
        console.log("progress:",this.state.progress);
      }
    })
      .then((response) => { 
        this.setState({status:`upload success ${response.data}`});

        this.setState({selectedFile:null});
        this.setState({fileUploadedSucessfully:true});
      })
      .catch((error) => { 
        this.setState({status:`upload failed ${error}`});
      })
    }

    fileData=()=>{
      console.log("inside filedata");
      console.log("this.state.selectedFile-",this.state.selectedFile);
      if(this.state.selectedFile!=null){
        console.log("pass");
      return(
        <div className="uploadStatus">
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
    render() {
        return (
            <div className="uploadContainer" >
              <div class="card text-center">
                <div class="card-header">
                  Upload your file
                </div>
                  <div class="card-body" >
                    <img src={cloud} className="file" alt="Italian Trulli"/>
                    <h5 class="card-title">File Uploader</h5>
                    <p class="card-text">Simple multi-part system to upload CSV Files</p>
                    <div class="mb-3">
                      <label for="formFile" class="form-label">Default file input example</label>
                      <input class="form-control" type="file" id="formFile" onChange={this.selectFileHandler} />
                    </div>
                      <a href="#" class="btn btn-outline-dark" onClick={this.uploadHandler}>Upload</a>
                    <div className="Progbar"><ProgressBar animated now={this.state.progress} />
                    </div>
                    {this.fileData()}
                  </div>
                  <div class="card-footer text-muted">
                      Phynd Uploader
                  </div>
              </div> 
            </div>
);
    }
}

export default FileUploadComponent;
