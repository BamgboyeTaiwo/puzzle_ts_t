import { View, Text } from "react-native";
import React from "react";
import Svg, { G,Circle, Path, Rect } from "react-native-svg";

export default function NotifIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <G id="Group_157" data-name="Group 157" transform="translate(-362 -642)">
        <Circle
          id="Ellipse_2"
          data-name="Ellipse 2"
          cx="12"
          cy="12"
          r="12"
          transform="translate(362 642)"
          fill="#e32a2a"
        />
        <Path
          id="report"
          d="M11.895,14.629H.923a.891.891,0,0,1-.643-.264.872.872,0,0,1-.271-.65V.929A.872.872,0,0,1,.28.278.889.889,0,0,1,.923.014h6.4V5.043A.464.464,0,0,0,7.78,5.5h5.029v8.214a.9.9,0,0,1-.914.914Zm-1.371-2.743h-.457v-3.2a.464.464,0,0,0-.457-.457H8.695a.464.464,0,0,0-.457.457v3.2H7.323V6.857A.464.464,0,0,0,6.866,6.4H5.952a.464.464,0,0,0-.457.457v5.029H4.58V9.6a.464.464,0,0,0-.457-.457H3.209a.464.464,0,0,0-.457.457v2.286H2.295a.457.457,0,0,0,0,.914h8.229a.433.433,0,0,0,.329-.136.45.45,0,0,0,.128-.321.464.464,0,0,0-.457-.457ZM8.238,0a.855.855,0,0,1,.629.257l3.671,3.671a.9.9,0,0,1,.271.657H8.238Z"
          transform="translate(367.591 646.8)"
          fill="#f0fcfd"
        />
      </G>
    </Svg>
  );
}
