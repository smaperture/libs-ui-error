import FontAwesomeIcon from '@smaperture/fa-icon';
import React, { ReactNode } from 'react';
import { EM } from '@smaperture/layout';
import { Subheading, Title, withTheme } from 'react-native-paper';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Theme } from 'react-native-paper/lib/typescript/types';
import { faCircleExclamation } from '@fortawesome/pro-light-svg-icons';

const DisplayError: React.FC<{
  children?: ReactNode;
  icon?: IconDefinition;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  title?: string;
}> = ({ children, icon, style, theme, title }) => {
  const { colors } = theme;
  const styles = createStyles(theme);

  return (
    <View style={[
      styles.container,
      style,
    ]}>
      <FontAwesomeIcon
        color={colors.error}
        icon={icon || faCircleExclamation}
        size={72}
        style={styles.icon}
      />
      {title && <Title style={[
        styles.text,
        styles.title,
      ]}>{title}</Title>}
      <Subheading style={styles.text}>
        {children}
      </Subheading>
    </View>
  );
};

const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    margin: EM * 2,
  },
  icon: {
    marginBottom: EM,
  },
  text: {
    color: theme.colors.error,
  },
  title: {
    marginBottom: EM,
  },
});

export default withTheme(DisplayError);
