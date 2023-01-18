$(document).ready(function(){
    $("input").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#responsive_list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});