import {Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import Input from "./components/Input";
import {useEffect, useState} from "react";
import Button from "./components/Button";

function EditUser() {
    const [image, setImage] = useState();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        setIsLoading(true)
        fetch('https://dummyapi.io/data/v1/user/' + id, {
            method: "GET",
            headers: {
                "app-id": "64fc4a747b1786417e354f31",
            }
        })
            .then(response => response.json())
            .then((data) => {
                setUser(data)
                setIsLoading(false)
            })
            .catch((error) => console.log(error));
    }, [id]);
    return (
        <div className={'container-flude bg-no-repeat bg-cover'} style={{
            backgroundImage: 'url("/fff.jpeg")'
        }}>
            {
                user &&

                <Formik
                    initialValues={user}
                    onSubmit={(values) => {
                        setIsLoading(false);
                        console.log(values)
                        fetch('https://dummyapi.io/data/v1/user/' + id, {
                            method: "PUT",
                            headers: {
                                "app-id": "64fc4a747b1786417e354f31",
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                firstName: values.firstName,
                                lastName: values.lastName,
                                mobile: values.mobile,
                                email: values.email,
                            })
                        })
                            .then(response => response.json())
                            .then((data) => {
                                navigate('/')
                                setIsLoading(false);
                            })
                            .catch((error) => {
                                console.log(error);
                                setIsLoading(false);
                            });
                    }}
                >
                    {({
                          values,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-12 gap-[24px]">
                                <div className="col-span-12">
                                    <div className="col-span-12">
                                        <div className="flex flex-col items-center justify-center">
                                            <Input placeholder={'Picture'}
                                                   name={'picture'}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   value={values.picture}/>
                                        </div>
                                    </div>
                                </div>
                                <Input placeholder={'first name'}
                                       name={'firstName'}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.firstName}/>
                                <Input placeholder={'last name'}
                                       name={'lastName'}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.lastName}/>
                                <Input type={'email'}
                                       placeholder={'email'}
                                       name={'email'}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.email}/>
                                <Input placeholder={'mobile'}
                                       name={'mobile'}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.mobile}/>
                                {
                                    !isLoading &&
                                    <div className="col-span-12 flex items-center justify-between">
                                        <Button type={'submit'} text={'save'}/>
                                        <Link to={'/'}>cancel</Link>
                                    </div>
                                }
                            </div>
                        </form>)}
                </Formik>
            }
        </div>
    );
}

export default EditUser;