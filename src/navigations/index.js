import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppNavigator from './AppNavigation';

const RootNavigator = createSwitchNavigator(
    {
        App: AppNavigator
    },
);

export default createAppContainer(RootNavigator);