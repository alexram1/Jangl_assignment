// Code written by Alex Ram
// Jangl interview assignment
// 10/1/2019

function updateNumber(current_number){
    var query_string = window.location.search.substring(1); //read url query string
    var new_number = query_string.split('=')[1]; //parse string for the phone number
    //The two lines above are not as dynamic as the two commented out bellow, but I believe it doesn't use a JS framework.
    //var urlParams = new URLSearchParams(window.location.search); // more dynamic but uses a framework
    //var new_number = urlParams.get('number')
    
    //split the new number and remove the 1 at the beggining if it contains it
    var new_num_array = new_number.split('');
    while (new_num_array.length > 10) {
	new_num_array.shift(); 
    }
    
    //find the indicies we want to subsitute a new number into
    var regex = /[0-9]/g, result, indices = [];
    while ( (result = regex.exec(current_number)) ) {
        indices.push(result.index);
    }
    while (indices.length > 10) {
	indices.shift(); 
    }
    
    //build formated number string
    var formated_number = '';
    //default formatting
    if (indices.length < 10) {
	return '('.concat(new_num_array[0],new_num_array[1],new_num_array[2],') ',
        new_num_array[3],new_num_array[4],new_num_array[5],'-',new_num_array[6],
        new_num_array[7],new_num_array[8],new_num_array[9]);
    }
    //non-default formatting
    for (var i = 0; i < current_number.length; i++) {
        if (indices.includes(i)) {
            formated_number = formated_number.concat(new_num_array[0]);
            new_num_array.shift();
        }
        else {
            formated_number = formated_number.concat(current_number.charAt(i));
        }
    }
    
    return formated_number;
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
        var current_number = tracked_number_links[i].href;
        document.getElementsByClassName('tracked_number_link')[i].href = updateNumber(current_number);
    }
})();