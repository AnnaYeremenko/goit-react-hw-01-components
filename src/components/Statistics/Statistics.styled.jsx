import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 300px;
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  padding: 20px;
`;

export const StatsList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;