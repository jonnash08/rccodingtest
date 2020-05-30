import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import BookScreen from '../scenes/Books';
import ContentScreen from '../scenes/Content';

const RouteConfigs = {
    Books: BookScreen,
    Content: {
        screen: ContentScreen,
        navigationOptions: {
            title: null,
        }
    },
};

const AppNavigation = createStackNavigator(RouteConfigs);

export default AppNavigation;