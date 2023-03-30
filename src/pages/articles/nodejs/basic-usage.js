import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Layout from '../../../components/layout'
import BasicUsageArticle from "../../../articles/nodejs/basic-usage";

export default function Intro() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Node Usage</title>
			</Head>

			<Layout content={BasicUsageArticle()}></Layout>
		</div>
	);
}
