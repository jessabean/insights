$( document ).ready(function() {
  var selectedIndustries = [];

  function printIndustries() {
    $('input[type="checkbox"]:checked').each(function(){
      selectedIndustries.push($(this).val());
    });
    alert(selectedIndustries);
  }

  $('button').click(function() {
    if($('input[type="checkbox"]:checked').length > 4) {
      alert("You can only select 4 industries");
    } else {
      printIndustries();
    }
  })
});