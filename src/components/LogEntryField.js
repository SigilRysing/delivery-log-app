import React from 'react'
// aight need 2 engraine in2 brain:
// wut is da difrnce var & func() components?
// as in specific use cases o/each
// R&D yo. Get 2 Duck Duck goin!
const LogEntryField = (props) => {
  return (
    <div className='log-entry-field'>
      <div className='field entry-name'>{props.fieldName}</div>
      <div className='field entry-val'>{props.fieldVal}</div>
    </div>
  )
}

export default LogEntryField
// if rendering multiple of same element then do so programmaticaly doof dar dar
// Log > LogEntries > LogEntry > LogEntryField