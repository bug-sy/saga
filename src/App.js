import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()

  useEffect(() => {
    if(!isOpen && entryId){
const index = entries.findIndex(entry => entry.id === entryId)
const newEntries = [...entries]
newEntries[index].description = description
newEntries[index].value= value
newEntries[index].isExpense=isExpense
setEntries(newEntries)
resetEntry()
}
    return () => {
      //cleanup
    }
  }, [isOpen])

  useEffect(() => {
    let totalIncome =0;
    let totalExpense = 0;
    entries.map(entry => {
if(entry.isExpense){
  return totalExpense+=entry.value
}
  return totalIncome  += entry.value

    })
    console.log(`total Income is :${totalIncome} and total expenses are ${totalExpense}`)

    return () => {
      //cleanup
    }
  }, [entries])

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)

    setEntries(result)
  }

  const addEntry = () => {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense })
    setEntries(result)
    resetEntry()

  }

  const resetEntry = () =>{
    setDescription('')
    setValue('')
    setIsExpense('')
  }

  const editEntry = (id) => {
    console.log(`edit entry with id ${id}`)
    if (id) {
      const index = entries.findIndex(entry =>entry.id === id)
      const entry = entries[index]
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
   
    }
  }
  return (
    <Container>
      <MainHeader
        title="Budget"
      />
      <DisplayBalance title="Your Balance" value="2550.544" color="green" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} deleteEntry={deleteEntry} setIsOpen={setIsOpen} editEntry={editEntry} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry}
        description={description} isExpense={isExpense} setIsExpense={setIsExpense} value={value} setValue={setValue} setDescription={setDescription}
      />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}
      description={description} isExpense={isExpense} setIsExpense={setIsExpense} value={value} setValue={setValue} setDescription={setDescription}
      />

    </Container>
  );

}

export default App;


var initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: 1000.00,
    isExpense: false
  },
  {
    id: 2,
    description: "Water Bill",
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: 200.00,
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: 50.00,
    isExpense: true
  }

]