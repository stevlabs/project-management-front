import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
  const projects = [
    {
        id: 1,
        name: 'Proyecto 1',
        description: 'Descripción proyecto 1',
        startDate: '2024-11-01',
        endDate: '2024-11-10',
    },
    {
        id: 2,
        name: 'Proyecto 2',
        description: 'Descripción proyecto 2',
        startDate: '2024-11-15',
        endDate: '2024-11-25',
    },
  ];
  return (
    <section className="App-project-list">
        <h2>Lista de mis projectos</h2>
        <div className="App-project-cards-container">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    </section>
  )
}
