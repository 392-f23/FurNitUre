import { NavLink } from 'react-router-dom';
import { signInWithGoogle, signOut, useAuthState } from '../../utilities/firebase.js';
import './FunritureUserNav.less'

const SignInButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signOut}>Sign out</button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({isActive}) => isActive ? 'active' : 'inactive';

const FunritureUserNav = ({profile}) => {

  return <nav className="d-flex">
    <NavLink to="/" className={activation} end><button className="ms-auto btn btn-dark">Furnitures</button></NavLink>
    <AuthButton />
    <NavLink to={`/users/${profile.user.uid}`} className={activation} end> <img src= {profile.user.photoURL} className='bg-info rounded-circle avatar'/></NavLink>
  </nav>
}


export default FunritureUserNav;