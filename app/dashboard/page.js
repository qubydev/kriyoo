import InfiniteImages from "@/components/infinite-images";
import { getSession } from "@/auth";

export default async function Page() {
  const session = await getSession();

  if (!session) redirect('/login');

  return (
    <div className="p-4 pt-1">
      <InfiniteImages />
    </div>
  )
}