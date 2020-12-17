"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigation = require("react-navigation");

var _reactNavigationStack = require("react-navigation-stack");

var _SearchScreen = _interopRequireDefault(require("./src/screens/SearchScreen"));

var _ResultsSchowScreen = _interopRequireDefault(require("./src/screens/ResultsSchowScreen"));

var _ResultsDetail = _interopRequireDefault(require("./src/components/ResultsDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var navigator = (0, _reactNavigationStack.createStackNavigator)({
  Search: _SearchScreen["default"],
  ResultsShow: _ResultsSchowScreen["default"]
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});

var _default = (0, _reactNavigation.createAppContainer)(navigator);

exports["default"] = _default;