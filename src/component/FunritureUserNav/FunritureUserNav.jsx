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
  var avatar =  '';
  if (profile != null){
    if( profile.user != null){
      avatar = profile.user.photoURL;
    }

    if(avatar == null){
      avatar = '';
    }
  }

  

  const AvatarButton = ({profile}) => {
    if (profile == null){
      return;
    }
    if (profile.user == null){
      return;
    }
    return <NavLink to={`/users/${profile.user.uid}`} className={activation} end> <img src= {profile.user.photoURL} className='bg-info rounded-circle avatar'/></NavLink>
  } 

  return <nav className="d-flex">
    <AuthButton />
    <AvatarButton profile={profile}/>
  </nav>
}


export default FunritureUserNav;