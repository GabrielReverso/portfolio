import { StaticImageData } from "next/image";
import certificateReact1 from "../../assets/certificates/certificate-of-completion-for-react-18-for-beginners.jpg";
import certificateReactNative1 from "../../assets/certificates/certificate-of-completion-for-the-ultimate-react-native-series-part-1.jpg";

export interface Certificate {
	image: StaticImageData;
	description: string;
}

const CertificateArray: Certificate[] = [
	{
		image: certificateReact1,
		description: "Curso introdutório de React 18",
	},
	{
		image: certificateReactNative1,
		description: "Curso introdutório de React Native",
	},
];

export default CertificateArray;
