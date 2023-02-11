import React from 'react'

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className='border-solid border-black border-b pb-12 flex justify-between items-end gap-4 flex-wrap '>
        <div>
          <div className='uppercase'>let's talk</div>
          <div className='text-3xl font-bold'>Want to Reserve a table?</div>
        </div>
        <div className='contactbtn'>
          <a href="#">Contact us now</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
