function loadIncome(){
  $("a.inc_title").on('click', function(e){
    $.get(this.href, function(data) {
      let arrayOfLi = [];
      data.forEach(function(income) {
        let response = new Income(income);
        arrayOfLi.push(formatIncome(response))
      });
      let fullHTML = `<ul>${arrayOfLi.join('')}</ul>`
      $("#income_list").append(fullHTML)
    });
    e.preventDefault();
  });
}

class Income {
 constructor(attributes){
  this.id = attributes.id;
  this.description = attributes.description;
  this.amount = attributes.amount;
 }
}

function formatIncome(response){
  return `<li>${response.description} - $${response.amount}</li>`
}
