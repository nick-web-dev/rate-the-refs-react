import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";
import DownloadContainer from "../../components/DownloadContainer/DownloadContainer";

const Home = () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.contentContainer}>
      <h1>LET THE RATING BEGIN!</h1>
      <div className={styles.actions}>
        <img srcSet="/actionOne.png 1x, /actionOne@2x.png 2x, /actionOne@3x.png 3x" />
        <img srcSet="/actionTwo.png 1x, /actionTwo@2x.png 2x, /actionTwo@3x.png 3x" />
        <img srcSet="/actionThree.png 1x, /actionThree@2x.png 2x, /actionThree@3x.png 3x" />
        <img srcSet="/actionFour.png 1x, /actionFour@2x.png 2x, /actionFour@3x.png 3x" />
      </div>
      <div className={styles.homeFooter}>
        <img srcSet="/RTR-Footer.png 1x, /RTR-Footer@2x.png 2x, /RTR-Footer@3x.png 3x" />
        <DownloadContainer />
      </div>
    </div>
  </div>
);

export default Home;
