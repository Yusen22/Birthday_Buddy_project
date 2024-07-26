const Person = ({ image, name, age }) => {
    return (
        <article className="person">
            <img className="img" src={image}></img>
            <div>
                <h4>{name}</h4>
                <p>Age: {age}</p>
            </div>
        </article>
    )
}
export default Person