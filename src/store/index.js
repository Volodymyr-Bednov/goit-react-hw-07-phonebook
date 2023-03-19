import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/reducer';
import { filterReducer } from './filter/reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
