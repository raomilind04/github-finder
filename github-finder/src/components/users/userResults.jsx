import {useEffect, useContext} from "react"; 
import Spinner from "../layout/spinner";
import UserItem from "./userItem";
import GithubContext from "../context/github/githubContext";


function UserResults() {
    const {users, loading, fetchUsers} = useContext(GithubContext); 
    useEffect(()=> {
        fetchUsers(); 
    }, []);

    if(!loading){
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user)=> {
                    return (
                        <UserItem key={user.id} user={user} />
                    ); 
                })}
            </div>
        ); 
    }else {
        return (
            <Spinner />
        )
    }
}

export default UserResults; 