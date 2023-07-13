import React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  messagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflowY: 'auto',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1),
  },
  messageTextContainer: {
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
  },
  messageText: {
    fontSize: theme.typography.body1.fontSize,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
}));

function Chat() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.messagesContainer}>
        <div className={classes.messageContainer}>
          <div className={classes.messageTextContainer}>
            <span className={classes.messageText}>Hello!</span>
          </div>
        </div>
        <div className={classes.messageContainer}>
          <div className={classes.messageTextContainer}>
            <span className={classes.messageText}>How are you?</span>
          </div>
        </div>
      </div>
      <div className={classes.inputContainer}>
        <TextField label="Type your message" variant="outlined" fullWidth />
        <IconButton color="primary" aria-label="send">
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
