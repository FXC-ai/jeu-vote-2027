import { Form, Head, usePage } from '@inertiajs/react';
import { store } from '@/routes/contact';

type ContactPageProps = {
    contactAvailable: boolean;
    flash?: { status?: string };
};

export default function Contact() {
    const { contactAvailable, flash } = usePage()
        .props as unknown as ContactPageProps;

    return (
        <>
            <Head title="Contact" />
            <header className="max-w-3xl">
                <p className="text-sm font-semibold tracking-wider text-emerald-800 uppercase">
                    Écrire à l’équipe
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Contact
                </h1>
                <p className="mt-4 text-lg leading-8 text-stone-600">
                    Une erreur dans une proposition, une question ou une
                    remarque ? Envoyez-nous un message.
                </p>
            </header>
            <section className="mt-8 max-w-2xl rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
                {flash?.status && (
                    <p
                        role="status"
                        className="mb-6 rounded-lg bg-emerald-50 p-4 text-emerald-900"
                    >
                        {flash.status}
                    </p>
                )}
                {!contactAvailable && (
                    <p
                        role="status"
                        className="mb-6 rounded-lg bg-amber-50 p-4 text-amber-950"
                    >
                        Le formulaire sera disponible prochainement.
                    </p>
                )}
                <Form {...store.form()} className="space-y-5">
                    {({ errors, processing }) => (
                        <>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-1.5 block font-medium"
                                >
                                    Nom
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    required
                                    maxLength={100}
                                    disabled={!contactAvailable}
                                    aria-invalid={Boolean(errors.name)}
                                    aria-describedby={
                                        errors.name ? 'name-error' : undefined
                                    }
                                    className="min-h-11 w-full rounded-lg border border-stone-300 px-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 disabled:bg-stone-100"
                                />
                                {errors.name && (
                                    <p
                                        id="name-error"
                                        className="mt-1 text-sm text-red-700"
                                    >
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1.5 block font-medium"
                                >
                                    Adresse e-mail
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    maxLength={254}
                                    disabled={!contactAvailable}
                                    aria-invalid={Boolean(errors.email)}
                                    aria-describedby={
                                        errors.email ? 'email-error' : undefined
                                    }
                                    className="min-h-11 w-full rounded-lg border border-stone-300 px-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 disabled:bg-stone-100"
                                />
                                {errors.email && (
                                    <p
                                        id="email-error"
                                        className="mt-1 text-sm text-red-700"
                                    >
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-1.5 block font-medium"
                                >
                                    Objet
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    required
                                    maxLength={150}
                                    disabled={!contactAvailable}
                                    aria-invalid={Boolean(errors.subject)}
                                    aria-describedby={
                                        errors.subject
                                            ? 'subject-error'
                                            : undefined
                                    }
                                    className="min-h-11 w-full rounded-lg border border-stone-300 px-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 disabled:bg-stone-100"
                                />
                                {errors.subject && (
                                    <p
                                        id="subject-error"
                                        className="mt-1 text-sm text-red-700"
                                    >
                                        {errors.subject}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-1.5 block font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    maxLength={5000}
                                    disabled={!contactAvailable}
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={
                                        errors.message
                                            ? 'message-error'
                                            : undefined
                                    }
                                    className="w-full rounded-lg border border-stone-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 disabled:bg-stone-100"
                                />
                                {errors.message && (
                                    <p
                                        id="message-error"
                                        className="mt-1 text-sm text-red-700"
                                    >
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={!contactAvailable || processing}
                                className="inline-flex min-h-11 items-center rounded-full bg-emerald-900 px-5 font-semibold text-white hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {processing
                                    ? 'Envoi en cours…'
                                    : 'Envoyer le message'}
                            </button>
                        </>
                    )}
                </Form>
            </section>
        </>
    );
}
