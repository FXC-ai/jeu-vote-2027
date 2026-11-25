import { Head } from '@inertiajs/react';

type GeneralTheme = {
    name: string;
    questionnaires: { name: string; activeProposalCount: number }[];
};

export default function Questionnaires({
    generalThemes,
}: {
    generalThemes: GeneralTheme[];
}) {
    return (
        <>
            <Head title="Questionnaires" />
            <header className="max-w-3xl">
                <p className="text-sm font-semibold tracking-wider text-emerald-800 uppercase">
                    Explorer les sujets
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Questionnaires par thème
                </h1>
                <p className="mt-4 text-lg leading-8 text-stone-600">
                    Chaque questionnaire rassemble les propositions actives d’un
                    thème. Les textes, candidats, partis et sources ne sont pas
                    affichés ici : ils sont révélés après validation du
                    questionnaire.
                </p>
            </header>
            {generalThemes.length === 0 ? (
                <p className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-white p-6 text-stone-600">
                    Les questionnaires seront disponibles quand les propositions
                    du catalogue auront été ajoutées.
                </p>
            ) : (
                <div className="mt-8 space-y-4">
                    {generalThemes.map((generalTheme, index) => (
                        <section
                            key={generalTheme.name}
                            aria-labelledby={`general-theme-${index}`}
                            className="rounded-2xl border border-stone-200 bg-white p-6"
                        >
                            <h2
                                id={`general-theme-${index}`}
                                className="text-xl font-bold"
                            >
                                {generalTheme.name}
                            </h2>
                            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                                {generalTheme.questionnaires.map(
                                    (questionnaire) => (
                                        <li
                                            key={questionnaire.name}
                                            className="flex items-center justify-between gap-4 rounded-xl bg-stone-50 px-4 py-3"
                                        >
                                            <span className="font-medium">
                                                {questionnaire.name}
                                            </span>
                                            <span className="shrink-0 text-sm text-stone-600">
                                                {
                                                    questionnaire.activeProposalCount
                                                }{' '}
                                                propositions
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </section>
                    ))}
                </div>
            )}
        </>
    );
}
