import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill',
    note: 'Water bill for December 2018',
    amount: 4500
}));
store.dispatch(addExpense({
    description: 'Gas bill',
    note: 'Gas bill for December 2018',
    createdAt: 1000
}));
store.dispatch(addExpense({
    description: 'Rent',
    note: 'Rent for December 2018',
    amount: 109500
}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));