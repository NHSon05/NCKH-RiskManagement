import Button from "../../common/Button";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';


interface List{
    label:string;
    href: string;
}

interface Items{
    title: string;
    lists: List[];
}

function Footer() {

    const Items:Items[] = [
        {
            title: 'CÔNG TY',
            lists: [
                {label: 'Chúng tôi', href: '#'},
                {label: 'Đặc điểm', href: '#'},
                {label: 'Công việc', href: '#'},
                {label: 'Sự nghiệp', href: '#'},
            ]
        },
        {
            title: 'NGUỒN',
            lists: [
                {label: 'Free eBooks', href: '#'},
                {label: 'Development Tutorial', href: '#'},
                {label: 'How to - Blog', href: '#'},
                {label: 'Youtube Playlist', href: '#'},
            ]
        },
    ]

    return (  
        <footer className="bg-[var(--primary-btn)] border-t border-[var(--border)] ">
            <div className=" mx-2 sm:mx-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="text-center md:text-start md:col-span-1">
                        <h1 className="text-3xl mb-4 font-extrabold text-[var(--white)] ">Risk Management</h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    {Items.map((item)=>(
                        <div key={item.title} className="text-center sm:text-center">
                            <h3 className="font-semibold uppercase tracking-wide mb-4 text-[var(--white)]">{item.title}</h3>
                            <ul className="space-y-3">
                                {item.lists.map((list) => (
                                    <li key={list.label}>
                                        <a href={list.href} className="text-black hover:text-blue-700 transition-colors">
                                            {list.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="flex flex-col">
                        <h3 className="font-semibold uppercase tracking-wide mb-4 text-[var(--white)]">Thư mới</h3>
                        <form className="flex flex-col">
                            <input  type="email" 
                                    placeholder="Nhập email của bạn" 
                                    className="border-2 rounded-lg p-2 mb-2 bg-amber-50 border-t border-[var(--border)]"/>
                        </form>
                        <Button variant="secondary" size="large" title="Đăng ký bây giờ"/>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
                   <p className="text-[var(--white)] text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()}, All Rights Reserved
                   </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-[var(--white)] hover:text-blue-700"><FaTwitter size={20} /></a>
                        <a href="#" className="text-[var(--white)] hover:text-blue-700"><FaFacebookF size={20} /></a>
                        <a href="#" className="text-[var(--white)] hover:text-blue-700"><FaInstagram size={20} /></a>
                        <a href="#" className="text-[var(--white)] hover:text-blue-700"><FaGithub size={20} /></a>
                   </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;