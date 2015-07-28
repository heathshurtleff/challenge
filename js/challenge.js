$(document).ready(function() {
    var requestUrl = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1';

    $.ajax({
        url: requestUrl,
        success: function(data) {
            console.log(data);
        }
    });
});