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
    content: "翔子的杂货铺 - 一个分享生活、技术和有趣事物的导航网站",
  },
  { name: "keywords", content: "翔子,技术博客,生活分享,导航" },
  { name: "author", content: "翔子" },
  { name: "robots", content: "index,follow" },
  { property: "og:title", content: "翔子的杂货铺" },
  {
    property: "og:description",
    content: "一个分享生活、技术和有趣事物的导航网站",
  },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "/icon.svg" },
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
