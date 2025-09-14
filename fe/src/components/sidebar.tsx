export default function SideBar() {
  return (
    <div className="h-screen w-36 border-r border-white flex flex-col p-4 text-gray-200">
      <h2 className="font-bold mb-2 text-[25px] tracking-wide p-2 py-8">Hound</h2>
      <nav className="flex flex-col gap-4">
        <a
          href="#"
          className="p-2 hover:text-white hover:bg-blue-950 rounded-lg transition hover:scale-105 "
        >
          Dashboard
        </a>
        <a
          href="#"
          className="p-2 hover:text-white hover:bg-blue-950 rounded-lg transition hover:scale-105 "
        >
          Monitors
        </a>
        <a
          href="#"
          className="p-2 hover:text-white hover:bg-blue-950 rounded-lg transition hover:scale-105 "
        >
          History
        </a>
        <a
          href="#"
          className="p-2 hover:text-white hover:bg-blue-950 rounded-lg transition hover:scale-105 "
        >
          Settings
        </a>
      </nav>
    </div>
  );
}
