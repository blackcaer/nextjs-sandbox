import Image from "next/image";
import SideNav from "../ui/sidenav";

export default function Page() {
  return (
    <span lang='en' suppressHydrationWarning>
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">abcde</div>
    </div>
    </span>
  );
}
