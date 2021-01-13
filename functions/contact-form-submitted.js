const axios = require('axios').default;

exports.handler = async function(event) {
  const contactFormData = event.body
  axios.post(process.env.API_ROUTE + '/messages', {contactFormData})
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
