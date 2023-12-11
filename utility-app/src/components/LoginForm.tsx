function LoginForm() {
  let RegisterCode = '\n<form className="w-3/4 lg:w-2/4 flex flex-col bg-blue-500 rounded-lg justify-center items-center mt-5 mb-5">\n<h3 className="text-3xl m-2">Log In</h3>\n<input id="email" className="text-lg w-60 lg:w-80 h-12 rounded-lg m-5" type="email" placeholder="Email"/>\n<input id="password" className="text-lg w-60 lg:w-80 h-12 rounded-lg m-5" type="password" placeholder="Password"/>\n<button className="bg-red-500 w-28 h-10 rounded-lg m-3 hover:scale-110">Sign in</button>\n<a href="#" className="text-sm text-center lg:ml-44 mb-4 hover:text-red-600 items-end">Don\'t have an account? Click here to sign up</a>\n</form>' 
  async function handleCopyToClipboard() {
    try {
      await navigator.clipboard.writeText(RegisterCode!);
      console.log("Content copied to clipboard");
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      console.error("Failed to copy: ", err);
      /* Rejected - text failed to copy to the clipboard */
    }
    alert("You have copied to clipboard");
  }

    return (
      <>
        <form className="w-3/4 lg:w-2/4 flex flex-col bg-blue-500 rounded-lg justify-center items-center mt-5 mb-5">
            <h3 className="text-3xl m-2">Log In</h3>
            <input id="email" className="text-lg w-60 lg:w-80 h-12 rounded-lg m-5" type="email" placeholder="Email"/>
            <input id="password" className="text-lg w-60 lg:w-80 h-12 rounded-lg m-5" type="password" placeholder="Password"/>
            <button className="bg-red-500 w-28 h-10 rounded-lg m-3 hover:scale-110">Sign in</button>
            <a href="#" className="text-sm text-center lg:ml-44 mb-4 hover:text-red-600 items-end">Don't have an account? Click here to sign up</a>
        </form>

        <h3 className="text-2xl lg:text-3xl m-2">Code</h3>
        <code className="flex flex-col justify-center items-center bg-orange-600 p-5 rounded-lg w-11/12 mb-10 text-xs">
          <p id="clipboard">
            &lt;form className="w-3/4 lg:w-2/4 flex flex-col bg-blue-500
            rounded-lg justify-center items-center mt-5 mb-5"&gt;<br></br>
            &lt;h3 className="text-3xl m-2"&gt;Log In&lt;/h3&gt;<br></br>
            &lt;input id="email" className="text-lg w-60 lg:w-80 h-12 rounded-lg m-5"
            type="text" placeholder="Email"/&gt;<br></br>
            &lt;input id="password" className="text-lg w-60 lg:w-80 h-12 rounded-lg m-5"
            type="text" placeholder="Password"/&gt;<br></br>
            &lt;button className="bg-red-500 w-28 h-10 rounded-lg m-3
            hover:scale-110"&gt;Sign in&lt;/button&gt;<br></br>
            &lt;a href="#" className="text-sm lg:ml-44 mb-4 hover:text-red-600
            items-end"&gt;Dont have an account? Click here to sign up&lt;/a&gt;<br></br>
            &lt;/form&gt;
          </p>
          <button
            className="p-2 bg-blue-600 w-40 h-10 rounded-lg hover:scale-110"
            onClick={handleCopyToClipboard}
          >
            Copy to Clipboard
          </button>
        </code>
      
      

      </>
    );
  }
  
  export default LoginForm;