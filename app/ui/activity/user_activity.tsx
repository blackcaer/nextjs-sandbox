import clsx from "clsx";
import Image from "next/image";
import { MapIcon } from "@heroicons/react/24/outline";

export default function UserActivity() {
  const userData = {
    id: 1,
    name: "John Nowak",
    amount: 1,
    email: "example@email.com",
    avatar_img_url: "/avatars/avatar1.png",
    route_img_url: "/example/route1.png",
  };

  const i = 0;
  return (
    <div key={userData.id} className="flex flex-col border w-full">
      <div
        className="flex flex-row items-center justify-between px-7 pt-7 pb-4 w-full"
      >
        <div className="flex items-center">
          <Image
            src={userData.avatar_img_url}
            alt={`${userData.name}'s profile picture`}
            className="mr-4 rounded-full"
            width={40}
            height={40}
          />
          <div className="min-w-0 mr-2">
            <p className="truncate text-sm font-semibold md:text-base">
              {userData.name}
            </p>
            <p className="hidden text-sm text-gray-500 sm:block">
              {userData.email}
            </p>
          </div>


        </div>
        <div className={`truncate text-sm font-medium md:text-base`}>
          <p>{21321}</p>
        </div>
      </div>

      <hr></hr>
      <div className="flex flex-col w-full px-7 py-4">
        
        <Image
        src={userData.route_img_url}
        alt={`${userData.name} route image`}
        width={400}
        height={400}
        className="block rounded-xl my-2"
        />
        
        <p>
        Lorem ipsum dolor sit amet
        </p>

      </div>
    </div>
  );
}
