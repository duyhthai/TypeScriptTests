var PlainList = /** @class */ (function () {
    function PlainList(itemsParent) {
        this.itemsParent = itemsParent;
    }
    PlainList.prototype.removeItem = function (node) {
        this.itemsParent.removeChild(node);
    };
    PlainList.prototype.appendItem = function (itemData) {
        this.itemsParent.appendChild(this.itemTemplate(itemData));
    };
    PlainList.prototype.prependItem = function (itemData) {
        if (this.itemsParent.childElementCount === 0)
            this.appendItem(itemData);
        else
            this.itemsParent.insertBefore(this.itemTemplate(itemData), this.itemsParent.firstChild);
    };
    PlainList.prototype.appendBefore = function (node, itemData) {
        this.itemsParent.insertBefore(this.itemTemplate(itemData), node);
    };
    PlainList.prototype.appendAfter = function (node, itemData) {
        if (node.nextSibling)
            this.itemsParent.insertBefore(this.itemTemplate(itemData), node.nextSibling);
        else
            this.appendItem(itemData);
    };
    return PlainList;
}());
//# sourceMappingURL=plainList.js.map