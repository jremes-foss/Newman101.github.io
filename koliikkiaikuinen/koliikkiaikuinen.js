/*
  Satunnaislukugeneraattori
*/

function stetson_harrison(taulukko)
{

    if (taulukko.length == 1)
    {
        return taulukko[0];
    }

  var satunnaisluku = new Array(100);

  for (var i = 0; i < satunnaisluku.length; i++)
  {
    satunnaisluku[i] = Math.random();
  }

  var sl_int = satunnaisluku[Math.floor(Math.random() * satunnaisluku.length)];
  var sl_int_abs = Math.floor(sl_int * taulukko.length);

  return taulukko[sl_int_abs];

}

/*
  Palauta jokainen lauseiden jäsen yksi kerrallaan.
  Tämän voisi varmaan tehdä järkevämminkin...
*/

function generoi_verbi(verbi)
{
  return(verbi);
}

function generoi_adjektiivi(adjektiivi)
{
  return(adjektiivi);
}

function generoi_objekti(objekti)
{
  return(objekti);
}

function generoi_subjekti(subjekti)
{
  return(subjekti);
}

function generoi_loppukaneetti(loppukaneetit)
{
  return(loppukaneetit);
}

/*
  Lauseiden muodostus:
  Arvo yksi jäsen jokaisesta taulukosta satunnaislukugeneraattorilla.
  Muodosta merkkijonomuuttuja ja liitä lauseiden jäsenet yhdeksi
  lauseeksi. Lisää huutomerkki ja loppukaneetti.
*/

function koliikkiaikuinen() {
  var puallusta = [];

  var adjektiivi = stetson_harrison(adjektiivit);
  var subjekti = stetson_harrison(subjektit);
  var verbi = stetson_harrison(verbit);
  var objekti = stetson_harrison(objektit);
  var loppukaneetti = stetson_harrison(loppukaneetit).toUpperCase();

  puallusta[0] = generoi_adjektiivi(adjektiivi);
  puallusta[1] = generoi_subjekti(subjekti);
  puallusta[2] = generoi_verbi(verbi);
  puallusta[3] = generoi_objekti(objekti);

  var avaudu = puallusta.join(" ").toUpperCase();
  avaudu = avaudu + "! " + loppukaneetti;

  return avaudu;
}

/*
  Kirjoita koliikkiaikuisen avautumiset HTML-kenttään
*/

function kirjoita() {
  document.getElementById("koliikkiaikuinen").innerHTML = koliikkiaikuinen();
}

/*
  Lauseiden jäsenet alla
*/

adjektiivit = [
  "Likainen",
  "Laiska",
  "Epärehellinen",
  "Poliittisesti korrekti",
  "Masturboiva",
  "Suvaitsevainen",
  "Runkkaava",
  "Ahne",
  "Vasemmistolainen",
  "Perseilevä",
  "Ulkomaalainen",
  "Viisumiton",
  "Kuriton",
  "Perverssi",
  "Paperiton",
  "Kulttuurimarxistinen",
  "sekopäinen",
  "äärivasemmistolainen",
  "epärehellinen",
  "läpimädäntynyt"
];

verbit = [
  "raiskaa",
  "loisii",
  "varastaa",
  "tappaa",
  "raiskasi",
  "kähveltää",
  "kähvelsi",
  "koplasi",
  "varasti",
  "tuhopoltti",
  "tuhopolttaa",
  "pihistää",
  "pihisti",
  "kähmi",
  "kähmii",
  "ahmi",
  "kuppaa",
  "rosvoaa",
  "rosvosi",
  "suhmuroi",
  "vatuloi"
];

