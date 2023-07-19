import { useNavigate } from "react-router-dom";

export function NavigationBar(){
    const navigate = useNavigate()
    
    const inputEnter = (e) =>{
        if(e.key === 'Enter'){
            alert('1')
        }
    }



    return(
        <>
                <div class="navigation-bar">
                    <ul>
                        <li id="navigation-bar-left">
                            <img src="/svg/upload.svg" alt="Upload" />
                        </li>
                        <li id="navigation-bar-right">
                            <img src="/svg/user.svg" alt="Login" onClick={() => navigate("/auth")}/>
                        </li>
                    </ul>
                    <div class="search-bar">
                        <input type="text" placeholder="Введите имя файла, или имя_пользователя@имя_файла" onKeyDown={inputEnter}/>
                        <hr />
                    </div>

                </div>
        </>
    )
}