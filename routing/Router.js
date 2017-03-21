import { createRouter } from '@expo/ex-navigation';

import SessionView from '../views/SessionView';
import MapView from '../views/MapView';

export default createRouter(() => ({
  sessionView: () => SessionView,
  mapView: () => MapView
}));
