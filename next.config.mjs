/** @type {import('next').NextConfig} */
const nextConfig = {
	// Expose the following environment variables to the public bundle.
	// Only expose variables that are safe to be public. In this case, the Storyblok public access token is not sensitive
	// and is required for features like live preview to work correctly.
	env: {
		STORYBLOK_DELIVERY_API_TOKEN: process.env.STORYBLOK_DELIVERY_API_TOKEN,
		STORYBLOK_API_BASE_URL: process.env.STORYBLOK_API_BASE_URL,
	},
};

export default nextConfig;
