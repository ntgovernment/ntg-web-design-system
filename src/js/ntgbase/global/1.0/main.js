$(document).ready(function () {
  $(
    "img.imagedropshadow, img.imagequarter, img.imagethird, img.imagehalf, img.imagefull"
  ).each(function () {
    dataToLightboxGallery(this);
  });

  function dataToLightboxGallery(el) {
    var altthis = $(el).attr("alt");
    var srcthis = $(el).attr("src");
    $(el).parent("a").attr({
      href: srcthis,
      "data-lightbox": "galery",
      "data-title": altthis,
    });
  }

  // Alert banner handle function
  function handleAlertBanner() {
    //Sitebanner close button on click function
    $(".ntg-sidewide-alert .close").on("click", function () {
      sessionStorage.setItem("site-alert-dismissed", true);
    });

    //Retrive session variable, check user's choice
    var isSiteAlertDismissed = sessionStorage.getItem("site-alert-dismissed");

    if (isSiteAlertDismissed == "true") {
      //Keep the alert dismissed
      $(".ntg-sidewide-alert").addClass("d-none");
    } //Show the alert
    else {
      $(".ntg-sidewide-alert").addClass("d-block");
    }
  }

  // Force external links to open in new window
  function externalLinksInNewWindow() {
    $("a")
      .not('[href*="mailto:"]')
      .each(function () {
        var isInternalLink = new RegExp("/" + window.location.host + "/");
        if (!isInternalLink.test(this.href)) {
          $(this).addClass("external");
        }
      });
    $("a.external").has("img").removeClass("external");
    $("a[href*='javascript']").removeClass("external");

    // remove external class from telephone number links
    $('a[href*="tel:"]').each(function () {
      $(this).removeClass("external");
    });
  }

  handleAlertBanner(); //call handleAlretBanner function
  externalLinksInNewWindow(); //call externalLinksInNewWindow function

  // Apply classes to cta-button elements
  $(".cta-button").addClass("btn ntg-btn ntg-btn--primary");
  console.log("NTGov DS loaded");

});

// scroll to section id on page load
$(window).on('load', function(event) {
    
  var elId = window.location.hash;
  
  if (elId.length > 1) {
      var topOfElement = document.getElementById(elId.substr(1));
      
      if (topOfElement) {
          topOfElement.scrollIntoView({
              behavior: "smooth",
              block: "start"
          });
      }
  }
  
});
