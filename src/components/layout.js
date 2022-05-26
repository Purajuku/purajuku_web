import * as React from "react"

import Navigation from "../components/navigation"
import MainHeader from "../components/header"
import GlobalFooter from "../components/footer"
import HomeContents from "../components/home_contents"

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
    child = undefined;
  }

  return (
    <div className="global-wrapper">
      <Navigation />
      {header}
      {contents}
      <div className="contents-wrapper" data-is-root-path={isRootPath}>
        <main>{child}</main>
      </div>
      <GlobalFooter />
    </div>
  );
}

export default Layout
