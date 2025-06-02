import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./style/embla.css";
import CertificateArray from "./certificate-array";

const OPTIONS: EmblaOptionsType = { loop: true };

const Carousel = () => {
    return <EmblaCarousel slides={CertificateArray} options={OPTIONS} />;
};

export default Carousel;
