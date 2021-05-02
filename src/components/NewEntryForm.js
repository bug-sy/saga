import React from 'react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import {Form} from "semantic-ui-react"

function NewEntryForm() {
    return (
      
        <Form unstackable>
        <Form.Group>
          <Form.Input placeholder="New Shiny thing"
            icon="tags"
            width={12}
            label="Descriptin"

          />
          <Form.Input
            width={4}
            label="Value"
            placeholder="100.00"
            icon="dollar"
            iconPosition="left"
          />

        </Form.Group>
<ButtonSaveOrCancel/>
      </Form>
    )
}

export default NewEntryForm
