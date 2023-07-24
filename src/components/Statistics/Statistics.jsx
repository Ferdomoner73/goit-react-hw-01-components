import React from 'react';
import PropTypes from 'prop-types';

import { StatisticsCard } from '../StatisticsCard/StatisticsCard.jsx';
import { Container, StatList } from './statistics.styled.js';

export const Statistics = ({data}) => {
    return (
        <Container>
        <h2 className="title">Upload stats</h2>

  <StatList>
    {data.map(({id, label, percentage}) => {
        return <StatisticsCard
            key={id}
            label={label}
            percentage={percentage} />
    })}
  </StatList>
</Container>
    );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
}