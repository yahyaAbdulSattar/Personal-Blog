import { Navigate, Route, Routes } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import ShowPost from "../pages/ShowPost";
import SinglePost from "../pages/SinglePost";
import "../public/App.scss"
import AdminLogin from "../pages/AdminLogin";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          isLoggedIn ? (
            <CreatePost/>
          ) : (
            <Navigate to="/admin" replace/>
          )
          
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
        <Route path={'/admin'} element={
          !isLoggedIn ? (
            <AdminLogin setIsLoggedIn={setIsLoggedIn}/>
          ) : (
            <Navigate to="/create" replace/>
          )
          
        } 
        />
      </Routes>
    </>
  )
}

export default App;
