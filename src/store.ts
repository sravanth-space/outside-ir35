import { Store, configureStore } from '@reduxjs/toolkit';
import jobSlice, { JobsState } from './features/job/jobSlice';
import userSlice, { UserState } from './features/user/userSlice';
import allJobsSlice, { AllJobsState } from './features/allJobs/allJobsSlice';
import thunkMiddleware from 'redux-thunk';

// Define the root state type/interface
export interface RootState {
  user: UserState;
  job: JobsState;
  allJobs: AllJobsState;
}

export const store: Store<RootState> = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
  middleware: [thunkMiddleware]
});


// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch