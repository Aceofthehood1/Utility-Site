import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
function Tailwind() {
    return (
      <>
        <h1 className="text-4xl lg:text-5xl font-bold text-red-500 text-center">
          Tailwind Components
        </h1>
        <h2 className="text-4xl text-center m-5">Registration Form</h2>
        <RegistrationForm></RegistrationForm>
        <h2 className="text-4xl text-center m-5">Log In Form</h2>
        <LoginForm></LoginForm>
      </>
    );
  }
  
  export default Tailwind;