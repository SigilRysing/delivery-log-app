import React from 'react'
// component heirarchy:
// Log > LogEntries > LogEntry > LogEntryField

// components 
import LogEntries from '../components/LogEntries'
import LogHeader from '../components/LogHeader'

const Log = () => {
    return (
        <div className='page flex-col-spc-evn-cntr'>
            <LogHeader />
            <LogEntries />
        </div>
    )
}

export default Log
// IMPORTANT NOTE:
// Add 2 MVP: Make total # of stops field for log entry page