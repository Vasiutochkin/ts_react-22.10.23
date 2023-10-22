import {IUser} from "../../interfaces/userInterfaces";
import {FC} from "react";

interface IProps {
    user: IUser
    click: (id: number) => Promise<void>
}

const User: FC<IProps> = ({user, click}) => {

    const {id, name, username} = user;

    return (
        <div>
            <div> id- {id}</div>
            <div> name- {name}</div>
            <div> username- {username}</div>
            <button onClick={() => click(id)}>DETAILS</button>
            <hr/>
        </div>
    );
};

export {User};