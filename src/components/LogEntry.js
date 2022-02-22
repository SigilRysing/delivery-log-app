import React from 'react'

// components
import LogEntryField from './LogEntryField'

const LogEntry = () => {
    return (
        <div className='log-entry flex-row-spc-evn-cntr'>
            {
                ['Arrive', 'Leave', 'Duration', 'Stop', 'Success?', 'PU/DEL', 'Notes'].map((elem, i) => {
                  return (
                      <LogEntryField
                        key={i}
                        fieldName={elem}
                        fieldVal={i}
                      />
                  )
                })
            }
        </div>
    )
}

export default LogEntry
