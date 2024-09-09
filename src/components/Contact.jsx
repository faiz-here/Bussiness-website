import React from 'react'

function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>contact us</h1>
        <form action="">

          <div>
            <label>Name</label>
            <input type="text" required placeholder='Abc'/>
          </div>

          <div>
            <label>Email</label>
            <input type="text" required placeholder='Abc@xyzee.com'/>
          </div>

          <div>
            <label>Message</label>
            <input type="text" required placeholder='tell us about your query...'/>
          </div>

          <button type='submit'>send</button>

        </form>
      </main>
    </div>
    
  )
}

export default Contact