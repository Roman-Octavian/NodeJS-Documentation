import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Layout from '../../../components/layout'
import DataTypeArticle from "../../../articles/javascript/data-types";

export default function Variables() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Data Types</title>
			</Head>

			<Layout content={DataTypeArticle()}></Layout>
		</div>
	);
}
