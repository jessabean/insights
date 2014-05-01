var selectedIndustries = [];

function printIndustries(industries) {
  $('.selected-industries').text(industries.join(', '));
}

$('input[type=checkbox]').click(function() {
  if($(this).prop('checked')) {
    selectedIndustries.push($(this).val());
  } else {
    selectedIndustries.splice($.inArray($(this), selectedIndustries),1);
  }
})

$('button').click(function() {
  var loadUrl = './confirm.html #main > *';

  if(selectedIndustries.length > 4) {
    alert("You can only select 4 industries!");
  } else {
    $('#main').load(loadUrl, function() {
      printIndustries(selectedIndustries);
    });
  }
});

