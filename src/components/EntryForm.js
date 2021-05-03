import React from 'react'
import { Checkbox, Form, Segment } from "semantic-ui-react"
function EntryForm({description,isExpense,setIsExpense,value,setDescription,setValue}) {
    return (
        <div>
               <Form.Group>
                <Form.Input placeholder="New Shiny thing"
                    icon="tags"
                    width={12}
                    label="Descriptin"
                    value={description}
                    onChange={(event) =>
                        setDescription(event.target.value)
                    }
                />
                <Form.Input
                    width={4}
                    label="Value"
                    placeholder="100.00"
                    icon="dollar"
                    iconPosition="left"
                    value={value}
                    onChange={(event) =>
                        setValue(event.target.value)
                    }
                />

            </Form.Group>
            <Segment compact>
                <Checkbox label="is Expense" toggle checked={isExpense} onChange={()=>{
                    setIsExpense((oldState)=>!oldState)
                }}/>
            </Segment>
        </div>
    )
}

export default EntryForm
