import React, { useState } from 'react';

function Form() {
    const [email, setEmail] = useState('');
    const [input, setInput] = useState('');

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setInput(newEmail); // Set input to the same value as email
    };

    return (
        <div className="container" id="contact-form-body">
            <h1 className="pb-5">Contact Form</h1>
            <form action="https://formsubmit.co/sam@samuelsharivker.com" method="POST" enctype="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="nameForm" className="form-label">Name</label>
                    <input name="Name" type="text" className="form-control" id="nameForm" placeholder="John Doe" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailForm" className="form-label">Email</label>
                    <input value={email} onChange={handleEmailChange} name="Email" type="email" className="form-control" id="emailForm" placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="messageForm" className="form-label">Message</label>
                    <textarea name="Message" className="form-control" id="messageForm" rows="6" required></textarea>
                </div>
                <div className="mb-3">
                    <input type="file" name="attachment" className="form-control" accept=".pdf, .png, .svg, .txt, .jpg, .jpeg" />
                </div>
                <input type="hidden" name="_next" value="https://samuelsharivker.com/thanks" />
                <input type="hidden" name="_subject" value={`New Message From ${input}!`} />
                <input type="hidden" name="_template" value="box" />
                <button type="submit" className="btn btn-light">Submit</button>
            </form>
        </div>
    );
}

export default Form;