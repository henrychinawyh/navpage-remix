import { get } from "../utils/request"

export const getNavGroupList = async () => {
  const res = await get("/api/nav/home")
  return res
}
