import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";

function Pestel() {

    const navigate = useNavigate();

    return (  
        <div>
            Project Pestel
            <Button variant="secondary" title="Quay lại" onClick={() => navigate('/projects/info')}/>
            <Button variant="primary" size='medium' title="Tiếp theo" onClick={() => navigate('/projects/target')}/>
        </div>
    );
}

export default Pestel;