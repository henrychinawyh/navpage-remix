/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";
import dayjs from "dayjs";
import classNames from "classnames";
import { Toaster } from "./components/ui/sonner";

dayjs.locale("zh-cn");

// 这个会被自动导入到html的head中，并且每个路由都可以单独导出一个links，他们会被收集并渲染到<Links />
export const links: LinksFunction = () => [
  {
    rel: "shortcut icon",
    href: "/icon.svg",
    type: "image/x-icon",
  },
];

// 导出meta函数，用于管理页面的元数据
export const meta: MetaFunction = () => [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  {
    name: "description",
    content:
      "翔子的杂货铺 - 一个集成生活、技术、工具和资源的综合导航平台。这里不仅有丰富的技术博客文章、编程资源，还包含日常生活分享、实用工具推荐，以及精心筛选的优质网站链接。让每位访客都能轻松找到有价值的内容。",
  },
  {
    name: "keywords",
    content:
      "翔子,技术博客,生活分享,导航,网址导航,技术教程,编程资源,工具推荐,个人博客,前端开发,技术分享,生活记录,实用工具,资源聚合,效率工具",
  },
  { name: "author", content: "翔子" },
  { name: "robots", content: "index,follow" },
  { name: "mobile-web-app-capable", content: "yes" },
  { name: "apple-mobile-web-app-capable", content: "yes" },
  { name: "theme-color", content: "#ffffff" },
  { property: "og:title", content: "翔子的杂货铺 - 你的个性化导航助手" },
  {
    property: "og:description",
    content:
      "发现优质内容的最佳起点！这里汇集了技术博客、生活分享、实用工具和精选资源，助你轻松获取有价值的信息。",
  },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "/icon.svg" },
  { property: "og:site_name", content: "翔子的杂货铺" },
  { property: "og:locale", content: "zh_CN" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "翔子的杂货铺 - 你的个性化导航助手" },
  {
    name: "twitter:description",
    content:
      "发现优质内容的最佳起点！这里汇集了技术博客、生活分享、实用工具和精选资源，助你轻松获取有价值的信息。",
  },
  { name: "twitter:image", content: "/icon.svg" },
  { title: "翔子的杂货铺" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div
          className={classNames([
            // 基础样式
            "flex flex-col w-screen h-screen",
            // 布局样式
            "overflow-x-hidden overflow-y-auto pb-8",
          ])}
        >
          {children}
          <Toaster />
          <ScrollRestoration />
          <Scripts />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  const navigation = useNavigation();

  return (
    <div
      className={classNames([
        // 状态样式
        navigation.state === "loading" ? "loading" : "",
      ])}
      id="detail"
    >
      <Outlet />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  }

  return (
    <>
      <h1>Error!</h1>
      <p>{(error as any)?.message ?? "Unknown error"}</p>
    </>
  );
}
