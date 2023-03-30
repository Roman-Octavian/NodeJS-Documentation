import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Layout from '../../../components/layout'
import VariablesArticle from "../../../articles/javascript/variables";

export default function Variables() {
	return (
		<div className={styles.container}>
			<Head>
				<title>JS Variables</title>
			</Head>

			<Layout content={VariablesArticle()}></Layout>
		</div>
	);
}
