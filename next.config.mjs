/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ['cdn.imagin.studio']
    },
    typescript:{
        ignoreBuildErrors:true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
