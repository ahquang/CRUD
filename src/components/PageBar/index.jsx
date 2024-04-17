import React from "react";
import "../../styles/components/_pagebar.scss";

const PageBar = ({ page = [], handleOnClick }) => {
  return (
    <div className="page-bar">
      <ul>
        {page.map((item, index) => {
          const disabled = index === page.length - 1 ? "disabled" : "";
          return (
            <li key={index}>
              <button
                className={disabled}
                onClick={handleOnClick}
                disabled={disabled}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PageBar;
