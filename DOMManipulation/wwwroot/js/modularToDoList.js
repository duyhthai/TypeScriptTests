var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var MyULAppendGrid = /** @class */ (function (_super) {
        __extends(MyULAppendGrid, _super);
        function MyULAppendGrid(list, addButton, itemRootselector, addItemDataRoot, addBeforeButton) {
            return _super.call(this, list, addButton, itemRootselector, addItemDataRoot, addBeforeButton) || this;
        }
        MyULAppendGrid.prototype.extractDataToAdd = function () {
            return this.addItemDataRoot.value;
        };
        MyULAppendGrid.prototype.itemTemplate = function (str) {
            var toAdd = "<li class=\"list-group-item\">\n                <button type=\"button\" class=\"btn btn-sm\" title=\"remove\">\n                    <span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\">\n                    </span>\n                </button>\n                <span>" + str + "</span>\n            </li>";
            var temp = document.createElement('ul');
            temp.innerHTML = toAdd;
            return temp.firstChild;
        };
        return MyULAppendGrid;
    }(AppendGrid));
    var mainList = new PlainList(document.getElementById('main_list'));
    var addButton = document.getElementById('main_add');
    var addInput = document.getElementById('main_input');
    var mainGrid = new MyULAppendGrid(mainList, addButton, "li", addInput);
})();
//# sourceMappingURL=modularToDoList.js.map