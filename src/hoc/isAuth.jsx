import AuthContext from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const isAuth = (WrappedComponent) => {
  const Component = (props) => {
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (!user) {
        navigate("/");
        return;
      }
    }, []);

    return <WrappedComponent {...props} />;
  
  };

  return Component;
};

export default isAuth;
