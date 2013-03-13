
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

    function whitespaceShowing() {
        return $.getUrlVar("w") == null;
    }

    function toggleWhitespace() {
        if (whitespaceShowing()) {
            window.location = window.location.pathname +"?w=1";
        } else {
            window.location = window.location.pathname;
        }
    }

    // Button
    var $spaceButton = $("<a>").attr("id", "togglewhitespace");
    $spaceButton.addClass("minibutton").css("marginRight", "12px");
    $spaceButton.text(whitespaceShowing() ? "Collapse Whitespace" : "Show All Whitespace");
    $spaceButton.on("click", function(event) { toggleWhitespace(); });
    $diffHeader.append($spaceButton);

    // Keyboard shortcut
    $(document).bind('keydown', 'Alt+Shift+W', function() {
        toggleWhitespace();
    });

}
