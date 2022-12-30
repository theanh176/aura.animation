import React from "react";
import styles from "./zen.module.scss";
import Link from "next/link";
import Solar from "../../components/solar/solar";
import Image from "next/image";
import HomeContent from "../../components/content/HomeContent";

const Zen = () => {
  return (
    <div className={styles.zen}>
      <div className={styles.solar_load}>
        <Solar
          // eslint-disable-next-line react/no-children-prop
          children={
            <div className={styles.zen_detail}>
              <Image
                src="/images/demo/Zen_demo.png"
                alt="Zen_demo"
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

export default Zen;
