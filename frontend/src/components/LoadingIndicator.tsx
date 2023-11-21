import React from "react";

export interface LoadingIndicatorProps {
  height?: number | undefined;
  width?: number | undefined;
  radius?: number | undefined;
  ariaLabel?: string | undefined;
  color?: string | undefined;
}

const LoadingIndicator = React.memo(
  ({
    height = 40,
    width = 60,
    radius = 9,
    ariaLabel = "three-dots-loading",
  }: LoadingIndicatorProps) => {
    const WrapperStyle = {
      display: "flex",
      width: "100%",
      justifyContent: "center",
    };

    return (
      <div
        style={WrapperStyle}
        data-testid="three-dots-loading"
        aria-label={ariaLabel}
      >
        <svg
          width={width}
          height={height}
          viewBox="0 0 120 30"
          xmlns="http://www.w3.org/2000/svg"
          fill={"#6461A0"}
          data-testid="three-dots-svg"
        >
          <circle cx="15" cy="15" r={Number(radius) + 6}>
            <animate
              attributeName="r"
              from="15"
              to="15"
              begin="0s"
              dur="0.8s"
              values="15;9;15"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              from="1"
              to="1"
              begin="0s"
              dur="0.8s"
              values="1;.5;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="60"
            cy="15"
            r={radius}
            attributeName="fill-opacity"
            from="1"
            to="0.3"
          >
            <animate
              attributeName="r"
              from="9"
              to="9"
              begin="0s"
              dur="0.8s"
              values="9;15;9"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              from="0.5"
              to="0.5"
              begin="0s"
              dur="0.8s"
              values=".5;1;.5"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="105" cy="15" r={Number(radius) + 6}>
            <animate
              attributeName="r"
              from="15"
              to="15"
              begin="0s"
              dur="0.8s"
              values="15;9;15"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              from="1"
              to="1"
              begin="0s"
              dur="0.8s"
              values="1;.5;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    );
  }
);

export default LoadingIndicator;
