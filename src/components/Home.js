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
                            <h5>AWS S3 Bucket</h5>
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
                            <h5>File Uploader</h5>
                            <Card.Text className="text-create">
                            Simple multi-part system to upload CSV Files on you added AWS S3 bucket
                            </Card.Text>
                            <Button variant="primary" onClick={handleShow} className="button-create" >Uploader</Button>
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
                    <Modal.Body>
                        <Upload />
                    </Modal.Body>
                    <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close Button
                            </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={show2} onHide={handleClose2}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                    keyboard={false}
                    // style={{maxWidth:"130%"}}
                >
                    <Modal.Header closeButton>
                        {/* <Modal.Title>
                            Add Employee
                        </Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        <CreateBucket/>
                    </Modal.Body>
                    <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose2}>
                                Close Button
                            </Button>
                    </Modal.Footer>
                </Modal>


            </div>
        )
    }


export default Home
