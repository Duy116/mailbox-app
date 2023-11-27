import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface MailState {
    id: number,
    from: string,
    to: string,
    subject: string,
    body: string,
    type: string,
    isDeleted: boolean,
}

function nextId(todos: MailState[]) {
  const ids = todos.map(todo => { return todo.id });
  const maxId = Math.max(...ids);
  return maxId + 1;
}

const mailSlice = createSlice({
  name: 'todos',
  initialState: [{ id: 0, from: "Init", to: "Self", subject: "Test", body: "Testing", type: "Inbox", isDeleted: false }],
  reducers: {
    mailNewMail: (state: MailState[]) => {
        state.push({
            id: nextId(state),
            from: "",
            to: "",
            subject: "",
            body: "",
            type: "Draft",
            isDeleted: false,
        })
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

export const { mailNewMail } = mailSlice.actions
export const selectTodos = (state: RootState) => state
export default mailSlice.reducer