function Css() {
  return (
    <>
      <h1 className="text-5xl font-bold text-red-500 text-center m-5">
        CSS Components
      </h1>
      <h2 className="text-4xl text-center m-5">Registration form</h2>
      <form className="w-1/4 flex flex-col bg-blue-500 rounded-lg justify-center items-center mb-5">
            <h3 className="text-3xl m-2">Register</h3>
            <input id="fname" className="w-42 h-10 rounded-lg m-5" type="text" placeholder="First Name" />
            <input id="lname" className="w-42 h-10 rounded-lg m-5" type="text" placeholder="Last Name" />
            <input id="email" className="w-42 h-10 rounded-lg m-5" type="email" placeholder="Email"/>
            <input id="password" className="w-42 h-10 rounded-lg m-5" type="password" placeholder="Password"/>
            <button className="bg-red-500 w-28 h-10 rounded-lg m-3 hover:scale-75" >Sign up</button>
        </form>
    </>
  );
}

export default Css;