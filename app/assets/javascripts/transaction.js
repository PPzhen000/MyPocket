function loadExpense(){
  $("a.expense_title").on('click', function(e) {
   $.get(this.href, function(data) {
     debugger
      data.forEach(function(expense) {
        let response = new Expense(expense); //res.amount = 1000, res.description = 'rent', res.category = 'Housing'
      });
      let fullHTML = formatData(user.data.expense)
      $("#expense_list").append(fullHTML)
    }, "json");
    e.preventDefault();
  });
} //end of loadExpenses function

function formatData(arr) {
  let htmlArray = arr.map((ele, index) => {
    return `<li id=${index}>${ele.description} - ${ele.amount}</li><br>`
  });
  return `<ul>${htmlArray.join('')}</ul>`
}

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
function loadItem(itemName){ //itemName = [income, expense, saving_goal]
  let selector = `a.${itemName}_title`;
  $(`${selector}`).on('click', function(e){
    $.get(this.href, function(data) {
      data.forEach(function(item) {
        let response = nil;
        if (itemName === "income") {
          response = new Income(item);
        } else if (itemName === "expense") {
          response = new expense(item);
        } else if (itemName === "saving_goal"){
          response = new SavingGoal(item);
        }
      });
      let fullHTML = formatData(user.data[itemName])
      debugger
      $(`#${itemName}_list`).append(fullHTML)
    });
    e.preventDefault();
  });
}
