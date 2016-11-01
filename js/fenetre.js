//Elements composant la fenetre
var idFenetreElt = document.createElement("div");
var headerElt = document.createElement("header");
var navElt =document.createElement("nav");
var hElt = document.createElement("h1");
var pElt = document.createElement("p");
var sectionElt = document.createElement("section");
var articleElt = document.createElement("article");

//Classe de la fenetre
idFenetreElt.className = "fenetre";
//Classe de l'entete de la fenetre
headerElt.className = "titre";
//Classe du corps de la fenetre
sectionElt.className = "corps";

//Icones de la fenetres
navElt.innerHTML = "<img class=\"img_titre\" src=\"./ressource/icone/visu.png\" title=\"Visualisation de la galerie d\'images\" alt=\"Galerie\" />";
navElt.innerHTML += "<img class=\"img_titre\" src=\"./ressource/icone/favori.png\" title=\"Favori\" alt=\"Favori\" />";
navElt.innerHTML += "<img class=\"img_titre\" src=\"./ressource/icone/close.png\" title=\"Ne plus afficher cette fenetre\" alt=\"Fermeture\" />";

//Remplissage du titre
hElt.textContent = "Titre";
//Remplissage de la date
pElt.textContent = "dd-mm-yyyy";

//Texte de la fenetre
sectionElt.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra ante quis nunc finibus, consequat.";

//Images de la fenetre
articleElt.innerHTML = "<img class=\"img_corps\" src=\"./ressource/img/imag_test.jpg\" alt=\"Galerie d\'images\" />";

//Ajout de la partie header à la fenetre
headerElt.appendChild(navElt);
headerElt.appendChild(hElt);
headerElt.appendChild(pElt);
idFenetreElt.appendChild(headerElt);
//Ajout de la partie section à la fenetre
sectionElt.appendChild(articleElt);
idFenetreElt.appendChild(sectionElt);
//Ajout de la fenetre à la page principale
document.getElementById("corps_page").appendChild(idFenetreElt);
