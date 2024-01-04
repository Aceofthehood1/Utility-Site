import "./App.css";
import NavBar from "./components/NavBar";
import Tailwind from "./components/Tailwind"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope,faUser,faLock)

function App() {
  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-4xl lg:text-7xl font-bold text-red-500 text-center m-10">
        Welcome to the Utility Site.
      </h1>
      <p className="text-2xl text-center m-10">You will be able to view components made with Tailwind ranging from login forms to navigation bars and carousels.
      Currently the versions shown will be made in react so you will have to install some packages to access some functionality. Copy the component you
      want to use and paste in your coding environment.</p>
      <div className="flex flex-col justify-center items-center">
      <Tailwind></Tailwind>
      </div>
      
    </>
  );
}

export default App;
