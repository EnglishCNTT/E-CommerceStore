import { RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import HomePage from "./components/HomePage";
import router from "./Routers"

function App() {
  return (
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  );
}

export default App;
