function Input(props) {
    const {name, placeholder} = props
    return (
        <input className={'lg:col-span-6 col-end-12 border rounded p-[10px]'} placeholder={placeholder}
               name={name} {...props}
        />
    );
}

export default Input;