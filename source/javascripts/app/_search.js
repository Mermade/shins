//= require ../lib/_lunr
//= require ../lib/_jquery
//= require ../lib/_jquery.highlight
(function() {
    "use strict";

    let content, searchResults;
    const highlightOpts = { element: "span", className: "search-highlight" };
    let searchDelay = 0;
    let timeoutHandle = 0;

/*eslint no-undef:0*/
    const index = new lunr.Index();

    index.ref("id");
    index.field("title", { boost: 10 });
    index.field("body");
    index.pipeline.add(lunr.trimmer, lunr.stopWordFilter);

    $(populate);
    $(bind);

    function populate() {
        $("h1, h2").each(function() {
            var title = $(this);
            var body = title.nextUntil("h1, h2");
            index.add({
                id: title.prop("id"),
                title: title.text(),
                body: body.text()
            });
        });

        determineSearchDelay();
    }
    function determineSearchDelay() {
        if (index.tokenStore.length > 5000) {
            searchDelay = 300;
        }
    }

    function bind() {
        content = $(".content");
        searchResults = $(".search-results");

        $("#input-search").on("keyup", function(e) {
            var wait = (function() {
                return function(executingFunction, waitTime) {
                    clearTimeout(timeoutHandle);
                    timeoutHandle = setTimeout(executingFunction, waitTime);
                };
            })();
            wait(function() {
                search(e);
            }, searchDelay);
        });
    }

    function search(event) {
        var searchInput = $("#input-search")[0];

        unhighlight();
        searchResults.addClass("visible");

        // ESC clears the field
        if (event.keyCode === 27) searchInput.value = "";

        if (searchInput.value) {
            var results = index.search(searchInput.value).filter(function(r) {
                return r.score > 0.0001;
            });

            if (results.length) {
                searchResults.empty();
                $.each(results, function(index, result) {
                    var elem = document.getElementById(result.ref);
                    searchResults.append(
                        "<li><a href='#" +
                            result.ref +
                            "' class='toc-link'>" +
                            $(elem).text() +
                            "</a></li>"
                    );
                });
                var link = searchResults.find('a');
                link.click(function() {
                    unhighlight();
                    searchResults.removeClass("visible");
                });
                highlight.call(searchInput);
            } else {
                searchResults.html("<li></li>");
               /* $(".search-results li").text(
                    'No Results Found for "' + searchInput.value + '"'
                );*/
            }
        } else {
            unhighlight();
            searchResults.removeClass("visible");
        }
    }

    function highlight() {
        if (this.value) content.highlight(this.value, highlightOpts);
    }

    function unhighlight() {
        content.unhighlight(highlightOpts);
    }
})();
