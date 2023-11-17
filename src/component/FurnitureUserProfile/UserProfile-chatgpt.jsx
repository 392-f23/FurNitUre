import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: 'auto',
  maxWidth: 500,
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

const UserProfile = ({ profile }) => {
    const user = profile.user;

  return (
    <StyledPaper elevation={3}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <LargeAvatar alt={user.displayName} src={user.photoURL} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <Typography
                  component="span"
                  variant="h6"
                  color="textPrimary"
                >
                  {user.displayName}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  {user.email}
                </Typography>
              </>
            }
            secondary={user.phone}
          />
        </ListItem>
      </List>
    </StyledPaper>
  );
};

export default UserProfile;
