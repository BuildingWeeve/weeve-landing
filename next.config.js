/** @type {import('next').NextConfig} */
module.exports = {
	remotePatterns: [new URL("https://genie-dev.nyc3.cdn.digitaloceanspaces.com/**")],
	assetPrefix: "/lp-static",
};
