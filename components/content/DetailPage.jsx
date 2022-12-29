import React from 'react';
import styles from './DetailPage.module.scss';
import DemoImage from '../../public/images/demo/Health_demo.png';
import Image from 'next/image';

const DetailPage = () => {
    return (
        <div className={styles.detailpage}>
            <Image src={DemoImage} alt="Demo Image" width={862} height={1870} />
        </div>
    );
}

export default DetailPage;
