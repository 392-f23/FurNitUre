import { Link } from 'react-router-dom';
import './FurnitureUserProfile.less'
import FurnitureItemContainer from '../FurnitureItemContainer/FurnitureItemContainer'

export const findUserItems = (user, data) => {
    const name = user.displayName;
    const owned = data.items.filter((item) => {
        item.sellerName == name;
    })
    return owned;
}

const FurnitureUserProfile = ({profile, data}) => {
    const user = profile.user;
    const owned = findUserItems(user, data);
    console.log(owned);
//     return <div>
//     <h3>
//       { user.displayName}  
//       { 
//         profile?.isAdmin && 
//         <Link to={`/users/${user.id}/edit`} style={{fontSize: '0.7em', marginLeft: '2em'}}>
//           <i className="bi bi-pencil"></i>
//         </Link> }
//       </h3>
//     <p>Email: {user.email}</p>
//     <p>Phone: {user.phone}</p>
//   </div>
    return <div className="profile-card">
        <img className="avatar-profile" src={`${user.photoURL}`} alt="User Avatar" />
        <h2 className="user-name">{user.displayName}</h2>
        <p className="user-email">{user.email}</p>
        <p className="user-phone">{user.phone}</p>
        <FurnitureItemContainer items={data.items} filteredItems={null} filters={[]} />
    </div>
}

export default FurnitureUserProfile;