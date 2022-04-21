"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faIcon = _interopRequireDefault(require("@smaperture/fa-icon"));

var _react = _interopRequireDefault(require("react"));

var _layout = require("@smaperture/layout");

var _reactNativePaper = require("react-native-paper");

var _reactNative = require("react-native");

var _proLightSvgIcons = require("@fortawesome/pro-light-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DisplayError = _ref => {
  let {
    children,
    icon,
    style,
    theme,
    title
  } = _ref;
  const {
    colors
  } = theme;
  const styles = createStyles(theme);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_faIcon.default, {
    color: colors.error,
    icon: icon || _proLightSvgIcons.faCircleExclamation,
    size: 72,
    style: styles.icon
  }), title && /*#__PURE__*/_react.default.createElement(_reactNativePaper.Title, {
    style: [styles.text, styles.title]
  }, title), /*#__PURE__*/_react.default.createElement(_reactNativePaper.Subheading, {
    style: styles.text
  }, children));
};

const createStyles = theme => _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    margin: _layout.EM * 2
  },
  icon: {
    marginBottom: _layout.EM
  },
  text: {
    color: theme.colors.error
  },
  title: {
    marginBottom: _layout.EM
  }
});

var _default = (0, _reactNativePaper.withTheme)(DisplayError);

exports.default = _default;
//# sourceMappingURL=index.js.map