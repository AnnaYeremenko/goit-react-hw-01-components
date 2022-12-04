import PropTypes from 'prop-types';
import { FriendItem, Avatar, Name, Status } from './FriendItemList.styled';

export const FriendItemList = ({ avatar, name, isOnline }) => {
    return (
        <FriendItem>
            <Avatar src={avatar} alt="User avatar" width="50"/>
            <Name>{name}</Name>
            <Status isOnline={isOnline}></Status>
        </FriendItem>
    );
};
FriendItemList.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
};