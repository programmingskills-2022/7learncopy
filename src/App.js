import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderImage from "./components/HeaderImage";
import Nav from "./components/Nav";
import RootLayout, { rootLoader } from "./layouts/RootLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Books from "./pages/Books";
import Error from "./pages/Error";
import ProgrammingAlphabet from "./pages/ProgrammingAlphabet";
import BlogLayout from "./layouts/BlogLayout";
import BlogArticle from "./components/blog/blogContents/BlogArticle";
import Article from "./components/blog/blogArticle/Article";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      // loader: rootLoader,
      children: [
        { index: true, element: <Home /> },
        {
          path: "blog",
          element: <BlogLayout />,
          children: [
            { index: true, element: <Blog /> },
            { path: ":articleId", element: <Article /> },
          ],
        },
        { path: "books", element: <Books /> },
        { path: "programmingAlphabet", element: <ProgrammingAlphabet /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
