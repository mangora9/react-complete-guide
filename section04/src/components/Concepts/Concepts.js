import ConceptItem from "./ConceptItem";
const Concepts = (props) => {
  return (
    <ul className='concepts'>
      { props.concepts?.map((concept, index) => (
        <ConceptItem
          key={index}
          image={concept.image}
          title={concept.title}
          description={concept.description}
        />
        ))
      }
    </ul>
  )
}

export default Concepts;