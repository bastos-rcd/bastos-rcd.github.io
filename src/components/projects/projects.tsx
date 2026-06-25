import { ProjectsItem } from '@/components/projects/projects-item'

const projectsData = [
	{
		title: 'Project Alpha',
		description:
			'Une application web full-stack de gestion de flotte automobile avec tableau de bord en temps réel et suivi kilométrique.',
		img: '/gym.webp',
		stack: ['fab fa-js', 'fab fa-react', 'fab fa-node'],
		link: 'https://github.com/...',
	},
]

export function Projects() {
	return (
		<div className="flex flex-1 flex-col gap-4 md:overflow-y-auto">
			{projectsData.map((project, index) => {
				const isEven = index % 2 === 0

				return <ProjectsItem key={index} {...project} even={isEven} />
			})}
		</div>
	)
}
