import React from "react";
import styles from "./dauntless.module.scss";
import Link from "next/link";
import Solar from "../../components/solar/solar";
import Image from "next/image";
import HomeContent from "../../components/content/HomeContent";

const Dauntless = () => {
  return (
    <div className={styles.dauntless}>
      <div className={styles.solar_load}>
        <Solar
          // eslint-disable-next-line react/no-children-prop
          children={
            <div className={styles.dauntless_detail}>
              <Image
                src="/images/demo/Dauntless_demo.png"
                alt="Dauntless_demo"
                width={862}
                height={1557}
              />
            </div>
          }
        />
      </div>

      <HomeContent />
    </div>
  );
};

export default Dauntless;
