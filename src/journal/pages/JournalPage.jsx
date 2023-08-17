
import JournalLayout from "../layout/JournalLayout";
import NoteView from "../views/NoteView";
// import NothingSelectedView from "../views/NothingSelectedView";

export default function JournalPage() {
  return (
      <JournalLayout>
        {/* <Typography >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio, aperiam, necessitatibus quos esse dicta mollitia temporibus possimus assumenda officia consectetur eos exercitationem cum molestiae nemo. Corporis provident cum minus!</Typography> */}
        {/* <NothingSelectedView/> */}
        <NoteView/>
      </JournalLayout>
  )
}
