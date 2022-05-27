import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} {...props}>
    <G data-name="Group 353" transform="translate(0 -193)">
      <Rect
        data-name="Rectangle 123"
        width={60}
        height={60}
        rx={10}
        transform="translate(0 193)"
        fill="#fff"
      />
      <G fillRule="evenodd">
        <Path
          data-name="Path 127"
          d="M41.311 202.441a9.218 9.218 0 1 1-6.546 2.7 9.244 9.244 0 0 1 6.546-2.7"
          fill="#f15822"
        />
        <Path
          data-name="Path 128"
          d="M53.303 246.243c-1.534-7.832-.766-17.884-9.2-20.912-6.42-2.3-12.637 3.753-11.951 9.689a10.555 10.555 0 0 0 .686 2.866c3.311 6.781 13.323 6.9 20.467 8.357"
          fill="#005d82"
        />
        <Path
          data-name="Path 129"
          d="M6.632 199.655c1.655 7.792 1.051 17.883 9.53 20.792 6.458 2.22 12.595-3.957 11.824-9.85a10.464 10.464 0 0 0-.726-2.866c-3.428-6.744-13.48-6.704-20.626-8.076"
          fill="#55c5cf"
        />
        <Path
          data-name="Path 130"
          d="M6.632 246.163c7.832-1.536 17.924-.85 20.912-9.286 2.3-6.42-3.793-12.6-9.729-11.909a10.217 10.217 0 0 0-2.866.686c-6.823 3.39-6.9 13.4-8.317 20.506"
          fill="#005d82"
        />
      </G>
    </G>
  </Svg>
)

export default SvgComponent

