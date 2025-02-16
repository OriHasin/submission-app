import { Link } from "react-router-dom";
import UserTable from "../components/UserTable";

const UsersPage = () => {
  return (
    <div>
      <h1>Submitted Users</h1>
      <UserTable />
      <Link to="/">
        <button>Go Back to Form</button>
      </Link>
    </div>
  );
};

export default UsersPage;
