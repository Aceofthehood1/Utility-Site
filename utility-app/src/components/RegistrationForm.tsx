import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegistrationForm() {
  let RegisterCode =
    '\n<form className="w-11/12 lg:w-2/4 flex flex-col bg-blue-500 rounded-lg justify-center items-center mt-5 mb-5">\n<h3 className="text-5xl m-2">Create An Account</h3>\n<div className="ml-2 flex flex-row justify-center items-center">\n<FontAwesomeIcon icon="user" className="h-16" />\n<input id="fname" className="text-xl w-60 lg:w-80 h-16 rounded-lg m-5 p-5" type="text" placeholder="First Name"/>\n</div>\n<div className="ml-2 flex flex-row justify-center items-center">\n<FontAwesomeIcon icon="user" className="h-16" />\n<input id="lname" className="text-xl w-60 lg:w-80 h-16 rounded-lg m-5 p-5" type="text" placeholder="Last Name"/>\n</div>\n<div className="ml-2 flex flex-row justify-center items-center">\n<FontAwesomeIcon icon="envelope" className="h-16" />\n<input id="email" className="text-xl w-60 lg:w-80 h-16 rounded-lg m-5 p-5" type="email" placeholder="Email"/>\n</div>\n<div className="ml-2 flex flex-row justify-center items-center">\n<FontAwesomeIcon icon="lock" className="h-16" />\n<input id="password" className="text-xl w-60 lg:w-80 h-16 rounded-lg m-5 p-5" type="password" placeholder="Password"/>\n</div>\n<button className="w-28 h-16 m-3 p-2 rounded-lg relative overflow-hidden border border-red-900 bg-red-600 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-orange-600 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-orange-600 after:duration-500 hover:text-white hover:shadow-blue-900 hover:before:h-2/4 hover:after:h-2/4">\n<span className="relative text-lg z-10">Sign up</span>\n</button>\n<a href="#" className="text-lg text-center mb-5 lg:mb-4 transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full hover:text-red-600">Already have an account? Click here to sign in</a>\n</form>\n';
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
      <div className="container flex flex-col justify-center items-center">
        <form className="w-11/12 lg:w-2/4 flex flex-col bg-blue-500 rounded-lg justify-center items-center mt-5 mb-5">
          <h3 className="text-5xl m-2 text-center">Create An Account</h3>
          <div className="ml-2 flex flex-row justify-center items-center">
            <FontAwesomeIcon icon="user" className="h-16" />
            <input
              id="fname"
              className="text-xl w-60 lg:w-80 h-16 rounded-lg m-5 p-5"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="ml-2 flex flex-row justify-center items-center">
            <FontAwesomeIcon icon="user" className="h-16" />
            <input
              id="lname"
              className="text-xl w-60 lg:w-80 h-16 rounded-lg m-5 p-5"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="ml-2 flex flex-row justify-center items-center">
            <FontAwesomeIcon icon="envelope" className="h-16" />
            <input
              id="email"
              className="text-xl w-60 lg:w-80 h-16 rounded-lg m-5 p-5"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="ml-2 flex flex-row justify-center items-center">
            <FontAwesomeIcon icon="lock" className="h-16" />
            <input
              id="password"
              className="text-xl w-60 lg:w-80 h-16 rounded-lg m-5 p-5"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="w-28 h-16 m-3 p-2 rounded-lg relative overflow-hidden border border-red-900 bg-red-600 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-orange-600 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-orange-600 after:duration-500 hover:text-white hover:shadow-blue-900 hover:before:h-2/4 hover:after:h-2/4">
            <span className="relative text-lg z-10">Sign up</span>
          </button>
          <a
            href="#"
            className="text-lg text-center mb-5 lg:mb-4 transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full hover:text-red-600"
          >
            Already have an account? Click here to sign in
          </a>
        </form>
      </div>
      <h3 className="text-5xl m-2 text-center">Code</h3>
      <code className="flex flex-col justify-center items-center bg-orange-600 p-5 rounded-lg w-11/12 mb-10 text-lg">
        <p id="clipboard">
          &lt;form className="w-11/12 lg:w-2/4 flex flex-col bg-blue-500
          rounded-lg justify-center items-center mt-5 mb-5"&gt;<br></br>
          &lt;h3 className="text-5xl m-2"&gt;Create An Account&lt;/h3&gt;
          <br></br>&lt;div className="ml-2 flex flex-row justify-center
          items-center"&gt;<br></br>
          &lt;FontAwesomeIcon icon="user" className="h-16" /&gt; <br></br>
          &lt;input id="fname" className="text-xl w-60 lg:w-80 h-16 rounded-lg
          m-5 p-5" type="text" placeholder="First Name"/&gt;<br></br>
          &lt;/div&gt; <br></br>&lt;div className="ml-2 flex flex-row
          justify-center items-center"&gt;<br></br>
          &lt;FontAwesomeIcon icon="user" className="h-16" /&gt; <br></br>
          &lt;input id="lname" className="text-xl w-60 lg:w-80 h-16 rounded-lg
          m-5 p-5" type="text" placeholder="Last Name"/&gt;<br></br>
          &lt;/div&gt;<br></br> &lt;div className="ml-2 flex flex-row
          justify-center items-center"&gt;<br></br>
          &lt;FontAwesomeIcon icon="envelope" className="h-16" /&gt; <br></br>
          &lt;input id="email" className="text-xl w-60 lg:w-80 h-16 rounded-lg
          m-5 p-5" type="email" placeholder="Email"/&gt;<br></br> &lt;/div&gt;
          <br></br> &lt;div className="ml-2 flex flex-row justify-center
          items-center"&gt;<br></br>
          &lt;FontAwesomeIcon icon="lock" className="h-16" /&gt; <br></br>
          &lt;input id="password" className="text-xl w-60 lg:w-80 h-16
          rounded-lg m-5 p-5" type="password" placeholder="Password"/&gt;
          <br></br> &lt;/div&gt;<br></br> &lt;button className="w-28 h-16 m-3
          p-2 rounded-lg relative overflow-hidden border border-red-900
          bg-red-600 shadow-2xl transition-all before:absolute before:left-0
          before:right-0 before:top-0 before:h-0 before:w-full
          before:bg-orange-600 before:duration-500 after:absolute after:bottom-0
          after:left-0 after:right-0 after:h-0 after:w-full after:bg-orange-600
          after:duration-500 hover:text-white hover:shadow-blue-900
          hover:before:h-2/4 hover:after:h-2/4"&gt;<br></br>
          &lt;span className="relative text-lg z-10"&gt;Sign up&lt;/span&gt; <br></br>
          &lt;/button&gt; <br></br>&lt;a href="#" className="text-lg text-center
          mb-5 lg:mb-4 transition-all before:absolute before:left-0
          before:right-0 before:top-0 before:h-0 before:w-full
          hover:text-red-600"&gt;Already have an account? Click here to sign
          in&lt;/a&gt;<br></br> &lt;/form&gt;
        </p>
        <button
          className="p-2 mt-5 w-60 h-16 rounded-lg relative overflow-hidden border border-blue-900 bg-blue-600 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-red-600 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-red-600 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4"
          onClick={handleCopyToClipboard}
        >
          <span className="relative z-10">Copy to Clipboard</span>
        </button>
      </code>
    </>
  );
}

export default RegistrationForm;
