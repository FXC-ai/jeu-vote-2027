import { Head } from '@inertiajs/react';

type Candidate = {
    name: string;
    birthDate: string | null;
    party: string;
    proposalCountsByGeneralTheme: { name: string; count: number }[];
};

export default function Candidates({
    candidates,
}: {
    candidates: Candidate[];
}) {
    return (
        <>
            <Head title="Candidats" />
            <header className="max-w-3xl">
                <p className="text-sm font-semibold tracking-wider text-emerald-800 uppercase">
                    Le catalogue
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Les candidats
                </h1>
                <p className="mt-4 text-lg leading-8 text-stone-600">
                    Seuls les candidats actifs sont présentés. Les propositions
                    sont comptées par grand thème et restent anonymes pendant
                    les questionnaires.
                </p>
            </header>
            {candidates.length === 0 ? (
                <p className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-white p-6 text-stone-600">
                    Les candidats et leurs propositions seront publiés dans le
                    catalogue lorsqu’ils auront été ajoutés.
                </p>
            ) : (
                <ul className="mt-8 grid gap-5 md:grid-cols-2">
                    {candidates.map((candidate, index) => (
                        <li
                            key={`${candidate.name}-${index}`}
                            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                        >
                            <h2 className="text-xl font-bold">
                                {candidate.name}
                            </h2>
                            <p className="mt-1 text-stone-600">
                                {candidate.party}
                            </p>
                            {candidate.birthDate && (
                                <p className="mt-1 text-sm text-stone-500">
                                    Né·e le{' '}
                                    {new Date(
                                        `${candidate.birthDate}T12:00:00`,
                                    ).toLocaleDateString('fr-FR')}
                                </p>
                            )}
                            <h3 className="mt-6 text-sm font-semibold">
                                Propositions recensées par grand thème
                            </h3>
                            {candidate.proposalCountsByGeneralTheme.length ===
                            0 ? (
                                <p className="mt-2 text-sm text-stone-500">
                                    Aucune proposition active recensée.
                                </p>
                            ) : (
                                <dl className="mt-3 divide-y divide-stone-100">
                                    {candidate.proposalCountsByGeneralTheme.map(
                                        (theme) => (
                                            <div
                                                key={theme.name}
                                                className="flex justify-between gap-4 py-2 text-sm"
                                            >
                                                <dt>{theme.name}</dt>
                                                <dd className="font-semibold tabular-nums">
                                                    {theme.count}
                                                </dd>
                                            </div>
                                        ),
                                    )}
                                </dl>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
