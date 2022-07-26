import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import stepsSlice from "./slices/stepsSlice";
import amountSlice from "./slices/amountSlice";
import accordionSlice from "./slices/accordionSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        steps: persistReducer({ key: "steps", storage }, stepsSlice),
        amount: amountSlice,
        accordion: accordionSlice
    },
    middleware: (getDefaultMiddleware: any) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    ]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
