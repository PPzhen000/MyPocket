function loadExpense(){
  $("a.exp_title").on('click', function(e) {
    $.ajax({
      method: 'GET',
      url: this.href,
      dataType: 'json'
    }).done(function(data) {
      data.forEach(function(expense) {
        let response = new Expense(expense); //res.amount = 1000, res.description = 'rent', res.category = 'Housing'
        user.data.expense.push(formatExpense(response))
      });
      let fullHTML = `<ul>${user.data.expense.join('')}</ul>`
      $("#expense_list").append(fullHTML)
    });
    e.preventDefault();
  });
} //end of loadExpenses function


// function loadExpense(){
//   $("a.expense_title").on('click', function(e) {
//     return loadItem('expense');
//     e.preventDefault();
//   });
// } //end of loadExpenses function
//
// function loadIncome(){
//   $("a.income_title").on('click', function(e){
//     // debugger
//     return loadItem('income');
//     e.preventDefault();
//   });
// }
//
// function loadSavingGoal(){
//   $("a.saving_goal_title").on('click', function(e){
//     return loadItem('saving_goal');
//     e.preventDefault();
//   });
// }
//
//
// function loadItem(itemName){ //itemName = [income, expense, saving_goal]
//   let selector = `a.${itemName}_title`;
//   let type = itemName;
//   $(selector).on('click', function(e){
//     debugger
//     $.get(this.href, function(data) {
//       debugger
//       data.forEach(function(item) {
//         let response = nil;
//         let arrayOfItem = nil;
//         if (itemName === "income") {
//           response = new Income(item);
//           arrayOfItem = user.data.income
//         } else if (itemName === "expense") {
//           response = new expense(item);
//           arrayOfItem = user.data.expense
//         } else if (itemName === "saving_goal"){
//           response = new SavingGoal(item);
//           arrayOfItem = user.data.saving_goal
//         }
//         arrayOfItem.push(formatItem(response))
//       });
//       let fullHTML = `<ul>${arrayOfItem.join('')}</ul>`
//       debugger
//       $("#income_list").append(fullHTML)
//     });
//     e.preventDefault();
//   });
// }

function formatItem(response){
  return `<li>${response.description}  -  $${response.amount}</li></br>`
}
