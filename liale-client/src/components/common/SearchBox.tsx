import React from "react";
import { Button, Form, FormControl } from 'react-bootstrap';
import './SearchBox.css';

interface SearchBoxProps {}

const SearchBox = (props: SearchBoxProps) => {
    return <Form className="d-flex">
        <FormControl 
            type="searhc" 
            placeholder="Search in our Library..." 
            className="me-2" 
            aria-label="Search in Our Library" 
        />
        <Button variant="outline-success">Search</Button>
    </Form>
}

export default SearchBox;
