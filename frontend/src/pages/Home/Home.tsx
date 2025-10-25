import React from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import StatCard from './components/StatCard'
import ProjectCard from './components/ProjectCard';

import { faChartSimple, faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { type IconProp } from '@fortawesome/fontawesome-svg-core';

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

// const recentProjects = [
//   { title: 'Xây dựng Cầu Tứ Liên Giai đoạn I', status: 'Đang tiến hành', statusType: 'blue', lastUpdate: 'Cập nhật 2 ngày trước' },
//   { title: 'Đánh giá rủi ro Tuyến Metro X', status: 'Hoàn thành', statusType: 'green', lastUpdate: 'Cập nhật 5 ngày trước' },
//   { title: 'Dự án phát triển siêu thị Mega', status: 'Đang tiến hành', statusType: 'blue', lastUpdate: 'Cập nhật 1 tuần trước' },
//   { title: 'Nghiên cứu mở rộng nhà máy công nghiệp', status: 'Đang tiến hành', statusType: 'blue', lastUpdate: 'Cập nhật 3 ngày trước' },
//   { title: 'Dự án năng lượng tái tạo', status: 'Hoàn thành', statusType: 'green', lastUpdate: 'Cập nhật 5 ngày trước' },
//   { title: 'Thiết kế hạ tầng thành phố thông minh', status: 'Tạm dừng', statusType: 'orange', lastUpdate: 'Cập nhật 1 tuần trước' },
// ];

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
            <Title title='Tổng quan dự án của tôi' variant='dark' size='medium' className='text-start'/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2'>
                {overviewStats.map(({title, value, description, icon, color},index) => (
                  <StatCard key={index} title={title} value={value} description={description} icon={icon} color={color} />
                ))} 
            </div>
        </div>

        {/* 3. Khối "Dự án gần đây" */}
        <div>
            <Title title='Dự án gần đây' variant='dark' size='medium' className='text-start'/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2'>
                <ProjectCard title='Xây dựng Cầu Tứ Liên Giai đoạn I' status='Đang hoạt động' lastUpdate='Cập nhật 2 ngày trước'/>
            </div>
        </div>
    </div>
  );
};

export default HomePage