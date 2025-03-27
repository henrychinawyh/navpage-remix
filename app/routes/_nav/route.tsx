import { getNavGroupList } from "~/api/nav";
import { Outlet, useLoaderData, useNavigation } from "@remix-run/react";
import Header from "../../components/Header";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Loading } from "~/components/ui/loading";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const res = await getNavGroupList();

  return {
    navData: res || [],
    navId: Number(params.navId as string) || 1,
  };
};

export default function Index() {
  const { navData, navId } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  console.log(navigation, "navigation");

  return (
    <div>
      <Header navData={navData} activeNavId={navId} />
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <Loading loading={navigation.state === "loading"}>
          <Outlet context={{ navData: navData.map((item) => item.id) }} />
        </Loading>
      </div>
    </div>
  );
}
