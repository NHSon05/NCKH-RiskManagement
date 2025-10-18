import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";

function Target() {

    const navigate = useNavigate();

    return (  
        <div>
            Project Target
            <Button variant="secondary" title="Quay lại" onClick={() => navigate('/projects/pestel')}/>
            <Button variant="primary" size='medium' title="Tiếp theo" onClick={() => navigate('/projects/identify')}/>
        </div>
    );
}

export default Target;