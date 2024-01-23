function Button(props) {
    const {text, type = 'button'} = props
    return (
        <button className={'border rounded py-[10px] px-[20px]'} type={type}>{text}</button>
    );
}

export default Button;