"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(true);

	const menuItems = [
		{ name: "First", href: "/dashboard/first" },
		{ name: "Second", href: "/dashboard/second" },
		{ name: "Third", href: "/dashboard/third" },
	];

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<div className={`bg-gray-800 text-white transition-all duration-300 ${isOpen ? "w-64" : "w-16"} flex flex-col`}>
				{/* Sidebar Header */}
				<div className="flex items-center justify-between p-4 border-b border-gray-700">
					{isOpen && <h2 className="text-xl font-bold">Menu</h2>}
					<button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-gray-700">
						{isOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>

				{/* Sidebar Navigation */}
				<nav className="flex-1 overflow-y-auto pt-2">
					<ul>
						{menuItems.map((item, index) => (
							<li key={index}>
								<Link href={item.href} className="flex items-center p-4 hover:bg-gray-700 transition-colors">
									<ChevronRight size={20} />
									{isOpen && <span className="ml-2">{item.name}</span>}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-8 bg-gray-900">
				<h1 className="text-2xl font-bold mb-4">Main Content</h1>
				<div>{children}</div>
			</div>
		</div>
	);
}
