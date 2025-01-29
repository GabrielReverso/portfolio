export default function download(file: string) {
    const link = document.createElement('a');
    link.href = "/" + file;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}