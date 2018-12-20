// function loadExpense(){
//   $("a#expense").on('click', function(e) {
//    $.get(this.href, function(data) {
//       data.forEach(function(expense) {
//         let response = new Expense(expense); //res.amount = 1000, res.description = 'rent', res.category = 'Housing'
//       });
//       let fullHTML = formatData(user.data.expense)
//       $("#expense_list").append(fullHTML)
//     }, "json");
//     e.preventDefault();
//   });
// } //end of loadExpenses function

function formatData(arr) {
  let htmlArray = arr.map((ele, index) => {
    return `<li id=${index}>${ele.description} - $ ${ele.amount}</li><br>`
  });
  return `<ul>${htmlArray.join('')}</ul>`
}

function loadItem(){ //itemName = [income, expense, saving_goal]
  $('a.title').on('click', function(e){
    let itemName = this.id;
    let selector = `a#${this.id}.title`;
    $.get(this.url, function(data) {
      data[`${itemName}s`].forEach(function(item) {
        // debugger
        if (itemName === "income") {
          response = new Income(item);
        } else if (itemName === "transaction") {
          response = new Expense(item);
        } else if (itemName === "saving_goal"){
          response = new SavingGoal(item);
        }
      });
      let fullHTML = formatData(user.data[itemName])
      // debugger
      $(`#${itemName}_list`).append(fullHTML)
    }, "json");
    e.preventDefault();
  });
}
