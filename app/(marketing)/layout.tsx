import { ReactNode } from 'react';
import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer';

const MarketingLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='h-full bg-zinc-950 text-zinc-200'>
			<Navbar />
			<main className='pt-24 pb-24'>{children}</main>
			<Footer />
		</div>
	);
};

export default MarketingLayout;
