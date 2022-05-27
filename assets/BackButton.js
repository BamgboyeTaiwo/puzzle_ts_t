import { View, Text } from "react-native";
import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const BackButton = () => {
  return (
    <Svg
      id="Back_Button"
      data-name="Back Button"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <Path
        id="arrow-ios-back-fill"
        d="M20.745,28.5a1.5,1.5,0,0,1-1.17-.555l-7.245-9a1.5,1.5,0,0,1,0-1.905l7.5-9a1.5,1.5,0,1,1,2.31,1.92L15.435,18l6.48,8.04a1.5,1.5,0,0,1-1.17,2.46Z"
        transform="translate(-4.487 -5.498)"
        fill="#14328c"
      />
      <Rect
        id="Rectangle_63"
        data-name="Rectangle 63"
        width="24"
        height="24"
        fill="none"
      />
    </Svg>
  );
};

export default BackButton;
