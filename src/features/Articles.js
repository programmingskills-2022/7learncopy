import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";
import axios from "axios";

const ARTICLES_URL = "https://sevenlearncopy.onrender.com/articles";

//"https://sevenlearncopy.onrender.com/articles";
//"http://localhost:3500/articles";

const initialArticleState = [];

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    try {
      const response = await axios.get(ARTICLES_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: initialArticleState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticles.fulfilled, (state, action) => action.payload);
  },
});

export const articlesSliceActions = articlesSlice.actions;

export const SelectAllArticles = (state) => state.articles;

export const SelectArticleById = (state, articleId) =>
  state.articles.find((article) => article.id === articleId);

export default articlesSlice.reducer;
