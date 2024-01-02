import basketball from "../assets/basker.jpg";
import comic from "../assets/comic.jpg";
import detty from "../assets/detty.jpg";
import naruto from "../assets/naruto.png";
import natsu from "../assets/natsu.jpg";
import usopp from "../assets/Usopp.jpeg";
import tribute from "../assets/tribute.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

function Carousel() {
  let Code = '\n<div className="container flex flex-col justify-center items-center">\n<div className="relative flex items-center">\n<MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick ={slideLeft} size={40} />\n<div id="slider" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-5">\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={basketball} alt="carousel image"></img>\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={naruto} alt="carousel image"></img>\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={natsu} alt="carousel image"></img>\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={usopp} alt="carousel image"></img>\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={detty} alt="carousel image"></img>\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={tribute} alt="carousel image"></img>\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={comic} alt="carousel image"></img>\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={basketball} alt="carousel image"></img>\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={naruto} alt="carousel image"></img>\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={natsu} alt="carousel image"></img>\n<img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={usopp} alt="carousel image"></img>\n</div>\n<MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40} />\n</div>\n</div>\n';
  async function handleCopyToClipboard() {
    try {
      await navigator.clipboard.writeText(Code!);
      console.log("Content copied to clipboard");
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      console.error("Failed to copy: ", err);
      /* Rejected - text failed to copy to the clipboard */
    }
    alert("You have copied to clipboard");
  }

  const slideLeft = (): void => {
    let slider: HTMLElement | null = document.getElementById('slider');
    if (slider) {
        slider.scrollLeft = slider.scrollLeft - 300;
    }
}

  const slideRight = (): void => {
  let slider: HTMLElement | null = document.getElementById('slider');
  if (slider) {
      slider.scrollLeft= slider.scrollLeft + 300;
  }
}

  return (
    <>
      <div className="container flex flex-col justify-center items-center">
        <div className="relative flex items-center">
        <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick ={slideLeft} size={40} />
          <div id="slider" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-5">
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={basketball} alt="carousel image"></img>
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={naruto} alt="carousel image"></img>
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={natsu} alt="carousel image"></img>
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={usopp} alt="carousel image"></img>
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={detty} alt="carousel image"></img>
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={tribute} alt="carousel image"></img>
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={comic} alt="carousel image"></img>
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={basketball} alt="carousel image"></img>
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={naruto} alt="carousel image"></img>
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={natsu} alt="carousel image"></img>
            <img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={usopp} alt="carousel image"></img>
          </div>
          <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40} />
          </div>
      </div>
      {/**Used npm scroll bar hide package to hide scrollbar */}
      <h3 className="text-5xl m-2 text-center">Code</h3>
      <code className="flex flex-col justify-center items-center bg-orange-600 p-5 rounded-lg w-11/12 mb-10 text-lg">
        <p id="clipboard">
              &lt;div className="container flex flex-col justify-center items-center"&gt;<br></br>
              &lt;div className="relative flex items-center"&gt;<br></br>
              &lt;MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick =&#123;slideLeft&#125; size=&#123;40&#125; /&gt;<br></br>
              &lt;div id="slider" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-5"&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;basketball&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;naruto&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;natsu&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;usopp&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;detty&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;tribute&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;comic&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;basketball&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;naruto&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;natsu&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;img className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src=&#123;usopp&#125; alt="carousel image"&gt;&lt;/img&gt;<br></br>
              &lt;/div&gt;<br></br>
              &lt;MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick=&#123;slideRight&#125; size=&#123;40&#125; /&gt;<br></br>
              &lt;/div&gt;<br></br>
              &lt;/div&gt;<br></br>
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

export default Carousel;