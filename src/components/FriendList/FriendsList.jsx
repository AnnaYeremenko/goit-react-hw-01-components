import PropTypes from 'prop-types';
import { FriendListSection } from './FriendsList.styled';
import { FriendItem } from './FriendItemList';


export const FriendList = ({ friends }) => {
    return (
        <FriendListSection>
            {friends.map(({id, name, avatar, isOnline}) => (
                <FriendItem
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

