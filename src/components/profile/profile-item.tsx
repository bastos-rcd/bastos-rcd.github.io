interface Props {
	icon: string
	action: () => void
}

export function ProfileItem(props: Props) {
	return (
		<button
			className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-(--grey)/20 p-1.5 transition-transform hover:scale-105"
			onClick={props.action}
		>
			<i className={props.icon} style={{ fontSize: 30 }}></i>
		</button>
	)
}
