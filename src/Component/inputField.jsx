import React from 'react'
import {Form,Button, Container, Row,Col} from "react-bootstrap"

const InputField  = () => {
    return (
        <>
        <h3>Package</h3>
        <Container>
            <Row>
                <Col xs={5}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Panel Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter Panel Code" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Panel Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Panel Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Package</Form.Label>
                            <Form.Control type="text" placeholder="Enter Package" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Enter Service Type">
                            <Form.Label>Service Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter Service Type" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={()=>{}}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default InputField
