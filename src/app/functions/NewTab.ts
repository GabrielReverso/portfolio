export default function openNewTab(url: string) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}