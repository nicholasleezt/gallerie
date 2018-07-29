function getJSONData() {
    var myAPIKey = "4b904993412019defefb0647b4ff7d64";
    var myID = "47655196@N03";
    var myNumPhotos = 15;

    var flickrURL = "https://api.flickr.com/services/rest/" +
        "?method=flickr.people.getPhotos" +
        "&api_key=" + myAPIKey +
        "&user_id=" + myID +
        "&per_page=" + myNumPhotos +
        "&page=1"+
        "&privacy_filter=1" +
        "&format=json&nojsoncallback=1";
    $.getJSON(flickrURL, successFn);
}
function successFn(result) {
    console.log("flickr request is a success");
    $.each(result.photos.photo, function (i, photo) {
        var originalSizeURL = "https://farm" +
            photo.farm +
            ".static.flickr.com/" +
            photo.server + "/" +
            photo.id + "_" +
            photo.secret + ".jpg";
        var title = photo.title;
        if (window.innerWidth <= 768) {
            if (i < 7) {
                $("<img>").attr({
                    "id":i+1,
                    "src": originalSizeURL,
                    "class": "img",
                    "alt": title
                }).appendTo("#col1");
            } else {
                $("<img>").attr({
                    "id":i+1,
                    "src": originalSizeURL,
                    "class": "img",
                    "alt": title
                }).appendTo("#col2");
            }
        }
        else{
            if (i % 2 == 0) {
                $("<img>").attr({
                    "id":i+1,
                    "src": originalSizeURL,
                    "class": "img",
                    "alt": title
                }).appendTo("#col2");
            } else {
                $("<img>").attr({
                    "id":i+1,
                    "src": originalSizeURL,
                    "class": "img",
                    "alt": title
                }).appendTo("#col1");
            }
        }
    });

    window.sr = ScrollReveal({ reset: true, container:".container", duration:600 });
    sr.reveal('.img');
}
