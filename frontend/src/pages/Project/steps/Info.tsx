import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";

function Info() {
    const navigate = useNavigate();
    return (  
        <div>
        Project Info
            <Button variant="secondary" title="Quay lại" onClick={() => navigate('/home')}/>
            <Button variant="primary" size='medium' title="Tiếp theo" onClick={() => navigate('/projects/pestel')}/>
        </div>
    );
}

export default Info;