
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";


async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id)

  if (!userInfo?.onboarded) redirect('/onboarding');

  

  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>
    </section>
  )
}

export default Page