//= require ../lib/_jquery
//= require ../lib/_imagesloaded.min
(function() {
    "use strict";

    let loaded = false;
    let loadedWithClick = false;

    function debounce(func, waitTime) {
        let timeout = false;
        return function() {
            if (timeout === false) {
                setTimeout(function() {
                    func();
                    timeout = false;
                }, waitTime);
                timeout = true;
            }
        };
    }

    function closeToc() {
        $(".toc-wrapper").removeClass("open");
        $("#nav-button").removeClass("open");
    }

    function loadToc($toc, tocLinkSelector, tocListSelector, scrollOffset) {
        var headerHeights = {};
        var pageHeight = 0;
        var windowHeight = 0;
        var originalTitle = document.title;

        function recacheHeights() {
            headerHeights = {};
            pageHeight = $(document).height();
            windowHeight = $(window).height();

            $toc.find(tocLinkSelector).each(function() {
                const targetId = $(this).attr("href");
                if (targetId[0] === "#") {
                    headerHeights[targetId] = $(targetId).offset().top - 60;
                }
            });
        }

        function refreshToc() {
            let currentTop = $(document).scrollTop() + scrollOffset;

            if (currentTop + windowHeight >= pageHeight) {
                // at bottom of page, so just select last header by making currentTop very large
                // this fixes the problem where the last header won't ever show as active if its content
                // is shorter than the window height
                currentTop = pageHeight + 200;
            }

            let best = null;
            for (let name in headerHeights) {
                if (
                    (headerHeights[name] < currentTop &&
                        headerHeights[name] > headerHeights[best]) ||
                    best === null
                ) {
                    best = name;
                }
            }
            // Catch the initial load case
            if (currentTop === scrollOffset && !loaded) {
                best = window.location.hash;
                loaded = true;
            }
            // <!-- this code fixes the menu click issue reported by Joaquin: https://payclip.atlassian.net/browse/B2BP-227
            if (!loadedWithClick) {
                $(document).scrollTop(headerHeights[best]);
                loadedWithClick = true;
            }
            // --!>

            const $best = $toc.find("[href='" + best + "']").first();
            if (!$best.hasClass("active")) {
                // .active is applied to the ToC link we're currently on, and its parent <ul>s selected by tocListSelector
                // .active-expanded is applied to the ToC links that are parents of this one
                $toc.find(".active").removeClass("active");
                $toc.find(".active-parent").removeClass("active-parent");
                $best.addClass("active");
                $best
                    .parents(tocListSelector)
                    .addClass("active")
                    .siblings(tocLinkSelector)
                    .addClass("active-parent");
                $best.siblings(tocListSelector).addClass("active");
                $toc.find(tocListSelector)
                    .filter(":not(.active)")
                    .slideUp(150);
                $toc.find(tocListSelector)
                    .filter(".active")
                    .slideDown(150);
                if (window.history.replaceState) {
                    window.history.replaceState(null, "", best);
                }
                const thisTitle = $best.data("title");
                if (typeof thisTitle !== "undefined" && thisTitle.length > 0) {
                    document.title = thisTitle + " – " + originalTitle;
                } else {
                    document.title = originalTitle;
                }
            }
        }

        function makeToc() {
            recacheHeights();
            refreshToc();

            $("#nav-button").click(function() {
                $(".toc-wrapper").toggleClass("open");
                $("#nav-button").toggleClass("open");
                return false;
            });
            $(".page-wrapper").click(closeToc);
            $(".toc-link").click(closeToc);

            // reload immediately after scrolling on toc click
            $toc.find(tocLinkSelector).click(function() {
                loadedWithClick = false;
                setTimeout(function() {
                    refreshToc();
                }, 0);
            });

            $(window).scroll(debounce(refreshToc, 200));
            $(window).resize(debounce(recacheHeights, 200));
        }

        makeToc();

        window.recacheHeights = recacheHeights;
        window.refreshToc = refreshToc;
    }

    window.loadToc = loadToc;
})();
