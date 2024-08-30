export type MemberRole =
	| 'president'
	| 'vice_president'
	| 'secretary'
	| 'treasurer'
	| 'board_member'
	| 'honor_advisor'
	| 'honor_member'
	| 'member';

export type Member = {
	id: string;
	firstName: string;
	lastName: string;
	secondSurname?: string;
	role: MemberRole;
	email?: string;
	phoneNumber?: string;
	address?: string;
	country?: string;
	city?: string;
	avatarUrl?: string;
	joinDate: string;
};

export interface HistoryEvent {
	year: number;
	event: string;
}

export interface GalleryImage {
	id: string;
	url: string;
	title: string;
}
