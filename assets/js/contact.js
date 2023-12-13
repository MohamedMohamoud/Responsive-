/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact__message')


const sendEmail = (e) => {
    e.preventDefault()

   // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_7tvu9r5','template_omjbsp6','#contact-form','rln04NrljZ_A-jFd4')
      .then(() => {
     // Show sent message
     contactMessage.textContent = ' Message sent successfully ✅'

      // Remove message after five seconds
     setTimeout(() =>{
        contactMessage.textContent = ''
    }, 5000) 
      // Clear input fields
      contactForm.reset()
    }, () =>{
        contactMessage.textContent =' Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)