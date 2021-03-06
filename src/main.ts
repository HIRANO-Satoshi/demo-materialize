import "isomorphic-fetch";
import "materialize-css";
import "aurelia-bootstrapper";
import { PLATFORM, Aurelia } from "aurelia-framework";
// import "materialize-css/dist/css/materialize.css";

declare const IS_DEV_BUILD: boolean; // The value is supplied by Webpack during the build

export async function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.plugin(PLATFORM.moduleName("aurelia-inputmask"))
		.plugin(PLATFORM.moduleName("aurelia-materialize-bridge"), plugin => {
			plugin.useAutoComplete().useBadge().useBreadcrumbs().useBox().useButton().useCard().useCarousel().useCharacterCounter().useCheckbox()
				.useChip().useCollapsible().useCollection().useColors().useDatePicker().useDropdown().useFab().useFile().useFooter().useInput()
				.useLookup().useModal().useNavbar()
				.usePagination().useParallax().useProgress().usePushpin().useRadio().useRange().useScrollSpy().useSelect().useSidenav().useSlider()
				.useSwitch().useTabs().useTapTarget().useTimePicker().useTooltip().useWaitCursor().useWaves().useWell().useAutoButtonWaves(true)
				.useValidationContainer();
		})
		.plugin(PLATFORM.moduleName("aurelia-validation"))
		.plugin(PLATFORM.moduleName("aurelia-dialog"));

	if (IS_DEV_BUILD) {
		aurelia.use.developmentLogging();
	}

	aurelia.use.globalResources("shared/collapse-panel");
	aurelia.use.globalResources("shared/au-markdown");
	aurelia.use.globalResources("shared/logger");
	aurelia.use.globalResources("shared/au-code");

	await aurelia.start();
	// if (document.readyState !== "complete") {
	// 	await new Promise(resolve => document.addEventListener("DOMContentLoaded", () => resolve()));
	// }
	aurelia.setRoot(PLATFORM.moduleName("app"));
}
