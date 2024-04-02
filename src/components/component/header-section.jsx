import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import '../../styles/general.css';

export function HeaderSection() {
  return (
    <div className="bg-white text-black">
      
      <nav className="container mx-auto flex items-center justify-between p-5">
        <div className="flex items-center space-x-4">
          <Image
            src="/Finishedmodel.svg"
            alt="Logo"
            width={80}
            height={10}
            priority
          />
          <div className="hidden space-x-2 md:flex">
            <Link className="hover:underline" style={{color: 'black'}} href="#">
              CASE STUDIES
            </Link>
            <div className="relative group">
              <Link className="hover:underline" href="#">
                SERVICES
              </Link>
              <div className="absolute left-0 hidden w-40 space-y-2 bg-white py-2 px-4 text-black group-hover:block">
                <Link className="block hover:underline" href="#">
                  Marketing
                </Link>
                <Link className="block hover:underline" href="#">
                  Consulting
                </Link>
              </div>
            </div>
            <Link className="hover:underline" href="#">
              OUR BRANCHES
            </Link>
            <div className="relative group">
              <Link className="hover:underline" href="#">
                ABOUT
              </Link>
              <div className="absolute left-0 hidden w-40 space-y-2 bg-white py-2 px-4 text-black group-hover:block">
                <Link className="block hover:underline" href="#">
                  Our Team
                </Link>
                <Link className="block hover:underline" href="#">
                  Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Button className="nav-button">JOIN EXCITE</Button>
      </nav>
      <div className="relative">
        
                  <Image
        alt="Model on car"
          className="h-[calc(100vh-80px)] w-full object-cover z-minus-1"
          src="/road-to-sunrise-facebook-cover.jpg" 
                width={80}
              height={10}
              priority
            />
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 space-y-6 text-center">
          <h1 className="text-6xl font-bold">EXCITE</h1>
          <p className="text-xl">
            CRAFTING ONLYFANS SUCCESS,
            <br />
            ONE CREATOR AT A TIME
          </p>
          <Button className="">JOIN EXCITE</Button>
        </div>
        <div  className="absolute bottom-0 left-0 right-0 mx-auto mb-10 flex w-full max-w-md justify-between px-5">
          <div className="text-center">
            <ScalingIcon className="mx-auto mb-2 h-6 w-6" />
            <span className="block text-sm">GROWTH MANAGEMENT</span>
          </div>
          <div className="text-center">
            <UsersIcon className="mx-auto mb-2 h-6 w-6" />
            <span className="block text-sm">ACCOUNT MANAGEMENT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScalingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 3 9 15" />
      <path d="M12 3H3v18h18v-9" />
      <path d="M16 3h5v5" />
      <path d="M14 15H9v-5" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
