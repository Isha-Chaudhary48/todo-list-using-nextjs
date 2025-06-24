import Image from "next/image"

export default function Header()
{
    return(<>
    <header className="text-gray-60
    0 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <Image
            src="/to-do-list(1).png"
            alt="Todo Logo"
            width={40}
            height={40}
            className="w-10 h-10 text-white p-1 bg-indigo-500 rounded-full"
          />
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      
      <span className="ml-3 text-xl text-white">ToDo List</span>
    </a>
    
    
  </div>
</header>
    </>)
}