/*
 * This is a sad hack until we figure out a way to do dynamic requires with angular-cli.
 * It works fine with webpack, but angular-cli breaks them. See https://github.com/angular/angular-cli/issues/3306
 */
export const TEMPLATES = {
  "app-layout": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/app-layout.md"),
  "alerts": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/alerts.md"),
  // "badges": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/badges.md"),
  // "buttons": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/buttons.md"),
  // "cards": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/cards.md"),
  // "checkboxes": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/checkboxes.md"),
  // "code-highlight": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/code-highlight.md"),
  // "color": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/color.md"),
  // "datagrid": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/datagrid.md"),
  // "dropdowns": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/dropdowns.md"),
  // "forms": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/forms.md"),
  // "grid": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/grid.md"),
  // "header": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/header.md"),
  // "iconography": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/iconography.md"),
  // "input-fields": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/input-fields.md"),
  // "labels": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/labels.md"),
  // "lists": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/lists.md"),
  // "login": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/login.md"),
  // "modals": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/modals.md"),
  // "navigation": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/navigation.md"),
  // "progress": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/progress.md"),
  // "radios": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/radios.md"),
  // "select-boxes": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/select-boxes.md"),
  // "sidenav": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/sidenav.md"),
  // "spinners": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/spinners.md"),
  // "stack-view": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/stack-view.md"),
  // "tables": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/tables.md"),
  // "tabs": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/tabs.md"),
  // "toggle-switches": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/toggle-switches.md"),
  // "tooltips": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/tooltips.md"),
  // "typography": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/typography.md"),
  // "wizards": require("!raw-loader!../../../loaders/markdown!../../pages/documentation/wizards.md")
};
