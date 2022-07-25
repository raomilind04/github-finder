import UserResults from "../components/users/userResults";
import UserSearch from "../components/users/userSearch";

function Home(){
    return (
        <div>
            <UserSearch />
            <UserResults />
        </div>
    ); 
}

export default Home; 