subjektit = [
  "Sosiaalidemokraatti",
  "Kokoomuslainen",
  "Keskustalainen",
  "Vihreä",
  "Vassari",
  "Kristillisdemokraatti",
  "Eduskunta",
  "Kansanedustaja",
  "EU",
  "USA",
  "Amerikka",
  "Venäjä",
  "Valtamedia",
  "finanssijuutalainen",
  "juutalainen",
  "Muslimi",
  "Punavihreä mädättäjä",
  "Imaami",
  "Turvapaikanhakija",
  "Matu",
  "Maahantunkeutuja",
  "Maahanmuuttaja",
  "Maaham muuttaja",
  "Maahanmuuttajajengi",
  "Turvapaikkaturisti",
  "Pakolainen",
  "Musu",
  "Somali",
  "Afrikkalainen",
  "Terroristi",
  "Laiton maahanmuuttaja",
  "Punavihreä Mädättäjä",
  "Virkamies",
  "Pedofiili",
  "Byrokraatti",
  "loinen",
  "poliittinen korrektius",
  "poliisi",
  "feministi",
  "matuaalto",
  "suvakkinatsi",
  "TE-keskus",
  "Punainen Risti",
  "viranomaisrikollinen",
  "jihadisti",
  "Itäkeskus",
  "yrittäjä",
  "matu",
  "neekeri",
  "rikollinen",
  "hyväveli",
  "hyysäri",
  "sosiaalitantta",
  "kukkahattu",
  "kukkahattutäti",
  "sosialisti",
  "kommunisti",
  "hovioikeus",
  "partalapsi",
  "ministeri",
  "valtamedian toimittaja",
  "huumekauppias",
  "puheenjohtaja",
  "kaupunginjohtaja",
  "valtionvarainministeri",
  "kaupunginvaltuusto",
  "hyysäriämmä",
  "feminatsi",
  "loispummi",
  "ay-pamppu",
  "perverssi",
  "veronkiertäjä",
  "eksoottinen värinä",
  "islamofasisti",
  "kultamuna",
  "pravda",
  "tavjaerkki",
  "väärä mielipide",
  "homosaatio",
  "erilaisuuden liitto",
  "romani",
  "manne",
  "mustalainen",
  "anarkokapitalisti",
  "pizzanpaistaja",
  "kestävä kehitys",
  "reilu kauppa",
  "maanpetturi",
  "liberaalilässy",
  "yritysjohtaja",
  "valtionyhtiö",
  "punavihreä kupla",
  "opiskelija",
  "oikeuslaitos",
  "plutokraatti",
  "pikavippifirma",
  "lesbo",
  "homo",
  "homoseksuaali",
  "transu",
  "vapaamuurari",
  "ehdonalaisvanki",
  "kommari",
  "siviilipalvelusmies",
  "partaimaami",
  "saatananpalvoja",
  "ateisti",
  "kiintiöpakolainen",
  "pakkoruotsittaja",
  "mädättäjä",
  "punavihermädätteinen homopropagandisti",
  "entinen stalinisti",
  "kulttuurinrikastuttaja",
  "preka-eetu",
  "äbäläwäbälä",
  "päättäjä",
  "akkalauma",
  "ammattilusmu",
  "apulaisvaltakunnansyyttäjä",
  "elämäntapaintiaani",
  "globaalikapitalismi",
  "vierasmaalainen",
  "suvakki",
  "sotarikollinen",
  "virkamiesjohtaja",
  "talousnero",
  "mamujengi",
  "rättipää",
  "elinkeinoelämän keskusliitto",
  "porvari",
  "proletariaatti",
  "pakoloinen",
  "lobbari",
  "naispappi",
  "vallassa oleva eliitti",
  "kansainvälinen pääoma",
  "globalisti",
  "nuoriso",
  "yöntimo",
  "sodomiapopulisti",
  "viherpiiperö",
  "sopulitoimittaja",
  "kasinotalous",
  "kansainvälinen kasinotalous",
  "liittovaltio",
  "EU-liittovaltio",
  "pankkiunioni",
  "kunniakansalainen",
  "anarkistiryhmä",
  "muhamettilainen",
  "päättäjä",
  "tuhokapitalisti",
  "arvoliberaali",
  "arvoliberalismi",
  "natsisuvakki",
  "työväenliike",
  "lapatossu",
  "tohvelisankari",
  "halal-liha",
  "vapaamatkustaja",
  "sharia-laki",
  "vellihousu",
  "aseistariisuja",
  "suvakkiämmä",
  "somalineekeri",
  "arvojohtaja",
  "karvalapsi",
  "karvavauveli",
  "moraalisäteilijä",
  "eläkepommi",
  "afromusuarabi",
  "iphone-mies",
  "eurabia",
  "kilpailukykyloikka",
  "punaporvari",
  "vasemmistoradikaali",
  "siirtolainen",
  "suvaitsevaisto",
  "suvakkihuorasto"
];

