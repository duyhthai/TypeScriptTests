var JQueryList = /** @class */ (function () {
    function JQueryList(itemsParent) {
        this.itemsParent = itemsParent;
    }
    JQueryList.prototype.removeItem = function (node) {
        $(this.itemsParent).remove();
    };
    JQueryList.prototype.appendItem = function (itemData) {
        $(this.itemsParent)
            .append(this.itemTemplate(itemData));
    };
    JQueryList.prototype.prependItem = function (itemData) {
        $(this.itemsParent)
            .prepend(this.itemTemplate(itemData));
    };
    JQueryList.prototype.appendBefore = function (node, itemData) {
        $(node).before(this.itemTemplate(itemData));
    };
    JQueryList.prototype.appendAfter = function (node, itemData) {
        $(node).after(this.itemTemplate(itemData));
    };
    return JQueryList;
}());
//# sourceMappingURL=jQueryList.js.map