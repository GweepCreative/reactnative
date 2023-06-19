import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Signal = (
  { w = 24, h = 24, f = "#fff", activated = false },
  ...props
) => (
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
          d="M12.44 8.019h-.08a2 2 0 0 0-1.87 2.64 2 2 0 0 0 2 1.34 2 2 0 0 0 1.57-.89 1.93 1.93 0 0 0 0-2.22 2 2 0 0 0-1.62-.87ZM9.44 7.089a1 1 0 0 0-1.4.2 5 5 0 0 0 0 6 1 1 0 1 0 1.61-1.19 2.92 2.92 0 0 1 0-3.56 1 1 0 0 0-.21-1.45ZM3.99 10.279a7.58 7.58 0 0 1 1.59-4.62A1 1 0 1 0 4 4.439a9.48 9.48 0 0 0 0 11.65 1.002 1.002 0 1 0 1.59-1.22 7.55 7.55 0 0 1-1.6-4.59Z"
        />
        <Path
          fill={f}
          d="M6.49 10.259a5.23 5.23 0 0 1 1.09-3.18 1 1 0 0 0-1.59-1.21 7.2 7.2 0 0 0-1.5 4.39 7.33 7.33 0 0 0 1.51 4.4 1 1 0 0 0 .8.39 1 1 0 0 0 .6-.2 1 1 0 0 0 .19-1.4 5.23 5.23 0 0 1-1.1-3.19ZM16.8 7.289a1 1 0 1 0-1.6 1.2 3 3 0 0 1 .61 1.79 3 3 0 0 1-.59 1.77 1 1 0 0 0 .21 1.4 1 1 0 0 0 1.39-.21 4.93 4.93 0 0 0 0-5.95h-.02ZM20.81 4.439a1.002 1.002 0 1 0-1.59 1.22 7.46 7.46 0 0 1 0 9.21 1 1 0 0 0 .22 1.41 1 1 0 0 0 .61.2 1 1 0 0 0 .79-.39 9.46 9.46 0 0 0 0-11.65h-.03Z"
        />
        <Path
          fill={f}
          d="M18.81 5.869a1 1 0 1 0-1.59 1.21 5.23 5.23 0 0 1 1.09 3.18 5.29 5.29 0 0 1-1.09 3.2 1 1 0 0 0 .79 1.6 1 1 0 0 0 .79-.39 7.26 7.26 0 0 0 1.51-4.41 7.17 7.17 0 0 0-1.5-4.39ZM12.44 13.019a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z"
        />
      </>
    ) : (
      <>
        <Path
          fill={f}
          fillRule="evenodd"
          d="M11.67 8.818h.09v.02a2.06 2.06 0 0 1 1.63.91 2 2 0 0 1 0 2.32 2.08 2.08 0 0 1-1.63.92h-.09a2.09 2.09 0 1 1 0-4.17Zm.52 1.77a.58.58 0 0 0-.43-.27h-.05a.59.59 0 1 0 0 1.17h.05a.6.6 0 0 0 .43-.26.52.52 0 0 0 0-.64Z"
          clipRule="evenodd"
        />
        <Path
          fill={f}
          d="M15.4 14.048a.74.74 0 0 1-.45-.15.75.75 0 0 1-.19-1.05 3.16 3.16 0 0 0 0-3.85.76.76 0 0 1 .16-1 .74.74 0 0 1 1.05.16 4.66 4.66 0 0 1 0 5.64.75.75 0 0 1-.57.25ZM18.96 16.888a.79.79 0 0 1-.46-.15.75.75 0 0 1-.13-1.06 7.73 7.73 0 0 0 0-9.51.75.75 0 0 1 .13-1 .76.76 0 0 1 1.06.13 9.23 9.23 0 0 1 0 11.35.75.75 0 0 1-.6.24Z"
        />
        <Path
          fill={f}
          d="M17.19 15.468a.79.79 0 0 1-.43-.15.75.75 0 0 1-.17-1 5.44 5.44 0 0 0 0-6.68.75.75 0 0 1 .15-1 .74.74 0 0 1 1.02.04 6.94 6.94 0 0 1 1.45 4.25 7 7 0 0 1-1.45 4.25.74.74 0 0 1-.57.29ZM8.1 14.048a.74.74 0 0 1-.6-.3 4.68 4.68 0 0 1 0-5.65.75.75 0 0 1 1.2.9 3.17 3.17 0 0 0 0 3.86.76.76 0 0 1-.16 1.05.8.8 0 0 1-.44.14ZM4.55 16.888a.76.76 0 0 1-.6-.29 9.23 9.23 0 0 1 0-11.35.75.75 0 0 1 1.18.92 7.75 7.75 0 0 0 0 9.52.75.75 0 0 1-.13 1.05.79.79 0 0 1-.45.15Z"
        />
        <Path
          fill={f}
          d="M6.34 15.468a.76.76 0 0 1-.6-.29 7 7 0 0 1-1.45-4.26 6.93 6.93 0 0 1 1.47-4.24.75.75 0 1 1 1.19.91 5.44 5.44 0 0 0 0 6.68.75.75 0 0 1-.19 1.05.74.74 0 0 1-.42.15ZM11.76 19.678a.76.76 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.76.76 0 0 1-.75.75Z"
        />
      </>
    )}
  </Svg>
);
export default Signal;
