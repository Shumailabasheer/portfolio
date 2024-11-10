
import Link from "next/link"
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
function Contact(){
    return(
        <div>
            <nav className="flex space-x-6 justify-center items-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

</nav>


<div className="p-6 text-center">
      {/* Top Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} className="text-green-500" />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope size={30} className="text-blue-500" />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="text-blue-700" />
        </a>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <p className="text-lg">Phone:+9200000000</p>
        <p className="text-lg">Email: your-email@example.com</p>
        <p className="text-lg">LinkedIn: linkedin.com/in/your-profile</p>
        <p className="text-lg">WhatsApp:+9200000000</p>
      </div>
    </div>


        </div>
    )
}
export default Contact