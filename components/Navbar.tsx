import { Autocomplete, Group, Header, createStyles, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCar, BiStore } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { IoIosRestaurant } from 'react-icons/io';
import { MdOutlineHotel } from 'react-icons/md';

export default function Navbar() {
	return (
		<>
			<NavbarBottom />
		</>
	);
}

const NavbarBottom = () => {
	const router = useRouter()

	if (router.pathname === '/auth/login') return null

	const NavItem = ({ label, link, icon, active = false }) => (
		<Link href={link}>
			<div className='flex flex-col items-center'>
				<div style={{ color: `${active && 'hsl(0,74%,45%)'}` }}>{icon}</div>
				<div className={`text-xs ${active ? 'text-[hsl(0,74%,45%)]' : ''}`}>{label}</div>
			</div>
		</Link>
	)

	return (
		<div className='p-2 sticky z-10 left-0 bottom-0 w-full mt-auto'>
			<div className='bg-white shadow p-2 rounded-md'>
				<div className='flex justify-around gap-4'>
					{links.map((item, index) => (
						<NavItem key={index} {...item} active={router.pathname === item.link} />
					))}
				</div>
			</div>
		</div>
	)
}


const useStyles = createStyles((theme) => ({
	header: {
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
	},

	inner: {
		height: rem(56),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	links: {
		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	search: {
		[theme.fn.smallerThan('xs')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: `${rem(8)} ${rem(12)}`,
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},
}));

const iconsSize = 20;

const links = [
	{ label: 'Hoteluri', link: '/hotels', icon: <MdOutlineHotel size={iconsSize} /> },
	{ label: 'Restaurante', link: '/restaurants', icon: <IoIosRestaurant size={iconsSize} /> },
	{ label: 'Home', link: '/', icon: <AiOutlineHome size={iconsSize} /> },
	{ label: 'Magazine', link: '/stores', icon: <BiStore size={iconsSize} /> },
	{ label: 'Transport', link: '/transport', icon: <BiCar size={iconsSize} /> },
];

const NavbarTop = () => {
	const [opened, { toggle }] = useDisclosure(false);
	const { classes } = useStyles();

	const items = links.map((link) => (
		<a key={link.label} href={link.link} className={classes.link} onClick={(event) => event.preventDefault()}>
			{link.label}
		</a>
	));

	return (
		<Header height={56} className={classes.header}>
			<div className={classes.inner}>
				<Group>
					<div className="text-center">
						<div className="text-xl leading-none">CAHUL</div>
						<div className="text-sm leading-none">CONNECT</div>
					</div>
				</Group>

				<Group>
					<Group ml={50} spacing={5} className={classes.links}>
						{items}
					</Group>
					<Autocomplete
						className={classes.search}
						placeholder="Cauta..."
						icon={<FaSearch size="1rem" stroke={1.5} />}
						data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
					/>
				</Group>
			</div>
		</Header>
	);
};
