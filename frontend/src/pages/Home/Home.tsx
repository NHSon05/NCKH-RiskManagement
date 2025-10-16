import React from 'react';
import styles from './HomePage.module.scss'; // Import CSS Module

const HomePage: React.FC = () => {
  return (
    // Sử dụng class name thông qua object 'styles'
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Tổng quan dự án của tôi</h1>
      <div className={styles.projectList}>
        {/* Nội dung danh sách dự án */}
      </div>
    </div>
  );
};

export default HomePage;