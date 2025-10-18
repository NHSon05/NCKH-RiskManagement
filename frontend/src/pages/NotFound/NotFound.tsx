import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";

function NotFound() {
    
    const navigate = useNavigate()

    return (  
        <div>
            <h2>404 | Page not found</h2>
            <br/>
            <Button variant="secondary" title="Về trang chủ" onClick={() => navigate('/home')}/>
        </div>
    );
}

export default NotFound;