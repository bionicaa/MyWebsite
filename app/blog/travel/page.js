import React from "react";
import Page from "@/app/page";
import NavBar from "../navBar";
import styles from "../../../styles/blog.module.css";

function TravelPage() {
  return (
    <div>
      <Page>
      </Page>
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Travel</strong></h1>
      </div>
    </div>
  );
}

export default TravelPage;
