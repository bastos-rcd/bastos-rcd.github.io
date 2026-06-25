interface Props {
	title: string
	description: string
	img: string
	stack: string[]
	link: string
	even: boolean
}

export function ProjectsItem(props: Props) {
	return (
		<div
			className={`flex flex-col md:flex-row ${
				props.even ? 'md:flex-row' : 'md:flex-row-reverse'
			} min-h-[250px] overflow-hidden rounded-4xl bg-linear-0 from-[#0C0D16] to-[#25262F]`}
		>
			<div className="relative w-full overflow-hidden md:w-1/2">
				<img
					src={props.img}
					className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</div>

			<div className="flex w-full flex-col justify-between gap-4 p-8 md:w-1/2">
				<h1 className="text-2xl font-bold">{props.title}</h1>

				<p className="line-clamp-3 font-extralight">{props.description}</p>

				<div className="flex items-center justify-between border-t border-(--grey)/50 pt-4">
					<div className="flex items-center gap-3">
						{props.stack.map((icon, i) => (
							<span
								key={i}
								className="flex aspect-square items-center justify-center rounded-xl bg-(--grey)/20 p-1.5"
							>
								<i className={icon} style={{ fontSize: 20 }} />
							</span>
						))}
					</div>

					<a
						href={props.link}
						target="_blank"
						className="flex cursor-pointer items-center justify-center rounded-xl bg-(--grey)/20 p-1.5 transition-transform hover:scale-105"
					>
						Voir le projet
					</a>
				</div>
			</div>
		</div>
	)
}
