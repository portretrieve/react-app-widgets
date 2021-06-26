import React from "react";

function Link({ href, children }) {
  return (
    <a
      className="item"
      href={href}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey) {
          return;
        }
        e.preventDefault();
        window.history.pushState({}, "", href);
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
      }}
    >
      {children}
    </a>
  );
}

export default Link;
