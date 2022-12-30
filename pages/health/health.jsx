import React from "react";
import styles from "./health.module.scss";
import Link from "next/link";
import Solar from "../../components/solar/solar";
import Image from "next/image";
import HomeContent from "../../components/content/HomeContent";

const Health = () => {
  return (
    <div className={styles.health}>
      <div className={styles.solar_load}>
        <Solar
          // eslint-disable-next-line react/no-children-prop
          children={
            <div className={styles.health_detail}>
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

export default Health;
