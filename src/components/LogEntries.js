import React from 'react'

// components
import LogEntry from './LogEntry'

const LogEntries = (props) => {
    return (
        <div className='log-entries flex-col-spc-arnd-cntr'>
            <LogEntry />
            <LogEntry />
            <LogEntry />
            <LogEntry />
            <LogEntry />
        </div>
    )
}

export default LogEntries