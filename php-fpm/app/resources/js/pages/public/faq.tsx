import { Head } from '@inertiajs/react';

const answers = [
    [
        'Pourquoi les noms des candidats sont-ils masqués ?',
        'Pour vous permettre de juger le contenu de chaque proposition sans être influencé par l’identité du candidat ou de son parti. Cette anonymisation par masquage a ses limites : le texte peut parfois donner des indices.',
    ],
    [
        'Comment fonctionne la notation ?',
        'Pour chaque proposition, choisissez une note entière entre −3 et +3. Une note négative exprime un désaccord, 0 une position neutre ou indécise, et une note positive un accord.',
    ],
    [
        'Comment calculez-vous mon affinité avec les candidats ?',
        'Pour un périmètre donné, le score est la moyenne de vos notes sur les propositions actives du candidat. La page de résultats montre aussi combien de propositions vous avez jugées favorablement, défavorablement ou de manière neutre.',
    ],
    [
        'Comment fonctionne la comparaison entre profils ?',
        'Le score d’affinité entre deux profils convertit en pourcentage la distance moyenne entre leurs notes communes. La comparaison indique aussi les taux de concordance, d’opposition et de neutralité divergente, ainsi que leurs accords et désaccords les plus marqués.',
    ],
    [
        'Pourquoi un candidat a-t-il peu ou pas de propositions ?',
        'Le catalogue dépend des propositions trouvées dans les sources retenues et des thèmes couverts par chaque programme. Un candidat actif peut donc ne pas avoir de proposition dans un questionnaire donné.',
    ],
    [
        'Pourquoi faut-il valider un questionnaire ?',
        'La validation verrouille les notes du questionnaire et révèle l’identité du candidat ainsi que la source exacte de chaque proposition. Une fois verrouillées, les notes ne sont plus modifiables.',
    ],
    [
        'Pourquoi un questionnaire validé peut-il redevenir « À compléter » ?',
        'Une nouvelle proposition ou une modification de fond peut nécessiter une nouvelle évaluation. Les résultats concernés restent indisponibles jusqu’à ce que les propositions en attente soient évaluées et validées.',
    ],
    [
        'Que faire si je perds mon login ou mon mot de passe ?',
        'Aucune donnée personnelle n’est demandée à la création du profil et aucune récupération de compte n’est prévue. La perte de ces identifiants entraîne donc la perte de l’accès en écriture au profil.',
    ],
];

export default function Faq() {
    return (
        <>
            <Head title="FAQ" />
            <header className="max-w-3xl">
                <p className="text-sm font-semibold tracking-wider text-emerald-800 uppercase">
                    Des réponses claires
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Questions fréquentes
                </h1>
            </header>
            <div className="mt-8 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white px-6">
                {answers.map(([question, answer]) => (
                    <details key={question} className="group py-5">
                        <summary className="cursor-pointer rounded-sm text-lg font-semibold marker:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800">
                            {question}
                        </summary>
                        <p className="max-w-4xl pt-4 pb-1 leading-7 text-stone-600">
                            {answer}
                        </p>
                    </details>
                ))}
            </div>
        </>
    );
}
