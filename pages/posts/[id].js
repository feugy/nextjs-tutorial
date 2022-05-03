import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  return {
    paths: getAllPostIds(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: await getPostData(params.id) };
}

export default function Post({ date, title, contentHtml }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  );
}
