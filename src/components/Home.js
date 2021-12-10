import React, { Component, useState } from 'react'
import{Card, Button, CardGroup, Modal} from 'react-bootstrap'
//import Cloud from "./../cloud.jpg"
import Bucket from "./image/s3bucketLogo4.png"
import Cloud from "./image/greencloud.png"
import './Home.css'
import Upload from './Upload2'
import CreateBucket from './CreateBucket'

const Home =()=> {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [show2, setShow2] = useState(false);
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);
    
        return (
            <div>
                

                <CardGroup className='card-group'>

                    <Card style={{ width: '18rem' }} className="creatCard">
                        <div class="card-header">
                            Create Bucket
                        </div>    
                        <Card.Img variant="top" src={Bucket} className="img-bucket"/>
                        <Card.Body className="cardBody">
                            <h6>AWS S3 Bucket</h6>
                            <Card.Text className="text-create">
                            Select your configured AWS S3 Bucket to further upload your file on it
                            </Card.Text>
                            <Button variant="primary" onClick={handleShow2} className="button-create" >Create Bucket</Button>
                        </Card.Body>
                        <div class="card-footer text-muted">
                            .
                         </div>             
                    </Card>

                    <Card style={{ width: '18rem' }} className="uploadCard">
                        <div class="card-header">
                            Upload File
                        </div>  
                        <Card.Img variant="top" src={Cloud} className="img-cloud" />
                        <Card.Body className="cardBody">
                            <h6>File Uploader</h6>
                            <Card.Text className="text-create">
                            Simple multi-part system to upload CSV Files on you added AWS S3 bucket
                            </Card.Text>
                            <Button variant="primary" onClick={handleShow} className="button-create" >Upload File</Button>
                        </Card.Body>
                        <div class="card-footer text-muted">
                            .
                        </div> 
                    </Card>

                </CardGroup>

                <Modal show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        {/* <Modal.Title>
                            Add Employee
                        </Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body className="create-modal-body">
                        <Upload />
                    </Modal.Body>
                    <Modal.Footer className="footerr">

                    </Modal.Footer>
                </Modal>


                <Modal show={show2} onHide={handleClose2}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    
                    backdrop="static"
                    keyboard={false}
                    // style={{maxWidth:"130%"}}
                    className="CreateBucket-modal"
                >
                    <Modal.Header closeButton className="headerr">
                        {/* <Modal.Title>
                            Add Employee
                        </Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body className="create-modal-body">
                        <CreateBucket/>
                    </Modal.Body>
                    <Modal.Footer className="footerr">
                               
                    </Modal.Footer>
                </Modal>


            </div>
        )
    }


export default Home
