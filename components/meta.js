import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: "Monarch Maisuriya | Full-Stack Developer",
    keywords:
        "web development, programming, full-stack development, developer, frontend, backend, monarch, maisuriya",
    description: "Portfolio and website for a FullStack Developer"
};

export default Meta;
