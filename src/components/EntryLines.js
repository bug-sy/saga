import React from 'react'
import EntryLine from './EntryLine'

function EntryLines({entries, deleteEntry,setIsOpen,editEntry}) {
    return (
        <div>
       {entries.map((entry,index) =>{
     return <EntryLine  
     key={entries.id}
     {...entry}
     deleteEntry={deleteEntry}
     setIsOpen={setIsOpen}
     editEntry={editEntry}
     />

      })}
            
        </div>
    )
}

export default EntryLines
