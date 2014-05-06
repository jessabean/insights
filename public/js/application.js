var selectedIndustries = [];

$('input[type=checkbox]').click(function() {
  var currentIndex = $.inArray($(this), selectedIndustries);

  if($(this).prop('checked')) {
    selectedIndustries.push($(this).val());
  } else {
    selectedIndustries.splice(currentIndex,1);
  }
})

$('button').click(function() {
  if(selectedIndustries.length < 1) {
    alert("Please choose an industry.");
  } else if(selectedIndustries.length > 4) {
    alert("You can only select 4 industries!");
  } else {
    $.ajax({
      type: "POST",
      url: "/response", // tell server what url you're trying to hitx
      data: {industries: selectedIndustries}, // JSON key/value
      dataType: 'html', // what you're expecting back from server
      success: function(data) {
        $('#main').html(data);
      }
    });
  }
});

