import Image from "next/image";
import UserActivity from "@/app/ui/activity/user_activity";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <UserActivity />
    </div>
  );
}
