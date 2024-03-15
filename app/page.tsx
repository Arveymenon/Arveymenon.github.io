import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Styles from './global.module.css'
import process from "process";

const env = process.env.NODE_ENV
const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

const neonText = {
	"color": "#fff", 
	"text-shadow": "0 0 0px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 0px #860eff, 0 0 2px #0fa, 0 0 20px #860eff, 0 0 102px #0fa, 0 0 151px #340068"
}

export default function Home() {
	const deployment_date = new Date();
	console.log(env)

	return (
		<>
			<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
				<nav className="my-16 animate-fade-in">
					<ul className="flex flex-wrap items-center justify-center gap-4">
						{navigation.map((item, index) => (
							<>
								<Link
									key={item.href}
									href={item.href}
									className="text-2xl duration-500 text-zinc-500 hover:text-zinc-300"
								>
									{item.name}
								</Link>
								{ index == 0 && <span className="text-4xl duration-500 text-zinc-500 hover:text-zinc-300">|</span> }
							</>
						))}
					</ul>
				</nav>
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<Particles
					className="absolute inset-0 -z-10 animate-fade-in"
					quantity={100}
				/>
				<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text neonText-1">
					Arulvinayak
				</h1>
				<p className="z-10 text-sm text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-xl md:text-4xl whitespace-nowrap bg-clip-text neonText-1">@arveymenon</p>

				<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<div className="my-16 text-center animate-fade-in">
					<h2 className="text-sm text-zinc-500 mx-6">
						Hi, my name is Arulvinayak Menon, I'm building amazing web3 application and open source solutions. Checkout my {" "}
						<Link
							target="_blank"
							href="https://github.com/Arveymenon"
							className="underline duration-500 hover:text-zinc-300"
						> 
							Github 
						</Link>
					</h2>
				</div>
				<div className={Styles.footer}>
					<div className="text-sm text-zinc-500 mx-6">
						Last Updated On: {deployment_date.toISOString().split('T')[0]} &nbsp;
							{env === 'development' && `${deployment_date.toISOString().split('T')[1]}`}
					</div>
				</div>
			</div>
		</>
	);
}
