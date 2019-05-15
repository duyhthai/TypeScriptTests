var AppendGrid = /** @class */ (function () {
    function AppendGrid() {
    }
    AppendGrid.findAncestor = function (n, selector) {
        while (n != null && n.tagName != "BODY") {
            if (n.matches && n.matches(selector))
                return n;
            else if (n.webkitMatchesSelector
                && n.webkitMatchesSelector(selector))
                return n;
            n = n.parentNode;
        }
        return null;
    };
    return AppendGrid;
}());
//# sourceMappingURL=AbstractLists.js.map