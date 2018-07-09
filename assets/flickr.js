
(function($) {

    $(document).ready(function() {
        getJSONData();
    });

function getJSONData() {
    var myAPIKey = "4b904993412019defefb0647b4ff7d64";
    var myID = "47655196@N03";
    var myNumPhotos = 15;
    var myFormat = "json";

    var flickrURL = "https://api.flickr.com/services/rest/" +
    "?method=flickr.people.getPhotos" +
    "&api_key=" + myAPIKey +
    "&user_id=" + myID +
    "&per_page=" + myNumPhotos +
    "&format=" + myFormat +
    "&format=json&nojsoncallback=1";

   $.getJSON( flickrURL, successFn );

  }

 function successFn(result) {
   console.log(result);
   console.log("flickr request is a success, do a backflip");
 }

 function errorFn(xhr, status, strErr) {
   console.log(strErr);
 }
})(jQuery);