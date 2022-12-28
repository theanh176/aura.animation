import { useRouter } from "next/router";
import React, { useState } from "react";
import MainLayout from "../../components/layout/mainLayout";
import styles from "./Home-unicornverse.module.scss";

function HomePage() {
  const [category, setCategory] = useState(1);
  const router = useRouter();
  return (
    <MainLayout>
    </MainLayout>
  );
}

export default HomePage;
