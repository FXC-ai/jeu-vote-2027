<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Mail\ContactMessageMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('public/contact', [
            'contactAvailable' => filled(config('contact.recipient')),
        ]);
    }

    public function store(StoreContactMessageRequest $request): RedirectResponse
    {
        $recipient = config('contact.recipient');

        abort_unless(filled($recipient), 503);

        $message = $request->validated();

        Mail::to($recipient)->send(new ContactMessageMail(
            name: $message['name'],
            email: $message['email'],
            subjectLine: $message['subject'],
            body: $message['message'],
        ));

        return to_route('contact.index')->with('status', 'Votre message a été envoyé. Merci.');
    }
}
