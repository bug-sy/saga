import React, { useState } from 'react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import { Checkbox, Form, Segment } from "semantic-ui-react"
import EntryForm from './EntryForm'

function NewEntryForm({ addEntry }) {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    return (

        <Form unstackable>
         <EntryForm description={description} isExpense={isExpense} setIsExpense={setIsExpense} value={value} setValue={setValue} setDescription={setDescription}/>
            <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense}/>
        </Form>
    )
}

export default NewEntryForm
