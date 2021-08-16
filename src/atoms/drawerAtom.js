import { atom } from 'recoil';

const drawerAtom = atom({
  key: 'topicState',
  default: {
    createTopic: false,
    showTopics: true,
    singleTopicValue: '',
    editTopicMode: false,
    currentlyShowing: 'topic',
    currentNoteShowing: '',
    currentTopicData: {},
    createNote: false,
    showNotes: true,
    singleNoteValue: '',
    editNoteMode: false,
  },
});

export default drawerAtom;
