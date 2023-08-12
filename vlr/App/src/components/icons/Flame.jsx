import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Flame = ({ w = 24, h = 24, f = "#fff", activated = false }, ...props) => (
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
          d="m12.051 2-1.37 2.8a19.64 19.64 0 0 1-3.88 5.38l-.18.17a5.34 5.34 0 0 0-1.62 3.77v.18a6.86 6.86 0 0 0 4.2 6.39l.26.11a6.74 6.74 0 0 0 5.27 0h.06a7 7 0 0 0 4.21-6.51V9.95a8.63 8.63 0 0 1-4.39 4.42h-.06c-.06 0-.76.29-1.06 0a.76.76 0 0 1-.06-1l.07-.05h.05a5.44 5.44 0 0 0 1.22-7.37c-1.3-1.98-2.72-3.95-2.72-3.95Z"
        />
      </>
    ) : (
      <>
        <Path
          fill={f}
          fillRule="evenodd"
          d="M15.06 14.36h.06a8.56 8.56 0 0 0 4.39-4.41v4.36a7 7 0 0 1-4.21 6.44h-.07c-.847.359-1.76.54-2.68.53a6.62 6.62 0 0 1-2.59-.52l-.26-.11a6.84 6.84 0 0 1-4.2-6.35v-.18a5.39 5.39 0 0 1 1.61-3.77l.18-.17a19.49 19.49 0 0 0 3.88-5.38L12.54 2s1.42 2 2.74 4a5.43 5.43 0 0 1-1.22 7.36h-.12a.75.75 0 0 0 .06 1 .56.56 0 0 0 .41.13 2.14 2.14 0 0 0 .65-.13Zm-.44 5h.07v-.01A5.53 5.53 0 0 0 18 14.32a7.859 7.859 0 0 1-2.28 1.4l-.13.05a3.378 3.378 0 0 1-1.18.23 2 2 0 0 1-1.47-.57 2.25 2.25 0 0 1-.18-3c.088-.109.188-.207.3-.29h.07a3.93 3.93 0 0 0 .9-5.36c-.43-.64-.86-1.28-1.26-1.85l-.25.52a20.998 20.998 0 0 1-4.18 5.73l-.18.17A3.9 3.9 0 0 0 7 14.06v.19a5.35 5.35 0 0 0 3.28 5l.26.11a5.22 5.22 0 0 0 4.08 0Z"
          clipRule="evenodd"
        />
      </>
    )}
  </Svg>
);
export default Flame;
