var selectedIndustries = [];

function printIndustries(industries) {
  $('.selected-industries').text(industries.join(', '));
}

$('input[type=checkbox]').click(function() {
  var currentIndex = $.inArray($(this), selectedIndustries);

  if($(this).prop('checked')) {
    selectedIndustries.push($(this).val());
  } else {
    selectedIndustries.splice(currentIndex,1);
  }
})

$('button').click(function() {
  var loadUrl = './confirm.html #main > *';

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

