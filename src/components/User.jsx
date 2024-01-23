import {Link} from "react-router-dom";

function User(props) {
    const {picture, firstName, lastName, mobile, id} = props.data
    return (
        <div className={'border-b flex main-user'}>
            <div className={'bbb'}>
                <img className={'w-[100px] h-[100px] rounded-full object-cover'}
                    src={picture ? picture : '/logo192.png'} alt=""/>
                <h4>{firstName + ' ' + lastName}</h4>
                <p>{mobile}</p>
            </div>
            <div className={'vvv'}>
                <Link to={'/edit-user/' + id}>edit</Link>
                <button onClick={() => {
                    props.onDelete(id);
                }}>delete
                </button>
            </div>
        </div>
    );
}

export default User;
