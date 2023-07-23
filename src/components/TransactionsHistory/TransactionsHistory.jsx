import React from 'react';
import PropTypes from 'prop-types';

import { TransactionsHistoryItem } from '../TransactionsHistoryItem/TransactionsHistoryItem.jsx';
import { Table, TableHeader, TableHeaderItem, TableBody } from './transctionsHistory.styled.js';
 
export const TransactionsHistory = ({ items }) => {
    return (
<Table>
  <thead>
    <TableHeader>
      <TableHeaderItem>Type</TableHeaderItem>
      <TableHeaderItem>Amount</TableHeaderItem>
      <TableHeaderItem>Currency</TableHeaderItem>
    </TableHeader>
  </thead>

  <TableBody>
    {items.map(({id, type, amount, currency}) => {
        return (
            <TransactionsHistoryItem
                key={id}
                type={type}
                amount={amount}
                currency={currency} />
        );
    })}
  </TableBody>
</Table>
    );
}

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string
    })
  )
}

