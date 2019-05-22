﻿interface ItemList<T> {
	appendItem(itemData: T): void;
	prependItem(itemData: T): void;
	appendBefore(node: HTMLElement, itemData: T): void;
	appendAfter(node: HTMLElement, itemData: T): void;
	removeItem(node: HTMLElement): void;
	itemTemplate: (x: T) => HTMLElement;
	readonly itemsParent: HTMLElement;
}

abstract class AppendGrid<T> {
	constructor(protected list: ItemList<T>,
		protected addButton: HTMLElement,
		protected itemRootSelector: string,
		protected addItemDataRoot: HTMLElement,
		protected addBeforeButton?: HTMLElement) {
		this.list.itemTemplate = this.itemTemplate;
		this.list.itemsParent.addEventListener("click",
			(evt: MouseEvent) => {
				let button = AppendGrid.findAncestor(
					evt.target as HTMLElement,
					"button");
				let target = AppendGrid.findAncestor(
					button,
					itemRootSelector);
				if (target != null)
					list.removeItem(target);
			});
		this.addButton.addEventListener("click",
			(evt: MouseEvent) => {
				list.appendItem(this.extractDataToAdd());
			});
		if (this.addBeforeButton) {
			this.addBeforeButton.addEventListener("click",
				(evt: MouseEvent) => {
					list.prependItem(this.extractDataToAdd());
				});
		}

	}
	protected abstract itemTemplate(x: T): HTMLElement;
	protected abstract extractDataToAdd(): T;
	private static findAncestor(n: HTMLElement | null,
		selector: string): HTMLElement | null {
		while (n != null && n.tagName != "BODY") {
			if (n.matches && n.matches(selector)) return n;
			else if (n.webkitMatchesSelector
				&& n.webkitMatchesSelector(selector)) return n;
			n = n.parentNode as HTMLElement;
		}
		return null;
	}
}