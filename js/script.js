

let quoteText = '',
    quoteAuthor = '';

// Codepen version at http://codepen.io/dmk1111/pen/YZPVEx
//
// let s = document.createElement("script");
// s.setAttribute('id', 'jsonpScript');
// s.src = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=myDisplayFunction";
// document.body.appendChild(s);
// function myDisplayFunction(data) {
//     quoteText = data.quoteText;
//     quoteAuthor = data.quoteAuthor;
//     $('#quoteText').html(data.quoteText);
//     $('#quoteAuthor').html(data.quoteAuthor);
// };
//
//
//
// $('#get-another-quote-button').on('click', function(e) {
//     e.preventDefault();
//     $('#jsonpScript').remove();
//     let s = document.createElement("script");
//     s.setAttribute('id', 'jsonpScript');
//     s.src = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=myDisplayFunction";
//     document.body.appendChild(s);
//     function myDisplayFunction(data) {
//         $('#quoteText').html(data.quoteText);
//         $('#quoteAuthor').html(data.quoteAuthor);
//     };
// });

$.ajax( {
    url: './quotes.json',
    success: function(data) {
        random = Math.floor(Math.random()*data.length);
        let quote = data[random];
        quoteText = quote.quote;
        quoteAuthor = quote.name;
        $('#quoteText').html(quoteText);
        $('#quoteAuthor').html(quoteAuthor);
    },
    cache: false
});

$('#get-another-quote-button').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
        url: './quotes.json',
        success: function(data) {
            random = Math.floor(Math.random()*data.length);
            let quote = data[random];
            quoteText = quote.quote;
            quoteAuthor = quote.name;
            $('#quoteText').html(quoteText);
            $('#quoteAuthor').html(quoteAuthor);
        },
        cache: false
    });
});


$('#twitter').on('click', function(e) {
    e.preventDefault();
    window.open('http://twitter.com/home/?status=' +
        quoteText + ' by ' + quoteAuthor + ' @DGolysh', '_blank')
});
