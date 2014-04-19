$( document ).ready(function() {

  function printIndustries() {
    var selectedIndustries = [];
    // var input = $('input[type="checkbox"]:checked');

    // $(input).each(function() {
    //   // selectedIndustries.push($(this).val());
    //     alert("super");
    // });

     $('input[type="checkbox"]:checked').each(function(){
        selectedIndustries.push($(this).val());
      });
    console.log(selectedIndustries); 
  }

  $('button').click(function() {
    printIndustries();
  })
    
});