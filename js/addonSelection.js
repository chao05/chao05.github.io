$(document).ready(function(){
    $("input").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#add_on_list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});