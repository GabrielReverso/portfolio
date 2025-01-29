import openNewTab from "@/app/functions/NewTab";
import Image from "next/image";

interface Props {
    important?: boolean
    link: string
    logoName: "c" | "cpp" | "css" | "electron" | "expo" | "golang" | "html" | "java" | "javascript" | "mysql" | "php" | "next" | "python" | "react" | "react-native" | "sass" | "sqlite" | "tailwind" | "typescript" | "vite" | "vue"
}

const logoMap = {
    c: require('../../assets/logos/c-1.svg'),
    cpp: require('../../assets/logos/c.svg'),
    css: require('../../assets/logos/css-3.svg'),
    electron: require('../../assets/logos/electron-1.svg'),
    expo: require('../../assets/logos/expo-go-app.svg'),
    golang: require('../../assets/logos/golang-1.svg'),
    html: require('../../assets/logos/html-1.svg'),
    java: require('../../assets/logos/java-4.svg'),
    javascript: require('../../assets/logos/javascript-1.svg'),
    mysql: require('../../assets/logos/mysql-ar21.svg'),
    php: require('../../assets/logos/new-php-logo.svg'),
    next: require('../../assets/logos/nextjs.svg'),
    python: require('../../assets/logos/python-5.svg'),
    react: require('../../assets/logos/react-2.svg'),
    'react-native': require('../../assets/logos/react-native-1.svg'),
    sass: require('../../assets/logos/sass-1.svg'),
    'sqlite': require('../../assets/logos/sqlite.svg'),
    tailwind: require('../../assets/logos/tailwind-css-2.svg'),
    typescript: require('../../assets/logos/typescript.svg'),
    vite: require('../../assets/logos/vitejs.svg'),
    vue: require('../../assets/logos/vue-9.svg')
};

export default function LogoLink({ link, logoName, important = false }: Props) {
    return (
        <div onClick={() => openNewTab(link)}>
            <Image
                className={`hover:cursor-pointer hover:scale-110 transition-all w-fit ${important ? "h-16 md:h-24" : "h-12 md:h-16"}`}
                src={logoMap[logoName]}
                alt={logoName}
                loading='lazy'
                unoptimized
            />
        </div>
    );
}