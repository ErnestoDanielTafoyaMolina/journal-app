import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam omnis dignissimos, voluptates, quo temporibus tempora, quam odio nam ea quia autem quae eum esse? Aspernatur officiis placeat animi cum.</Typography> */}

      {/* NothingSelected */}
      <NothingSelectedView />

      {/* NoteView */}
      {/* <NoteView /> */}

      {/* IconButton */}

      <IconButton
        size='large'
        sx={{
          color:'#fff',
          backgroundColor:'error.main',
          ':hover':{ backgroundColor:'error.main', opacity:0.9 },
          position:'fixed',
          right:50,
          bottom:50
        }}
      >
        <AddOutlined sx={{ fontSize:30 }} />
      </IconButton>
    
    </JournalLayout>
  )
}
