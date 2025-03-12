import { getNavGroupList } from "~/api/nav"
import { Outlet, useLoaderData } from "@remix-run/react"
import Header from "../../components/Header"
import { LoaderFunctionArgs } from "@remix-run/node"

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const res = await getNavGroupList()
  return {
    navData: res || [],
    navId: Number(params.navId as string) || 0,
  }
}

export default function Index() {
  const { navData, navId } = useLoaderData<typeof loader>()

  return (
    <div>
      <Header navData={navData} activeNavId={navId} />
      <Outlet />
    </div>
  )
}
