function loadExpense(){
  $("a#transaction").on('click', function(e) {
   $.get(this.href, function(data) {
      data.sort(function(a, b) {
        return a.amount - b.amount;
      })
      data.forEach(function(expense) {
        let response = new Expense(expense); //res.amount = 1000, res.description = 'rent', res.category = 'Housing'
      });
      let fullHTML = formatExpense(user.data.transaction)
      // debugger
      $("#transaction_list").append(fullHTML)
      $("#transaction_list").append(`<br/>Total Expenses: $ ${total(user.data.transaction)}`)
    }, "json");
    e.preventDefault();
  });
} //end of loadExpenses function

// function formatExpense(arr) {
//   let htmlArray = arr.map((ele, index) => {
//     // debugger
//     return `<li id=${index}>${ele.description} - $ ${ele.amount} - ${ele.calPercentage()}% </li><br>`
//   });
//   return `<ul>${htmlArray.join('')}</ul>`
// }

function formatExpense(arr) {
  let htmlArray = arr.map((ele, index) => {
    // return `<li id=${index}>${ele.description} - $ ${ele.amount} - ${ele.calPercentage()}% </li><br>`
    return  `<tr id=${index}>
       <td>${ele.description}</td>
       <td>$ ${ele.amount}</td>
       <td>${ele.calPercentage()}%</td>
     </tr>`

  });
  // return `<ul>${htmlArray.join('')}</ul>`
  return `<table>
          <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Ratio</th>
          </tr>${htmlArray.join('')}
          </table>`
}

// function loadItem(){ //itemName = [income, expense, saving_goal]
//   $('a.title').on('click', function(e){
//     let itemName = this.id;
//     let selector = `a#${this.id}.title`;
//     $.get(this.url, function(data) {
//       data[`${itemName}s`].forEach(function(item) {
//         // debugger
//         if (itemName === "income") {
//           response = new Income(item);
//         } else if (itemName === "transaction") {
//           response = new Expense(item);
//         } else if (itemName === "saving_goal"){
//           response = new SavingGoal(item);
//         }
//       });
//       let fullHTML = formatData(user.data[itemName])
//       // debugger
//       $(`#${itemName}_list`).append(fullHTML)
//     }, "json");
//     e.preventDefault();
//   });
// }
