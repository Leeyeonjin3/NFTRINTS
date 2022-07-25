import React from "react";
import { Grid, Icon, Input, Button } from "semantic-ui-react";
import styles from "./Middle.module.css";

export default function Middle() {
  return (
    <>
   <section>
    <div className={styles.topBox}>
    <div className="dashboard-grid__card"></div>
    </div>
    </section>
      <div className={styles.topBox}>
        <div className={styles.topContainer}>

          <Grid styles={{ width: "50%" }}>
            <Grid.Row columns={4}>
              <Grid.Column>
                <div className={styles.sponser}>
                <img src="/images/box1.png" alt="logo" style={{ display: "flex", width: "300px", margin: "200px" }} />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                <img src="/images/box1.png" alt="logo" style={{ display: "flex", width: "300px", margin: "200px" }} />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                <img src="/images/box1.png" alt="logo" style={{ display: "flex", width: "300px", margin: "200px" }} />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                <img src="/images/box1.png" alt="logo" style={{ display: "flex", width: "300px", margin: "200px" }} />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <section>
          <div className={styles.topBox}>
          <div className="dashboard-grid__card"></div>
          </div>
          </section>
          </div>
          </div>     
    </>
  );
}
