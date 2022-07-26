import propTypes from "prop-types";
import RepoItem from "./repoItem";

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h3 className="font-bold my-4 card-title text-3xl">Repos</h3>
      </div>
      <h2>
        {repos.map((repo) => {
          return (
            <RepoItem key={repo.id} repo={repo} />
          );
        })}
      </h2>
    </div>
  );
}
RepoList.propTypes = {
  repos: propTypes.array.isRequired,
};

export default RepoList;
