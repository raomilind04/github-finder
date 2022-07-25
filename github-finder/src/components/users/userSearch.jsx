import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const {setAlert}= useContext(AlertContext);  

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter a valid username", "Error"); 
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const handleClearClick= ()=> {
    clearUsers(); 
    setText(""); 
  }; 
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="input-group relative">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered input-lg w-full ml-40"
                value={text}
                onChange={handleChange}
              />
              <button className="btn btn-square btn-lg">
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={handleClearClick}>Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
