import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

const SEO = () => {
  const title = 'Jay Limbachiya';
  const description = 'Welcome to my personal portfolio! I am Jay Limbachiya, a Full-Stack Developer passionate about new Technology. This portfolio showcases my work and achievements in Web Development. With 1 years of experience, I have developed a strong skill set in full-stack and have successfully delivered companys live Projects.Through my portfolio, you will find a collection of my best work, including Specific my Portfolio. I approach each project with creativity, attention to detail, and a commitment to delivering exceptional results. My work encompasses Development and demonstrates my ability to quickly learn new languages.I invite you to explore my portfolio to gain insight into my skills, experience, and passion for Full-stack. Feel free to reach out to me to discuss potential collaborations or learn more about my work.Thank you for visiting and I look forward to connecting with you!';
  const url = 'https://www.linkedin.com/in/jay394b47227/';

  return (
    <>
      <Head>
        <link rel="canonical" href={url} />
      </Head>
      <DefaultSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url,
          title,
          description,
          site_name: 'Jay Portfolio',
        }}
      />
    </>
  );
};

export default SEO;
