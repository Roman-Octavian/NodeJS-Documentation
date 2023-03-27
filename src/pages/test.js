import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Test() {
	return (
		<div className={styles.container}>
			<Head>
				<title>NodeJS Documentation</title>
			</Head>

			<main className={styles.main}>
                This is a routing test
			</main>
		</div>
	);
}