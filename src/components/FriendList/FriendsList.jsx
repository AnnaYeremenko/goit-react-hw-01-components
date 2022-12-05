import PropTypes from 'prop-types';
import { FriendListSection } from './FriendsList.styled';
import { FriendItemList } from './FriendItemList';


export const FriendList = ({ friends }) => {
    return (
        <FriendListSection>
            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendItemList
                    avatar={avatar}
                    name={name}                    
                    isOnline={isOnline}
                    key={id}
                />
            ))}
        </FriendListSection>

    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({           
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

