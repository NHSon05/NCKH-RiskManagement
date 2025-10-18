import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";

function Identify() {

    const navigate = useNavigate();
    return (  
        <div>
            Project Identify
            <Button variant="secondary" title="Quay lại" onClick={() => navigate('/projects/target')}/>
            <Button variant="primary" size='medium' title="Tiếp theo" onClick={() => navigate('/projects/evaluation')}/>
        </div>
    );
}

export default Identify;