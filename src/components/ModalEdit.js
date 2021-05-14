import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'
import NewEntryForm from './NewEntryForm'

function ModalEdit({ isOpen, setIsOpen, description, isExpense, setIsExpense, value, setValue, setDescription }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>
                Edit Entry
            </Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description} isExpense={isExpense} setIsExpense={setIsExpense} value={value} setValue={setValue} setDescription={setDescription}
                />

            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => {
                    setIsOpen(false)
                }}>
                    Close
                </Button>
                <Button onClick={()=>{
                    setIsOpen(false)
                }} positive>
                    Okay
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
