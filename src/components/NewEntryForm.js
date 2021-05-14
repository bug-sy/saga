import React, { useState } from 'react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import { Checkbox, Form, Segment } from "semantic-ui-react"
import EntryForm from './EntryForm'

function NewEntryForm({ addEntry ,description,isExpense ,setIsExpense,value ,setValue,setDescription}) {
    
    return (

        <Form unstackable>
         <EntryForm description={description} isExpense={isExpense} setIsExpense={setIsExpense} value={value} setValue={setValue} setDescription={setDescription}/>
            <ButtonSaveOrCancel addEntry={addEntry} />
        </Form>
    )
}

export default NewEntryForm
