import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../../components/common/Button";

function Error() {

    const error = useRouteError();
    const navigate = useNavigate();

    return (  
        <div>
            <h3>
                An error occurred.
            </h3>
            <p>{(error as { message?: string })?.message ?? "Unknown error"}</p>
            <Button variant="secondary" title="Về trang chủ" onClick={() => navigate('/home')}/>
        </div>
    );
}

export default Error