import { Link } from "react-router-dom";
import UserTable from "../components/UserTable";

const UsersPage = () => {
  return (
    <div className="page-container">
      <UserTable />
      <div className="button-container">
        <Link to="/">
          <button>Go Back to Form</button>
        </Link>
      </div>
    </div>
  );
};

export default UsersPage;
