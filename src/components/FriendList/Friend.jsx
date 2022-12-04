import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './Friend.styled';

export const Friend = ({ avatar, name, isOnline }) => {
    return (
        <Friend>
            <Avatar src={avatar} alt="User avatar" width="50"/>
            <Name>{name}</Name>
            <Status isOnline={isOnline}></Status>
        </Friend>
    );
};
Friend.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
};