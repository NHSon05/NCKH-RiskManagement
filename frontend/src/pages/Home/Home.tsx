import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/common/Button';

const HomePage: React.FC = () => {

  const navigate = useNavigate();

  return (
    // Sử dụng class name thông qua object 'styles'
    <div>
        <div className='bg-[var(--primary-btn-hover)] text-start rounded-lg'>
            <h1>Xin chào, Nguyễn Văn A</h1>
            <p>Chào mừng bạn đến với <span className='font-bold'>Risk Management</span>. Bắt đầu quản lý rủi ro của bạn một cách hiệu quả</p>
            <Button variant="primary" size='large' title="Thêm dự án" onClick={() => navigate('/projects/info')}/>
        </div>
        <h1 className='text-start'>Tổng quan dự án của tôi</h1>
        <div>

        </div>
        <h1 className='text-start'>Dự án gần đây</h1>
    </div>
  );
};

export default HomePage;