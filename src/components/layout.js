import * as React from "react"

import Navigation from "../components/navigation"
import MainHeader from "../components/header"
import GlobalFooter from "../components/footer"
import HomeContents from "../components/home_contents"

import "@fontsource/noto-sans-jp/400.css"
import "@fontsource/noto-sans-jp/700.css"
import "@fontsource/noto-sans-jp/900.css"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;
  let contents;
  let child = children;

  if (isRootPath) {
    header = (
      <MainHeader />
    );
    contents = (
      <HomeContents />
    );
  } else {
    contents = (
      <div className="contents-wrapper">
        <main>{child}</main>
      </div>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Navigation />
      {header}
      {contents}
      <GlobalFooter />
    </div>
  );
}

export default Layout
