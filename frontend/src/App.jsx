import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
// import HomePage from "./pages/Homepage.js";
import HomePage from "./pages/Home.page";
import Aboutpage from "./pages/About.page";
import ContactPage from "./pages/Contact.page";
import AuthPage from "./pages/Auth.page";
import LayoutPage from "./pages/Layout.page";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage />}>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<Aboutpage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/auth#login" element={<AuthPage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
