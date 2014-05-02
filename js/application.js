var selectedIndustries = [];

function printIndustries(industries) {
  $('.selected-industries').text(industries.join(', '));
}

//  .on("click", function()) is a good pattern to get into
// you can more easily leverage delegating events this way and bind multiple events to 1 selector
// https://api.jquery.com/on/
$('input[type=checkbox]').click(function() {
  // you use $(this) repeatedly, an opportunity to cache as something the following:
  // var $selectedIndustry = $(this)
  var currentIndex = $.inArray($(this), selectedIndustries);


  if($(this).prop('checked')) {
    selectedIndustries.push($(this).val());
  } else {
    selectedIndustries.splice(currentIndex,1);
  }
});

$('button').click(function() {
  var loadUrl = './confirm.html #main > *';

  // great article on if/else in JS, a pattern to consider
  // http://rmurphey.com/blog/2012/12/10/js-conditionals/
  if(selectedIndustries.length < 1) {
    alert("Please choose an industry.");
  } else if(selectedIndustries.length > 4) {
    alert("You can only select 4 industries!");
  } else {
    $('#main').load(loadUrl, function() {
      printIndustries(selectedIndustries);
    });
  }
});

// Organization
// this is a good start to get the basic functionality down
// next steps could be to re-organize this into more named functions and variables within an object
// as a first step to learn about object-oriented JS
// this makes the code a lot easier to follow and decouples functionality a little more
// so you have functions that bind events, functions that handle events, and functions to set things up
// something like the following:
var yourStuff = {
  $domElement : $(".selector"),
  $domElement2 : $(".selector2"),
  $domElement3 : $(".selector3"),

  fooFunction: function() {

  },
  barFunction: function() {

  },
  init: function() {
    fooFunction();
    barFunction();
  }
};

// a single document ready will call your function
$(document).ready(function() {
  yourStuff.init();
});
//http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code/

// A next step after that could be to organize this into an "IIFE" function which creates a safe namespace for the functionality
// http://blog.mgechev.com/2012/08/29/self-invoking-functions-in-javascript-or-immediately-invoked-function-expression/