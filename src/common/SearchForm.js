import React from "react";
import {Form, FormGroup, Input} from "reactstrap";

const SearchForm = () => {

    return(
        <div>
            <Form>
                <FormGroup>
                    <Input
                        id="search"
                        name="search"
                        placeholder="Enter search term..."
                        type="text"
                        />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default SearchForm;