(function () {
  var toggle = document.getElementById("header-nav-toggle"),
    nav = document.getElementById("header-nav");
  /* links = "header-nav".find("a"); */

  // If JavaScript Is Enabled
  // Modify Initial States
  toggle.className = "is-visible";
  nav.className = "is-hidden";

  // Change Visibility On Click
  toggle.addEventListener("click", function () {
    if (nav.className === "is-hidden") {
      nav.className = "";
    } else {
      nav.className = "is-hidden";
    }
  });
  /* links.addEventListener("click", function () {
    if (nav.className === "is-hidden") {
      nav.className = "";
    } else {
      nav.className = "is-hidden";
    }
  }); */
})();

//slider
let swiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

var mq48 = window.matchMedia("(min-width:48em)");

function mediaQueries(mq48) {
  //https://www.youtube.com/watch?v=-LqZt5Z-Tcg
  if (mq48.matches) {
    //mostrar iframe de video de youtube
    document.getElementById("logos-video").innerHTML =
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/-LqZt5Z-Tcg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  } else {
    //mostrar link a video de youtube
    document.getElementById("logos-video").innerHTML =
      '<a href="https://www.youtube.com/watch?v=-LqZt5Z-Tcg" target="_blank">Ver video</a>';
  }
}

mediaQueries(mq48);
mq48.addEventListener(mediaQueries);




      