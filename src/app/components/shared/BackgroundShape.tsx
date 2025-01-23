import { CSSProperties } from "react";

interface Props {
  color?: string
  width?: "sm" | "md" | "lg" | "xl"
  height?: "sm" | "md" | "lg" | "xl"
  solid?: true | false
  rounded?: true | false
  zIndex?: number
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
  translate?: { x: number, y: number }
}

const sizes = {
  sm: "8em",
  md: "10em",
  lg: "15em",
  xl: "20em",
}

export default function BackgroundShape(
  { color = "#000",
    width = "sm",
    height = "sm",
    solid = true,
    rounded = false,
    zIndex = 1,
    top,
    bottom,
    left,
    right,
    translate = { x: 0, y: 0 }
  }: Props) {

  let baseStyles: CSSProperties;

  if (solid) {
    baseStyles = {
      position: 'absolute',
      borderRadius: rounded ? '1em' : '0',
      width: sizes[width],
      height: sizes[height],
      backgroundColor: color,
      zIndex: zIndex,
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      transform: `translate(${translate.x}px, ${translate.y}px)`
    };
  } else {
    baseStyles = {
      position: 'absolute',
      borderRadius: rounded ? '1em' : '0',
      width: sizes[width],
      height: sizes[height],
      backgroundColor: "transparent",
      borderColor: color,
      borderWidth: '4px',
      borderStyle: 'solid',
      zIndex: zIndex,
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      transform: `translate(${translate.x}px, ${translate.y}px)`
    };
  }

  return (
    <div style={baseStyles}>
    </div>
  );
}