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
	id: number;
	year: number;
	event: string;
	description: string | null;
}

export interface GalleryImage {
	id: string;
	description: string | null;
	url: string;
	title: string;
	uploadedAt: string;
}
export interface MediaItems {
	id: string;
	title: string;
	url: string;
	description: string | null;
	type: string | null;
	uploadedAt: string;
}
