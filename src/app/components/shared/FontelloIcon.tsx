interface StyleProps {
    [key: string]: string;
}

interface Props {
    name: "icon-mail-alt" | "icon-phone" | "icon-github-circled" | "icon-doc-inv" | "icon-linkedin"
    classStyling?: string | undefined
    style?: StyleProps | undefined
}

export default function FontelloIcon({ name, classStyling, style }: Props) {
    return (
        <>
            <i className={name + " " + classStyling} style={style}></i>
        </>
    );
}