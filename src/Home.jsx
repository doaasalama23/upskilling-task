import {useEffect, useState} from "react";
import User from "./components/User";


function Home() {
    const [users, setUsers] = useState();
    const [page, setPage] = useState(1)
    const getData = () => {
        fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=5`, {
            method: "GET",
            headers: {
                "app-id": "64fc4a747b1786417e354f31",
            }
        })
            .then(response => response.json())
            .then((data) => {
                setUsers(data.data);
            })
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        getData();
    }, [page]);

    const deleteUser = (id) => {
        fetch('https://dummyapi.io/data/v1/user/' + id, {
            method: "Delete",
            headers: {
                "app-id": "64fc4a747b1786417e354f31",
            }
        })
            .then(response => response.json())
            .then((data) => {
                getData();
            })
            .catch((error) => console.log(error));
    }
    return (
        <div className={'container mt-[20px]'}>
            <div className={'flex flex-col gap-[20px]'}>
                {
                    users ?
                        users.map((item, index) => (
                            <User key={index} data={item} onDelete={(id) => {
                                deleteUser(id)
                            }}/>
                        )) :
                        <p>loading</p>
                }
            </div>
            <button onClick={() => {
                setPage(page + 1)
            }}>next
            </button>
            <button onClick={() => {
                if (page > 1) {
                    setPage(page - 1)
                }
            }}>prev
            </button>
        </div>
    );
}

export default Home;