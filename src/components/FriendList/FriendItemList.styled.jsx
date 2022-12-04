import styled from 'styled-components';
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 270px;
  background-color: #ffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => (props.isOnline ? '#54e038' : '#d1061e')};
`;
export const Avatar = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
`;