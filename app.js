$(document).ready(function() {
  let btn = $('#btn');
  let recipeType = $('#recipeType');
  let output = $('#output');  
  let recipes = [];

  btn.click(function() {
    $.getJSON( "recipes.json", function(data) {
      for(let i = 0; i < data.length; i++) {
        if(recipeType.val() === data[i].category) {
          recipes.push(data[i])
        } else {
          continue
        }
      }

      for(let i = 0; i < recipes.length; i++) {
        output.append('<p>Name:' + recipes[i].name + '</p>' +
          '<p>Category: ' + recipes[i].category + '</p>' + 
          '<img src=' + recipes[i].img + ' height="100" width="100" />' 
        )
      }

    })
  })

})