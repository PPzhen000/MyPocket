function loadIncome(){
  $("a.inc_title").on('click', function(e){
    $.get(this.href, function(data) {
      data.forEach(function(income) {
        let response = new Income(income);
        user.data.income.push(formatIncome(response))
      });
      let fullHTML = `<ul>${user.data.income.join('')}</ul>`
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
  return `<li>${response.description} - $${response.amount}</li></br>`
}

function createIncome() {
  $("form.new_income").on("submit", function(event) {
    $.ajax({
     type: "POST",
     url: this.action,
     data: $(this).serialize(), //either JSON or querystring serializing
     success: function(response) {
       // debugger
       //create new instance of income model
       let income = new Income(response);
       user.data.income.push(formatIncome(income));
       //adds the newly created income
       $("#income_list").html('');
       let fullHTML = `<ul>${user.data.income.join('')}</ul>`
       $("#income_list").append(fullHTML)
      } //end of success
    });
      event.preventDefault();
  });
}
