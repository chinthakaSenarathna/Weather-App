import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton = ({ cities }) => {
    const { logout, isAuthenticated } = useAuth0();

    const handleLogout = () => {
        
        for(let i=0;i<cities.length;i++){
            if(localStorage.getItem(cities[i].CityCode)){
                localStorage.removeItem(cities[i].CityCode)
            }
        }

        logout({
            returnTo: window.location.origin,
        });
    };

    return (
        isAuthenticated && (
            <button onClick={handleLogout}>
                Log out
            </button>
        )
    )
}

export default LogoutButton