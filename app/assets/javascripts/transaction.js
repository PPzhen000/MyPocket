$(document).ready(function(){

  loadExpenses();
  loadIncome();
  loadSavingGoal()
}); // end of document ready

function loadExpenses(){
  $("a.exp_title").on('click', function(e) {
    $.ajax({
      method: 'GET',
      url: this.href,
      dataType: 'json'
    }).done(function(data) {
      let arrayOfLi = [];
      data.forEach(function(expense) {
        let response = new Expense(expense); //res.amount = 1000, res.description = 'rent', res.category = 'Housing'
        arrayOfLi.push(formatExpense(response))
      });
      let fullHTML = `<ul>${arrayOfLi.join('')}</ul>`
      $("#expense_list").append(fullHTML)
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
  // Expense.prototype.calPercentage = function(){
  //
  // }
} //end of expense constructor

function formatExpense(response){
  return `<li>${response.description}  -  ${response.category}  -  $${response.amount}</li>`
}
