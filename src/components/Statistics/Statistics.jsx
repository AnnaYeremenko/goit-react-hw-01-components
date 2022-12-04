import PropTypes from 'prop-types';
import {
    StatisticsSection,
    StatsItem,
    StatsList,
    Title,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Statistics = ({ title, stats }) => {
    return (        
        <StatisticsSection>
            {title && <Title>{title}</Title>}
            <StatsList>
                {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
          </StatsItem>
        ))}
            </StatsList>
        </StatisticsSection>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};