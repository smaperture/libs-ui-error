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

  const appearance = StyleSheet.create({
    text: {
      color: colors.error,
    },
  });

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
        styles.title,
        appearance.text,
      ]}>{title}</Title>}
      <Subheading style={appearance.text}>
        {children}
      </Subheading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    margin: EM * 2,
  },
  icon: {
    marginBottom: EM,
  },
  title: {
    marginBottom: EM,
  },
});

export default withTheme(DisplayError);
