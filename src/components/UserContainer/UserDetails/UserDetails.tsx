import {FC} from "react";

import {IUser} from "../../interfaces/userInterfaces";

interface IProps {
    usrDetails: IUser
}

const UserDetails: FC<IProps> = ({usrDetails}) => {
    const {id, name, username, email, address: {geo: {lng, lat}, street, zipcode, suite, city}} = usrDetails;

    return (
        <div>
            <div>id - {id} </div>
            <div>name - {name} </div>
            <div>username - {username}</div>
            <div>email - {email} </div>
            <div>
                geo -
                <div>lng - {lng}</div>
                <div>lat - {lat}</div>
            </div>
            <div> street - {street} </div>
            <div> zipcode - {zipcode} </div>
            <div> suite - {suite} </div>
            <div> city - {city} </div>
        </div>
    );
};

export {UserDetails};