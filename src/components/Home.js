import React, { Component, useState } from 'react'
import{Card, Button, CardGroup, Modal} from 'react-bootstrap'
import Cloud from "./../cloud.jpg"
import Bucket from "./image/s3bucketLogo.png"
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

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Bucket} className="img-bucket"/>
                        <Card.Body>
                            <Card.Title>File Uploader</Card.Title>
                            <Card.Text>
                            Simple multi-part system to upload CSV Files
                            </Card.Text>
                            <Button variant="primary" onClick={handleShow2}>Create Bucket</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Cloud} />
                        <Card.Body>
                            <Card.Title>File Uploader</Card.Title>
                            <Card.Text>
                            Simple multi-part system to upload CSV Files
                            </Card.Text>
                            <Button variant="primary" onClick={handleShow} >Uploader</Button>
                        </Card.Body>
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
