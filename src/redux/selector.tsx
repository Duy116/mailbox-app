import { createSelector } from "@reduxjs/toolkit";
import { RootState } from './store'

export const selectMails = (state: RootState) => state

export const selectMailById = createSelector(
    [
        selectMails,
        (state, id: number) => id
    ],
    (state, id) => state.find(mail => mail.id === id)
)

export const selectMailsByType = createSelector(
    [
        selectMails,
        (state, type: string) => type
    ],
    (state, type) => state.filter(mail => mail.type === type && !mail.isDeleted)
)

export const selectDeletedMail = createSelector(
    [ selectMails ],
    (state) => state.filter(mail => mail.isDeleted === true)
)