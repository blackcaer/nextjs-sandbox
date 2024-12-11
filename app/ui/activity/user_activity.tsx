import clsx from "clsx";
import Image from "next/image";
import { MapIcon } from "@heroicons/react/24/outline";

export default function UserActivity() {
  const userData = {
    id: 1,
    name: "John Nowak",
    amount: 1,
    email: 1,
    image_url: "/avatars/avatar1.png",
  };

  const i = 0;
  return (
    <div
      key={userData.id}
      className={clsx("flex flex-row items-center justify-between p-8 border w-full")}
    >
      <div className="flex items-center">
        <Image
          src={userData.image_url}
          alt={`${userData.name}'s profile picture`}
          className="mr-4 rounded-full"
          width={32}
          height={32}
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold md:text-base">
            {userData.name}
          </p>
          <p className="hidden text-sm text-gray-500 sm:block">
            {userData.email}
          </p>
        </div>
      </div>
      <p
            className={`truncate text-sm font-medium md:text-base`}
        >
            {21321}
        </p>
    </div>
  );
}
