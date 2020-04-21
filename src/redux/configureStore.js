import { createStore, applyMiddleware } from 'redux';
import { combineForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialForm1, InitialForm2 } from './forms';

export const ConfigureStore = () => {
	const store = createStore(combineForms({
		form1: InitialForm1,
		form2: InitialForm2,
		}),
		applyMiddleware(thunk, logger)
	);

	return store;
}


