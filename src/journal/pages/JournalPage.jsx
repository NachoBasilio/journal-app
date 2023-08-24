
import { IconButton } from "@mui/material";
import JournalLayout from "../layout/JournalLayout";
import NoteView from "../views/NoteView";
import NothingSelectedView from "../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal/thunks";
import { useDispatch, useSelector } from "react-redux";

export default function JournalPage() {
  const dispatch = useDispatch()
  const {isSaving, active} = useSelector(state => state.journal)
  console.log(isSaving)
  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
  return (
      <JournalLayout>
        {/* <Typography >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio, aperiam, necessitatibus quos esse dicta mollitia temporibus possimus assumenda officia consectetur eos exercitationem cum molestiae nemo. Corporis provident cum minus!</Typography> */}
        
        
        {
          active ? <NoteView/> : <NothingSelectedView/>
        }

        {
          isSaving ? null : (
            <IconButton
            onClick={onClickNewNote}
            size='large'
            sx={{
              color: 'white',
              backgroundColor: 'error.main',
              ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
              position: 'fixed',
              right: 50,
              bottom: 50
            }}
            >
              <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
          )
        }
      </JournalLayout>
  )
}
