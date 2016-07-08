//  Food2Fork api key: c9209e6b24af2211c9202baba072e23b

var recipe = {
  title: "The Ultimate Chocolate Chip Cookies",
  heroImage: "/images/leo-cookie-3.JPG",
  foreword: "This recipe is a slight modification of that found in The Model Bakery cookbook. This was the first 'proper' baking book I purchased and I've worked my way through almost all of it. I highly recommend it to anyone looking to get a good foundation in real techniques beyond those you'll find on Allrecipes or what have you. The following is the recipe's forword from the book:" +
  "<br />" +
  "<br />" +
  "These are the chocolate chip cookies of your dreams— that is, if you like them big, chewy, and filled with chips and nuts. Most traditional recipes for this cookie use granulated sugar in addition to the brown sugar, but it’s the brown sugar that supplies the moisture. With all due respect, fans of thin, crisp chocolate chip cookies should look elsewhere.",
  ingredients: ["2 cups/ 290 g unbleached all-purpose flour", "3/4 tsp baking soda", "1/ 2 tsp fine sea salt", "3/4 cup plus 1 Tbsp/ 185 g unsalted butter, at room temperature", "1 1/3 cups/ 275 g packed light brown sugar", "2 large eggs, at room temperature", "1 tsp pure vanilla extract", "550 g chocolate chips"],
  steps:
  [
    {
      instructions: "Heat oven to 375ºF.",
      imageSrc: "images/baking-prep-1.jpg",
      notes: "Make sure the first thing you do is turn on your oven. The prep time for the cookies isn't long and you want to be sure that the oven is properly heated!"
    },
    {
      instructions: "Mix sugars, butter, vanilla and egg in large bowl. Stir in flour, baking soda and salt (dough will be stiff). Stir in nuts and chocolate chips.",
      imageSrc: "images/baking-prep-2.jpg",
      notes: "Don't worry about sifting the flour - just make sure the dry ingredients are mostly evenly-distributed and move on"
    },
    {
      instructions: "Drop dough by rounded tablespoonfuls about 2 inches apart onto ungreased cookie sheet.",
      imageSrc: "images/baking-prep-3.jpg",
      notes: "You can make the cookies any size you like - I tend to find that a 1/4 cup scoop is the right size for me. If you make them much smaller you might need to adjust the bake time down a bit"
    },
    {
      instructions: "Bake 8 to 10 minutes or until light brown (centers will be soft). Cool slightly; remove from cookie sheet. Cool on wire rack.",
      imageSrc: "images/baking-prep-4.jpg",
      notes: "After much trial and error, I found that you need to take the cookies out of the oven a good 2 minutes before they look 'done'."
    }
  ],
  notes:
    ["Note 1", "Note 2", "Note 2"]
}



$(function() {

  $(".header-img").css("background-image", "url(" + recipe.heroImage + ")")

  $(".post-title-text").text(recipe.title.toUpperCase())

  $("#blog").append(
    '<div class="row">' +
      '<div class="col-md-10 col-md-push-1 post-head text-center">' +
        '<h1 class="title-text">' + recipe.title + '</h1>' +
        '<p>' + recipe.foreword + '</p>' +
      '</div>' +
    '</div>' +
    '<hr />'
  )
  $("#blog").append("<div class='row'> <div class='col-md-8 col-md-push-2 text-center'><ul id='ingredients'><span class='ingredients-title'>What You'll Need:</span></ul> </div> </div><hr />")

  $.each(recipe.ingredients, function(i, ingredient) {
    $("#ingredients").append("<li class='ingredient'>" + ingredient + "</li>");
  })

  $.each(recipe.steps, function(i, step) {
    var step = recipe.steps[i];
    $("#blog").append(
      '<div class="row">' +
        '<div class="col-md-12 segment">' +
          '<img class="img-responsive prep-image" src="' + step.imageSrc + '"/>' +
          '<div class="image-sticky"><span class="sticky-default">Click for more details!</span>' +
            '<div class="sticky-text">' +
              step.notes +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<hr />' +
      '<div class="row">' +
        '<div class="col-md-10 col-md-push-1 post-head text-center">' +
          '<p>' + step.instructions + '</p>' +
        '</div>' +
      '</div>' +
      '<hr />'
    )
  })

  $(".image-sticky").click(function() {
    var $self = $(this);
    $(this).toggleClass("clicked")
    // $(this).html(recipe.notes[0])
    if ($(this).hasClass("clicked")) {
      $self.find(".sticky-default").text("");
      $self.find(".sticky-text").fadeIn("slow", function() {

      });
    } else {
      $self.find(".sticky-text").fadeOut("slow", function() {
        $self.find(".sticky-default").text("Click for more details!");
      });
    }
    // if ( $(this).width() < $(this).parent().width() * .8 ) {
    //   $(this).find("sticky-default").text("");
    // } else {
    //   $(this).find("sticky-default").text("Click for more details!")
    // }
  })

})
