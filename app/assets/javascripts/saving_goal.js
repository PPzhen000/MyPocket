function loadSavingGoal(){
  $("a.sg_title").on('click', function(e){
    $.get(this.href, function(data) {
      let arrayOfLi = [];
      data.forEach(function(sg) {
        let response = new SavingGoal(sg);
        arrayOfLi.push(formatSavingGoal(response))
      });
      let fullHTML = `<ul>${arrayOfLi.join('')}</ul>`
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
  return `<li>${response.description} - ${response.amount}</li>`
}
