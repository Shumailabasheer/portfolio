import Image from "next/image"
import Link from "next/link"

function Homepage(){
  return(
    <div> 
        <nav className="flex space-x-6 justify-center items-center mt-2 ">
        <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>

</nav>

<div className="flex justify-center items-start mt-32 ">
 <Image src="/bg.jpg"alt="picture"width={200} height={200} className="rounded-3xl"/ >
</div>

<div className=" flex uppercase text-center justify-center mt-4 text-3xl font-serif ">
<h1 className=" text-black ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
 hover:text-teal-700  duration-300">my portfolio website</h1>
</div>
<div className=" rounded-lg flex items-center justify-center ">
<button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500
     hover:to-orange-500 w-28 h-10 rounded text-white">Explore</button>
    </div>
    </div>
    
  )   
}
export default Homepage