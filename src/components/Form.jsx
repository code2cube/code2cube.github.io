import React, { useState } from 'react';

function Form() {
    const [input, setInput] = useState('');
    return (
        <div className="container" id="contact-form-body">
            <h1 class="pb-5">Contact Form</h1>
            <form action="https://formsubmit.co/sam@samuelsharivker.com" method="POST">
                <div className="mb-3">
                    <label htmlFor="nameForm" className="form-label">Name</label>
                    <input name="name" type="text" className="form-control" id="nameForm" placeholder="John Doe" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="emailForm" className="form-label">Email</label>
                    <input value={input} onChange={(e) => setInput(e.target.value)} name="email" type="email" className="form-control" id="emailForm" placeholder="name@example.com" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="messageForm" className="form-label">Message</label>
                    <textarea name="message" className="form-control" id="messageForm" rows="6" required></textarea>
                </div>
                <input type="hidden" name="_next" value="https://samuelsharivker.com/thanks" />
                <input type="hidden" name="_subject" value={setInput} />
                <button type="submit" className="btn btn-light">Submit</button>
            </form>
        </div>
    );
}

export default Form;
