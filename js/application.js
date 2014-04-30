var selectedIndustries = [];

function printIndustries(industries) {
  $('.selected-industries').text(industries.join(', '));
}

$('input[type=checkbox]').click(function() {
  selectedIndustries.push($(this).val());
})

$('button').click(function() {
  if(selectedIndustries.length > 4) {
    alert("You can only select 4 industries");
  } else {
    $('#main').load('./confirm.html #main > *', function() {
      printIndustries(selectedIndustries);
    });
  }
});

