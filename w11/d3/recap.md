//MODULI
servono a organizzare importazioni (moduli), dichiarazioni (components) e providers (interceptors)
divise in più file

possiamo separare la navigazione in un file separato
*routing
in un modulo per abilitare il routing serve (CustomRoutingModule)
rotte:Routes = []
imports: [RouterModule.forChild(rotte)]
exports: [RouterModule]

e nel component che deve usare queste rotte
import: [CustomRoutingModule]

possono essere caricati in lazy loading per caricare quei componenti ecc solo quando serve
*lazy loading
si mette nel routing, al posto del component mettiamo
loadChildren: ()=>import('path/to/file').then((m:Module)=>m.nomeClasseModulo)


//LOGIN
per effettuare chiamate http autenticate serve un JWT
il JWT è ottenuto facendo un login corretto 

1 - effettuare il login
    component login -> form
    service -> metodi http

2 - registrazione
    component signup -> form
    service -> metodi http

3 - interazioni quando cambia il login (lo fare osservando gli observable del service)
    - tasti logout/login nella navbar
    - contenuti che cambiano
    - rotte che si abilitano

4 - un interceptor per aggiungere il token a tutte le request


*AuthService
subject -> "telecomando" da cui esguire next() per mandare un segnale
observable -> subject.asObservable() per fare subscribe nei componenti e reagire ai next della subject
observable bollean -> subject.asObservable().pipe(map()) -> per modificare il valore del next in un boolean per rendere più semplice la lettura del login 

methods
login() -> http.post(/login) -> next()
signup() -> http.post(/signup)

logout() -> cancellare JWT da localStorage -> next(null)

autoLogin() -> se il token esiste nello storage -> controllo che sia valido -> next di conferma login
*avvia autoLogout

autoLogout(d:Date) -> prende i ms mancanti per la scadenza -> imposta un setTimeout con quei ms per eseguire logout()

//GUARDS
servono a controllare la navigazione, implementano delle inteface che forniscono dei metodi
canActivate, canDeactivate, canActivateChild, canLoad, resolve

GUARD
ha i metodi implementati, questi metodi restituiscono
boolean | urlTree
oppure se i dati da controllare per decidere arrivano da async
Observable<boolean | urlTree> | Promise<boolean | urlTree>

la guard si implementa nelle rotte
aggiungendo la proprietà del controllo che vogliamo fare su una rotta
{
    path: '',
    compontn: Component,
    canActivate: [Guard1, Guard2, Guard3],
    canDeactivate: [Guard2, Guard3]
}

*se vogliamo avere un controllo sulla rotta (es canActivate) la guard deve avere quel metodo ma non devono esserci tutti i metodi