import styled from 'styled-components';

export const ProfileInfo = styled.div`
display: flex;
width:260px;
margin-top: 30px;
flex-direction: column;
align-items: center;
background-color: #ffff;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 0px 0px 4px 4px;`
    ;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;
export const Avatar = styled.img`
  display: flex;
  width: 40%;
  border-radius: 50%;
  border: 2px solid #c2cdd5;
  margin-bottom: 15px;
`;
export const Name = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  color: #807c7c;
`;
export const Location = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  color: #807c7c;
`;

export const StatsInfo = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
`;

export const StatsFollowers = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #c2cdd5;
  background-color: #f3f6f9;
  border-radius: 0px 0px 0px 4px;
`;
export const Label = styled.span`
  padding-bottom: 8px;
  color: #8a8b8e;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
export const StatsViews = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #c2cdd5;
  background-color: #f3f6f9;
  border-left: 1px solid #c2cdd5;
  border-right: 1px solid #c2cdd5;
`;

export const StatsLikes = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #c2cdd5;
  background-color: #f3f6f9;
  border-radius: 0px 0px 4px;
`;
