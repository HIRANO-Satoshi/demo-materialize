import { autoinject } from "aurelia-dependency-injection";
import { Router, RouteConfig } from "aurelia-router";

@autoinject
export class Menu {
	constructor(private element: Element, private router: Router) { }

	categories: Array<{ title: string, routes: RouteConfig[] }> = [];

	attached() {
		this.categories = [];
		this.router.routes.forEach(r => {
			if (!r.category) {
				return;
			}
			let category = this.categories.find(x => x.title === r.category);
			if (!category) {
				category = { title: r.category, routes: [] };
				this.categories.push(category);
			}
			category.routes.push(r);
		});
	}
}
