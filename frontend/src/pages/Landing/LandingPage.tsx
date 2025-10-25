// import NavBar from "../../components/layout/NavBar/NavBar";
// import intro from '../../assets/imgs/construction.jpg';
import construction from '../../assets/imgs/construction.jpg';
import iso from '../../assets/imgs/ISO.png'
import building from '../../assets/imgs/DaNang.png';

import Button from '../../components/common/Button';
import Image from '../../components/common/Image';
import Title from '../../components/common/Title';
import Card from '../../components/common/PublicComponents/Cards';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChartBar, faStar, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'motion/react'
// import { IconProp } from '@fortawesome/fontawesome-svg-core';



function LandingPage() {

    const cards:{ color: 'blue' | 'green' | 'purple' | 'orange'; icon: IconProp; title: string; des: string }[] = [
        { color: 'blue', icon: faMagnifyingGlass, title: 'Nhận diện rủi ro', des: 'Xác định và phân tích rủi ro tiềm ẩn ảnh hưởng đến doanh nghiệp.', },
        { color: 'green', icon: faStar, title: 'Đề xuất giải pháp ', des: 'Phát triển các chiến lược hiệu quả để giảm thiểu và quản lý rủi ro.' },
        { color: 'purple', icon: faFileAlt, title: 'Đánh giá & phân tích', des: 'Đánh giá mức độ rủi ro và tác động tiềm tàng của chúng.' },
        { color: 'orange', icon: faChartBar, title: 'Theo dõi & báo cáo', des: 'Liên tục giám sát và báo cáo về tình trạng rủi ro.' },
    ];

    return (
        <div>
            {/* Welcome Screen */}
            <div
                className="relative h-[80vh] bg-center bg-cover flex items-center justify-center full"
                style={{ backgroundImage: `url(${construction})` }}>
                {/* overlay */}
                <div className="absolute inset-0 bg-black opacity-30" />
                <div className="relative py-16 text-[var(--white)]">
                    <h1 className='font-bold text-[48px]'>
                        <span className='text-[var(--main-color)]'>Quản lý</span>
                        <br/>
                        rủi ro
                        <span className='text-[var(--main-color)]'> dự án</span> của bạn
                    </h1>
                    <p className='p-4 text-[20px] mx-2 sm:mx-16 md:mx-32 lg:mx-64'>Risk Management - Công cụ toàn diện giúp bạn xác định, đánh giá và quản lý rủi ro hiệu quả cho mọi dự án, đảm bảo thành công và giảm thiểu bất ngờ.</p>
                    <Button title='Xem thêm' variant='secondary' size='large'/>
                </div>
            </div>

            {/* Advantages of Projects */}
            <div className='py-24 space-y-8'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5}}
                >
                    <Title title='Risk Management ' variant='dark' size='large'>
                        <span className='text-[var(--main-color)]'>cung cấp</span>
                    </Title>
                </motion.div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]'>
                    {cards.map((card, index) => (
                        <Card key={index} color={card.color} icon={card.icon} title={card.title} des={card.des}/>
                    ))}
                </div>

            </div>

            {/* Infomation about iso */}
            <div className='full bg-[var(--white)] py-16'>
                <div className='wrapper grid grid-cols-1 md:grid-cols-2'>
                    <Image src={iso} alt='iso' className='bg-cover mx-auto '/>
                    <motion.div className='text-start p-8'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.2, delay: 0.2}}
                    >
                        <Title size='large' variant='dark' 
                            title='ISO 31000 : 2009'>
                            <span><br/>Tiêu chuẩn quốc tế về quản lý rủi ro</span>
                        </Title>
                        <div className='w-1/3 bg-[var(--main-color)] rounded-full h-1.5 my-4'/>
                        <p className='text-[16px] lg:text-[20px]'>ISO 31000 là tiêu chuẩn quốc tế về quản lý rủi ro, được áp dụng rộng rãi cho mọi loại hình và tổ chức và dự án.
                            Tiêu chuẩn này đưa ra khung và nguyên tắc giúp doanh nghiệp nhận diện, phân tích, đánh giá, và xử lý rủi ro một cách có hệ thống.
                            Nhờ đó, tổ chức có thể đưa ra quyết định tốt hơn, đảm bảo mục tiêu đạt được trong môi trường an toàn bền vững.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Contact */}
            <div
                className="relative py-[4%] bg-center bg-cover flex items-center justify-center full"
                style={{ backgroundImage: `url(${building})` }}>
                <div className="absolute inset-0 bg-black opacity-30" />

                <div className="relative py-16">
                    <Title  className='mb-4' size='large' variant='light' 
                            title='Bạn cần hỗ trợ quản lý rủi ro dự án?'>
                        <span><br/>Hãy để chúng tôi giúp bạn với các giải pháp chuyên sâu</span>
                    </Title>
                    <Button title='Liên hệ với chúng tôi' variant='secondary' size='large'/>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;