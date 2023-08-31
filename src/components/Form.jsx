import React from 'react';

function Form() {

    // async function handleSubmit(event) {
    //     event.preventDefault();

    //     const name = document.querySelector('#nameForm').value;
    //     const email = document.querySelector('#emailForm').value;
    //     const message = document.querySelector('#messageForm').value;

    //     const webhookBody = {
    //         content: "<@503673006766161930>",
    //         embeds: [{
    //             title: 'New Message!',
    //             color: 0xFFD700,
    //             fields: [
    //                 { name: 'Name', value: name },
    //                 { name: 'Email', value: email },
    //                 { name: 'Message', value: message }
    //             ]
    //         }],
    //     };

    //     const webhookUrl = "https://discord.com/api/webhooks/1113980135884980264/G3EDPVXwrYjHV5DUjlznLL8DZ1ZtQ2ci0dIRZs9v2An9fy7J4w1HwR6zBLODtLEVjUEM"; // Your webhook URL

    //     try {
    //         const response = await fetch(webhookUrl, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(webhookBody),
    //         });

    //         if (response.ok) {
    //             alert('Your message has been sent!');
    //             window.location.reload();
    //         } else {
    //             alert('An error has occurred!');
    //         }
    //     } catch (error) {
    //         alert('An error has occurred while sending the message.');
    //         console.error(error);
    //     }
    // }

    return (
        <div className="container" id="contact-form-body">
            <h1 class="pb-5">Contact Form</h1>
            {/* <form onSubmit={handleSubmit}> */}
            <form action="https://formsubmit.co/sam@samuelsharivker.com" method="POST">
                <div className="mb-3">
                    <label htmlFor="nameForm" className="form-label">Name</label>
                    <input name="name" type="text" className="form-control" id="nameForm" placeholder="John Doe" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="emailForm" className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" id="emailForm" placeholder="name@example.com" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="messageForm" className="form-label">Message</label>
                    <textarea name="message" className="form-control" id="messageForm" rows="6" required></textarea>
                </div>
                <button type="submit" className="btn btn-light">Submit</button>
            </form>
        </div>
    );
}

export default Form;
