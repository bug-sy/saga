import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] = useState(initialEntries)
  return (
    <Container>
      <MainHeader
        title="Budget"
      />
      <DisplayBalance title="Your Balance" value="2550.544" color="green" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLine description={entries[0].description} value={entries[0].value} isExpense={entries[0].isExpense}/>
      <EntryLine description="expense" value="10.00" isExpense />
      <EntryLine description="income" value="20.00" />
      <EntryLine description="expense" value="10.00" isExpense />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );

}

export default App;


var initialEntries = [
  {
    description:"Work Income",
    value:"1000.00",
    isExpense:false
  },
  {
    description:"Water Bill",
    value:"20.00",
    isExpense:true
  },
  {
    description:"Rent",
    value:"200.00",
    isExpense:true
  },
  {
    description:"Power bill",
    value:"50.00",
    isExpense:true
  }

]