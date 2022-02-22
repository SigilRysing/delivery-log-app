import React from 'react'

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