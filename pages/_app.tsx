import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import dynamic from 'next/dynamic'

const montserrat = Montserrat({ subsets: ['latin'] });


export function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${montserrat} `}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}


export default dynamic(() => Promise.resolve(App), {
	ssr: false
})