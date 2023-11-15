import "./FurnitureHeader.less";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import {
  signInWithGoogle,
  signOut,
  useAuthState,
} from "../../utilities/firebase.js";
import { useNavigate } from "react-router-dom";

const FurnitureHeader = ({ profile }) => {
  const [user] = useAuthState();
  const navigate = useNavigate();

  return (
    <div className="furniture-header">
      <div className="furniture-header-text-container">
        <h5 className="furniture-header-text">F</h5>
        <h5 className="furniture-header-text">u</h5>
        <h5 className="furniture-header-text">r</h5>
        <h5 className="furniture-header-text highlight">N</h5>
        <h5 className="furniture-header-text">i</h5>
        <h5 className="furniture-header-text">t</h5>
        <h5 className="furniture-header-text highlight">U</h5>
        <h5 className="furniture-header-text">r</h5>
        <h5 className="furniture-header-text">e</h5>
      </div>
      <div className={`furniture-header-login ${user ? "" : "active"}`}>
        <Button
          size="small"
          className="furniture-header-login-button"
          disableRipple={true}
          onClick={user ? signOut : signInWithGoogle}
        >
          {user ? `Logout` : `Login`}
        </Button>
        {profile.user && (
          <Avatar
            alt="Unknown User"
            src={profile.user.photoURL}
            className="furniture-header-login-avator"
            onClick={() => navigate(`/users/${profile.user.uid}`)}
          />
        )}
      </div>
    </div>
  );
};

export default FurnitureHeader;
