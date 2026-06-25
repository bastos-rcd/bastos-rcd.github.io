import { ProfileItem } from '@/components/profile/profile-item'

export function ProfileList() {
	return (
		<div className="flex flex-row justify-center gap-8">
			<ProfileItem
				icon="fa-regular fa-envelope"
				action={() => {
					navigator.clipboard.writeText('record.bastien@gmail.com').then(() => {
						alert('Email copié !')
					})
				}}
			/>

			<ProfileItem
				icon="fa-brands fa-github"
				action={() => {
					window.open('https://github.com/bastos-rcd', '_blank')
				}}
			/>

			<ProfileItem
				icon="fa-brands fa-linkedin-in"
				action={() => {
					window.open('https://www.linkedin.com/in/bastien-record', '_blank')
				}}
			/>

			<ProfileItem
				icon="fa-brands fa-instagram"
				action={() => {
					window.open('https://www.instagram.com/bastos_rcd', '_blank')
				}}
			/>
		</div>
	)
}
