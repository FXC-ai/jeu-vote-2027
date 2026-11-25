# Jeu-vote.fr

Ce contexte décrit l’évaluation des propositions politiques, les résultats associés et leur comparaison entre utilisateurs.

## Langage

**Note** : Évaluation entière attribuée par un utilisateur à une proposition, sur une échelle de -3 à +3. Une note reste modifiable tant qu’elle n’est pas verrouillée.
_À éviter_ : proposition validée (pour une note simplement enregistrée)

**Note verrouillée** : Note devenue définitive à la suite de la validation d’un questionnaire contenant la proposition. Elle est partagée par tous les questionnaires qui contiennent cette proposition.
_À éviter_ : note validée

**Questionnaire validé** : Questionnaire dont toutes les propositions actives ont une note verrouillée. Sa validation peut être manuelle ou automatique lorsque toutes les notes sont déjà verrouillées par d’autres questionnaires.
_À éviter_ : questionnaire terminé (sauf pour le statut d’interface)

**Grand thème** : Regroupement de plusieurs questionnaires portant sur un même domaine. Ses résultats et comparaisons couvrent les propositions de ces questionnaires.

**Périmètre global** : Ensemble des propositions actives dont les notes sont verrouillées pour un utilisateur. Une comparaison globale ne porte que sur les propositions verrouillées pour les deux profils.

