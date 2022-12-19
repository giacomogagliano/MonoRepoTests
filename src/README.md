provo a fare un drop
cambiamento 2
cambiamento 3
cambiamento 4, dopo di che provo a droppare il cambiamento 3

/// dopo weird thing
cera una cosa strana, ad ogni commit metteva tutti i
cambiamenti, allora sto provando effettuano prima il push
sul remote e fare questo primo cambiamento

mi sembra di aver capito che ad ogni commit mette anche il cambiamento precedente se il cambiamento è avvenuto sullo stesso file, almeno sembra. Ora committo questo e nel commit mi aspetto che sia presente anche la riga aggiunta nel commit precedente (quello dove cè scritto weird thing)

### style

e invece no questa volta nel commit c'era solo il paragrafo
"mi sembra", quindi ora riprovo con questo paragrafo

### stage 8

effettivamente nell'ultimo commit ha aggiunto solo la parte
contenuta nel paragrafo precedente che quoto in questa parte
che scrivo ora, per poi provare a droppare il cambiamento

> ### style
>
> e invece no questa volta nel commit c'era solo il
> paragrafo "mi sembra", quindi ora riprovo con questo
> paragrafo

### stage 9

mi sembra di aver capito che l'inteactive rebase effettuato
prendendo un commit che ha cambiamenti sul file A, e cercare
di rebasarlo su un commit il quale anche lui ha un
cambiamento sullo stesso file, non funziona molto bene.
Io ho provato a levare il commit del paragrafo style, ma
quando ho effettuato il resolve mi ha chiesto di scegliere
il testo del commit successivo (A => B => C, io cercavo di
togliere B, ma quando provavo a mettere C su A, mi faceva
rimettere il testo di B che nel frattempo era stato messo su
C)
Quindi per provare ad effettuare il test correttamente ora
faccio una prova con altri file.

Ho creato 3 file

- provadrop1.txt
- provadrop2.txt
- provadrop3.txt

ho fatto il commit per ogni singolo file. ora provo a
droppare il secondo
