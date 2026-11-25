import { Head, Link } from '@inertiajs/react';
import { index as questionnaires } from '@/routes/questionnaires';

export default function About() {
    return (
        <>
            <Head title="À propos et méthodologie" />
            <header className="max-w-3xl">
                <p className="text-sm font-semibold tracking-wider text-emerald-800 uppercase">
                    Le projet
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    À propos et méthodologie
                </h1>
                <p className="mt-4 text-lg leading-8 text-stone-600">
                    Jeu-vote.fr vous aide à réfléchir à vos convictions en
                    évaluant des propositions politiques, puis en comparant vos
                    réponses à celles d’autres profils.
                </p>
            </header>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
                    <h2 className="text-xl font-bold">
                        Collecte et présentation des propositions
                    </h2>
                    <p className="mt-3 leading-7 text-stone-600">
                        Les propositions sont copiées depuis des sources
                        publiques fiables, sans reformulation afin de préserver
                        leur formulation d’origine. Pendant le questionnaire, le
                        nom du candidat, son parti et la source ne sont pas
                        montrés. Après validation, l’identité et un lien vers la
                        page exacte de la source sont révélés.
                    </p>
                    <p className="mt-3 leading-7 text-stone-600">
                        Les sources générales sont les sites web officiels des
                        candidats et de leurs partis, où leurs programmes et
                        propositions sont publiés.
                    </p>
                    <p className="mt-3 leading-7 text-stone-600">
                        Le masquage ne peut pas garantir un anonymat parfait :
                        une formulation, un sujet ou une référence peut parfois
                        laisser deviner son origine. Cette limite est inhérente
                        à la méthode et assumée.
                    </p>
                </section>
                <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
                    <h2 className="text-xl font-bold">
                        Résultats par candidat
                    </h2>
                    <p className="mt-3 leading-7 text-stone-600">
                        Pour chaque périmètre disponible, l’affinité avec un
                        candidat correspond à la moyenne des notes attribuées à
                        ses propositions actives. Les graphiques complètent
                        cette moyenne par le nombre de propositions évaluées
                        favorablement, défavorablement et de façon neutre.
                    </p>
                    <p className="mt-3 leading-7 text-stone-600">
                        Les résultats d’un questionnaire et d’un grand thème
                        nécessitent que tous les questionnaires correspondants
                        aient été validés. Le résultat global est calculé à
                        partir des notes verrouillées et peut être consulté à
                        tout moment.
                    </p>
                </section>
                <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 lg:col-span-2">
                    <h2 className="text-xl font-bold">
                        Indicateurs de comparaison
                    </h2>
                    <p className="mt-3 leading-7 text-stone-600">
                        La comparaison porte seulement sur les propositions
                        actives que les deux profils ont notées et verrouillées
                        dans le périmètre concerné.
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-stone-600">
                        <li>
                            <strong>Score d’affinité :</strong> 100 × (1 − somme
                            des distances entre notes / (6 × nombre de
                            propositions communes)).
                        </li>
                        <li>
                            <strong>Concordance :</strong> part des propositions
                            où les deux notes ont le même sens : positives,
                            négatives ou neutres.
                        </li>
                        <li>
                            <strong>Opposition :</strong> part des propositions
                            pour lesquelles une note est positive et l’autre
                            négative.
                        </li>
                        <li>
                            <strong>Neutralité divergente :</strong> part des
                            propositions où une note est nulle et l’autre
                            positive ou négative.
                        </li>
                        <li>
                            <strong>Accords et désaccords marqués :</strong>{' '}
                            propositions avec les distances les plus faibles ou
                            les plus fortes entre les deux notes.
                        </li>
                    </ul>
                    <p className="mt-4 leading-7 text-stone-600">
                        Ces indicateurs décrivent les réponses au catalogue
                        disponible. Ils ne résument pas toutes les opinions
                        politiques d’une personne. Les résultats dépendent du
                        nombre, de la sélection et de l’actualité des
                        propositions recensées.
                    </p>
                </section>
                <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 lg:col-span-2">
                    <h2 className="text-xl font-bold">Projets comparables</h2>
                    <p className="mt-3 leading-7 text-stone-600">
                        D’autres projets proposent des outils de comparaison de
                        programmes ou de positionnement politique, notamment
                        Candidator, Programme Candidat, Smartvote et le
                        comparateur de l’IFRAP.
                    </p>
                    <Link
                        href={questionnaires()}
                        className="mt-5 inline-flex min-h-10 items-center font-semibold text-emerald-900 underline underline-offset-4"
                    >
                        Découvrir les thèmes évalués
                    </Link>
                </section>
            </div>
        </>
    );
}
