import { membersList } from '@/data/members';

export const members = {
	getAll: async () => {
		// Simulating an API call with a delay
		await new Promise((resolve) => setTimeout(resolve, 500));
		return membersList;
	},
	getMembers: async () => {
		// Simulating an API call with a delay
		await new Promise((resolve) => setTimeout(resolve, 500));
		return membersList.filter((member) => member.role === 'member');
	},
	getDirectors: async () => {
		// Simulating an API call with a delay
		await new Promise((resolve) => setTimeout(resolve, 500));
		return membersList.filter((member) => member.role !== 'member');
	},
};
