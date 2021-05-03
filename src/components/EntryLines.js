import React from 'react'
import EntryLine from './EntryLine'

function EntryLines({entries, deleteEntry}) {
    return (
        <div>
       {entries.map((entry,index) =>{
     return <EntryLine  
     key={entries.id}
     {...entry}
     deleteEntry={deleteEntry}
     />

      })}
            
        </div>
    )
}

export default EntryLines
