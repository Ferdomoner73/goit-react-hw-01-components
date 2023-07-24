import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './statisticsCard.styled.js';

export const StatisticsCard = ({ label, percentage }) => {
    return (
        <Card>
            <span>{label}</span>
            <span>{percentage}%</span>
        </Card>
    );
};

StatisticsCard.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}