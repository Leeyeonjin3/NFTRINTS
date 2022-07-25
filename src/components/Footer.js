import React from "react";
import { Grid, Icon, Input, Button } from "semantic-ui-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
    
      <div className={styles.topBox}>
        <div className={styles.topContainer}>
          <Grid styles={{ width: "100%" }}>
            <Grid.Row columns={4}>
              <Grid.Column>
                <div className={styles.sponser}>
                <img src="/images/lion.png" alt="logo" style={{ display: "flex", width: "280px", margin: "200px" }} />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                <img src="/images/seoul.png" alt="logo" style={{ display: "flex", width: "280px", margin: "200px" }} />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                <img src="/images/kyeonggi.png" alt="logo" style={{ display: "flex", width: "280px", margin: "200px" }} />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                <img src="/images/hankook.png" alt="logo" style={{ display: "flex", width: "280px", margin: "200px" }} />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>
          </div>     
          <section>
          <div className={styles.topBox}>
          <div className="dashboard-grid__card"></div>
          </div>
         </section>
         
      <div className={styles.footerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.middleContainer}>
            <Grid columns={2} padded container>
              <Grid.Column>
                <div>
                  <span style={{ fontSize: "22px", fontWeight: "600" }}>엔프렌츠의 소식을 받아보세요!</span>
                  <p> 엔프렌츠의 최신 소식을 받아보시고 싶으시다면 메일 주소를 입력해주세요!</p>
                  <div className={styles.signUpContainer}>
                    <Input style={{ width: "30em" }} placeholder="Your email address">
                      <input data-testid="my-input-1" />
                    </Input>
                    <Button style={{ padding: "15px 30px" }} content="Sign up" primary />
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div style={{ marginLeft: "25px" }}>
                  <span style={{ fontSize: "22px", fontWeight: "600" }}>엔프렌츠 커뮤니티</span>
                  <div className={styles.sns}>
                    <Grid>
                      <Grid.Row centered columns={6}>
                        <Grid.Column href="https://twitter.com/N_FrienTs">
                          <div className={styles.snsContainer}>
                            <Icon name="twitter" size="big" />
                          </div>
                        </Grid.Column>
                        <Grid.Column href="https://discord.gg/8CwD6V4b59">
                          <div className={styles.snsContainer}>
                            <Icon name="discord" size="big" />
                          </div>
                        </Grid.Column>
                        <Grid.Column href="https://open.kakao.com/o/gRukJMqe"> 
                          <div className={styles.snsContainer}>
                            <Icon name="talk" size="big" />
                          </div>
                        </Grid.Column>
                        <Grid.Column href="https://a01034952001.wixsite.com/nfrients">
                          <div className={styles.snsContainer}>
                            <Icon name="home" size="big" />
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
          <div className={styles.bottomContainer}>
            <div>©2022 N_FrienTs</div>
            <ul>
              <li>서비스 정책</li>
              <li>고객 센터</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
