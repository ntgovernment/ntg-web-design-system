$("#qReset").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#questions").offset().top - 24,
    },
    500
  );
});
