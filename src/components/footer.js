import * as React from "react";

import "../footer.css"

const GlobalFooter = () => (
    <div className="global-footer">
        <footer>
            © {new Date().getFullYear()}
            {` `}
            <a href="https://purajuku.dev/">プラ塾</a>
        </footer>
    </div>
);

export default GlobalFooter;