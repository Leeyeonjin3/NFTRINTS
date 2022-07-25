import { Icon, Button } from "semantic-ui-react";
import styles from "../styles/index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Contents}>
        <div className={styles.mainContent}>
          <div className={styles.leftContent}>
            <div className={styles.textContent}>
              <span >새롭게 떠오르는</span>
              <span>학생들을 위한 NFT!</span>
              <p>엔프렌츠에서 학교 생활 인증을 통해 다양한 추억과 행복을 확인하세요!</p>
            </div>
            <div className={styles.btnContainer}>
              <Link href="https://testnets.opensea.io/account">
                <Button content="나의 NFT" primary size="huge" toggle />
              </Link>
              <Link href="https://testnets.opensea.io/asset/create">
                <Button basic color="blue" content="NFT 민팅" size="huge" toggle />
              </Link>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.contentContainer}>
              <img
                src="/images/rightContent.jpg"
                alt="content"
                style={{ width: "100%", height: "70%", objectFit: "cover", borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit", margin: "0.1px" }}/>
                <div className={styles.desc}>
                <div className={styles.user}>
                  <Icon name="caret square right" size="huge" />
                  <div className={styles.userText}>
                    <span>엔프렌츠에서 학교 생활 인증 NFT발행부터</span>
                    <p>NFT 관리까지 튜토리얼을 확인해보세요!</p>
                  </div>
                </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
