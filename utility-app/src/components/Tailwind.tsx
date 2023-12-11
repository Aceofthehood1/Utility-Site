import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
function Tailwind() {
    return (
      <>
        <h1 className="text-4xl lg:text-5xl font-bold text-red-500 text-center">
          Tailwind Components
        </h1>
        <h2 className="text-4xl text-center mt-20">Registration Form</h2>
        <div className="bg-green-500 w-11/12 flex flex-col justify-center items-center rounded-lg mt-5">
          <RegistrationForm></RegistrationForm>
        </div>
        
        <h2 className="text-4xl text-center mt-20">Log In Form</h2>
        <div className="bg-green-500 w-11/12 flex flex-col justify-center items-center rounded-lg mt-5 mb-10">
          <LoginForm></LoginForm>
        </div>
      </>
    );
  }
  
  export default Tailwind;