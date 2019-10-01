// Code written by Alex Ram
// Jangl interview assignment
// 10/1/2019

function updateNumber(current_number){
    var query_string = window.location.search.substring(1); //read url query string
    var new_number = query_string.split('=')[1]; //parse string for the phone number
    //The two lines above are not as dynamic as the two commented out bellow, but I believe it doesn't use a JS framework.
    //var urlParams = new URLSearchParams(window.location.search); // more dynamic but uses a framework
    //var new_number = urlParams.get('number')
    
    var number = new_number + current_number;
    return number;
}

(function(){ // javascript closure
    // replace all span instances with the class 'tracked_number'.
    var tracked_numbers = document.getElementsByClassName('tracked_number');
    for (var i = 0; i < tracked_numbers.length; i++) {
        var current_number = tracked_numbers[i].innerHTML;
        document.getElementsByClassName('tracked_number')[i].innerHTML = updateNumber(current_number);
    }
    
    // replace all href's with class name 'tracked_number_link', in this case there's only one which leaves a link with the old href.
    // I don't know if that's intended, but any easy solution would be to add the class name to the other link.
    var tracked_number_links = document.getElementsByClassName('tracked_number_link');
    for (var i = 0; i < tracked_number_links.length; i++) {
        var current_number = tracked_number_links[i];
        document.getElementsByClassName('tracked_number_link')[i].href = updateNumber(current_number);
    }
})();