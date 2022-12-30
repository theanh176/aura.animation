import React from "react";
import styles from "./legaxy.module.scss";
import Link from "next/link";
import Solar from "../../components/solar/solar";
import Image from "next/image";
import HomeContent from "../../components/content/HomeContent";

const Legaxy = () => {
  console.log("rendering Legaxy");
  return (
    <div className={styles.legaxy}>
      <div className={styles.solar_load}>
        <Solar
          children={
            <div className={styles.legaxy_detail}>
              <Image
                src="/images/demo/Health_demo.png"
                alt="Health_demo"
                width={862}
                height={1870}
              />
            </div>
          }
        />
      </div>

      <HomeContent />
    </div>
  );
};

export default Legaxy;
