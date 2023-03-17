import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import NotFound from "./page/NotFound";
import AllPosts from "./page/AllPosts";
import AddNew from "./page/AddNew";
import Preview from "./page/Preview";
import EditPost from "./page/EditPost";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-gray-100 min-h-screen text-base">
            <Outlet />
          </div>
        }
      >
        <Route path="" element={<Main />}>
          <Route index element={<Navigate to="/all-posts" replace />} />
          <Route path="all-posts" element={<AllPosts />} />
          <Route path="add-new" element={<AddNew />} />
          <Route path="edit-post/:id" element={<EditPost />} />
          <Route path="preview" element={<Preview />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
