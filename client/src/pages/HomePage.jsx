import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";

const HomePage = () => {
  return (
    <div className="page-container">
      <UserForm />
      <div className="button-container">
        <Link to="/users">
          <button>View Submitted Users</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
