$(document).ready(function () {
  // navbar sticky
  function navbarStick() {
    const navbar = document.querySelector(".navbar-custom");
    window.addEventListener("scroll", () => {
      if (scrollY > 80) {
        navbar.classList.add("navbar-custom-white");
      } else {
        navbar.classList.remove("navbar-custom-white");
      }
    });
  }
  navbarStick();
  var Animation = function (animationBar, percentage) {
    this.animationBar = animationBar;
    this.percentage = percentage;
    this.animationArray = null;
    this.animationOffset = null;
    this.labelArray = null;
    this.percentageArray = null;
    this.index = 0;

    this.initialize();
  };

  Animation.prototype.initialize = function () {
    this.animationArray = document.getElementsByClassName(this.percentage);

    if (this.animationOffset === null) this.animationOffset = [];

    if (this.labelArray === null) this.labelArray = [];

    if (this.percentageArray === null) this.percentageArray = [];

    this.setUpElements();
  };

  Animation.prototype.setUpElements = function () {
    for (var i = 0; i < this.animationArray.length; i++) {
      var elem = this.animationArray[i],
        offset =
          elem.offsetTop +
          document.getElementsByClassName(this.percentage)[0].clientHeight,
        percentage = $(this.animationArray[i]).data(this.percentage);

      this.animationOffset.push(offset);
      this.percentageArray.push(percentage);

      $(this.animationArray[i])
        .find(".label")
        .html("" + percentage + "%</div>");
    }

    this.attachListeners();
  };

  Animation.prototype.attachListeners = function () {
    $(window).on("scroll", this.onWindowScroll.bind(this));
  };

  Animation.prototype.onWindowScroll = function () {
    for (var i = 0; i < this.animationArray.length; i++) {
      if (
        window.pageYOffset >=
        this.animationOffset[this.index] - window.innerHeight
      ) {
        this.showElement();
        this.index++;
      } else return;
    }
  };

  Animation.prototype.showElement = function () {
    var element = document.getElementsByClassName(this.percentage)[this.index];
    element.className += " show";
    this.animateBar(element, this.percentageArray[this.index]);
  };

  Animation.prototype.animateBar = function (element, width) {
    var $element = $(element),
      className = " p" + width;

    $element.find(this.animationBar).addClass(className);
  };

  new Animation(".animation-bar", "percentage");
  // portfolio filter

  $(window).on("load", function () {
    var b = $(".work-filter"),
      c = $("#menu-filter");
    b.isotope({
      filter: "*",
      layoutMode: "masonry",
      animationOptions: { duration: 750, easing: "linear" },
    }),
      c.find("a").on("click", function () {
        var a = $(this).attr("data-filter");
        return (
          c.find("a").removeClass("active"),
          $(this).addClass("active"),
          b.isotope({
            filter: a,
            animationOptions: {
              animationDuration: 750,
              easing: "linear",
              queue: !1,
            },
          }),
          !1
        );
      });
  });

  // tablinks open
  // owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    freeDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1199: {
        items: 4,
      },
    },
  });
});
