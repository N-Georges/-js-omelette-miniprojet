class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = [];
        this.mainGauche = [];
        this.seDeplacer = (depart, arrive) =>{
            this.lieu = arrive.nom;
            console.log(`${this.nom} est actuellement a la ${depart.nom}`);
            console.log(`georges prend la route`);
            console.log(`georges est arrive a ${arrive.nom}`);  
            arrive.personne.push(this.nom);
            depart.personne.splice(this.lieu);
        };
        this.payerArticle = (el) => {
                for (let index = 0; index <this.mainDroite.length; index++) {
                    // Si perso a assez de money ! 
                    if (this.argent >= el) {
                         this.mainDroite[0].contenu.push(element)
                        console.log(`${element.nom} pris`);
                        const element = this.mainDroite[index];
                        this.argent = this.argent - element.prix
                        return this.argent
                    } else {
                        console.log('pas assez de money');
                    }
                    console.log(el);
                }

            };
        this.couper = () => {
            if (Ingredients.etat == "entier") {
                Ingredients.etat = "coupe"
            }
        }
    }

}
let personne1 = new Personne("georges", "",  100)



let maison ={
    nom : "maison",
    personne : [personne1.nom],
}

class Outil {
    constructor(nom, action){
        this.nom = nom;
        this.action = action
    }
}

let outil1 = new Outil("couteau", "coupé")


class Ingredients {
    constructor(nom, etats, prix){
        this.nom = nom;
        this.etats = etats;
        this.prix = prix
    }
}

let oignon = new Ingredients("oignon", "entier", 5);
let oeuf = new Ingredients("oeuf", "coupe", 1);
let epice = new Ingredients("epice", "moulu", 3);
let fromage = new Ingredients("fromage", "entier", 4);


class Epicerie {
    constructor(nom, personne, panier){
        this.nom = nom;
        this.personne = personne;       
        this.panier = panier
    }
}

let epicerie1 = new Epicerie("epicerie", [], 
[
    {nom: "panier1", contenu: []}, 
    {nom: "panier2", contenu: []}
])

Ingredients = [oignon, oeuf, epice, fromage];


let poele = {
    contenu : [],
    //on recup l'objet omelette
    cuir(a){
        setTimeout(() => {
            a.etat = "cuit"
            console.log("votre omelette est cuite ");
            console.log(bol);
        }, 4000);
    }
}

let bol = {
    contenu : [],   
    melanger (nomPlat){
        let newMelange  = {
             nom : nomPlat,
             etat : "pas cuit",
        }
        // on réassigne le contenu par l'objet omelette
        this.contenu = newMelange;
    },
}

///////////////////// DEBUT DE L'OMELETTE /////////////


//deplacer personne
personne1.seDeplacer(maison, epicerie1);
console.log("qui est a la maison : "+" "+maison.personne);  
console.log("qui est a l'epicerie :" +" "+epicerie1.personne);


//prendre panier
personne1.mainDroite.push(epicerie1.panier[1]);

console.log(`${personne1.nom} a pris un ${personne1.mainDroite[0].nom}`);
console.log("voila le panier qui reste dans l'epicerie");
console.log(epicerie1.panier);

// ajout ingredient dans panier
console.log("georges va prendre different ingredient :");
for (let index = 0; index < Ingredients.length; index++) {
    const element = Ingredients[index];
    console.log(Ingredients[index].etats);
    personne1.payerArticle(element)
    personne1.mainDroite[0].contenu.push(element)
    console.log(`${element.nom} pris`);
    // Envoie la méthode paye
}
console.log("voici le panier de"+" "+personne1.nom);
console.log(personne1.mainDroite);


// rentrer a la maison
personne1.seDeplacer(epicerie1, maison);


// mettre chaque ingredients dans le bol
let tab = personne1.mainDroite[0].contenu
for (let index = 0; index < tab.length; index++) {
    const element = tab[index];
    bol.contenu.push(element)
    // personne1.mainDroite[0].contenu.unshift();
    console.log(`${element.nom} mis dans le bol`);
}
bol.contenu.push(personne1.mainDroite[0].contenu); 
console.log("voici le contenu du bol");
console.log(bol.contenu);
// console.log("je suprimer les element du panier");
// personne1.mainDroite[0].contenu.splice(0);

// verifier que les ingredients ne se trouve plus dans le panier 
console.log("on verifie le contenu de notre panier");
console.log(personne1.mainDroite[0].contenu);


// suprimer ingredient du panier et ramener le panier vide a l'epicerie
console.log("je suprimer les element du panier");
personne1.mainDroite[0].contenu.splice(0);
console.log(personne1.mainDroite);
personne1.seDeplacer(maison, epicerie1)
epicerie1.panier.push(personne1.mainDroite);  
console.log(epicerie1.panier);
personne1.mainDroite.splice(0);
console.log(personne1.mainDroite);

// retour a la masion pour continuer l'ommelette
personne1.seDeplacer(epicerie1, maison)

// couper Ingredients seulement si il est entier
personne1.couper(bol.contenu)
console.log(bol.contenu);
for (let index = 0; index < tab.length; index++) {
    const element = tab[index];
    bol.contenu.etat.push(element)
    console.log(`${element.etat} mis dans le bol`);
}


// melanger le bol
bol.melanger("omelette")

// supprimer contenu du bol sauf l'ommelette
console.log("voici le contenu du bol");
console.log(bol.contenu);

// cuire l'omelette
poele.cuir(bol.contenu)
