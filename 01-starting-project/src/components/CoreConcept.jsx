export default function CoreConcept({title, description, image}) {
    return <li>
      {image && <img src={image} alt={title} />}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </li>
  }