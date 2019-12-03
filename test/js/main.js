window.onload = function () {
    var myEditor = new MediumEditor(".container", {
        buttons: [
            "bold"
          , "italic"
          , "underline"
          , "anchor"
          , "header1"
          , "header2"
          , "quote"
          , "customHtml"
          , "imgHtml"
        ]
      , extensions: {
            "customHtml": new CustomHtml({
                buttonText: "<hr>"
              , htmlToInsert: "<hr class='someclass'>"
            }),
            "imgHtml": new CustomHtml({
                buttonText: "<img>"
              , htmlToInsert: resolve => {
                  var imgUrl = prompt("Image url", "http://");
                  resolve("<div><img src='"+ imgUrl +"' alt='' /></div>");
                }
            })
        }
    });
};
