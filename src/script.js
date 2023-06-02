function icecubeProject() {
    Swal.fire({
        title: 'Ice Cube Bot',
        imageUrl: 'src/img/projects/ice_cube.png',
        imageHeight: 300,
        imageAlt: 'Ice Cube Bot Logo',
        confirmButtonText: 'Code',
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            const link = document.createElement('a');
            link.href = 'https://www.github.com/code2cube/Ice-Cube-Bot';
            link.target = '_blank';
            link.click();
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
}

//credit: https://dev.to/mistval/discord-webhook-powered-contact-form-3lk6
async function sendContact(ev) {
  ev.preventDefault();

  const sender = document.getElementById('form-contact-name').value;
  const senderEmail = document.getElementById('form-contact-email').value;
  const senderMessage = document.getElementById('form-contact-message').value;

  const webhookBody = {
  content: "<@503673006766161930>",
  embeds: [{
      title: 'New Message!',
      color:  0xFFD700,
      fields: [
      { name: 'Name', value: sender },
      { name: 'Email', value: senderEmail },
      { name: 'Message', value: senderMessage}
      ]
  }],
  };

  const webhookUrl = "https://discord.com/api/webhooks/1113980135884980264/G3EDPVXwrYjHV5DUjlznLL8DZ1ZtQ2ci0dIRZs9v2An9fy7J4w1HwR6zBLODtLEVjUEM";

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
  },
    body: JSON.stringify(webhookBody),
  });

  if (response.ok) {
    Swal.fire('Your message has been sent!');
  } else {
    Swal.fire('There was an error! Try again later!');
  }
}

// function icecubeProject() {
//     Swal.fire({
//         title: 'Ice Cube Bot',
//         imageUrl: 'src/img/projects/ice_cube.png',
//         imageHeight: 300,
//         imageAlt: 'Ice Cube Bot Logo',
//         showDenyButton: true,
//         confirmButtonText: 'Save',
//         denyButtonText: `Don't save`,
//         }).then((result) => {
//         /* Read more about isConfirmed, isDenied below */
//         if (result.isConfirmed) {
//             const link = document.createElement('a');
//             link.href = 'https://www.google.com';
//             link.target = '_blank';
//             link.click();
//         } else if (result.isDenied) {
//           Swal.fire('Changes are not saved', '', 'info')
//         }
//       })
// }