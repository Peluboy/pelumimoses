if ($(".testimonial-slider").length) {
  var testimonial = $(".testimonial-slider").owlCarousel({
    items: 1,
    margin: 30,
    stagePadding: 0,
    smartSpeed: 450,
    autoHeight: true,
    loop: false,
    nav: false,
    dots: false,
    onInitialized: counter,
    onTranslated: counter,
  });

  $(".testimonial-nav .next").on("click", function () {
    testimonial.trigger("next.owl.carousel");
  });

  $(".testimonial-nav .prev").on("click", function () {
    testimonial.trigger("prev.owl.carousel", [300]);
  });

  function counter(event) {
    var element = event.target;
    var items = event.item.count;
    var item = event.item.index + 1;

    if (item > items) {
      item = item - items;
    }
    $("#testimonial-slide-count").html(
      "<span class='left'>" + item + "</span> /" + items
    );
  }
}

const nav__toggle = document.querySelector(".icon__menu"),
  overlay = document.querySelector(".overlay"),
  responsive_menu = document.querySelector(".responsive__sidebar-menu");

nav__toggle.addEventListener("click", () => {
  responsive_menu.classList.add("show");
});

overlay.addEventListener("click", () => {
  responsive_menu.classList.remove("show");
});

$(window)
  .scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 0) {
      $(".page-section").each(function (i) {
        if ($(this).position().top <= windscroll - -1) {
          //   $(this).addClass("scroll-animation");
          $(".scroll__nav .scroll__to.active").removeClass("active");
          $(".scroll__nav .scroll__to").eq(i).addClass("active");
          $(".scroll__nav-responsive a.active").removeClass("active");
          $(".scroll__nav-responsive a").eq(i).addClass("active");
        }
      });
    } else {
      $(".scroll__nav .scroll__to.active").removeClass("active");
      $(".scroll__nav .scroll__to:first").addClass("active");
      $(".scroll__nav-responsive a.active").removeClass("active");
      $(".scroll__nav-responsive a:first").addClass("active");
    }
    if (windscroll >= 0) {
      $(".scroll-to-page").each(function (i) {
        var wscrolldescress = windscroll + 1;
        if ($(this).position().top <= wscrolldescress - 0) {
          $(".scroll__nav .scroll__to.active").removeClass("active");
          $(".scroll__nav .scroll__to").eq(i).addClass("active");
          $(".scroll__nav-responsive a.active").removeClass("active");
          $(".scroll__nav-responsive a").eq(i).addClass("active");
        }
      });
    } else {
      $(".scroll__nav .scroll__to.active").removeClass("active");
      $(".scroll__nav .scroll__to:first").addClass("active");
      $(".scroll__nav-responsive a.active").removeClass("active");
      $(".scroll__nav-responsive a:first").addClass("active");
    }
  })
  .scroll();

$(window).scroll(function () {
  var scrollPosition = $(this).scrollTop();
  var windowHeight = $(this).height();

  $(".scroll-animation").each(function () {
    var offsetTop = $(this).offset().top;

    if (scrollPosition > offsetTop - windowHeight + 200) {
      $(this).addClass("is-visible");
    }
  });
});

$(document).ready(function () {
  $(".scroll__to").on("click", function (event) {
    event.preventDefault();
    var target = $(this).data("target");
    if (target === "#home") {
      $("html, body").animate({ scrollTop: 0 }, 800);
    } else {
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        800
      );
    }
  });

  $(".icon__menu").on("click", function () {
    $(".responsive__sidebar-menu").toggleClass("active");
  });
});

// Get the modal element
var modal = document.getElementById("imageModal");

// Get the image and modal content elements
var modalImage = document.getElementById("modalImage");
var closeBtn = document.getElementsByClassName("close")[0];

// Get all the image links
var imageLinks = document.getElementsByClassName("image-link");

// Add click event listeners to each image link
for (var i = 0; i < imageLinks.length; i++) {
  imageLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "block";
    modalImage.src = this.children[0].src;
  });
}

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
