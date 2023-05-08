import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { compareAsc, format, sub } from "date-fns";
import axios from "axios";

const initialCommentState = {
  comments: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const COMMENTS_URL = "https://sevenlearncopy.onrender.com/comments";
//"https://sevenlearncopy.onrender.com/comments";
//"http://localhost:3500/comments";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    try {
      const response = await axios.get(COMMENTS_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const addNewComment = createAsyncThunk(
  "comments/addNewComment",
  async (newComment) => {
    try {
      const response = await axios.post(COMMENTS_URL, newComment);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (comment) => {
    const { id } = comment;
    try {
      const response = await axios.delete(`${COMMENTS_URL}/${id}`);
      if (response?.status === 200) return comment;
      return `${response?.status} : ${response?.statusText}`;
    } catch (err) {
      return err.message;
    }
  }
);

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async (editComment) => {
    const { id } = editComment;
    try {
      const response = await axios.put(`${COMMENTS_URL}/${id}`, editComment);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialCommentState,
  reducers: {
    add: {
      reducer(state, action) {
        state.comments.push(action.payload);
      },
      prepare(id, arId, name, email, description, rating) {
        return {
          payload: {
            parentId: 0,
            id,
            articleId: arId,
            name,
            email,
            description,
            date: new Date().toISOString,
            rate: rating,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewComment.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Post comment could not complete");
          console.log(action.payload);
          return;
        }
        state.status = "succeeded";
        state.comments = [...state.comments, action.payload];
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("delete could not complete");
          console.log(action.payload);
          return;
        }

        const { id } = action.payload;
        const comments = state.comments.filter((comment) => comment.id !== id);
        state.comments = comments;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("update could not complete");
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        const comments = state.comments.filter((comment) => comment.id !== id);
        state.comments = [...comments, action.payload];
      });
  },
});

export const selectCommentsByArticleId = (state, articleId) =>
  state.comments.comments.filter(
    (comment) => comment.articleId === articleId && comment.parentId === 0
  );

export const selectCommentsByParentId = (state, parentId) =>
  state.comments.comments.filter((comment) => comment.parentId === parentId);

export const selectCommentById = (state, commentId) =>
  state.comments.comments.find((comment) => comment.id === commentId);

export const selectAllComments = (state) => state.comments.comments;
export const getCommentsStatus = (state) => state.comments.status;
export const getCommentsError = (state) => state.comments.error;

export const commentsSliceActions = commentsSlice.actions;

export default commentsSlice.reducer;
