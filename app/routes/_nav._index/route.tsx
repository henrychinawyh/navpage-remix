/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @name 主页
 */

import { LinkContent } from "../../components/LinkContent";
import { getNavLinkByGroupId } from "~/api/nav";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const res = await getNavLinkByGroupId(1);
  return res || [];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return <LinkContent data={data} />;
}
