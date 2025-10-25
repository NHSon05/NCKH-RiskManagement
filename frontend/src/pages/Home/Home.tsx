import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import StatCard from './components/StatCard'
import ProjectCard from './components/ProjectCard';

// import images from '../../assets';
import { faChartSimple, faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { type IconProp } from '@fortawesome/fontawesome-svg-core';
import FadedDiv from '../../components/common/FadedDiv';

interface StatData {
  title: string;
  value: number;
  description: string;
  icon: IconProp;
  color: 'blue' | 'green' | 'orange'; // 2. Định nghĩa kiểu chính xác
}

const overviewStats: StatData[] = [
  { 
    title: 'Tổng số dự án', 
    value: 12, 
    description: 'Số lượng dự án bạn đang đăng ký',
    icon: faChartSimple, 
    color: 'blue'
  },
  { 
    title: 'Dự án đang hoạt động', 
    value: 7,
    description: 'Số dự án hiện đang được tiến hành',
    icon: faCircleCheck, 
    color: 'green' 
  },
  { 
    title: 'Dự án rủi ro cao', 
    value: 3, 
    description: 'Dự án cần sự chú ý và khẩn cấp',
    icon: faCircleExclamation, 
    color: 'orange'
  },
];

interface recentProjects{
    title: string;
    status: 'onWorking' | 'onFinishing' | 'onDelaying';
    lastUpdate: string;
    img: string;
}

const recentProjects : recentProjects[] = [
    { 
      title: 'Xây dựng Cầu Tứ Liên Giai đoạn I', 
      status: 'onWorking', 
      lastUpdate: 'Cập nhật 2 ngày trước',
      img: 'https://cafefcdn.com/203337114487263232/2024/11/27/cau-tu-lien-1732714717281-17327147177261781619844.jpg'
      // src: 
    },
    { 
        title: 'Đánh giá rủi ro Tuyến Metro X', 
        status: 'onFinishing', 
        lastUpdate: 'Cập nhật 5 ngày trước',
        img: 'https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2025/9/23/tautto-17586115371441542534457.png'
    },
    { 
        title: 'Dự án phát triển siêu thị Mega', 
        status: 'onDelaying', 
        lastUpdate: 'Cập nhật 1 tuần trước',
        img: 'https://images2.thanhnien.vn/zoom/686_429/Uploaded/quochungqc/2022_12_12/mat-tien-hiep-phu-9734.jpg'
    },
    // { 
    //     title: 'Nghiên cứu mở rộng nhà máy công nghiệp', 
    //     status: 'onWorking', 
    //     lastUpdate: 'Cập nhật 3 ngày trước',
    //     img: 'https://ktgindustrial.com/wp-content/uploads/2025/01/cac-khu-cong-nghiep-lon-o-mien-bac-3.jpg' 
    // },
    // { 
    //     title: 'Dự án năng lượng tái tạo', 
    //     status: 'onFinishing', 
    //     lastUpdate: 'Cập nhật 5 ngày trước',
    //     img: 'https://emtek.com.vn/storage/blogs/2024-05/nang-luong-tai-tao-va-vai-tro-cua-cong-nghe.webp'
    // },
    // { 
    //     title: 'Thiết kế hạ tầng thành phố thông minh', 
    //     status: 'onDelaying', 
    //     lastUpdate: 'Cập nhật 1 tuần trước',
    //     img:'https://ipc247.com/wp-content/uploads/2023/06/thanh-pho-thong-minh-smart-city.jpg'
    // },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='space-y-8'>
        <div className='bg-[var(--bg-search)] text-start rounded-lg p-6 space-y-4'>
            <Title
              title='Xin chào, Nguyễn Văn A'
              size='large'
              variant='dark'
            />
            <p className='text-gray-800 text-[16px]'>
                Chào mừng bạn đến với <span className='font-bold text-[var(--primary-btn)]'>Risk Management</span>. 
                Bắt đầu quản lý rủi ro của bạn một cách hiệu quả
            </p>
            <Button variant="primary" size='medium' title="Thêm dự án" onClick={() => navigate('/projects/info')}/>
        </div>

        {/* 2. Khối "Tổng quan dự án của tôi" */}
        <div>
            <div className='flex items-center justify-between'>
              <Title title='Tổng quan dự án của tôi' variant='dark' size='medium' className='text-start'/>
              <Link to='/projects' className='text-[var(--primary-btn)] hover:italic hover:cursor-pointer'>Xem thêm</Link>
            </div>
            <FadedDiv className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2'>
                {overviewStats.map(({title, value, description, icon, color},index) => (
                  <StatCard key={index} title={title} value={value} description={description} icon={icon} color={color} />
                ))} 
            </FadedDiv>
        </div>

        {/* 3. Khối "Dự án gần đây" */}
        <div>
            <Title title='Dự án gần đây' variant='dark' size='medium' className='text-start'/>
            <FadedDiv className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2'>
              {recentProjects.map(({title, lastUpdate,status,img},index) => (
                <ProjectCard key={index} title={title} status={status} lastUpdate={lastUpdate} img={img}/>
              ))}
            </FadedDiv>
        </div>
    </div>
  );
};

export default HomePage