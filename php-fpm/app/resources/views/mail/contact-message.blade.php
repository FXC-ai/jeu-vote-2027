<p>Un nouveau message a été envoyé depuis le formulaire de contact de Jeu-vote.fr.</p>

<p><strong>Nom :</strong> {{ $name }}</p>
<p><strong>Adresse e-mail :</strong> {{ $email }}</p>
<p><strong>Objet :</strong> {{ $subjectLine }}</p>

<p><strong>Message :</strong></p>
<p>{!! nl2br(e($body)) !!}</p>
