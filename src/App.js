import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
 } from 'react-router-dom';
 import Home from './components/HomePage/home';
 

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>

            {/* <Route path="/" element={<Navigate replace={true} to="/login"/>}/>
            <Route  path="/dashboard" element={<Dashboard/>} />
            <Route  path="/register" element={<TeacherRegistrar/>}/>
            <Route  path="/login" element={<TeacherLogin/>}/>
            <Route path= '/employees' element={<Addemployees/>}/>
              <Route path="/employees/capture/:id/:name" element={<Capture/>} />
            

            <Route path="/video-feeds" element={<VideoFeeds/>}/>
            {/* <Route  path="/video-feeds/preview/:id" element={<VideoPreview/>}/> */}
            {/* <Route path="/attendance" element={<Attendance/>}/>  */}
            
            <Route  path="/" element={<Home/>} />
            </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
