import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Hary ANDRIANARISOA est un développeur Web full stack passionné qui crée des sites Web et des applications que vous aimeriez utiliser."
      />
      <meta
        name="keywords"
        content="Hary, Hary ANDRIANARISOA, ANDRIANARISOA, développeur web, développeur web Hary, développeur Hary, portfolio Hary"
      />
      <meta property="og:title" content="Hary ANDRIANARISOA Portfolio" />
      <meta
        property="og:description"
        content="Un développeur full-stack qui crée des sites Web que vous souhaitez utiliser."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio-hary.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Hary ANDRIANARISOA',
};
