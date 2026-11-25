import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { about, faq, home } from '@/routes';
import { index as candidates } from '@/routes/candidates';
import { index as contact } from '@/routes/contact';
import { index as questionnaires } from '@/routes/questionnaires';

export default function PublicLayout({ children }: PropsWithChildren) {
    const { name, launchYear } = usePage().props as unknown as {
        name: string;
        launchYear: number;
    };

    return (
        <div className="min-h-screen bg-stone-50 text-stone-950">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:shadow-lg"
            >
                Aller au contenu principal
            </a>
            <header className="border-b border-stone-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
                    <Link
                        href={home()}
                        className="text-lg font-bold tracking-tight"
                    >
                        {name}
                    </Link>
                    <nav
                        aria-label="Navigation principale"
                        className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium"
                    >
                        <Link
                            className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                            href={home()}
                        >
                            Accueil
                        </Link>
                        <Link
                            className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                            href={questionnaires()}
                        >
                            Questionnaires
                        </Link>
                        <Link
                            className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                            href={candidates()}
                        >
                            Candidats
                        </Link>
                        <Link
                            className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                            href={faq()}
                        >
                            FAQ
                        </Link>
                        <Link
                            className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                            href={about()}
                        >
                            À propos
                        </Link>
                        <Link
                            className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                            href={contact()}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>
            <main
                id="main-content"
                className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
            >
                {children}
            </main>
            <footer className="border-t border-stone-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <span>{name}</span>
                    <span>Mis en ligne en {launchYear}</span>
                </div>
            </footer>
        </div>
    );
}
