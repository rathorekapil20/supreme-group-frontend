import Link from "next/link";
import { Icons } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-white  relative min-h-[50vh] sm:h-[70vh]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-start">
          <Icons.supreme className="w-32 h-32 sm:w-48 sm:h-36 " />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <h3 className="font-bold uppercase mb-4 sm:mb-8 text-sm sm:text-base">APPLICATIONS</h3>
            <ul className="space-y-3 sm:space-y-6 text-xs sm:text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Apparel</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Automotive</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Filtration</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Customised Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold uppercase mb-4 sm:mb-8 text-sm sm:text-base">COMPANY</h3>
            <ul className="space-y-3 sm:space-y-6 text-xs sm:text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Innovation</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Global Competency</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold uppercase mb-4 sm:mb-8 text-sm sm:text-base">MORE</h3>
            <ul className="space-y-3 sm:space-y-6 text-xs sm:text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms and Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold uppercase mb-4 sm:mb-8 text-sm sm:text-base">FOLLOW US</h3>
            <ul className="space-y-3 sm:space-y-6 text-xs sm:text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Twitter</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Instagram</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Medium</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-500 pt-4 sm:pt-8 border-t border-gray-200">
          <p>©2023. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Supreme house: 110, 16th Road Chembur, Mumbai - 400071</p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-30 sm:opacity-100">
        <Icons.body className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]" />
      </div>
    </footer>
  );
}