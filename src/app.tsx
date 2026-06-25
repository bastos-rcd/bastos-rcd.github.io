import { Profile } from '@/components/profile/profile'

export function App() {
	return (
		<div className="flex h-dvh max-h-dvh flex-col gap-4 bg-linear-0 from-(--bg-bottom) to-(--bg-top) px-8 pt-20 md:flex-row md:px-60 md:pb-20">
			<Profile />
		</div>
	)
}
