import Carousel from "./Carousel";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
function Tailwind() {
    return (
      <>
        <h1 className="text-4xl lg:text-7xl font-bold text-red-500 text-center">
          Tailwind Components
        </h1>
        <h2 className="text-6xl text-center mt-20" id="register">Registration Form</h2>
        <div className="bg-gradient-to-tl from-blue-400 via-cyan-900 to-green-500 w-11/12 flex flex-col justify-center items-center rounded-lg mt-5">
          <RegistrationForm></RegistrationForm>
        </div>
        
        <h2 className="text-6xl text-center mt-20" id="login">Log In Form</h2>
        <div className="bg-gradient-to-tl from-blue-400 via-cyan-900 to-green-500 w-11/12 flex flex-col justify-center items-center rounded-lg mt-5 mb-10">
          <LoginForm></LoginForm>
        </div>

        <h2 className="text-6xl text-center mt-20" id="carousel">Carousel</h2>
        <div className="bg-gradient-to-tl from-blue-400 via-cyan-900 to-green-500 w-11/12 flex flex-col justify-center items-center rounded-lg mt-5 mb-10">
          <Carousel></Carousel>
        </div>
      </>
    );
  }
  
  export default Tailwind;