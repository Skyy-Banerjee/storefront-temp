import { currentUser } from "@clerk/nextjs/server";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
//const {userId} = auth()
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if(profileImage) {
    return <img src={profileImage} alt="user_img" className="rounded-full w-6 object-cover"/>;
  }

  return (
    <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white"/>
  )
}

export default UserIcon;
