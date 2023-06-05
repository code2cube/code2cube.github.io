function sep10FreedomProject() {
    Swal.fire({
        title: 'SEP10 Freedom Project',
        imageUrl: 'src/img/projects/sep10-freedom-project.png',
        imageHeight: 300,
        imageWidth: 300,
        imageAlt: 'SEP10 Freedom Project Image',
        showDenyButton: true,
        confirmButtonText: 'Code',
        denyButtonText: `Preview`,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            const link = document.createElement('a');
            link.href = 'https://github.com/samuels0052/sep10-freedom-project';
            link.target = '_blank';
            link.click();
        } else if (result.isDenied) {
          const link = document.createElement('a');
          link.href = "https://samuels0052.github.io/sep10-freedom-project"
          link.target = '_blank';
          link.click();
        }
      })
}

function icecubeProject() {
    Swal.fire({
        title: 'Ice Cube Bot',
        imageUrl: 'src/img/projects/ice_cube.png',
        imageHeight: 300,
        imageWidth: 300,
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

window.addEventListener('scroll', function() {
  var section1 = document.getElementById('projects-section');
  var section2 = document.getElementById('contact-section');

  var rect1 = section1.getBoundingClientRect();
  var rect2 = section2.getBoundingClientRect();

  var projectsNav = document.getElementById("projects-nav");
  var contactNav = document.getElementById("contact-nav");

  if (rect1.top >= 0 && rect1.bottom <= window.innerHeight) {
    console.log('Scrolling in projects-section');
    projectsNav.style.color = "white";
    contactNav.style.color = "black";
  } else if (rect2.top >= 0 && rect2.bottom <= window.innerHeight) {
    console.log('Scrolling in contact-section');
    projectsNav.style.color = "black";
    contactNav.style.color = "white";
  } else {
    projectsNav.style.color = "black";
    contactNav.style.color = "black";
  }
});

// function icecubeProject() {
//     Swal.fire({
//         title: 'Ice Cube Bot',
//         imageUrl: 'src/img/projects/ice_cube.png',
//         imageHeight: 300,
//         imageWidth: 300,
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