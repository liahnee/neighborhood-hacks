import { combineReducers } from 'redux';

import user from './user';
import map from './map';
import filter from './filter';
import rate from './rate';

export default combineReducers({
  user,
  map,
  filter,
  rate,
});
