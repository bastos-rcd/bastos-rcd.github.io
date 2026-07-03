import { ProjectsItem } from '@/components/projects/projects-item'

const projectsData = [
	{
		title: 'MEDISYNC',
		description:
			"Application pour la santé qui numérise, automatise et simplifie l'organisation des responsables dans la génération des plannings.",
		img: '/medisync.webp',
		stack: [
			'fa-brands fa-angular',
			'fa-brands fa-tailwind-css',
			'fa-brands fa-postgresql',
		],
		link: 'https://medisync-landing.vercel.app/',
	},
	{
		title: 'DartScore',
		description:
			'Application web mobile de gestion de comptages de points de fléchettes.',
		img: '/dart-score.webp',
		stack: [
			'fa-brands fa-react',
			'fa-brands fa-node-js',
			'fa-brands fa-docker',
		],
		link: 'https://github.com/bastos-rcd/DartScore',
	},
	{
		title: 'SmartRoom',
		description: 'Application de gestion de réservations de salles.',
		img: '/smart-room.webp',
		stack: [
			'fa-brands fa-react',
			'fa-brands fa-docker',
			'fa-brands fa-postgresql',
		],
		link: 'https://github.com/bastos-rcd/SmartRoom',
	},
	{
		title: 'TheGym',
		description: 'Application web de gestion de salle de sport.',
		img: '/gym.webp',
		stack: [
			'fa-brands fa-angular',
			'fa-brands fa-symfony',
			'fa-brands fa-bootstrap',
		],
		link: 'https://github.com/bastos-rcd/TheGym',
	},
	{
		title: 'EMCAFFE',
		description:
			'Site web vitrine présentant un café associatif écologique et solidaire.',
		img: '/emcaffe.webp',
		stack: ['fa-brands fa-tailwind-css', 'fa-brands fa-figma'],
		link: 'https://github.com/bastos-rcd/EMCAFFE',
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
