import { CSSProperties } from "react";
import FontelloIcon from "./FontelloIcon";

interface Props {
    color?: string
    width?: "sm" | "md" | "lg" | "xl"
    height?: "sm" | "md" | "lg" | "xl"
    zIndex?: number
    top?: number | string
    bottom?: number | string
    left?: number | string
    right?: number | string
    onClick?: () => void
}

const sizes = {
    sm: "8em",
    md: "10em",
    lg: "15em",
    xl: "20em",
}

export default function GoToStartShape(
    { color = "#000",
        width = "sm",
        height = "sm",
        zIndex = 1,
        top,
        bottom,
        left,
        right,
        onClick
    }: Props) {

    let baseStyles = {
        position: 'absolute',
        borderRadius: '1em',
        width: sizes[width],
        height: sizes[height],
        backgroundColor: color,
        zIndex: zIndex,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
    } as CSSProperties

    return (
        <div onClick={onClick} style={baseStyles} className="hover:cursor-pointer hover:scale-110 transition-all flex flex-col justify-center items-center shadow-lg shadow-[#0004]">
            <FontelloIcon name={"icon-up-open"} classStyling="text-4xl" />
            <p className="text-xl mt-3">Menu</p>
        </div>
    );
}