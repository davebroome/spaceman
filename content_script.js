
// ----------------------------------------------------------------------
// jQuery extensions
// ----------------------------------------------------------------------

$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

// ----------------------------------------------------------------------

$diffHeader = $("#diff p.explain");

// Only run on diff pages
if ($diffHeader.length != 0) {

    // Create button
    var $spaceButton = $("<a>").attr("id", "togglewhitespace");
    $spaceButton.addClass("minibutton");
    $spaceButton.css("marginRight", "12px");

    // Label & href
    if ($.getUrlVar("w") != null) {
        $spaceButton.text("Show All Whitespace");
        $spaceButton.attr("href", window.location.pathname);
    } else {
        $spaceButton.text("Collapse Whitespace");
        $spaceButton.attr("href", window.location.pathname +"?w=1");
    }

    // Insert into DOM
    $diffHeader.append($spaceButton);

    // Keyboard shortcut
    $(document).bind('keydown', 'Alt+Shift+W', function(){
        window.location = $('#togglewhitespace').attr("href");
    });

}
