import { ProfileList } from '@/components/profile/profile-list'

export function Profile() {
	return (
		<div className="flex w-full flex-col items-center md:w-1/3">
			<div className="z-10 w-1/2 rounded-4xl bg-(--yellow) md:w-2/3">
				<img className="rounded-4xl" src="/profile.webp" />
			</div>

			<div className="mt-[-25%] w-full space-y-10 rounded-4xl bg-linear-0 from-(--blue-dark) to-(--blue-light) p-10 pt-40 text-center md:pt-32">
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">Bastien Record</h1>

					<h2 className="text-xl font-thin">Développeur Full Stack</h2>
				</div>

				<ProfileList />
			</div>
		</div>
	)
}
