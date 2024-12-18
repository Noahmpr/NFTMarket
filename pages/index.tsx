
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from 'next/head';

const Home: NextPage = () => {


  return (
    <>
<Head>
{/* Yektanet Analytics Script */}
<script id="chatbot-widget-script" type="text/javascript" src="https://dev.hamhoush.ir/chatbot-widget.js" data-id="67443037c140b189e09afd25" data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRlc3RAZ21haWwuY29tIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsIm5hbWVpZCI6IjcwM2MxNmI1LWIzY2UtNDMwNC1iZTVlLTNkYzIwOTM2ZjQ4NSIsInRlbmFudE5hbWUiOiJkZXZlbG9wIiwidGVuYW50SWQiOiIxIiwicm9sZSI6IlVTRVIiLCJuYmYiOjE3MzQ0NDIzOTMsImV4cCI6MTczNTA0NzE5MywiaWF0IjoxNzM0NDQyMzkzLCJpc3MiOiJlbnRlcnByaXNlLWlkZW50aXR5IiwiYXVkIjoiQWRtaW5Qb3J0YWwifQ.3bnxRqMZsy2ArA8T7bjg9n8uGzxA6RUqJnpVW4mElPM"></script>

</Head>

    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Build NFT Marketplaces
                </span>
                <br />
                faster than ever.
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://thirdweb.com"
                  target="_blank"
                >
                  thirdweb
                </Link>{" "}
                gives you the tools you need to create audited, performant, and
                flexible NFT marketplaces in <b>hours</b>, <i>not months</i>.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://github.com/amirhosseinmpr/NFTMarket"
                  target="_blank"
                >
                  GitHub
                </Link>
                  <div id="pos-article-display-96542"></div>
		 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
          </>
  );
};

export default Home;
