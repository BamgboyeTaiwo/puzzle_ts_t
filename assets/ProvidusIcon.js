import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const ProvidusIcon = (props) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABHNCSVQICAgIfAhkiAAABYVJREFUaEPtW21M1VUY/90X3hG6Xt4ZjAKEQnkZREI6CjFdK2Ulo5FlDdoq9UNtLF2smtHWhmtrljGTpaRbak1XfjCpYcSL8TLlGgsJQcQLiBKoIC/3hc4B7vV/bxfv/+XcdeFyvnHP8zzn9zvPc57znMP5yzBP+6Bs38He/oGNvdqB4KHhYaXBaJxP1Cl+V8jlUKtU+ojwkBsRoSFn9hTvLLIFTGb9IyVa33xx2+DQkNIpmIgEEaRW6zPTkg9bE7cgvLOktPW3882JIsdwSrWs1WmafaUlSSZwZsKLkayJJJf0DGEaxqd+/rXQKV3ECFTuhnUVNLxnCOfkF+oW+pq1Ny90Tf9yrMJN5greNU0G9bLs9Xffv96iaQu3N0OLoT81MUErc4VwNjmLhrUs5ZkXpp29qGAVXbQ4kSXm5E6zMrgQ7CwRXghekoJxycNSZo+rmxg2hLykqwAtbfhmCStZvVGOyuZodA/5sYLlmKSllBtx9JVziAu6Ixlo1eVQ7D79OCh5Fs0hIZ2f3IVdORrI/nP4FA55Ui9H8Y/pqLkSIlzZhgZzwkG+46h8uQYhfuNMAFIjrX0q7PghA3cn3CXbZE44O7YfzyX0kqXLd+Ha52CcluFQYwwu9S+3L2xHgjlhyYgcbIAZYXeFETvWtuFh9d37Wdm0hrnO5mZiGekg3jM3i765Xzm6LdcDcLgpFtNcHYETxIxwdmwfPn2+GZS4o9qETo6tR55C5y3x2xQTwn6eUyjPq8djISOO4mq2W9cdiO3fPyl6HMmEaRQWpHaiOPtP0SCEKr5zMh3VnWFC1WbkJRP2UBqwNfVvBC+b3YZs5WZbS5mL9kH9tvp6R3xxpDn2/yFMtx+lgt0WJISFziC8+pLkYV8PHXbntCLyoTEhOJnIjuuUKD2bhGvE20KaJMJvZLRj+5p2IeMxk6UxdUoTiY/PpoAWJnybaMLh/mM4/lo1fNz1fMdiLtcz7INXj2bh9jj/klM04bJNjVgf18ecBF+D1KufnUsgySuGr4r4LJ0eOYj9WxosktVfN/zR2BPEsIJ+MI97U0pCNhr3yFoW0gR72JNsQwfya5EYNmweZ4SE1FsnMnF50B9ebgZyLBSWtaftiNNu7iql3qVJS0wTTDgvuRu71mmgkM+ipGArm2LweU0C8lO6sXllD5RzfXwBGYgNo4A5qu0Kxpe1CXzNW8gJIuzlpicV1SVEcLahMRJan1QlQe09ia9IeanynhIFhK/SuE5B6uksXBFZTwsiPB8oemDY82wLNsZr+eIWLffNHzSaVorWZ0J47SMD2Lu5ER5Kx52UKMO+214o+PZp0JwhtkkmTPfh8rw6rOIkMZpBDzaswIReMZO1+ZYF1rLWf9Od4II2QCxX8dsSd8Qt5MKuZL3GAsT+2ngcaIiHnGRrURd5NmaJvqkh1iSRpcqSPLycJKrvtlUjyHfCDOTqP7PVj9pnAns3NZEkNikZ5CSJlPd+SoOmTy3ZliTC2bFa5K7qsQBxUhOFmq5QfPFiPTKibkoGSA2cbovAR2dSmNxNSyI8H5ucFVqUEe+KCmcro7fGPPDm8UxyrePPZPKYE17mMYVDBTWIDhiVDJAWI1+fj0M5yQks1q/kNWyLUdHqdrxNjozyufxCy8ATF6NQ1x08K85NSHZSuMEoI3fRKtxhcAFvwsrUw5GqUVS89DsCfe8nqo5BPxQdW8MUtJTQYUaYHhg+3HCBJLFrZjx6g4z8IywNVR3O82aGGeFAsjUVPtEBb86FwM1RT1LkPyroRkKK9/joMiPMZzBnkFki7AxecCQG1/Owyz1Mc7mnhy73uNTlng/TjOgKYW1+IE4Ju4KXLT4BoKRd6iMP00a/GEnP+xmPibRLfajFLekW66d4/wIRzUHZZWko6gAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
)

export default ProvidusIcon

