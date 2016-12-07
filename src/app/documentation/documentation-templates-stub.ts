/*
 * This is a sad hack until we figure out a way to do dynamic requires with angular-cli.
 * It works fine with webpack, but angular-cli breaks them. See https://github.com/angular/angular-cli/issues/3306
 */
export const TEMPLATES = {
  "app-layout": require("!html!../../../loaders/markdown!../../pages/documentation/app-layout.md"),
  "alerts": require("!html!../../../loaders/markdown!../../pages/documentation/alerts.md"),
  // "badges": require("!html!../../../loaders/markdown!../../pages/documentation/badges.md"),
  // "buttons": require("!html!../../../loaders/markdown!../../pages/documentation/buttons.md"),
  // "cards": require("!html!../../../loaders/markdown!../../pages/documentation/cards.md"),
  // "checkboxes": require("!html!../../../loaders/markdown!../../pages/documentation/checkboxes.md"),
  // "code-highlight": require("!html!../../../loaders/markdown!../../pages/documentation/code-highlight.md"),
  // "color": require("!html!../../../loaders/markdown!../../pages/documentation/color.md"),
  // "datagrid": require("!html!../../../loaders/markdown!../../pages/documentation/datagrid.md"),
  // "dropdowns": require("!html!../../../loaders/markdown!../../pages/documentation/dropdowns.md"),
  // "forms": require("!html!../../../loaders/markdown!../../pages/documentation/forms.md"),
  // "grid": require("!html!../../../loaders/markdown!../../pages/documentation/grid.md"),
  // "header": require("!html!../../../loaders/markdown!../../pages/documentation/header.md"),
  // "iconography": require("!html!../../../loaders/markdown!../../pages/documentation/iconography.md"),
  // "input-fields": require("!html!../../../loaders/markdown!../../pages/documentation/input-fields.md"),
  // "labels": require("!html!../../../loaders/markdown!../../pages/documentation/labels.md"),
  // "lists": require("!html!../../../loaders/markdown!../../pages/documentation/lists.md"),
  // "login": require("!html!../../../loaders/markdown!../../pages/documentation/login.md"),
  // "modals": require("!html!../../../loaders/markdown!../../pages/documentation/modals.md"),
  // "navigation": require("!html!../../../loaders/markdown!../../pages/documentation/navigation.md"),
  // "progress": require("!html!../../../loaders/markdown!../../pages/documentation/progress.md"),
  // "radios": require("!html!../../../loaders/markdown!../../pages/documentation/radios.md"),
  // "select-boxes": require("!html!../../../loaders/markdown!../../pages/documentation/select-boxes.md"),
  // "sidenav": require("!html!../../../loaders/markdown!../../pages/documentation/sidenav.md"),
  // "spinners": require("!html!../../../loaders/markdown!../../pages/documentation/spinners.md"),
  // "stack-view": require("!html!../../../loaders/markdown!../../pages/documentation/stack-view.md"),
  // "tables": require("!html!../../../loaders/markdown!../../pages/documentation/tables.md"),
  // "tabs": require("!html!../../../loaders/markdown!../../pages/documentation/tabs.md"),
  // "toggle-switches": require("!html!../../../loaders/markdown!../../pages/documentation/toggle-switches.md"),
  // "tooltips": require("!html!../../../loaders/markdown!../../pages/documentation/tooltips.md"),
  // "typography": require("!html!../../../loaders/markdown!../../pages/documentation/typography.md"),
  // "wizards": require("!html!../../../loaders/markdown!../../pages/documentation/wizards.md")
};
