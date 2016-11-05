var Fenetre = {
  init : function(fenetre){
    //Elements composant les fenetres
    this.titre = fenetre.titre; //Titre de la fenetre
    this.date = fenetre.date; //Date d'ajout
    this.favori = fenetre.favori; //Favori ou pas
    this.affichage = fenetre.affichage; //Affichage ou pas
    this.texte = fenetre.text; //Texte de présentation
    this.photos = fenetre.images[0]; //Tableau des photos associées à la fenetre
  },

  creer : function(){
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
    hElt.textContent = this.titre;
    //Remplissage de la date
    pElt.textContent = this.date;

    //Texte de la fenetre
    sectionElt.textContent = this.texte;

    //Images de la fenetre
    articleElt.innerHTML = "<img class=\"img_corps\" src=\"" + this.photos + "\" alt=\"Galerie d\'images\" />";

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
  },
};

//Récupération de la liste des fenêtres au chargement de la page
ajaxGet("http://127.0.0.1/edsa-travel_log/json/list_fenetre.json", function(reponse){
  listeFenetres = JSON.parse(reponse);
  listeFenetres.forEach(function(fenetreJson){
    var fenetre = Object.create(Fenetre);
    fenetre.init(fenetreJson);
    if(fenetre.affichage === true){
      fenetre.creer();
    }
  });
});
