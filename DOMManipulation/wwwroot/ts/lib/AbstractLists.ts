interface ItemList {
	appendItem(itemData: any): void;
	prependItem(itemData: any): void;
	appendBefore(node: HTMLElement, itemData: any): void;
	appendAfter(node: HTMLElement, itemData: any): void;
	removeItem(node: HTMLElement): void;
	itemTemplate: (x: any) => HTMLElement;
	readonly itemsParent: HTMLElement;
}

abstract class AppendGrid {
	abstract itemTemplate(x: any): HTMLElement;
	abstract extractDataToAdd(): any;
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