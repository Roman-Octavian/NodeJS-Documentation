import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Layout from '../../../components/layout'
import FunctionsArticle from "../../../articles/javascript/functions";

export default function Variables() {
	return (
		<div className={styles.container}>
			<Head>
				<title>JS Functions</title>
			</Head>

			<Layout content={FunctionsArticle()}></Layout>
		</div>
	);
}