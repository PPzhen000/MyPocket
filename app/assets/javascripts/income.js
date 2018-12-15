// $(document).ready(function(){
//   loadIncome();
// });

// function loadIncome(){
//   $("inc_title").on('click', function(e){
//     debugger
//     console.log("link clicked")
//     // $.get('this.href', function(data) {
//     //   alert( "Load was performed." );
//     // });
//     e.preventDefault();
//   });
// }

// function loadExpenses(){
//   $("a.exp_title").on('click', function(e) {
//     $.ajax({
//       method: 'GET',
//       url: this.href,
//       dataType: 'json'
//     }).done(function(data) {
//       let arrayOfLi = [];
//       data.forEach(function(expense) {
//         let response = new Expense(expense); //res.amount = 1000, res.description = 'rent', res.category = 'Housing'
//         arrayOfLi.push(formatExpense(response))
//       });
//       let fullHTML = `<ul>${arrayOfLi.join('')}</ul>`
//       $("#expense_list").append(fullHTML)
//     });
//     e.preventDefault();
//   });
// }
