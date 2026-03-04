import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ThemeToggle"
import Link from "next/link"
import { HomeIcon } from "lucide-react"


const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
    <ModeToggle />

    <Button variant="ghost" className="flex items-center gap-2" asChild>
     <Link href='/'>
      <HomeIcon className="w-5 h-5" />
      <span className="hidden lg:inline">Home</span>
     </Link>
    </Button> 

 

    </div>
  )
}

export default DesktopNavbar