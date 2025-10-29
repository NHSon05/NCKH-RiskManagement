import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import Title from "../../../components/common/Title";
import ProgressBar from "../../../components/common/ProgressBar";

function Info() {
    const navigate = useNavigate();
    return (  
        <div>
            <ProgressBar step={1}/>
            <Title title="Thông tin dự án" size="large" variant="navy"/>
            <Input label="Tên dự án"/>
            <Input label="Cấp công trình"/>
            <Input label="Địa điểm"/>
            <Input label="Nguồn vốn"/>
            <Input label="Vai trò"/>
            <Button variant="secondary" 
                    title="Quay lại" 
                    onClick={() => navigate('/home')}        
            />
            <Button variant="primary" 
                    size='medium' 
                    title="Tiếp theo" 
                    onClick={() => 
                        navigate('/projects/pestel')}
            />
        </div>
    );
}

export default Info;