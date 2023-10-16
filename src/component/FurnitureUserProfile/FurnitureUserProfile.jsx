import { Link } from 'react-router-dom';

export const firstLastName = (user) => (
  user ? `${user.firstName} ${user.lastName}` : 'Unknown user'
);

const FurnitureUserProfile   = ({profile}) => {
    console.log(profile);
    const user = profile.user;
    return <div>
    <h3>
      { user.displayName}  
      { 
        profile?.isAdmin && 
        <Link to={`/users/${user.id}/edit`} style={{fontSize: '0.7em', marginLeft: '2em'}}>
          <i className="bi bi-pencil"></i>
        </Link> }
      </h3>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
  </div>
}

export default FurnitureUserProfile;