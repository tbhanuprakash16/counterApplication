import "./index.css"

const Welcome = (props) => {
    const {name, greeting} = props;
    return (
        <div>
            <h1 className = "message">{greeting}, {name}</h1>
        </div>
    )
}

Welcome.defaultProps = {
    name: "Rahul",
    greeting: "Hello"
}

export default Welcome 