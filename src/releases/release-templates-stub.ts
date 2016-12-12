/*
 * This is a sad hack until we figure out a way to do dynamic requires with angular-cli.
 * It works fine with webpack, but angular-cli breaks them. See https://github.com/angular/angular-cli/issues/3306
 */
export const TEMPLATES = {
  "0.7.4": require("./0.7/0.7.4.html"),
  "0.7.3": require("./0.7/0.7.3.html"),
  "0.6.0": require("./0.6/0.6.0.html"),
};
