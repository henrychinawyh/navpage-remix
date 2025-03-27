import { LoaderFunctionArgs } from "@remix-run/node";
import { LinkContent } from "../../components/LinkContent";
import { getNavLinkByGroupId } from "~/api/nav";
import { useLoaderData } from "@remix-run/react";

export const loader = async (data: LoaderFunctionArgs) => {
  const res = await getNavLinkByGroupId(Number(data.params.navId));

  return res || [];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return <LinkContent data={data} />;
}
