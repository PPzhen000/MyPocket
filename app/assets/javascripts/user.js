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

$(document).ready(function(){

  loadIncome();
  loadExpense();
  loadSavingGoal();
  createIncome();
  // createExpense();
  // createSavingGoal();
  // deleteIncome();
  // deleteExpense();
  // deleteSavingGoal();
});
