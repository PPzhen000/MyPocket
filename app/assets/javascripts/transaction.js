$(document).ready(function(){

  loadExpenses();
});

function loadExpenses(){
  $("a.exp_title").on('click', function(e) {
    $.ajax({
      method: 'GET',
      url: this.href
    }).done(function(data) {
      data.forEach(function(expense) {
        
      });
    });
    e.preventDefault();
  });
}
