import {Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import Input from "./components/Input";
import {useState} from "react";
import Button from "./components/Button";

function AddUser() {
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={'container-flude bg-no-repeat bg-cover'} style={{
            backgroundImage: 'url("/fff.jpeg")'
        }}>
            <Formik
                initialValues={{firstName: '', lastName: '', mobile: '', email: '', picture: ''}}
                onSubmit={(values) => {
                    setIsLoading(false);
                    console.log(values)
                    fetch('https://dummyapi.io/data/v1/user/create', {
                        method: "POST",
                        headers: {
                            "app-id": "64fc4a747b1786417e354f31",
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            mobile: values.mobile,
                            email: values.email,
                            picture: values.picture,
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
                                <div className="flex flex-col items-center justify-center">
                                    <Input placeholder={'Picture'}
                                           name={'picture'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.picture}/>
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
                                    <Link to={'/'}>cancel</Link>
                                    <Button type={'submit'} text={'save'}/>
                                </div>
                            }
                        </div>
                    </form>)}
            </Formik>
        </div>
    );
}

export default AddUser;