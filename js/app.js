//  Food2Fork api key: c9209e6b24af2211c9202baba072e23b

var recipe = {
  title: "The Ultimate Chocolate Chip Cookies",
  heroImage: "/images/cookies/selections/hero-cookies.JPG",
  foreword: "This recipe is a slight modification of that found in The Model Bakery cookbook. This was the first 'proper' baking book I purchased and I've worked my way through almost all of it. I highly recommend it to anyone looking to get a good foundation in real techniques beyond those you'll find on Allrecipes or what have you. The following is the recipe's foreword from the book:" +
  "<br />" +
  "<br />" +
  "These are the chocolate chip cookies of your dreams— that is, if you like them big, chewy, and filled with chips and nuts. Most traditional recipes for this cookie use granulated sugar in addition to the brown sugar, but it’s the brown sugar that supplies the moisture. With all due respect, fans of thin, crisp chocolate chip cookies should look elsewhere.",
  ingredients: ["2 cups/ 290 g unbleached all-purpose flour", "3/4 tsp baking soda", "1/ 2 tsp fine sea salt", "3/4 cup plus 1 Tbsp/ 185 g unsalted butter, at room temperature", "1 1/3 cups/ 275 g packed light brown sugar", "2 large eggs, at room temperature", "1 tsp pure vanilla extract", "550 g chocolate chips"],
  steps:
  [
    {
      head: "1. Getting Set Up",
      instructions: "Position racks in the top third and center of the oven and preheat to 375 ° F/ 190 ° C/ gas 5. Line two half-sheet pans with parchment paper.",
      imageSrc: ["images/cookies/selections/step-0.1.JPG",
                 "images/cookies/selections/step-0.2.JPG",
                 "images/cookies/selections/step-0.3.JPG",
                ],
      notes: "Make sure the first thing you do is turn on your oven. The prep time for the cookies isn't long and you want to be sure that the oven is properly heated!"
    },
    {
      head: "2. Makin' The Dough",
      instructions: "Sift the flour, baking soda, and salt together into a medium bowl. Beat the butter and brown sugar together in a large bowl with an electric mixer set on medium speed, occasionally scraping down the sides of the bowl, until light in color, about 11/ 2 minutes. (Or cream the butter and sugar together in a large bowl with a wooden spoon until light in color, about 5 minutes.) Beat in the eggs, one at a time, and then the vanilla. Reduce the mixer speed to low. Add the flour mixture in thirds, mixing just until combined. Stir in the chocolate chips and walnuts. ",
      imageSrc: ["images/cookies/selections/step-1.1.JPG",
                 "images/cookies/selections/step-1.2.JPG",
                 "images/cookies/selections/step-1.3.JPG",
                 "images/cookies/selections/step-1.4.JPG",
                 "images/cookies/selections/step-1.5.JPG",
                ],
      notes: "Don't worry about sifting the flour - just make sure the dry ingredients are mostly evenly-distributed and move on"
    },
    {
      head: "3. Getting Ready To Bake",
      instructions: "Using a number-16 food-portion scoop with about a 1/ 4-cup/ 60-ml capacity, drop scoops of dough onto the lined pans, spacing them about 3 in/ 7.5 cm apart. You will only be able to fit three or four cookies on each pan. ",
      imageSrc: ["images/cookies/selections/step-2.1.JPG",
                 "images/cookies/selections/step-2.2.JPG",
                 "images/cookies/selections/step-2.3.JPG",
                 "images/cookies/selections/step-2.4.JPG",
                ],
      notes: "You can make the cookies any size you like - I tend to find that a 1/4 cup scoop is the right size for me. If you make them much smaller you might need to adjust the bake time down a bit"
    },
    {
      head: "4. Oven Time",
      instructions: "Bake, switching the pans from top to bottom and front to back halfway through baking, until the cookies are lightly golden and set around the edges, 14 to 17 minutes. Let the cookies cool on the pans for 5 minutes, then transfer to wire cooling racks and let cool completely. Repeat with the remaining dough on cooled pans. The cookies can be stored in an airtight container at room temperature for up to 5 days.",
      imageSrc: ["images/cookies/selections/step-3.1.JPG",
                 "images/cookies/selections/step-3.2.JPG",
                 "images/cookies/selections/step-3.3.JPG",
                 "images/cookies/selections/step-3.4.JPG",
                ],
      notes: "After much trial and error, I found that you need to take the cookies out of the oven a good 2 minutes before they look 'done'."
    },
    {
      head: "",
      instructions: "Drop dough by rounded tablespoonfuls about 2 inches apart onto ungreased cookie sheet.",
      imageSrc: ["images/cookies/selections/step-4.1.JPG",
                 "images/cookies/selections/step-4.2.JPG",
                 "images/cookies/selections/step-4.3.JPG",
                 "images/cookies/selections/step-4.4.JPG",
                ],
      notes: "You can make the cookies any size you like - I tend to find that a 1/4 cup scoop is the right size for me. If you make them much smaller you might need to adjust the bake time down a bit"
    },
    {
      head: "",
      instructions: "Drop dough by rounded tablespoonfuls about 2 inches apart onto ungreased cookie sheet.",
      imageSrc: ["images/cookies/selections/step-5.1.JPG",
                 "images/cookies/selections/step-5.2.JPG",
                 "images/cookies/selections/step-5.3.JPG",
                ],
      notes: ""
    },
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
        '<p class="step-body">' + recipe.foreword + '</p>' +
      '</div>' +
    '</div>' +
    '<hr  class="col-md-10 col-md-push-1" />'
  )
  $("#blog").append("<div class='row'> <div class='col-md-6 col-md-push-3 text-center'><ul id='ingredients'><span class='ingredients-title'>What You'll Need:</span></ul> </div> </div><hr  class='col-md-10 col-md-push-1' />")

  $.each(recipe.ingredients, function(i, ingredient) {
    $("#ingredients").append("<li class='ingredient'>" + ingredient + "</li>");
  })

  function carouselImages(cImages) {
    var str = "";
    for (var image in cImages) {
      str += "<li><img src='" + cImages[image] + "' /></li>"
    };
    return str
  }

  function ifNotes(stepNotes) {
    var str = "";
    if (stepNotes.length) {
      str += '<div class="image-sticky"><span class="sticky-default"><i class="fa fa-commenting-o fa-2x"></i></span>' +
        '<div class="sticky-text">' +
          stepNotes +
        '</div>' +
      '</div>'
    };
    return str
  }

  $.each(recipe.steps, function(i, step) {
    // create function to determine if there needs to be a sticky
    var step = recipe.steps[i];
    $("#blog").append(
      '<div class="row">' +
        '<div class="col-md-8 col-md-push-2 post-head text-center">' +
          '<p class="step-head">' + step.head + '</p>' +
          '<p class="step-body">' + step.instructions + '</p>' +
        '</div>' +
      '</div>' +
      '<hr class="col-md-10 col-md-push-1" />' +
      '<div class="row">' +
        '<div class="col-md-10 col-md-push-1 segment">' +
          // '<img class="img-responsive prep-image" src="' + step.imageSrc + '"/>' +
          '<div class="my-slider">' +
            '<ul>' +
              carouselImages(step.imageSrc) +
            '</ul>' +
          '</div>' +
          // '<div class="image-sticky"><span class="sticky-default"><i class="fa fa-commenting-o fa-2x"></i></span>' +
          //   '<div class="sticky-text">' +
          //     step.notes +
          //   '</div>' +
          // '</div>' +
          ifNotes(step.notes) +
        '</div>' +
      '</div>' +
      '<hr class="col-md-10 col-md-push-1"/>'
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
        // $self.find(".sticky-default").text("Click for more details!");
        $self.find(".sticky-default").append("<i class='fa fa-commenting-o fa-2x'></i>");
      });
    }
    // if ( $(this).width() < $(this).parent().width() * .8 ) {
    //   $(this).find("sticky-default").text("");
    // } else {
    //   $(this).find("sticky-default").text("Click for more details!")
    // }
  })

  $(".my-slider").unslider({
    infinite: true,
    autoplay: false,
    arrows: {
    //  Unslider default behaviour
    prev: '<a class="unslider-arrow prev"><i class="fa fa-chevron-left"></i></a>',
    next: '<a class="unslider-arrow next"><i class="fa fa-chevron-right"></i></a>'
    }
  });
})
