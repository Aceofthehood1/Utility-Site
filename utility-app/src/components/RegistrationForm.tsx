function RegistrationForm() {
    return (
      <>
        <form className="w-3/4 lg:w-2/4 flex flex-col bg-blue-500 rounded-lg justify-center items-center mb-5">
            <h3 className="text-2xl lg:text-3xl m-2">Create An Account</h3>
            <input id="fname" className="text-lg lg:w-80 h-12 rounded-lg m-5" type="text" placeholder="First Name" />
            <input id="lname" className="text-lg lg:w-80 h-12 rounded-lg m-5" type="text" placeholder="Last Name" />
            <input id="email" className="text-lg lg:w-80 h-12 rounded-lg m-5" type="email" placeholder="Email"/>
            <input id="password" className="text-lg lg:w-80 h-12 rounded-lg m-5" type="password" placeholder="Password"/>
            <button className="bg-red-500 w-28 h-10 rounded-lg m-3 hover:scale-110">Sign up</button>
            <a href="#" className="text-sm lg:ml-44 mb-4 hover:text-red-600 items-end">Already have an account? Click here to sign in</a>
        </form>
        
      </>
    );
  }
  
  export default RegistrationForm;