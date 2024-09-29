'use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { ClerkLoaded } from '@clerk/nextjs';
import Image from 'next/image';
import { useState } from 'react';

type MenuItem = {
    label: string;
    href: string;
};

const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Service', href: '/service' },
    { label: 'Eligibility Check', href: '/' },
    { label: 'Study Abroad', href: '#' },
    { label: 'Latest News', href: '/latest-news' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white pt-16"> {/* Added padding-top */}
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-sky-600" href="/">
                            <Image
                                src="/header/logo.png"
                                alt="Logo"
                                width={150}
                                height={90}
                                className="inset-0 lg:h-full lg:w-full object-cover"
                            />
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12 lg:mt-8">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                {menuItems.map((item) => (
                                    <li key={item.label}>
                                        <a className="text-gray-500 text-md transition font-bold hover:text-gray-600/75" href={item.href}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex hidden sm:gap-4 bg-sky-500 rounded-full">
                                <ClerkLoaded>
                                    <SignedIn>
                                        <UserButton />
                                    </SignedIn>
                                    <SignedOut>
                                        <SignInButton mode="modal">
                                            <button className="hidden md:inline-block rounded-full bg-sky-500 py-3 px-7 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90">
                                                Sign In
                                            </button>
                                        </SignInButton>
                                    </SignedOut>
                                </ClerkLoaded>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                onClick={toggleMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`fixed inset-0 z-50 bg-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex flex-row justify-between p-4">
                    <button
                        className="text-gray-600"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <h2 className="text-slate-500 text-md font-bold p-4">MENU</h2>
                <nav aria-label="Mobile" className="px-4">
                    <ul className="space-y-4 text-sm">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <a className="text-sky-400 font-bold transition hover:text-gray-500/75" href={item.href}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
