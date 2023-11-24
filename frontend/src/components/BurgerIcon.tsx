import React from "react";
import { CSSProperties } from "styled-components";

interface BurgerIconProps extends React.HTMLAttributes<HTMLDivElement> {
  isToggled: boolean;
  onToggle: () => void;
}

export const BurgerIcon: React.FC<BurgerIconProps> = ({
  isToggled,
  onToggle,
  ...props
}) => {
  const duration = 0.4;
  const easing = "cubic-bezier(0, 0, 0, 1)";
  const time = Math.max(0, duration);
  const width = Math.max(12, Math.min(48, 32));
  const barHeight = Math.round(width / 12);
  const space = 0.5;
  const marginRaw = width / (3 * (space + 1));
  const margin = Math.round(marginRaw);
  const height = barHeight * 3 + margin * (3 - 1);
  const topOffset = Math.round((48 - height) / 2);

  const burgerStyles: CSSProperties = {
    cursor: "pointer",
    height: `48px`,
    position: "absolute",
    right: 0,
    transition: `${time}s ${easing}`,
    userSelect: "none",
    width: `48px`,
  };

  const barStyles: CSSProperties = {
    background: "#fff",
    height: `${barHeight}px`,
    left: `12px`,
    position: "absolute",
    borderRadius: "12px",
    border: "1px solid #000",
  };

  return (
    <div
      className="hamburger-icon"
      aria-label="button for opening and closing menu"
      aria-expanded={isToggled}
      role="button"
      onClick={onToggle}
      style={burgerStyles}
      {...props}
    >
      <div
        data-testid="bar-wrap-one"
        style={{
          transition: `${time / 2}s ${easing} ${
            isToggled ? "0s" : `${time / 2}s`
          }`,
          transform: `${
            isToggled ? `translateY(${barHeight + margin}px)` : "none"
          }`,
        }}
      >
        <div
          data-testid="bar-one"
          style={{
            ...barStyles,
            width: `${width}px`,
            top: `${topOffset}px`,
            transition: `${time / 2}s ${easing} ${
              isToggled ? `${time / 2}s` : "0s"
            }`,
            transform: `${isToggled ? `rotate(45deg)` : "none"}`,
          }}
        />
      </div>

      <div
        data-testid="bar-wrap-two"
        style={{
          transition: `${time / 2}s ${easing}`,
          opacity: `${isToggled ? "0" : "1"}`,
        }}
      >
        <div
          data-testid="bar-two"
          style={{
            ...barStyles,
            width: `${width}px`,
            top: `${topOffset + barHeight + margin}px`,
            transition: `${time / 2}s ${easing}`,
          }}
        />
      </div>

      <div
        data-testid="bar-wrap-three"
        style={{
          transition: `${time / 2}s ${easing} ${
            isToggled ? "0s" : `${time / 2}s`
          }`,
          transform: `${
            isToggled ? `translateY(-${barHeight + margin}px)` : "none"
          }`,
        }}
      >
        <div
          data-testid="bar-three"
          style={{
            ...barStyles,
            width: `${width}px`,
            top: `${topOffset + barHeight * 2 + margin * 2}px`,
            transition: `${time / 2}s ${easing} ${
              isToggled ? `${time / 2}s` : "0s"
            }`,
            transform: `${isToggled ? `rotate(-45deg)` : "none"}`,
          }}
        />
      </div>
    </div>
  );
};
