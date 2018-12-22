$(document).ready(function(){
  loadItem();
  // loadIncome();
  loadExpense();
  // loadSavingGoal();
  createIncome();
  nextCategory()
  // createExpense();
  // createSavingGoal();

});


let user = {
  data: {
    income: [],
    transaction: [],
    saving_goal: []
  },
  total: {
    income: 0,
    expense: 0,
    saving_goal: 0
  }
};


class Income {
 constructor(attributes){
  this.id = attributes.id;
  this.description = attributes.description;
  this.amount = attributes.amount;
  user.data.income.push(this);
 }
}

function total(arr) {
  var sum = 0;
  arr.forEach(function(i) {
    sum += i.amount;
  });
  return sum;
}


class Expense {
 constructor(attributes){
  this.id = attributes.id;
  this.description = attributes.description;
  this.amount = attributes.amount;
  this.category = attributes.category.name;
  user.data.transaction.push(this);
 }
}

Expense.prototype.calPercentage = function(){
  let totalExpense = total(user.data.transaction);
  if (totalExpense > 0) {
    let percentage = (this.amount / totalExpense * 100).toFixed(2)
    return percentage = Number(percentage);
  } else {
    return 'No Expense'
  }
}

class SavingGoal {
 constructor(attributes){
  this.id = attributes.id;
  this.description = attributes.description;
  this.amount = attributes.amount;
  user.data.saving_goal.push(this);
 }
}

function loadItem(){ //itemName = [income, saving_goal]
  $('a.title').on('click', function(e){
    let itemName = this.id;
    let selector = `a#${this.id}.title`;
    $.get(this.url, function(data) {
      data[`${itemName}s`].forEach(function(item) {

        if (itemName === "income") {
          response = new Income(item);
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

function formatData(arr) {
  let htmlArray = arr.map((ele, index) => {
    return `<li id=${index}>${ele.description} - $ ${ele.amount}</li><br>`
  });
  return `<ul>${htmlArray.join('')}</ul>`
}
