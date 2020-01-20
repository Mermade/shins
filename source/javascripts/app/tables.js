window.component = (function() {
    const data = {
        dictionary: {},
        elements: []
    };
    let counter = 0;
    const that = this;

    that.changeEvent = function($el, attrName) {
        const $next = $el.next();
        const isOpen = $el.attr("data-isopen");
        if (attrName === "isopen") {
            $el.find(".arrow")
                .first()
                .toggleClass("open", isOpen === "true");
            $el.find(".arrow")
                .first()
                .toggleClass("close", isOpen === "false");
            $next.toggleClass("open", isOpen === "true");
            $next.toggleClass("close", isOpen === "false");
            $next
                .find("div")
                .first()
                .toggle(100, function() {
                    $next.toggle(100, function() {
                        if ($next.hasClass("open")) {
                            var panel = $next.parents(".panel");
                            panel.css("max-height", "fit-content");
                        }
                    });
                });
        }
    };

    that.changeProp = function($el, attrName, attrVal) {
        if (!attrName) return null;
        if (!$el) return null;
        if (typeof attrVal === "undefined") return null;
        $el.attr("data-" + attrName, attrVal);
        data.dictionary[$el.attr("id")][attrName] = attrVal;
        that.changeEvent($el, attrName);
    };

    that.registerElement = function(el) {
        const elementData = {};
        const $el = $(el);
        counter++;
        elementData.name = $el.attr("data-name");
        elementData.id = "d" + counter + elementData.name;
        elementData.isOpen = $el.attr("data-isopen") || false;
        // $el.attr('data-isopen', elementData.isOpen);
        $el.attr("id", elementData.id);
        data.dictionary[elementData.id] = elementData;
        data.elements.push(elementData);
        that.changeProp($el, "isopen", elementData.isOpen);
        $el.find("td")
            .first()
            .on("click", function() {
                let val = $el.attr("data-isopen") === "false";
                that.changeProp($el, "isopen", val);
            });
    };

    function start() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
        $("tr[data-name]").each(function(i, el) {
            that.registerElement(el);
        });
    }

    return {
        start
    };
})();
