/* popups */

console.log('loading Clevertap JS file - Load Popup')

var btn = document.querySelector('.btn');
var wrapper = window.parent.document.getElementById('wizParDiv0');

btn.addEventListener('click', closePopUp);
var submit = document.querySelector('.submit');

submit.addEventListener('click', sendCTEvent);
function closePopUp()
{ console.log("Here in close popup");
  wrapper.remove(); }
function sendCTEvent() {
  console.log("Here in sendCTEvent");
  //console.log(window.parent.document);
  window.parent.clevertap.onUserLogin.push({
            "Site": {
              "Name": "Clevertap Login Example",            // String
              "Email": "slwebmay3@gmail.com",         // Email address of the user
              "MSG-email": true,                // Disable email notifications
              "MSG-push": true,                  // Enable push notifications
              "MSG-sms": true,                   // Enable sms notifications
              "MSG-whatsapp": true,              // Enable WhatsApp notifications
            }
           });
    window.parent.clevertap.event.push("CT Poc - Web - 01", {
            "Product name":"Casio Chronograph Watch",
            "Category":"Mens Accessories",
            "Price":59.99,
          });            
}