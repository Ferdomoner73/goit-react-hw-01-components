import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './statisticsCard.styled.js';

export const StatisticsCard = ({ label, percentage }) => {
    return (
        <Card>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </Card>
    );
};

StatisticsCard.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}