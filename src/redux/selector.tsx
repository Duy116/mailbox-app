import { createSelector } from "@reduxjs/toolkit";
import { RootState } from './store'

export const selectMails = (state: RootState) => state

export const selectInboxMails = createSelector(
    selectMails,
    (state) => state.filter(mail => mail.type === "Inbox")
)

export const selectMailsByType = createSelector(
    [
        selectMails,
        (state, type: string) => type
    ],
    (state, type) => state.filter(mail => mail.type === type)
)