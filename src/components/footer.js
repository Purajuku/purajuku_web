import * as React from "react";

import "../footer.css"

const GlobalFooter = () => (
    <footer>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://purajuku.dev/">プラ塾</a>
    </footer>
);

export default GlobalFooter;