import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div class="card card-side bg-base-10 shadow-md ">
      <div className="flex-row item-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full w-14 h-14">
            <img src={avatar_url} alt="Image" />
          </div>
        </div>
        <div>
          <h2 class="card-title">{login}</h2>
          <Link className="text-base-content text-opacity-40" to={`/user/${login}`} >View Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
