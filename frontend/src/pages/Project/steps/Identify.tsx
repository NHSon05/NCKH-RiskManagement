import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import ProgressBar from "@/components/common/ProgressBar";

function Identify() {

    const navigate = useNavigate();
    return (  
        <div>
            <ProgressBar step={4}/>
            Project Identify
            <Button variant="secondary" title="Quay lại" onClick={() => navigate('/projects/target')}/>
            <Button variant="primary" size='medium' title="Tiếp theo" onClick={() => navigate('/projects/evaluation')}/>
        </div>
    );
}

export default Identify;