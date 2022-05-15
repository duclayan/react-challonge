
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const challonge_api = {
    apiKey: process.env.REACT_APP_CHALLONGE_API_KEY,
    userName:  process.env.REACT_APP_CHALLONGE_USERNAME,
    baseURL: process.env.REACT_APP_BASE_URL
}

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
  }