import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import GithubContext from "../context/github/githubContext";

function UserSearch() {
  const [text, setText] = useState("");
  const {users} = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please enter a username");
    } else {
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="input-group">
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
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
