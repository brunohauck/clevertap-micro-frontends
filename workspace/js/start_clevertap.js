
var clevertap = {event:[], profile:[], account:[], region: 'eu1', onUserLogin:[], notifications:[], privacy:[]};
//window.startClevertap = function(){
    console.log('entrou 01')

    // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
    
       clevertap.account.push({"id": "848-W7W-976Z"});
       clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
       clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
       (function () {
               var wzrk = document.createElement('script');
               wzrk.type = 'text/javascript';
               wzrk.async = true;
               wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
               var s = document.getElementsByTagName('script')[0];
               s.parentNode.insertBefore(wzrk, s);
               })();
          
//}
var startPush = () => {
      clevertap.notifications.push({
        "apnsWebPushId":"<apple web push id>", //only for safari browser
        "apnsWebPushServiceUrl":"<safari package service url>",//only for safari browser
        "titleText":'Would you like to receive Push Notifications?',
        "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
        "okButtonText":'Sign me up!',
        "rejectButtonText":'No thanks',
        "okButtonColor":'#f28046'});
}


