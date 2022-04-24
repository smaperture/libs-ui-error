import FontAwesomeIcon from '@smaperture/fa-icon';
import React from 'react';
import { EM } from '@smaperture/layout';
import { Subheading, Title, withTheme } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import { faCircleExclamation } from '@fortawesome/pro-light-svg-icons';

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
  return /*#__PURE__*/React.createElement(ScrollView, {
    contentContainerStyle: [styles.container, style]
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    color: colors.error,
    icon: icon || faCircleExclamation,
    size: 72,
    style: styles.icon
  }), title && /*#__PURE__*/React.createElement(Title, {
    style: [styles.text, styles.title]
  }, title), /*#__PURE__*/React.createElement(Subheading, {
    style: styles.text
  }, children));
};

const createStyles = theme => StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    // justifyContent: 'center',
    margin: EM * 2
  },
  icon: {
    marginBottom: EM
  },
  text: {
    color: theme.colors.error
  },
  title: {
    marginBottom: EM
  }
});

export default withTheme(DisplayError);
//# sourceMappingURL=index.js.map