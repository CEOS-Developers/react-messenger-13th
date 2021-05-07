import styled from 'styled-components';

const ProfileBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    padding-bottom: 20px;
    box-shadow: -3px 6px 20px -10px rgb(207, 195, 194);
`;

const NameItem = styled.div`
    margin-top:10px;
    margin-left: 20px;
`;
const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 38%;
    overflow: hidden;
`;

export default function Profile(props){
    const {profileImg, name} = props.otherProfile;
    return(
        <ProfileBox>
            <ProfileImg src={profileImg}/>
            <NameItem><h3>{name}</h3></NameItem>
        </ProfileBox>
    );
}