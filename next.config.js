/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@fullcalendar/common', '@fullcalendar/react', '@fullcalendar/timegrid', '@fullcalendar/daygrid']);
const nextConfig = withTM({
    reactStrictMode: true,
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/apollo-react' : '',
    publicRuntimeConfig: {
        contextPath: process.env.NODE_ENV === 'production' ? '/apollo-react' : '',
        uploadPath: process.env.NODE_ENV === 'production' ? '/apollo-react/upload.php' : '/api/upload'
    },
});

module.exports = nextConfig;
