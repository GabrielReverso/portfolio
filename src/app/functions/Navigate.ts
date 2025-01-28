export default function navigate(selector: string) {
    const link = document.createElement('a');
    link.href = selector;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}