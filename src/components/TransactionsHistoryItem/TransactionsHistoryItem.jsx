import React from 'react';
import PropTypes from 'prop-types';

import { EachTransaction, EachTransactionItem } from './transactionsHistoryItem.styled.js';

export const TransactionsHistoryItem = ({ type, amount, currency }) => {
    return (
        <EachTransaction>
            <EachTransactionItem>{type}</EachTransactionItem>
            <EachTransactionItem>{amount}</EachTransactionItem>
            <EachTransactionItem>{currency}</EachTransactionItem>
        </EachTransaction>
    );
};

TransactionsHistoryItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}