objektit = [
  "rehellisen yrittäjän leivän",
  "keskiluokan ostovoiman",
  "ahkerien suomalaisten verorahat",
  "viattoman perheen lapset",
  "veronmaksajien rahat",
  "kaupungin omaisuutta",
  "lapsiperheiden sosiaalituet",
  "lapsilta leivän pöydästä",
  "Suomen viennin",
  "Vientiyritysten osakkeet",
  "Vanhusten iltapalan",
  "vanhusten aamupalan",
  "vanhusten lounaan",
  "Suomen ylpeyden",
  "isänmaan omavaraisuuden",
  "isänmaan ylpeyden",
  "perheen lapsilisät",
  "perheen toimeentulotuet",
  "työläisten sunnuntailisät",
  "työläisten lomarahat",
  "työläisten palkat",
  "suoraselkäisten suomalaisten naiset",
  "suomalaisten elintavan",
  "yhteiskunnan sosiaalisen järjestelmän",
  "yhteiskunnan moraaliset katsomukset",
  "suomalaisten kulttuuriset arvot",
  "suomalaiset perinteet",
  "kaiken",
  "hyvinvointiyhteiskunnan",
  "hyvinvointivaltion",
  "suomalaisen sosiaaliturvan",
  "suomen itsenäisyyden",
  "suomalaisen lihaa syövän heteromiehen",
  "yhteiskuntasopimuksen",
  "suomen kansallisomaisuuden"
];

loppukaneetit = [
  "kekkonen olisi jo devalvoinut!",
  "rautaa rajalle!",
  "perkele!",
  "saatanan tunarit!",
  "nyt tekis mieli vetää kännit!",
  "vitun hyysärit!",
  "ulos eurosta!",
  "markka takaisin!",
  "helvetin sosiaalitantat!",
  "tukka pois ja linnaan!",
  "kuolemantuomio takaisin!",
  "rajat kiinni!",
  "mestari on oikeassa!",
  "vittusaatanaperkele!",
  "risusavottaan vain!",
  "tuet pois!",
  "köyhät kyykkyyn!",
  "koti uskonto ja isänmaa!",
  "ken ei työtä tee sen ei syömänkään pidä!",
  "perkeleen neekerit!",
  "vientirauha takaisin!",
  "karjala takaisin!",
  "mitä vittua??!?!?!?!?!",
  "palveluspakko takaisin!",
  "saunan takana on vielä tilaa!",
  "holhous ja mokutus on lopetettava!",
  "vittu mitä paskaa!",
  "kuolema vasemmistolle!",
  "oi aikoja oi tapoja!",
  "joutavanpäiväistä humpuukia!",
  "maanpetturit!",
  "mädätystä ja iljetystä!",
  "suomi tarvitsee rautaista johtajaa!",
  "tapainturmelusta!",
  "propagandaa ja agitaatiota!",
  "rikollisillle pakkosterilisaatio välittömästi!",
  "pakkotöihin siivoojaksi!",
  "tukka pois ja siperiaan!",
  "maassa maan tavalla tai maasta pois!",
  "rajat kiinni!",
  "suomi tarvitsee sotilasvallankaappauksen!",
  "höpöhöpöhuttua!",
  "maailmanpokerissa vedätetään!",
  "eurabia on tulevaisuutta!"
];
