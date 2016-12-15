/*
 * This is a sad hack until we figure out a way to do dynamic requires with angular-cli.
 * It works fine with webpack, but angular-cli breaks them. See https://github.com/angular/angular-cli/issues/3306
 */
export const TEMPLATES = {
  "app-layout": require("!html!../../pages/documentation/app-layout.html"),
  "alerts": require("!html!../../pages/documentation/alerts.html"),
  "badges": require("!html!../../pages/documentation/badges.html"),
  "buttons": require("!html!../../pages/documentation/buttons.html"),
  "cards": require("!html!../../pages/documentation/cards.html"),
  "checkboxes": require("!html!../../pages/documentation/checkboxes.html"),
  "code-highlight": require("!html!../../pages/documentation/code-highlight.html"),
  "color": require("!html!../../pages/documentation/color.html"),
  "datagrid": require("!html!../../pages/documentation/datagrid.html"),
  "dropdowns": require("!html!../../pages/documentation/dropdowns.html"),
  "forms": require("!html!../../pages/documentation/forms.html"),
  "grid": require("!html!../../pages/documentation/grid.html"),
  "header": require("!html!../../pages/documentation/header.html"),
  "iconography": "<h1>TODO</h1>",
  // "iconography": require("!html!../../pages/documentation/iconography.html"),
  "input-fields": require("!html!../../pages/documentation/input-fields.html"),
  "labels": require("!html!../../pages/documentation/labels.html"),
  "lists": require("!html!../../pages/documentation/lists.html"),
  "login": require("!html!../../pages/documentation/login.html"),
  "modals": require("!html!../../pages/documentation/modals.html"),
  "navigation": require("!html!../../pages/documentation/navigation.html"),
  "progress": require("!html!../../pages/documentation/progress.html"),
  "radios": require("!html!../../pages/documentation/radios.html"),
  "select-boxes": require("!html!../../pages/documentation/select-boxes.html"),
  "sidenav": require("!html!../../pages/documentation/sidenav.html"),
  "spinners": require("!html!../../pages/documentation/spinners.html"),
  "stack-view": require("!html!../../pages/documentation/stack-view.html"),
  "tables": require("!html!../../pages/documentation/tables.html"),
  "tabs": require("!html!../../pages/documentation/tabs.html"),
  "toggle-switches": require("!html!../../pages/documentation/toggle-switches.html"),
  "tooltips": require("!html!../../pages/documentation/tooltips.html"),
  "typography": require("!html!../../pages/documentation/typography.html"),
  "wizards": require("!html!../../pages/documentation/wizards.html")
};
