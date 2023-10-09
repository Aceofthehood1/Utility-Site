import "./App.css";
import NavBar from "./components/NavBar";
import Css from "./components/Css";
import Tailwind from "./components/Tailwind"

function App() {
  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-4xl lg:text-5xl font-bold text-red-500 text-center m-10">
        Welcome to the Utility Site.
      </h1>
      <p className="text-center m-10">You will be able to view components made with CSS and Tailwind ranging from login forms to navigation bars and carousels.
      Each having an html and  react version. Copy the component you
      want to use and paste in your coding environment.</p>
      <div className="flex flex-col justify-center items-center">
      <Tailwind></Tailwind>
      </div>
      
    </>
  );
}

export default App;
