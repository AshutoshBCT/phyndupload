import {React, useState} from 'react'
import{Card, Button, CardGroup, Modal, InputGroup, FormControl} from 'react-bootstrap'
import createBucket from './image/createBucket.png'
import axios from 'axios'
import './CreateBucket.css'
function CreateBucket() {
    
    const [bucketName, setBucketName] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);
    const [inputError, setInputError] = useState(null);

    const createHandler = (e) =>{
        console.log("inside createhandler");
        console.log("bucketName=>",bucketName);

        axios.post("https://localhost:5001/s3/Create?bucketName="+bucketName
        //  {
        //     onUploadProgress: progressEvent => {
        //       console.log("progress:",this.state.progress);
        //       this.setState({
        //         progress: (progressEvent.loaded / progressEvent.total*100)
        //       })
        //       console.log("progress:",this.state.progress);
        //     }
        //   }
          )
            .then((response) => { 
            //   this.setState({status:`upload success ${response.data}`});
      
            //   this.setState({selectedFile:null});
            //   this.setState({fileUploadedSucessfully:true});
            console.log("response=>",response);
            console.log("response.data=>",response.data);
            console.log("response.data=>",response.data.message);
            setApiResponse(response.data.message)
            })
            .catch((error) => { 
            //   this.setState({status:`upload failed ${error}`});
            console.log("error=>",error);
            })


    }

    const checkValidation = () =>{
        if(bucketName=='' || bucketName==null){
            setInputError("Bucket Name is Required!!!")
        }
        else{
            createHandler()
        }
    }

    return (
        <div>
             <Card className="create-main-div">
                        <Card.Img variant="top" src={createBucket} className="create-image"/>
                        <Card.Body>
                            <Card.Title className="create-title">
                                <h5>Create Bucket</h5>
                            </Card.Title>
                            <Card.Text>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Bucket Name"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                id="inputField" type="text"  name="bucketName" onChange={(event)=>{setBucketName(event.target.value)
                                console.log(bucketName);
                                setApiResponse('')
                                    }}
                                required
                                />
                                <Button variant="outline-success" id="button-addon2" onClick={checkValidation}>
                                Create
                                </Button>
                            </InputGroup>
                            {/* <div><span style={{ color: "red"}}>{apiResponse}</span></div>
                            <div><span style={{ color: "red"}}>{inputError}</span></div> */}
                            <div><span style={{ color: "red"}}>{bucketName?apiResponse:inputError}</span></div>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
        </div>
    )
}

export default CreateBucket
