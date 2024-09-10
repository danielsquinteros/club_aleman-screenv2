import { Member } from '@/db/schema';

const API_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3000';

interface MembersAPI {
	getAll: () => Promise<Member[]>;
	getMembers: () => Promise<Member[]>;
	getDirectors: () => Promise<Member[]>;
}

export const members: MembersAPI = {
	getAll: async () => {
		const response = await fetch(`${API_URL}/api/members`);
		if (!response.ok) {
			throw new Error('Failed to fetch members');
		}
		return response.json();
	},
	getMembers: async () => {
		const allMembers = await members.getAll();
		return allMembers.filter((member) => member.role === 'member');
	},
	getDirectors: async () => {
		const allMembers = await members.getAll();
		return allMembers.filter((member) => member.role !== 'member');
	},
};
