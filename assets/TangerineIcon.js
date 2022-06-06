import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const TangerineIcon = (props) => (
  <Svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h60v60H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.01667)" />
      </Pattern>
      <Image
        id="b"
        width={60}
        height={60}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default TangerineIcon