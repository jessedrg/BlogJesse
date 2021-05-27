import React from "react";
import { useSelector } from "react-redux";
import Blogs from "./Components/Blogs";
import Homepage from './Components/HomePage'
import Navbar from './Components/NavBar';
import { selectSignedIn } from './Freatures/userSlice';
import './App.css';

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;