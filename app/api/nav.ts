import { NavHomeDataProps, NavHomeLinkDataProps } from "~/typings/nav";
import { get } from "../utils/request";

/**
 * @name 获取导航链接组
 * @returns
 */

export const getNavGroupList = async (): Promise<NavHomeDataProps[]> => {
  const res = await get("/nav/home");
  return res;
};

/**
 * @name 根据分组id获取导航链接
 */
export const getNavLinkByGroupId = async (
  groupId: number
): Promise<NavHomeLinkDataProps[]> => {
  const res = await get("/nav/link/getByGroupId", { groupId });
  return res;
};
