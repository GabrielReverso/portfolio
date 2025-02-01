export default function download(file: string) {
    const link = document.createElement('a');
    link.href = file;
    link.download = "Gabriel_Reverso_Pereira_-_Desenvolvimento_de_Software_e_Web.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}