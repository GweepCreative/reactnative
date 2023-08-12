import React from "react";
import Svg, { Path } from "react-native-svg";
const Sun = ({ w = 24, h = 24, f = "#fff", activated = false }, ...props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      {...props}
    >
      {activated ? (
        <>
          <Path
            fill={f}
            d="M16.75 11.75a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM11.75 5.5a.76.76 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v3a.76.76 0 0 0 .75.75ZM11.75 18a.76.76 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.76.76 0 0 0-.75-.75ZM6.27 7.33a.75.75 0 0 0 1.06-1.06L5.21 4.15a.75.75 0 1 0-1.06 1.06l2.12 2.12ZM17.23 16.17a.75.75 0 0 0-1.06 1.06l2.12 2.12c.14.142.33.22.53.22a.75.75 0 0 0 .53-1.28l-2.12-2.12ZM5.5 11.75a.76.76 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h3a.76.76 0 0 0 .75-.75ZM21.75 11h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5ZM6.27 16.17l-2.12 2.12a.75.75 0 0 0 1.06 1.06l2.12-2.12a.75.75 0 0 0-1.06-1.06ZM16.75 7.55c.2 0 .39-.078.53-.22l2.07-2.12a.75.75 0 1 0-1.06-1.06l-2.12 2.12a.75.75 0 0 0 .58 1.28Z"
          />
        </>
      ) : (
        <>
          <Path
            fill={f}
            fillRule="evenodd"
            d="M6.75 11.75a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm1.766 1.34a3.5 3.5 0 1 0 6.468-2.68 3.5 3.5 0 0 0-6.468 2.68Z"
            clipRule="evenodd"
          />
          <Path
            fill={f}
            d="M11.75 5.5a.76.76 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v3a.76.76 0 0 0 .75.75ZM11.75 18a.76.76 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.76.76 0 0 0-.75-.75ZM6.27 7.33a.75.75 0 0 0 1.06-1.06L5.21 4.15a.75.75 0 1 0-1.06 1.06l2.12 2.12ZM17.23 16.17a.75.75 0 0 0-1.06 1.06l2.12 2.12c.14.142.33.22.53.22a.75.75 0 0 0 .53-1.28l-2.12-2.12ZM5.5 11.75a.76.76 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h3a.76.76 0 0 0 .75-.75ZM21.75 11h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5ZM6.27 16.17l-2.12 2.12a.75.75 0 0 0 1.06 1.06l2.12-2.12a.75.75 0 0 0-1.06-1.06ZM16.75 7.55c.2 0 .39-.078.53-.22l2.07-2.12a.75.75 0 1 0-1.06-1.06l-2.12 2.12a.75.75 0 0 0 .58 1.28Z"
          />
        </>
      )}
    </Svg>
  );
};

export default Sun;