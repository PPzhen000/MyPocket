$(document).ready(function(){

  loadIncome();
  loadExpense();
  loadSavingGoal();
  createIncome();
  // createExpense();
  // createSavingGoal();

});


let user = {
  data: {
    income: [],
    expense: [],
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

function totalIncome() {
  var sum = 0;
  user.data.income.forEach(function(i) {
    sum += i.amount;
  });
  user.total.income = sum;
}


class Expense {
 constructor(attributes){
  this.id = attributes.id;
  this.description = attributes.description;
  this.amount = attributes.amount;
  this.category = attributes.category.name;
  this.percentage = -1;
  user.data.expense.push(this);
 }
  calPercentage = function() {
    if (user.total.income > 0) {
      this.percentage = Math.round((this.amount / user.total.income) * 100);
    } else {
      this.percentage = -1;
    }
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
