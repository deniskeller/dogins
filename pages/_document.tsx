import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
				></link>
				<link
					rel='stylesheet'
					href='https://use.typekit.net/fzy6ewm.css'
				></link>
			</Head>
			<title>Welcome to Doqins & Partners family office</title>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
