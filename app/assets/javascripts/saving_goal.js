function loadSavingGoal(){
  $("a.sg_title").on('click', function(e){
    $.get(this.href, function(data) {
      data.forEach(function(sg) {
        let response = new SavingGoal(sg);
        user.data.saving_goal.push(formatSavingGoal(response))
      });
      let fullHTML = `<ul>${user.data.saving_goal.join('')}</ul>`
      $("#saving_goal_list").append(fullHTML)
    });
    e.preventDefault();
  });
}

class SavingGoal {
 constructor(attributes){
  this.id = attributes.id;
  this.description = attributes.description;
  this.amount = attributes.amount;
 }
}

function formatSavingGoal(response){
  return `<li>${response.description} - $${response.amount}</li></br>`
}
