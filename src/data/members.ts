export type Member = {
	id: string;
	firstName: string;
	lastName: string;
	secondSurname?: string;
	role:
		| 'president'
		| 'vice_president'
		| 'secretary'
		| 'treasurer'
		| 'board_member'
		| 'honor_advisor'
		| 'honor_member'
		| 'member';
	email?: string;
	phoneNumber?: string;
	address?: string;
	country?: string;
	city?: string;
	avatarUrl?: string;
	joinDate: string; // Add this line
};

const membersList: Member[] = [
	{
		id: '1',
		firstName: 'Jorge',
		lastName: 'Marchant',
		secondSurname: 'Brahm',
		role: 'president',
		joinDate: '1990-05-15', // Add a join date for each member
	},
	{
		id: '2',
		firstName: 'Harry',
		lastName: 'Meyer',
		secondSurname: 'Guerrero',
		role: 'vice_president',
		joinDate: '1992-03-20', // Add a join date for each member
	},
	{
		id: '3',
		firstName: 'Ignacio',
		lastName: 'Brintrup',
		secondSurname: 'Bonvallet',
		role: 'secretary',
		joinDate: '1995-07-10', // Add a join date for each member
	},
	{
		id: '4',
		firstName: 'Pablo ',
		lastName: 'Brahm',
		secondSurname: 'Rosas',
		role: 'treasurer',
		joinDate: '1998-11-05', // Add a join date for each member
	},
	{
		id: '5',
		firstName: 'Jaime ',
		lastName: 'Marchant',
		secondSurname: 'Brahm',
		role: 'board_member',
		joinDate: '2001-02-15', // Add a join date for each member
	},
	{
		id: '6',
		firstName: 'Alejandro',
		lastName: 'Wahl',
		secondSurname: 'Böhme',
		role: 'board_member',
		joinDate: '2003-09-25', // Add a join date for each member
	},
	{
		id: '7',
		firstName: 'Enrique',
		lastName: 'Oyarzun ',
		secondSurname: 'Scholtbach',
		role: 'board_member',
		joinDate: '2006-04-12', // Add a join date for each member
	},
	{
		id: '8',
		firstName: 'German ',
		lastName: 'Weitzler',
		secondSurname: 'Zarges',
		role: 'honor_advisor',
		joinDate: '2009-10-08', // Add a join date for each member
	},
	{
		id: '9',
		firstName: 'Henry',
		lastName: 'Scholtbach  ',
		secondSurname: 'Zarges',
		role: 'honor_member',
		joinDate: '2012-06-22', // Add a join date for each member
	},
	{
		id: '10',
		firstName: 'Rodolfo ',
		lastName: 'Stange',
		secondSurname: 'Oelckers',
		role: 'honor_member',
		joinDate: '2015-03-18', // Add a join date for each member
	},
	{
		id: '11',
		firstName: 'Martin',
		lastName: 'Ercoreca',
		secondSurname: 'von Bischoffshausen',
		role: 'honor_member',
		joinDate: '2018-09-05', // Add a join date for each member
	},
	{
		id: '12',
		firstName: 'Federico',
		lastName: 'Oelckers',
		secondSurname: 'Sepulveda',
		role: 'honor_member',
		joinDate: '2021-01-10', // Add a join date for each member
	},
	{
		id: '13',
		firstName: 'Ruben ',
		lastName: 'Alvarado',
		secondSurname: 'Figueroa',
		role: 'member',
		joinDate: '2022-07-03', // Add a join date for each member
	},
	{
		id: '14',
		firstName: 'Daniela',
		lastName: 'Alvarado',
		secondSurname: 'Hermosilla',
		role: 'member',
		joinDate: '2023-02-15', // Add a join date for each member
	},
	{
		id: '15',
		firstName: 'Gerardo',
		lastName: 'Bartsch',
		secondSurname: 'Lohrmann',
		role: 'member',
		joinDate: '2023-08-20', // Add a join date for each member
	},
	{
		id: '16',
		firstName: 'Rudy',
		lastName: 'Bartsch',
		secondSurname: 'Lohrmann',
		role: 'member',
		joinDate: '2023-10-05', // Add a join date for each member
	},
	{
		id: '17',
		firstName: 'Katjia',
		lastName: 'Berndt',
		secondSurname: 'Schuhmacher',
		role: 'member',
		joinDate: '2023-11-12', // Add a join date for each member
	},
	{
		id: '18',
		firstName: 'Jose',
		lastName: 'Berndt',
		secondSurname: 'Sole',
		role: 'member',
		joinDate: '2023-12-02', // Add a join date for each member
	},
	{
		id: '19',
		firstName: 'Juan',
		lastName: 'Berndt',
		secondSurname: 'Sole',
		role: 'member',
		joinDate: '2023-12-10', // Add a join date for each member
	},
	{
		id: '20',
		firstName: 'Thomas',
		lastName: 'Berndt',
		secondSurname: 'Sole',
		role: 'member',
		joinDate: '2023-12-18', // Add a join date for each member
	},
	{
		id: '21',
		firstName: 'Jose',
		lastName: 'Brahm',
		secondSurname: 'Navarrete',
		role: 'member',
		joinDate: '2023-12-25', // Add a join date for each member
	},
	{
		id: '22',
		firstName: 'Ignacio',
		lastName: 'Brintrup',
		secondSurname: 'Bonvallet',
		role: 'member',
		joinDate: '2023-12-30', // Add a join date for each member
	},
	{
		id: '23',
		firstName: 'Jaime ',
		lastName: 'Brintrup',
		secondSurname: 'Bonvallet',
		role: 'member',
		joinDate: '2024-01-05', // Add a join date for each member
	},
	{
		id: '24',
		firstName: 'Lilian',
		lastName: 'Cardenas ',
		secondSurname: 'Elgueta',
		role: 'member',
		joinDate: '2024-01-10', // Add a join date for each member
	},
	{
		id: '25',
		firstName: 'Mauricio',
		lastName: 'Cardenas ',
		secondSurname: 'Elgueta',
		role: 'member',
		joinDate: '2024-01-15', // Add a join date for each member
	},
	{
		id: '26',
		firstName: 'Francisca ',
		lastName: 'Cardenas ',
		secondSurname: 'Elgueta',
		role: 'member',
		joinDate: '2024-01-20', // Add a join date for each member
	},
	{
		id: '27',
		firstName: 'Ignacio ',
		lastName: 'Cardenas ',
		secondSurname: 'Elgueta',
		role: 'member',
		joinDate: '2024-01-25', // Add a join date for each member
	},
	{
		id: '28',
		firstName: 'Mauricio',
		lastName: 'Cardenas ',
		secondSurname: 'Garcia',
		role: 'member',
		joinDate: '2024-01-30', // Add a join date for each member
	},
	{
		id: '29',
		firstName: 'Victor',
		lastName: 'Correa',
		secondSurname: 'Bohle',
		role: 'member',
		joinDate: '2024-02-05', // Add a join date for each member
	},
	{
		id: '30',
		firstName: 'Rolando',
		lastName: 'De Solminihac',
		secondSurname: 'Oelckers',
		role: 'member',
		joinDate: '2024-02-10', // Add a join date for each member
	},
	{
		id: '31',
		firstName: 'Jaime',
		lastName: 'Ercoreca',
		secondSurname: 'Negron',
		role: 'member',
		joinDate: '2024-02-15', // Add a join date for each member
	},
	{
		id: '32',
		firstName: 'Hans',
		lastName: 'Fiebig',
		secondSurname: 'Müller',
		role: 'member',
		joinDate: '2024-02-20', // Add a join date for each member
	},
	{
		id: '33',
		firstName: 'Eduardo',
		lastName: 'Frene',
		secondSurname: 'Dietz',
		role: 'member',
		joinDate: '2024-02-25', // Add a join date for each member
	},
	{
		id: '34',
		firstName: 'Gerardo',
		lastName: 'Fuchslocher',
		secondSurname: 'Marquez',
		role: 'member',
		joinDate: '2024-03-01', // Add a join date for each member
	},
	{
		id: '35',
		firstName: 'Rene ',
		lastName: 'Fuchslocher ',
		secondSurname: 'Raddatz',
		role: 'member',
		joinDate: '2024-03-05', // Add a join date for each member
	},
	{
		id: '36',
		firstName: 'Roberto',
		lastName: 'Gallardo',
		secondSurname: 'Weitzler',
		role: 'member',
		joinDate: '2024-03-10', // Add a join date for each member
	},
	{
		id: '37',
		firstName: 'Helga',
		lastName: 'Georg',
		secondSurname: 'Frese',
		role: 'member',
		joinDate: '2024-03-15', // Add a join date for each member
	},
	{
		id: '38',
		firstName: 'Roberto',
		lastName: 'Gordon ',
		secondSurname: 'Agliati',
		role: 'member',
		joinDate: '2024-03-20', // Add a join date for each member
	},
	{
		id: '39',
		firstName: 'Arturo',
		lastName: 'Guijon ',
		secondSurname: 'Errazuriz',
		role: 'member',
		joinDate: '2024-03-25', // Add a join date for each member
	},
	{
		id: '40',
		firstName: 'Sergio',
		lastName: 'Haeger',
		secondSurname: 'Yunge',
		role: 'member',
		joinDate: '2024-04-01', // Add a join date for each member
	},
	{
		id: '41',
		firstName: 'Adrian ',
		lastName: 'Hamman',
		secondSurname: 'Henkes',
		role: 'member',
		joinDate: '2024-04-05', // Add a join date for each member
	},
	{
		id: '42',
		firstName: 'Nikolas ',
		lastName: 'Heinz',
		secondSurname: 'Davila',
		role: 'member',
		joinDate: '2024-04-10', // Add a join date for each member
	},
	{
		id: '43',
		firstName: 'Byron',
		lastName: 'Herz',
		secondSurname: 'Barria',
		role: 'member',
		joinDate: '2024-04-15', // Add a join date for each member
	},
	{
		id: '44',
		firstName: 'Johann',
		lastName: 'Herz',
		secondSurname: 'Barria',
		role: 'member',
		joinDate: '2024-04-20', // Add a join date for each member
	},
	{
		id: '45',
		firstName: 'Thomas',
		lastName: 'Herz',
		secondSurname: 'Klein',
		role: 'member',
		joinDate: '2024-04-25', // Add a join date for each member
	},
	{
		id: '46',
		firstName: 'Ricardo',
		lastName: 'Hölck',
		secondSurname: 'Kusch',
		role: 'member',
		joinDate: '2024-05-01', // Add a join date for each member
	},
	{
		id: '47',
		firstName: 'Agustin',
		lastName: 'Hölck',
		secondSurname: 'Alvarado',
		role: 'member',
		joinDate: '2024-05-05', // Add a join date for each member
	},
	{
		id: '48',
		firstName: 'Erwin',
		lastName: 'Klein',
		secondSurname: 'Neira',
		role: 'member',
		joinDate: '2024-05-10', // Add a join date for each member
	},
	{
		id: '49',
		firstName: 'Juan',
		lastName: 'Klein',
		secondSurname: 'Schmidt',
		role: 'member',
		joinDate: '2024-05-15', // Add a join date for each member
	},
	{
		id: '50',
		firstName: 'Alejandro',
		lastName: 'Krebs',
		secondSurname: 'Schwerter',
		role: 'member',
		joinDate: '2024-05-20', // Add a join date for each member
	},
	{
		id: '51',
		firstName: 'Camila',
		lastName: 'Kusch',
		secondSurname: 'De La Puente',
		role: 'member',
		joinDate: '2024-05-25', // Add a join date for each member
	},
	{
		id: '52',
		firstName: 'Catalina',
		lastName: 'Kusch',
		secondSurname: 'De La Puente',
		role: 'member',
		joinDate: '2024-06-01', // Add a join date for each member
	},
	{
		id: '53',
		firstName: 'Heinz',
		lastName: 'Kusch',
		secondSurname: 'De La Puente',
		role: 'member',
		joinDate: '2024-06-05', // Add a join date for each member
	},
	{
		id: '54',
		firstName: 'Irene',
		lastName: 'Kusch',
		secondSurname: 'Hechenleitner',
		role: 'member',
		joinDate: '2024-06-10', // Add a join date for each member
	},
	{
		id: '55',
		firstName: 'Rolf',
		lastName: 'Kusch',
		secondSurname: 'Rensinghoff',
		role: 'member',
		joinDate: '2024-06-15', // Add a join date for each member
	},
	{
		id: '56',
		firstName: 'Pedro',
		lastName: 'Laporte',
		secondSurname: 'Miguel',
		role: 'member',
		joinDate: '2024-06-20', // Add a join date for each member
	},
	{
		id: '57',
		firstName: 'Norman',
		lastName: 'Lintz',
		secondSurname: 'Stange',
		role: 'member',
		joinDate: '2024-06-25', // Add a join date for each member
	},
	{
		id: '58',
		firstName: 'Christian',
		lastName: 'Loebel',
		secondSurname: 'Arcos',
		role: 'member',
		joinDate: '2024-07-01', // Add a join date for each member
	},
	{
		id: '59',
		firstName: 'Mario',
		lastName: 'Marchant',
		secondSurname: 'Brahm',
		role: 'member',
		joinDate: '2024-07-05', // Add a join date for each member
	},
	{
		id: '60',
		firstName: 'Joaquin',
		lastName: 'Marchant',
		secondSurname: 'Diaz',
		role: 'member',
		joinDate: '2024-07-10', // Add a join date for each member
	},
	{
		id: '61',
		firstName: 'Jorge',
		lastName: 'Marchant',
		secondSurname: 'Diaz',
		role: 'member',
		joinDate: '2024-07-15', // Add a join date for each member
	},
	{
		id: '62',
		firstName: 'Cristian',
		lastName: 'Marchant',
		secondSurname: 'France',
		role: 'member',
		joinDate: '2024-07-20', // Add a join date for each member
	},
	{
		id: '63',
		firstName: 'Alejandro',
		lastName: 'Marchant',
		secondSurname: 'Hardessen',
		role: 'member',
		joinDate: '2024-07-25', // Add a join date for each member
	},
	{
		id: '64',
		firstName: 'Hernan',
		lastName: 'Marchant',
		secondSurname: 'Hardessen',
		role: 'member',
		joinDate: '2024-08-01', // Add a join date for each member
	},
	{
		id: '65',
		firstName: 'Macarena',
		lastName: 'Marchant',
		secondSurname: 'Martinez',
		role: 'member',
		joinDate: '2024-08-05', // Add a join date for each member
	},
	{
		id: '66',
		firstName: 'Mario',
		lastName: 'Marchant',
		secondSurname: 'Martinez',
		role: 'member',
		joinDate: '2024-08-10', // Add a join date for each member
	},
	{
		id: '67',
		firstName: 'Alberto',
		lastName: 'Marchant',
		secondSurname: 'Olbrich',
		role: 'member',
		joinDate: '2024-08-15', // Add a join date for each member
	},
	{
		id: '68',
		firstName: 'Gaston',
		lastName: 'Marchant',
		secondSurname: 'Roa',
		role: 'member',
		joinDate: '2024-08-20', // Add a join date for each member
	},
	{
		id: '69',
		firstName: 'Rudy',
		lastName: 'Meyer',
		secondSurname: 'Rosemberg',
		role: 'member',
		joinDate: '2024-08-25', // Add a join date for each member
	},
	{
		id: '70',
		firstName: 'Rudy ',
		lastName: 'Meyer',
		secondSurname: 'Ruiz',
		role: 'member',
		joinDate: '2024-09-01', // Add a join date for each member
	},
	{
		id: '71',
		firstName: 'Alejandro',
		lastName: 'Meza',
		secondSurname: 'Werner',
		role: 'member',
		joinDate: '2024-09-05', // Add a join date for each member
	},
	{
		id: '72',
		firstName: 'Konrad',
		lastName: 'Möller-Holtkamp',
		secondSurname: 'Kaiser',
		role: 'member',
		joinDate: '2024-09-10', // Add a join date for each member
	},
	{
		id: '73',
		firstName: 'Rolf',
		lastName: 'Möller-Holtkamp',
		secondSurname: 'Jaederlund',
		role: 'member',
		joinDate: '2024-09-15', // Add a join date for each member
	},
	{
		id: '74',
		firstName: 'Sven',
		lastName: 'Möller-Holtkamp',
		secondSurname: 'Jaederlund',
		role: 'member',
		joinDate: '2024-09-20', // Add a join date for each member
	},
	{
		id: '75',
		firstName: 'Pablo',
		lastName: 'Moore',
		secondSurname: 'Ross',
		role: 'member',
		joinDate: '2024-09-25', // Add a join date for each member
	},
	{
		id: '76',
		firstName: 'Luis',
		lastName: 'Navarro',
		secondSurname: 'Gonzalez',
		role: 'member',
		joinDate: '2024-10-01', // Add a join date for each member
	},
	{
		id: '77',
		firstName: 'Juan',
		lastName: 'Navarro',
		secondSurname: 'Gonzalez',
		role: 'member',
		joinDate: '2024-10-05', // Add a join date for each member
	},
	{
		id: '78',
		firstName: 'Joaquin',
		lastName: 'Neumann',
		secondSurname: 'Heisse',
		role: 'member',
		joinDate: '2024-10-10', // Add a join date for each member
	},
	{
		id: '79',
		firstName: 'Guillermo',
		lastName: 'Neumann',
		secondSurname: 'Perez',
		role: 'member',
		joinDate: '2024-10-15', // Add a join date for each member
	},
	{
		id: '80',
		firstName: 'Jaime',
		lastName: 'Oelckers',
		secondSurname: 'Stange',
		role: 'member',
		joinDate: '2024-10-20', // Add a join date for each member
	},
	{
		id: '81',
		firstName: 'Ignacio',
		lastName: 'Oyarzun',
		secondSurname: 'Aguilera',
		role: 'member',
		joinDate: '2024-10-25', // Add a join date for each member
	},
	{
		id: '82',
		firstName: 'Eduardo ',
		lastName: 'Oyarzun',
		secondSurname: 'Cornejo',
		role: 'member',
		joinDate: '2024-11-01', // Add a join date for each member
	},
	{
		id: '83',
		firstName: 'Alberto ',
		lastName: 'Oyarzun',
		secondSurname: 'Scholtbach',
		role: 'member',
		joinDate: '2024-11-05', // Add a join date for each member
	},
	{
		id: '84',
		firstName: 'Eduardo',
		lastName: 'Oyarzun',
		secondSurname: 'Scholtbach',
		role: 'member',
		joinDate: '2024-11-10', // Add a join date for each member
	},
	{
		id: '85',
		firstName: 'Jaime',
		lastName: 'Pavez',
		secondSurname: 'Cieselski',
		role: 'member',
		joinDate: '2024-11-15', // Add a join date for each member
	},
	{
		id: '86',
		firstName: 'Felipe ',
		lastName: 'Pavez',
		secondSurname: 'Von Freeden',
		role: 'member',
		joinDate: '2024-11-20', // Add a join date for each member
	},
	{
		id: '87',
		firstName: 'Alex',
		lastName: 'Reuter',
		secondSurname: 'Brown',
		role: 'member',
		joinDate: '2024-11-25', // Add a join date for each member
	},
	{
		id: '88',
		firstName: 'Willy',
		lastName: 'Reuter',
		secondSurname: 'Mauret',
		role: 'member',
		joinDate: '2024-12-01', // Add a join date for each member
	},
	{
		id: '89',
		firstName: 'Diego ',
		lastName: 'Reuter',
		secondSurname: 'Möenne-Loccoz',
		role: 'member',
		joinDate: '2024-12-05', // Add a join date for each member
	},
	{
		id: '90',
		firstName: 'Nicolas ',
		lastName: 'Reuter',
		secondSurname: 'Möenne-Loccoz',
		role: 'member',
		joinDate: '2024-12-10', // Add a join date for each member
	},
	{
		id: '91',
		firstName: 'Walter',
		lastName: 'Rinsche',
		secondSurname: 'Andreu',
		role: 'member',
		joinDate: '2024-12-15', // Add a join date for each member
	},
	{
		id: '92',
		firstName: 'Helwin',
		lastName: 'Schmidt',
		secondSurname: 'Gebauer',
		role: 'member',
		joinDate: '2024-12-20', // Add a join date for each member
	},
	{
		id: '93',
		firstName: 'Rene',
		lastName: 'Schmidt',
		secondSurname: 'Gebauer',
		role: 'member',
		joinDate: '2024-12-25', // Add a join date for each member
	},
	{
		id: '94',
		firstName: 'Christian',
		lastName: 'Schmidt',
		secondSurname: 'Himpel',
		role: 'member',
		joinDate: '2024-12-30', // Add a join date for each member
	},
	{
		id: '95',
		firstName: 'Henry',
		lastName: 'Scholtbach',
		secondSurname: 'Schuhmacher',
		role: 'member',
		joinDate: '2025-01-05', // Add a join date for each member
	},
	{
		id: '96',
		firstName: 'Nelson',
		lastName: 'Schwerter',
		secondSurname: 'Siebald',
		role: 'member',
		joinDate: '2025-01-10', // Add a join date for each member
	},
	{
		id: '97',
		firstName: 'Doris',
		lastName: 'Stange',
		secondSurname: 'Münzenmayer',
		role: 'member',
		joinDate: '2025-01-15', // Add a join date for each member
	},
	{
		id: '99',
		firstName: 'Matias',
		lastName: 'Stange',
		secondSurname: 'Paris',
		role: 'member',
		joinDate: '2025-01-25', // Add a join date for each member
	},
	{
		id: '100',
		firstName: 'Claudio ',
		lastName: 'Stange',
		secondSurname: 'Teske',
		role: 'member',
		joinDate: '2025-02-01', // Add a join date for each member
	},
	{
		id: '101',
		firstName: 'Ruby',
		lastName: 'Stange',
		secondSurname: 'Wahl',
		role: 'member',
		joinDate: '2025-02-05', // Add a join date for each member
	},
	{
		id: '102',
		firstName: 'Yola',
		lastName: 'Stange',
		secondSurname: 'Wahl',
		role: 'member',
		joinDate: '2025-02-10', // Add a join date for each member
	},
	{
		id: '103',
		firstName: 'Renato',
		lastName: 'Stolzenbach',
		secondSurname: 'Minte',
		role: 'member',
		joinDate: '2025-02-15', // Add a join date for each member
	},
	{
		id: '104',
		firstName: 'Victor',
		lastName: 'Teuber',
		secondSurname: 'Donoso',
		role: 'member',
		joinDate: '2025-02-20', // Add a join date for each member
	},
	{
		id: '105',
		firstName: 'Rodolfo',
		lastName: 'Wahl',
		secondSurname: 'Böhme',
		role: 'member',
		joinDate: '2025-02-25', // Add a join date for each member
	},
	{
		id: '106',
		firstName: 'Georg',
		lastName: 'Wammes',
		secondSurname: 'Matvienko-Sikar',
		role: 'member',
		joinDate: '2025-03-01', // Add a join date for each member
	},
	{
		id: '107',
		firstName: 'Anton',
		lastName: 'Wammes',
		secondSurname: 'Soto',
		role: 'member',
		joinDate: '2025-03-05', // Add a join date for each member
	},
	{
		id: '108',
		firstName: 'Gabrielle',
		lastName: 'Wammes',
		secondSurname: 'Soto',
		role: 'member',
		joinDate: '2025-03-10', // Add a join date for each member
	},
	{
		id: '109',
		firstName: 'Karl',
		lastName: 'Wammes',
		secondSurname: 'Soto',
		role: 'member',
		joinDate: '2025-03-15', // Add a join date for each member
	},
	{
		id: '110',
		firstName: 'Victor',
		lastName: 'Weitzler',
		secondSurname: 'Stange',
		role: 'member',
		joinDate: '2025-03-20', // Add a join date for each member
	},
	{
		id: '111',
		firstName: 'Alberto',
		lastName: 'Weitzler',
		secondSurname: 'Zarges',
		role: 'member',
		joinDate: '2025-03-25', // Add a join date for each member
	},
	{
		id: '112',
		firstName: 'Helmuth',
		lastName: 'Werner',
		secondSurname: 'Schröder',
		role: 'member',
		joinDate: '2025-04-01', // Add a join date for each member
	},
	{
		id: '113',
		firstName: 'Ruben ',
		lastName: 'Westermaier',
		secondSurname: 'Flores',
		role: 'member',
		joinDate: '2025-04-05', // Add a join date for each member
	},
	{
		id: '114',
		firstName: 'Pilar',
		lastName: 'Winkler',
		secondSurname: 'Ghio',
		role: 'member',
		joinDate: '2025-04-10', // Add a join date for each member
	},
	{
		id: '115',
		firstName: 'Walter',
		lastName: 'Winkler',
		secondSurname: 'Thomas',
		role: 'member',
		joinDate: '2025-04-15', // Add a join date for each member
	},
	{
		id: '116',
		firstName: 'Guillermo',
		lastName: 'Winkler',
		secondSurname: 'Werner',
		role: 'member',
		joinDate: '2025-04-20', // Add a join date for each member
	},
];

export const members = {
	getAll: () => {
		return membersList;
	},
	getMembers: () => {
		return membersList.filter((member) => member.role === 'member');
	},
	getDirectors: () => {
		return membersList.filter((member) => member.role !== 'member');
	},
};
