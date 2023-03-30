import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Layout from '../../../components/layout'
import Package from "../../../articles/nodejs/package";

export default function Intro() {
	return (
		<div className={styles.container}>
			<Head>
				<title>package.json</title>
			</Head>

			<Layout content={Package()}></Layout>
		</div>
	);
}
