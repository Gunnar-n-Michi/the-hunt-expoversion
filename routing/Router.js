import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/Home';
import MapView from '../screens/MapView';

export default createRouter(() => ({
  home: () => HomeScreen,
  mapview: () => MapView
}));
