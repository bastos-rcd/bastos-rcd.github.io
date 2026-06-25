import { Profile } from '@/components/profile/profile'
import { Projects } from '@/components/projects/projects'

export function App() {
	return (
		<div className="flex h-dvh max-h-dvh flex-col gap-4 overflow-y-auto bg-linear-0 from-(--bg-bottom) to-(--bg-top) p-8 md:flex-row md:overflow-hidden md:px-60">
			<Profile />

			<Projects />
		</div>
	)
}
