import React from 'react';
import { Form, FormControl, Button, Row } from 'react-bootstrap';

//   import Messages from './components/Messages';

function Search(props) {
    return (
        <>
            <Row className="justify-content-md-center">
                <Form inline>
                    <FormControl type="text" placeholder="Arrival" className="mr-sm-2" />
                    <FormControl type="text" placeholder="Departure" className="mr-sm-2" />
                    <FormControl type="text" placeholder="Choose a room" className="mr-sm-2" />
                    <FormControl type="text" placeholder="State" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Row>
        </>
    )
}
export default Search