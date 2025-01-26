export default function openEmail(email: string) {
    const mailtoLink = `mailto:${email}`;
    const link = document.createElement('a');
    link.href = mailtoLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
