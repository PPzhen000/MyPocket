$(document).ready(function(){

  loadExpenses();
}); // end of document ready

function loadExpenses(){
  $("a.exp_title").on('click', function(e) {
    $.ajax({
      method: 'GET',
      url: this.href,
      dataType: 'json'
    }).done(function(data) {
      data.forEach(function(expense) {
        let res = new Expense(expense); //res.amount = 1000, res.description = 'rent', res.category = 'Housing'
        updateExpense(res);
      });
    });
    e.preventDefault();
  });
} //end of loadExpenses function

class Expense {
 constructor(attributes){
  this.id = attributes.id;
  this.description = attributes.description;
  this.amount = attributes.amount;
  this.category = attributes.category.name
 }

} //end of expense constructor

function updateExpense(response){
  $("#expense_list").text =
    `<ul> + <li>

    </ul>
    `;

}
