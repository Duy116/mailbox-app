import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import moment from 'moment';
import { Moment } from 'moment';

interface MailState {
    id: number,
    from: string,
    to: string,
    subject: string,
    body: string,
    type: string,
    date: Moment,
    isDeleted: boolean,
}

function nextId(todos: MailState[]) {
  const ids = todos.map(todo => { return todo.id });
  const maxId = Math.max(...ids);
  return maxId + 1;
}

const mailSlice = createSlice({
  name: 'mails',
  initialState: [{ id: 0, from: "init@email.com", to: "default@email.com", subject: "Test", body: "Testing", type: "Inbox", date: moment(), isDeleted: false }],
  reducers: {
    mailNewMail: (state: MailState[]) => {
        state.push({
            id: nextId(state),
            from: "default@email.com",
            to: "",
            subject: "",
            body: "",
            date: moment(),
            type: "Draft",
            isDeleted: false,
        })
    },
    deleteMail: (state: MailState[], action) => {
      const mail = state.find(it => it.id === action.payload);
      if (mail) {
        mail.isDeleted = true;
      }
    },
    restoreMail: (state: MailState[], action) => {
      const mail = state.find(it => it.id === action.payload);
      if (mail) {
        mail.isDeleted = false;
      }
    },
    sentMail: (state: MailState[], action: PayloadAction<MailState>) => {
        const index = state.findIndex((mail) => mail.id === action.payload.id);
        console.log(index, action.payload.id);
        state[index].to = action.payload.to;
        state[index].subject = action.payload.subject;
        state[index].body = action.payload.body;
        state[index].type = "Sent";
    },

    // todoToggled(state: MailState[], action) {
    //   const todo = state.find(todo => todo.text === action.payload)
    //   if (todo)
    //     todo.completed = !todo.completed
    // },
    // todoDelete(state: MailState[], action) {
    //   const todo = state.find(it => it.id === action.payload)
    //   if (todo) {
    //     const index = state.indexOf(todo)
    //     state.splice(index, 1);
    //   }
    // }
  }
})

export const { mailNewMail, deleteMail, restoreMail, sentMail } = mailSlice.actions
export default mailSlice.reducer