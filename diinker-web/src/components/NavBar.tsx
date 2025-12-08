export default function Navbar() {
  return (
    <div className="text-white flex flex-row justify-between bg-[#0000007c] h-20 rounded-b-2xl items-center px-10 font-nature">
      <div className="text-3xl font-bold">
        <p className="">Diinker</p>
      </div>
      <div className="text-lg flex flex-row gap-8">
        <p className="">Download</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  )
}