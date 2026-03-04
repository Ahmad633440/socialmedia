import { ModeToggle } from "./components/ThemeToggle"



const page = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1>Social Media App</h1>
      <ModeToggle />
    </div>
  )
}

export default page