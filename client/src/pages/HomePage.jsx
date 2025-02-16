import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";

const HomePage = () => {
  return (
    <div>
      <h1>Submit User</h1>
      <UserForm />
      <Link to="/users">
        <button>View Submitted Users</button>
      </Link>
    </div>
  );
};

export default HomePage;
