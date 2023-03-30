import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from '../components/layout'
import GettingStarted from "../articles/getting-started";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Getting started</title>
			</Head>

			<Layout content={GettingStarted()}></Layout>
		</div>
	);
}
