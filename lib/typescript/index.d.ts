import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { StyleProp, ViewStyle } from 'react-native';
import { Theme } from 'react-native-paper/lib/typescript/types';
declare const _default: React.ComponentType<Pick<{
    children?: React.ReactNode;
    icon?: IconDefinition | undefined;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
    title?: string | undefined;
}, "children" | "icon" | "style" | "title"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<{
    children?: React.ReactNode;
    icon?: IconDefinition | undefined;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
    title?: string | undefined;
}> & React.FC<{
    children?: React.ReactNode;
    icon?: IconDefinition | undefined;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
    title?: string | undefined;
}>, {}>;
export default _default;
