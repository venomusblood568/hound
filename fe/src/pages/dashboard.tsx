import SideBar from "../components/sidebar";

export default function DashBoard() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-8">
        <h1 className="text-white text-[32px] sm:text-[40px] font-semibold tracking-wide mb-4">
          DASHBOARD
        </h1>

        {/* Example placeholder content */}
        <div className="text-gray-400">
          <p>
            Welcome to your dashboard! Here you can view stats, manage monitors,
            and check history.
          </p>
        </div>
      </main>
    </div>
  );
}
