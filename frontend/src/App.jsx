import { Route, Routes } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import ShowPost from "../pages/ShowPost";
import SinglePost from "../pages/SinglePost";
import "../public/App.scss"

function App() {
  return (
    <>
      <Routes>
        <Route index element={
          <main>
            Hello
          </main>
        }
        />
        <Route path={'/create'} element={
          <CreatePost/>
        }
        />
        <Route path={'/display'} element={
          <ShowPost />
        }
        />
        <Route path={'/post/:id'} element={
          <SinglePost/>
        }
        />
      </Routes>
    </>
  )
}

export default App;
