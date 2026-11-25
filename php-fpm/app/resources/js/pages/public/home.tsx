import { Head, Link } from '@inertiajs/react';
import { register } from '@/routes';
import { index as candidates } from '@/routes/candidates';
import { index as questionnaires } from '@/routes/questionnaires';

export default function Home() {
    return (
        <>
            <Head title="Accueil" />
            <section className="grid gap-10 rounded-3xl bg-emerald-950 px-6 py-10 text-white sm:px-10 sm:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                <div>
                    <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-emerald-200 uppercase">
                        Présidentielle 2027
                    </p>
                    <h1 className="max-w-3xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
                        Vos idées d’abord. Les étiquettes ensuite.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50">
                        Évaluez les propositions des candidats sans connaître
                        leur identité, découvrez vos affinités politiques et
                        comparez vos réponses avec celles de vos proches.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href={questionnaires()}
                            className="inline-flex min-h-11 items-center rounded-full bg-lime-300 px-5 font-semibold text-emerald-950 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            Découvrir les questionnaires
                        </Link>
                        <Link
                            href={register()}
                            className="inline-flex min-h-11 items-center rounded-full border border-white/60 px-5 font-semibold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            Créer un profil
                        </Link>
                    </div>
                </div>
                <ol aria-label="Les trois étapes" className="grid gap-3">
                    {[
                        [
                            '01',
                            'Évaluez',
                            'Donnez une note de −3 à +3 à chaque proposition.',
                        ],
                        [
                            '02',
                            'Découvrez',
                            'Validez votre questionnaire pour révéler les candidats et les sources.',
                        ],
                        [
                            '03',
                            'Comparez',
                            'Mesurez vos accords et désaccords avec les profils de votre choix.',
                        ],
                    ].map(([number, title, description]) => (
                        <li
                            key={number}
                            className="rounded-2xl border border-white/15 bg-white/5 p-4"
                        >
                            <p className="text-xs font-bold tracking-widest text-lime-300">
                                {number}
                            </p>
                            <h2 className="mt-1 text-lg font-semibold">
                                {title}
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-emerald-50">
                                {description}
                            </p>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="mt-14 grid gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
                    <p className="text-sm font-semibold text-emerald-800">
                        Un catalogue transparent
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">
                        Des propositions à leur source
                    </h2>
                    <p className="mt-3 leading-7 text-stone-600">
                        Les textes sont reproduits tels qu’ils ont été publiés.
                        Pendant l’évaluation, le candidat, son parti et la
                        source restent masqués. Ils sont révélés après
                        validation.
                    </p>
                    <Link
                        href={candidates()}
                        className="mt-5 inline-flex min-h-10 items-center font-semibold text-emerald-900 underline underline-offset-4"
                    >
                        Voir les candidats
                    </Link>
                </article>
                <article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
                    <p className="text-sm font-semibold text-emerald-800">
                        Un comparateur de réponses
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">
                        Comprendre vos convergences
                    </h2>
                    <p className="mt-3 leading-7 text-stone-600">
                        Comparez vos notes communes pour voir où vos avis se
                        rejoignent, divergent ou restent neutres. Les périmètres
                        disponibles dépendent des questionnaires validés.
                    </p>
                    <Link
                        href={questionnaires()}
                        className="mt-5 inline-flex min-h-10 items-center font-semibold text-emerald-900 underline underline-offset-4"
                    >
                        Parcourir les questionnaires
                    </Link>
                </article>
            </section>
        </>
    );
}
