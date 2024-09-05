import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Lock, Eye, EyeOff } from 'lucide-react';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Member } from '@/db/schema';
import VirtualKeyboard from './VirtualKeyboard';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ITEMS_PER_PAGE = 6;
const TOTAL_ROWS = 6;
const SECRET_PASSWORD = '1234';

interface MembersTableProps {
	members: Member[];
}

const MembersTable: React.FC<MembersTableProps> = ({ members }) => {
	const { t } = useTranslation();
	const [filter, setFilter] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedMember, setSelectedMember] = useState<Member | null>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isUnlocked, setIsUnlocked] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState('');

	const handleKeyPress = (key: string) => {
		setPassword(prev => prev + key);
		form.setValue('password', password + key);
	};

	const handleBackspace = () => {
		setPassword(prev => prev.slice(0, -1));
		form.setValue('password', password.slice(0, -1));
  };

	const handleClear = () => {
		setPassword('');
		form.setValue('password', '');
	};

	const passwordSchema = z.object({
		password: z.string().min(4, { message: 'passwordRequired' }),
	});

	const form = useForm<z.infer<typeof passwordSchema>>({
		resolver: zodResolver(passwordSchema),
		defaultValues: {
			password: '',
		},
	});

	const filteredMembers = filter
		? members.filter((member) =>
				member.lastName.toUpperCase().startsWith(filter),
		  )
		: members;

	const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE);
	const paginatedMembers = filteredMembers.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE,
	);

	const emptySlots = TOTAL_ROWS - paginatedMembers.length;
	const filledMembers = [...paginatedMembers, ...Array(emptySlots).fill(null)];

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const clearFilter = () => {
		setFilter(null);
		setCurrentPage(1);
	};

	const handleViewDetails = (member: Member) => {
		setSelectedMember(member);
		setIsDialogOpen(true);
		setIsUnlocked(false);
		setPassword('')
		form.reset();
	};

	const handleUnlock = (values: z.infer<typeof passwordSchema>) => {
		if (values.password === SECRET_PASSWORD) {
			setIsUnlocked(true);
		} else {
			form.setError('password', { message: 'incorrectPassword' });
		}
	};

	const handleAccept = () => {
		// Here you would typically save any changes made to the member info
		setIsDialogOpen(false);
		setIsUnlocked(false);
	};

	return (
		<div className='flex flex-col space-y-4 justify-center'>
			<div className='rounded-md border'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>{t('joinDate')}</TableHead>
							<TableHead>{t('name')}</TableHead>
							<TableHead>{t('role')}</TableHead>
							<TableHead>{t('actions')}</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filledMembers.map((member, index) => (
							<TableRow key={member?.id || `empty-${index}`}>
								<TableCell>{member?.joinDate || '\u00A0'}</TableCell>
								<TableCell className='font-medium'>
									{member
										? `${member.lastName}, ${member.firstName} ${
												member.secondSurname || ''
										  }`
										: '\u00A0'}
								</TableCell>
								<TableCell>
									{member ? t(`roles.${member.role}`) : '\u00A0'}
								</TableCell>
								<TableCell>
									{member ? (
										<Button
											variant='outline'
											size='sm'
											onClick={() => handleViewDetails(member)}
										>
											<Lock className='mr-2 h-4 w-4' />
											{t('viewDetails')}
										</Button>
									) : (
										<div className='h-9'></div>
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className='flex flex-wrap justify-center gap-2'>
				{alphabet.map((letter) => (
					<Button
						key={letter}
						variant={filter === letter ? 'default' : 'outline'}
						size='sm'
						onClick={() => {
							setFilter(filter === letter ? null : letter);
							setCurrentPage(1);
						}}
					>
						{letter}
					</Button>
				))}
			</div>
			<div className='flex flex-col items-center space-y-2'>
				<div className='flex justify-center gap-2'>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<Button
							key={page}
							variant={currentPage === page ? 'default' : 'outline'}
							size='sm'
							onClick={() => handlePageChange(page)}
						>
							{page}
						</Button>
					))}
				</div>
				<div className='h-9 flex items-center'>
					{filter && (
						<Button variant='destructive' size='sm' onClick={clearFilter}>
							{t('clearFilter')}
						</Button>
					)}
				</div>
			</div>
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>{t('memberDetails')}</DialogTitle>
					</DialogHeader>
					{!isUnlocked ? (
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(handleUnlock)}
								className='space-y-4'
							>
								<FormField
									control={form.control}
									name='password'
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t('password')}</FormLabel>
											<FormControl>
												<div className='relative'>
													<Input
														type={showPassword ? 'text' : 'password'}
														placeholder={t('enterPassword')}
														{...field}
													/>
													<Button
														type='button'
														variant='ghost'
														size='sm'
														className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
														onClick={() => setShowPassword(!showPassword)}
													>
														{showPassword ? (
															<EyeOff className='h-4 w-4' />
														) : (
															<Eye className='h-4 w-4' />
														)}
													</Button>
												</div>
											</FormControl>
											<FormDescription>
												La contraseña es "1234".
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<VirtualKeyboard
									onKeyPress={handleKeyPress}
									onBackspace={handleBackspace}
									onClear={handleClear}
								/>
								<DialogFooter>
									<Button
										type='button'
										variant='outline'
										onClick={() => setIsDialogOpen(false)}
										className='mr-2'
									>
										{t('cancel')}
									</Button>
									<Button type='submit'>{t('unlock')}</Button>
								</DialogFooter>
							</form>
						</Form>
					) : (
						<div className='space-y-4'>
							<div className='flex items-center space-x-4'>
								<img
									src={
										selectedMember?.avatarUrl ||
										`https://api.dicebear.com/6.x/initials/svg?seed=${selectedMember?.id}`
									}
									alt={`${selectedMember?.firstName} ${selectedMember?.lastName}`}
									className='w-16 h-16 rounded-full'
								/>
								<div>
									<h3 className='font-semibold'>{`${
										selectedMember?.firstName
									} ${selectedMember?.lastName} ${
										selectedMember?.secondSurname || ''
									}`}</h3>
									<p className='text-sm text-gray-500'>
										{t(`roles.${selectedMember?.role}`)}
									</p>
								</div>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<div>
									<p className='text-sm font-medium text-gray-500'>
										{t('email')}
									</p>
									<p>{selectedMember?.email || '-'}</p>
								</div>
								<div>
									<p className='text-sm font-medium text-gray-500'>
										{t('phone')}
									</p>
									<p>{selectedMember?.phoneNumber || '-'}</p>
								</div>
								<div>
									<p className='text-sm font-medium text-gray-500'>
										{t('joinDate')}
									</p>
									<p>{selectedMember?.joinDate}</p>
								</div>
								<div>
									<p className='text-sm font-medium text-gray-500'>
										{t('address')}
									</p>
									<p>{selectedMember?.address || '-'}</p>
								</div>
							</div>
							<DialogFooter>
								<Button
									type='button'
									variant='outline'
									onClick={() => setIsDialogOpen(false)}
								>
									{t('cancel')}
								</Button>
								<Button type='button' onClick={handleAccept}>
									{t('accept')}
								</Button>
							</DialogFooter>
						</div>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default MembersTable;
