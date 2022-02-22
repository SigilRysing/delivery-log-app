import React from 'react'

// components
import CourierID from './CourierID'
import Date from './Date'
import ODO from './ODO'
import PrevDayNotes from './PrevDayNotes'

const LogHeader = (props) => {
    return (
        <div className='log-header flex-col-spc-evn-cntr'>
            < div className='log-header-section flex-row-spc-evn-cntr'>
              <CourierID />
              <PrevDayNotes />
            </div>
            < div className='log-header-section flex-row-spc-evn-cntr'>
              <Date />
              <ODO />
            </div>
        </div>
    )
}

export default LogHeader