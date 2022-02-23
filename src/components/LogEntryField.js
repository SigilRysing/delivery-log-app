import React from 'react'
// aight need 2 engraine in2 brain:
// wut is da difrnce var & func() components?
// as in specific use cases o/each
// R&D yo. Get 2 Duck Duck goin!
const LogEntryField = (props) => {
  return (
    <div className='log-entry-field flex-col-spc-evn-cntr'>
      <div className='field entry-name flex-col-cntr-cntr'>{props.fieldName}</div>
      <div className='field entry-val flex-col-cntr-cntr'>{props.fieldVal}</div>
    </div>
  )
}

export default LogEntryField