import Link from "next/link"
import Image from "next/image"

function About(){
    return(
        <div>
            <nav className="flex space-x-6 justify-center items-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        
</nav>
  
<div className="flex  mt-20 md:mt-20 justify-center items-center">
<Image src="/bg.jpg"alt="picture"width={200} height={200} className="rounded-full shadow-2xl"/ >
   </div>

   {/* About section */}
   <div className="font-bold mx-4  md:mx-20 lg:mx-40flex flex-col items-start md:items-start h-auto md:h-screen mt-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-teal-700 duration-300">Frontend Developer</h1>
    <h2 className="ml-0 md:ml-4 text-lg md:text-xl mt-2">Hi, I am Shumaila</h2>
    <h3 className=" ml-0 md:ml-10 text-center md:text-start text-base md:text-lg mt-2">A beginner Frontend developer with a growing passion for creating dynamic web application. <br />
        currently exploring TypeScript, Next.JS , Tailwind cass, 
    </h3>


{/* Skill section */}
    <div className="p-4 md:p-6 w-full md:w-3/4 lg:w-2/3">
      <h1 className="text-xl md:text-2xl font-bold mb-4">My Skills</h1>

      {/* HTML Skill Bar */}
      <div className="my-2">
        <p>HTML</p>
        <div className="w-48 sm:w-64 bg-gray-300 h-4 rounded">
          <div className="bg-blue-500 h-4 rounded" style={{ width: "90%" }}></div>
        </div>
      </div>

      {/* CSS Skill Bar */}
      <div className="my-2">
        <p>CSS</p>
        <div className="w-48 sm:w-64 bg-gray-300 h-4 rounded">
          <div className="bg-blue-500 h-4 rounded" style={{ width: "80%" }}></div>
        </div>
      </div>

      {/* JavaScript Skill Bar */}
      <div className="my-2">
        <p>JavaScript</p>
        <div className="w-48 sm:w-64 bg-gray-300 h-4 rounded">
          <div className="bg-blue-500 h-4 rounded" style={{ width: "75%" }}></div>
        </div>

         {/* Next.js Skill Bar */}
      <div className="my-2">
        <p>Next.js</p>
        <div className="w-48 sm:w-64 bg-gray-300 h-4 rounded">
          <div className="bg-blue-500 h-4 rounded" style={{ width: "65%" }}></div>
        </div>
      </div>

 {/* Tailwind css Skill Bar */}
 <div className="my-2">
        <p>Tailwind Css</p>
        <div className="w-44 bg-gray-300 h-4 rounded">
          <div className="bg-blue-500 h-4 rounded" style={{ width: "70%" }}></div>
        </div>
      </div>

      </div>
    </div>
       
    </div>
    </div>
)
    
}
export default About