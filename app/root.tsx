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
import type { LinksFunction } from "@remix-run/node";
import zhCN from "antd/locale/zh_CN";

import "./tailwind.css";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";

dayjs.locale("zh-cn");

// 这个会被自动导入到html的head中，并且每个路由都可以单独导出一个links，他们会被收集并渲染到<Links />
export const links: LinksFunction = () => [
  {
    rel: "shortcut icon",
    href: "/icon.svg",
    type: "image/x-icon",
  },
  {
    rel: "stylesheet",
    href: "/root.css",
    type: "text/css",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const loading = document.getElementById("loading-index");
    if (loading) {
      loading.style.display = "none";
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          className="fixed w-screen h-screen bg-[#fff] transition-opacity duration-300 ease-in-out z-[1]"
          id="loading-index"
        >
          <div className="zonal top-0 bottom-0 left-0 right-0 m-auto" />
        </div>
        <div className="flex flex-col w-screen h-screen overflow-x-hidden overflow-y-auto bg-[#fff] px-4 sm:px-8 md:px-16 lg:px-32 pt-8 pb-8">
          <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
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
      className={navigation.state === "loading" ? "loading" : ""}
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
