//função para funcionar o push


window.loginCleverTap = function () { 
    
    console.log('loginCleverTap')

    console.log('entrou 01')
    loginCleverTap2();
    //startPopUpFunctions();
} 
var alertMessage =  () => {
    alert('hello react')
}  
var loginCleverTap2 = function () {
    console.log('Entrou 03 ---<login>-------')
    clevertap.onUserLogin.push({
        "Site": {
          "Name": "Bruno - teste function javascript",            // String
          "Identity": 8976,              // String or number
          "Email": "hauckferreira12345@gmail.com",         // Email address of the user
          "Phone": "+14155551234",           // Phone (with the country code)
          "Gender": "M",                     // Can be either M or F
          "DOB": new Date(),                 // Date of Birth. Date object
       // optional fields. controls whether the user will be sent email, push etc.
          "MSG-email": false,                // Disable email notifications
          "MSG-push": true,                  // Enable push notifications
          "MSG-sms": true,                   // Enable sms notifications
          "MSG-whatsapp": true,              // Enable WhatsApp notifications
        }
       })
       clevertap.event.push("Product Viewed Web - CT Poc", {
        "Product name":"Casio Chronograph Watch",
        "Category":"Mens Accessories",
        "Price":59.99,
      });   
}
