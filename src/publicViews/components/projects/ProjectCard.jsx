
export const ProjectCard = ({ name, description, startDate, endDate }) => {
  return (
    <article className="App-project-card">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Fecha inicio: {startDate}</p>
        <p>Fecha fin: {endDate}</p>
    </article>
  )
}
