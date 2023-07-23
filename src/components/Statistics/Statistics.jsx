import data from '../Statistics/data.json';
import { StatisticsCard } from '../StatisticsCard/StatisticsCard.jsx';
import { Container, StatList } from './statistics.styled.js';

export const Statistics = () => {
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