import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Layout from '../../../components/layout'
import IntroArticle from "../../../articles/nodejs/intro";

export default function Intro() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Intro</title>
			</Head>

			<Layout content={IntroArticle()}></Layout>
		</div>
	);
}
