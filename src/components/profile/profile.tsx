import { ProfileList } from '@/components/profile/profile-list'
import { ProfileAbout } from './profile-about'

export function Profile() {
	return (
		<div className="flex w-full flex-col items-center justify-center gap-y-4 md:w-1/3">
			<div className="z-10 w-2/3 rounded-4xl bg-(--yellow)">
				<img className="rounded-4xl" src="/profile.webp" />
			</div>

			<div className="mt-[-35%] w-full space-y-8 rounded-4xl bg-linear-0 from-(--blue-dark) to-(--blue-light) p-8 pt-48 text-center md:pt-36">
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">Bastien Record</h1>

					<h2 className="text-xl font-thin">Développeur Full Stack</h2>
				</div>

				<ProfileList />
			</div>

			<ProfileAbout />
		</div>
	)
}
