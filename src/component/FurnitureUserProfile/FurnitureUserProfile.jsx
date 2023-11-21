import { Link } from 'react-router-dom';
import './FurnitureUserProfile.less'
import FurnitureItemContainer from '../FurnitureItemContainer/FurnitureItemContainer'

export const findUserItems = (user, data) => {
    const name = user.displayName;
    const owned = data.items.filter((item) => {
        return item.sellerName == name;
    })
    return owned;
}

const FurnitureUserProfile = ({profile, data}) => {
    const user = profile.user;
    const owned = findUserItems(user, data);
    console.log(owned);

    return <div className="profile-card">
        <img className="avatar-profile" src={`${user.photoURL}`} alt="User Avatar" />
        <h2 className="user-name">{user.displayName}</h2>
        <p className="user-email">{user.email}</p>
        <p className="user-phone">{user.phone}</p>
        <FurnitureItemContainer items={data.items} filteredItems={null} filters={[]} />
    </div>
}

export default FurnitureUserProfile;