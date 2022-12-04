import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { FriendListSection } from './FriendsList.styled'

export const FriendList = ({ friends }) => {
    return (
        <FriendListSection>
            {friends.map(({id, name, avatar, isOnline}) => (
                <Friend
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}
                />
            ))}
        </FriendListSection>

    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

