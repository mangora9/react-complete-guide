const ConceptItem = (props) => {
  return (
    <li className="concept" id='concepts'>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  )
}

export default ConceptItem;