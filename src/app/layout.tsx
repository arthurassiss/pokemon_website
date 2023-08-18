import '@/styles/reset.scss';
import { Roboto_Mono } from 'next/font/google';

export const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={robotoMono.className}>{children}</body>
		</html>
	);
}
