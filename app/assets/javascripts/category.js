function nextCategory() {
  $(".js-next").on("click", function() {
    let nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.get("/categories/" + nextId + ".json", function(category) {
      let data = category.transactions;
        let fullHTML = formatData(data)
      $(".list").html('')
      $("h1.categoryName").html(`${category.name}`)
      $(".list").append(fullHTML)
      // re-set the id to current on the link
      $(".js-next").attr("data-id", category["id"]);
    });
  });
};
