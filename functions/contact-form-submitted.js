import axios from 'axios'

exports.handler = async function(event) {
  contactFormData = event.body.message
  axios.post('/messages', {contactFormData})
        .then(() => {
            return {
              statusCode: 200,
              body: JSON.stringify({message: "The contact form was successfully sent."})
            };
          })
        .catch((error) => {
            event.console.log(error.message);;
          })
}
