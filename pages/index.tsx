
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
<script dangerouslySetInnerHTML={{
__html: `
!function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){
e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],
r=new Date,c="https://cdn.yektanet.com/superscript/NsZLaGtJ/native-nft-market-three.vercel.app-37687/yn_pub.js?v="
+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),
s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);
var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l);
}(window,document,"yektanet");
`
}} />

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
