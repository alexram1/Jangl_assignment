// Code written by Alex Ram
// Jangl interview assignment
// 10/1/2019

(function(){ // javascript closure
    var query_string = window.location.search.substring(1); //read url query string
    var new_number = query_string.split('=')[1]; //parse string for the phone number
    //The two lines above are not as dynamic as the two commented out bellow, but I believe it doesn't use a JS framework.
    //var urlParams = new URLSearchParams(window.location.search); // more dynamic but uses a framework
    //var new_number = urlParams.get('number')
})();