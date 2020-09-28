import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings114510Navigator from '../features/Settings114510/navigator';
import UserProfile114503Navigator from '../features/UserProfile114503/navigator';
import Settings114502Navigator from '../features/Settings114502/navigator';
import Settings114500Navigator from '../features/Settings114500/navigator';
import SignIn2114498Navigator from '../features/SignIn2114498/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings114510: { screen: Settings114510Navigator },
UserProfile114503: { screen: UserProfile114503Navigator },
Settings114502: { screen: Settings114502Navigator },
Settings114500: { screen: Settings114500Navigator },
SignIn2114498: { screen: SignIn2114498Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
