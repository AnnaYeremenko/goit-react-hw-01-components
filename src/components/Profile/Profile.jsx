import PropTypes from 'prop-types';
import {
    ProfileInfo,
    Description,
    Avatar,
    Name,
    Tag,
    Location,
    StatsInfo,
    StatsFollowers,
    Label,
    Quantity,
    StatsViews,
    StatsLikes,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
    return (<ProfileInfo>
        <Description>
            <Avatar src={avatar} alt="User avatar"/>
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>
        <StatsInfo>
            <StatsFollowers>
                <Label>followers</Label>
                <Quantity>{stats.followers}</Quantity>
            </StatsFollowers>
            <StatsViews>
                <Label>views</Label>
                <Quantity>{stats.views}</Quantity>
            </StatsViews>
            <StatsLikes >
                <Label>likes</Label>
                <Quantity>{stats.likes}</Quantity>
            </StatsLikes>
        </StatsInfo>    
    </ProfileInfo>);
        
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};