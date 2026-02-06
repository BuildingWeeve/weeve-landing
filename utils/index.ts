export const getImageUrl = (key: string) => {
    if (!key) return "";
    if (key.startsWith("http://") || key.startsWith("https://")) return key;
    return `https://genie-dev.nyc3.cdn.digitaloceanspaces.com/${key}`;
};
