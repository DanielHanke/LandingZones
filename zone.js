var travian_server = "https://ts7.x1.international.travian.com"

var EntrenarLegionario = true;
var EntrenarPretoriano = false;
var EntrenarImperano = false;
var EntrenarLegati = false;
var EntrenarImperatoris = false;

var DejameLegionarios = false;
var DejameImperanos = false;
var DejameEquitesImperatoris = false;
var DejameEquitesCaesaris = false;


var sleepBase = 16500;

var sendAttacks = true;
var attackList = 2;

const coords_1 =
      [
          {"x":"-77","y":"53","distance":" 2.24","fl":"10","condition":"OK","Active":"TRUE","name":"Osada: Ptolemeusz"}, // EVOLUCION: 33 33 +1 32 32 32
          {"x":"-74","y":"49","distance":" 2.83","fl":"10","condition":"OK","Active":"TRUE","name":"OliveLand Köyü"}, // EVOLUCION: 8 8 8 8 8
          {"x":"-79","y":"49","distance":" 3.61","fl":"10","condition":"OK","Active":"TRUE","name":"Crow Köyü"}, // EVOLUCION: 28 28 28 28 28
          {"x":"-73","y":"54","distance":" 4.24","fl":"10","condition":"OK","Active":"TRUE","name":"Bombers`s village"}, // EVOLUCION: 65 65 65 65 65
          {"x":"-78","y":"55","distance":" 4.47","fl":"10","condition":"OK","Active":"TRUE","name":"Meeren`s village"}, // EVOLUCION: 12 12 12 12 12
          {"x":"-75","y":"46","distance":" 5.10","fl":"10","condition":"OK","Active":"TRUE","name":"Jabberwocky`s village"}, // EVOLUCION: 8 8 8 8 8
          {"x":"-80","y":"47","distance":" 5.66","fl":"10","condition":"OK","Active":"TRUE","name":"01"}, // EVOLUCION: 13 13 13 13 13
          {"x":"-73","y":"46","distance":" 5.83","fl":"27","condition":"OK","Active":"TRUE","name":"Vaikis`s village"}, // EVOLUCION: 14 14 14 14 14
          {"x":"-82","y":"52","distance":" 6.08","fl":"12","condition":"OK","Active":"TRUE","name":"wangodango`s village"}, // EVOLUCION: 12 12 12 12 12
          {"x":"-71","y":"56","distance":" 7.07","fl":"10","condition":"OK","Active":"TRUE","name":"Swifty`s village"}, // EVOLUCION: 63 63 63 63 +30 33
          {"x":"-77","y":"58","distance":" 7.07","fl":"10","condition":"OK","Active":"TRUE","name":"Johny`s village"}, // EVOLUCION: 10 10 10 10 10
          {"x":"-82","y":"55","distance":" 7.21","fl":"10","condition":"OK","Active":"TRUE","name":"Osada: Wrex"}, // EVOLUCION: 15 15 15 15 +3 12
          {"x":"-83","y":"48","distance":" 7.62","fl":"10","condition":"OK","Active":"TRUE","name":"Tavyahs Landsby"}, // EVOLUCION: 12 12 12 12 12
          {"x":"-69","y":"47","distance":" 8.06","fl":"39","condition":"OK","Active":"TRUE","name":"فكش`s village"}, // EVOLUCION: 46 46 46 46 46
          {"x":"-82","y":"57","distance":" 8.49","fl":"10","condition":"OK","Active":"TRUE","name":"Shnaideris/sostinė"}, // EVOLUCION: 11 11 11 11 +11 0
          {"x":"-68","y":"48","distance":" 8.54","fl":"10","condition":"OK","Active":"TRUE","name":"yyx`s village"}, // EVOLUCION: 8 8 8 8 8
          {"x":"-83","y":"56","distance":" 8.60","fl":"10","condition":"OK","Active":"TRUE","name":"ex300`s village"}, // EVOLUCION: 11 11 11 11 +11 0
          {"x":"-84","y":"55","distance":" 8.94","fl":"10","condition":"OK","Active":"TRUE","name":"قرية Mohamed"}, // EVOLUCION: 12 12 12 12 +12 0
          {"x":"-67","y":"54","distance":" 9.49","fl":"10","condition":"OK","Active":"TRUE","name":"Jacyno`s village"}, // EVOLUCION: 8 8 8 8 8
          {"x":"-80","y":"60","distance":" 9.85","fl":"10","condition":"OK","Active":"TRUE","name":"Vikings Valhalla"}, // EVOLUCION: 15 15 15 15 +15 0
          {"x":"-72","y":"60","distance":" 9.85","fl":"10","condition":"OK","Active":"TRUE","name":"01"}, // EVOLUCION: 62 62 62 62 62
          {"x":"-77","y":"61","distance":"10.05","fl":"10","condition":"OK","Active":"TRUE","name":"Деревня Ааа"}, // EVOLUCION: 12 12 12 12 128 8 8
          {"x":"-66","y":"48","distance":"10.44","fl":"10","condition":"OK","Active":"TRUE","name":"หมู่บ้านของDeg"}, // EVOLUCION: 17 17 17 17 17
          {"x":"-86","y":"55","distance":"10.77","fl":"10","condition":"OK","Active":"TRUE","name":"15323`s village"}, // EVOLUCION: 12 12 12 +12 0 0
          {"x":"-70","y":"60","distance":"10.82","fl":"10","condition":"OK","Active":"TRUE","name":"Malamadri`s village"}, // EVOLUCION: 26 26 26 26 26
          {"x":"-85","y":"57","distance":"10.82","fl":"10","condition":"OK","Active":"TRUE","name":"Motty`s village"}, // EVOLUCION: 8 8 8 +8 0 0
          {"x":"-78","y":"40","distance":"11.18","fl":"10","condition":"OK","Active":"TRUE","name":"Gemmy`s village"}, // EVOLUCION: 12 12 12 12 12
          {"x":"-74","y":"40","distance":"11.18","fl":"16","condition":"OK","Active":"TRUE","name":"Naselje - Benny"}, // EVOLUCION: 46 46 46 46 46
          {"x":"-65","y":"49","distance":"11.18","fl":"10","condition":"OK","Active":"TRUE","name":"Henne`s village"}, // EVOLUCION: 13 13 13 13 13
          {"x":"-78","y":"62","distance":"11.18","fl":"10","condition":"OK","Active":"TRUE","name":"Aldeia do Chapparrau"}, // EVOLUCION: 16 16 16 16 +16 0
          {"x":"-68","y":"59","distance":"11.31","fl":"17","condition":"OK","Active":"TRUE","name":"Tiwaz795`s village"}, // EVOLUCION: 17 17 17 17 17
          {"x":"-85","y":"44","distance":"11.40","fl":"18","condition":"OK","Active":"TRUE","name":"`Your Grave!"}, // EVOLUCION: 11 11 11 11 11
          {"x":"-73","y":"39","distance":"12.37","fl":"10","condition":"OK","Active":"TRUE","name":"Aldea de Phm79"}, // EVOLUCION: 12 12 12 12 12
          {"x":"-64","y":"55","distance":"12.65","fl":"10","condition":"OK","Active":"TRUE","name":"Деревня test1234sdf"}, // EVOLUCION: 10 10 10 10 10
          {"x":"-85","y":"42","distance":"12.73","fl":"10","condition":"OK","Active":"TRUE","name":"Tepeli Köyü"}, // EVOLUCION: 34 34 34 34 34
          {"x":"-66","y":"43","distance":"12.81","fl":"10","condition":"OK","Active":"TRUE","name":"evo201`s village"}, // EVOLUCION: 14 14 14 14 14
          {"x":"-80","y":"38","distance":"13.60","fl":"10","condition":"OK","Active":"TRUE","name":"Zenora061 Köyü"}, // EVOLUCION: 11 11 11 11 11
          {"x":"-80","y":"64","distance":"13.60","fl":"10","condition":"OK","Active":"TRUE","name":"Old snacke`s village"}, // EVOLUCION: 47 47 +30 17 +17 0 0
      ];
const coords_2 =
      [
          {"condition":"OK","x":"-89","y":"46","distance":"2","fl":"18","Active":"TRUE","name":"Vesnice: Senith"}, // EVOLUCION: 58 58 58 58 58
          {"condition":"OK","x":"-90","y":"42","distance":"2.24","fl":"10","Active":"TRUE","name":"Villaggio di Mannaro"}, // EVOLUCION: 10 10 10 10 10
          {"condition":"OK","x":"-87","y":"43","distance":"2.24","fl":"10","Active":"TRUE","name":"Rorschach`s village"}, // EVOLUCION: 16 16 16 16 16
          {"condition":"OK","x":"-85","y":"44","distance":"4","fl":"18","Active":"TRUE","name":"`Your Grave!"}, // EVOLUCION: 11 11 11 11 11
          {"condition":"OK","x":"-85","y":"42","distance":"4.47","fl":"10","Active":"TRUE","name":"Tepeli Köyü"}, // EVOLUCION: 34 34 34 34 34
          {"condition":"OK","x":"-87","y":"39","distance":"5.39","fl":"10","Active":"TRUE","name":"salimsins Köyü"}, // EVOLUCION: 14 14 14 14 14
          {"condition":"OK","x":"-93","y":"40","distance":"5.66","fl":"10","Active":"TRUE","name":"Greendisgood`s village"}, // EVOLUCION: 12 12 12 12 12
          {"condition":"OK","x":"-85","y":"48","distance":"5.66","fl":"10","Active":"FALSE","name":"قرية Florence"}, // EVOLUCION: 85 85 85 85 85
          {"condition":"OK","x":"-93","y":"48","distance":"5.66","fl":"10","Active":"TRUE","name":"Kumi`s village"}, // EVOLUCION: 12 12 12 12 12
          {"condition":"OK","x":"-95","y":"44","distance":"6","fl":"10","Active":"TRUE","name":"Trow`s village"}, // EVOLUCION: 10 10 10 10 10
          {"condition":"OK","x":"-90","y":"37","distance":"7.07","fl":"13","Active":"TRUE","name":"Osada: Testo"}, // EVOLUCION: 13 13 13 13 13
          {"condition":"OK","x":"-90","y":"51","distance":"7.07","fl":"10","Active":"TRUE","name":"Zahid Köyü"}, // EVOLUCION: 15 15 15 15 15
          {"condition":"OK","x":"-83","y":"48","distance":"7.21","fl":"10","Active":"TRUE","name":"Tavyahs Landsby"}, // EVOLUCION: 12 12 12 12 12
          {"x":"-95","y":"49","distance":"7.81","fl":"59","condition":"--","Active":"TRUE","name":"Naselje - Kekcevic"},  // EVOLUCION: 59 59 59 +15 44 +1 43
          {"condition":"OK","x":"-85","y":"51","distance":"8.06","fl":"151","Active":"TRUE","name":"PsychWorld"}, // EVOLUCION: 248 248 248 248 248
          {"condition":"OK","x":"-97","y":"42","distance":"8.25","fl":"10","Active":"TRUE","name":"CHE-LM"}, // EVOLUCION: 12 12 12 12 12
          {"condition":"OK","x":"-92","y":"36","distance":"8.54","fl":"10","Active":"TRUE","name":"Sonnydc`s village"}, // EVOLUCION: 10 10 10 10 10
          {"x":"-90","y":"53","distance":"9.06","fl":"135","condition":"--","Active":"FALSE","name":"Osada: FreezingMoon"},  // EVOLUCION: 135 135 135 +16 119 +7 112
          {"condition":"OK","x":"-98","y":"46","distance":"9.22","fl":"10","Active":"TRUE","name":"RasNnu Köyü"}, // EVOLUCION: 13 13 13 13 13
          {"x":"-84","y":"36","distance":"9.43","fl":"16","condition":"--","Active":"TRUE","name":"zherlok`s village"},  // EVOLUCION: 16 16 16 16 16
          {"x":"-92","y":"53","distance":"9.49","fl":"12","condition":"--","Active":"TRUE","name":"OffensivePlayer`s village"},  // EVOLUCION: 12 12 12 12 12
          {"x":"-80","y":"47","distance":"9.49","fl":"13","condition":"--","Active":"TRUE","name":"01"},  // EVOLUCION: 13 13 13 13 13
          {"x":"-96","y":"37","distance":"9.9","fl":"49","condition":"--","Active":"FALSE","name":"lordbarun`s village"},  // EVOLUCION: 49 49 49 49 49
          {"x":"-79","y":"44","distance":"10","fl":"77","condition":"--","Active":"FALSE","name":"Natars -79|44"},  // EVOLUCION: 77 75 72 92 92
          {"x":"-88","y":"34","distance":"10.05","fl":"12","condition":"--","Active":"TRUE","name":"Jimmywiki`s village"},  // EVOLUCION: 12 12 12 12 12
          {"x":"-88","y":"54","distance":"10.05","fl":"247","condition":"--","Active":"FALSE","name":"Lia`s village"},  // EVOLUCION: 247 247 +6 241 +30 211 +44 167
          {"x":"-90","y":"34","distance":"10.05","fl":"10","condition":"--","Active":"TRUE","name":"HayatiBey Köyü"},  // EVOLUCION: 10 10 10 10 10
          {"x":"-99","y":"45","distance":"10.05","fl":"12","condition":"--","Active":"FALSE","name":"LiveOnRice`s village"},  // EVOLUCION: 12 12 12 +12 0 0
          {"x":"-99","y":"42","distance":"10.2","fl":"12","condition":"--","Active":"TRUE","name":"Village de sfy"},  // EVOLUCION: 12 12 12 12 12
          {"x":"-82","y":"52","distance":"10.63","fl":"12","condition":"--","Active":"FALSE","name":"wangodango`s village"},  // EVOLUCION: 12 12 12 12 12
          {"x":"-80","y":"38","distance":"10.82","fl":"11","condition":"--","Active":"TRUE","name":"Zenora061 Köyü"},  // EVOLUCION: 11 11 11 11 11
          {"x":"-83","y":"35","distance":"10.82","fl":"192","condition":"--","Active":"FALSE","name":"C17-H19-NO3"},  // EVOLUCION: 192 192 192 192 192
          {"x":"-89","y":"55","distance":"11","fl":"13","condition":"--","Active":"TRUE","name":"Poirier Köyü"},  // EVOLUCION: 13 13 13 13 13
          {"x":"-79","y":"49","distance":"11.18","fl":"28","condition":"--","Active":"TRUE","name":"Crow Köyü"},  // EVOLUCION: 28 28 28 28 28
          {"x":"-84","y":"34","distance":"11.18","fl":"161","condition":"--","Active":"FALSE","name":"1"},  // EVOLUCION: 161 161 +1 160 +3 157 +10 147
          {"x":"-86","y":"55","distance":"11.4","fl":"12","condition":"--","Active":"TRUE","name":"15323`s village"},  // EVOLUCION: 12 12 12 12 12
          {"x":"-78","y":"40","distance":"11.7","fl":"12","condition":"--","Active":"TRUE","name":"Gemmy`s village"},  // EVOLUCION: 12 12 12 12 12
          {"x":"-84","y":"55","distance":"12.08","fl":"12","condition":"--","Active":"TRUE","name":"قرية Mohamed"},  // EVOLUCION: 12 12 12 12 12
          {"x":"-99","y":"37","distance":"12.21","fl":"15","condition":"--","Active":"TRUE","name":"הכפר של noampor"},  // EVOLUCION: 15 15 15 15 15
          {"x":"-79","y":"37","distance":"12.21","fl":"13","condition":"--","Active":"TRUE","name":"ulasbjk Köyü"},  // EVOLUCION: 13 13 13 13 13
          {"condition":"OK","x":"-92","y":"56","distance":"12.37","fl":"10","Active":"TRUE","name":"innsmouthsailor`s village"}, // EVOLUCION: 35 35 35 35 +10 25
          {"x":"-77","y":"47","distance":"12.37","fl":"289","condition":"--","Active":"FALSE","name":"putri"},  // EVOLUCION: 289 289 289 289 289
          {"condition":"OK","x":"-100","y":"38","distance":"12.53","fl":"10","Active":"TRUE","name":"Baal`s village"}, // EVOLUCION: 11 11 11 11 11
          {"condition":"OK","x":"-93","y":"32","distance":"12.65","fl":"17","Active":"TRUE","name":"dabba`s village"}, // EVOLUCION: 17 17 17 17 17
          {"x":"-85","y":"32","distance":"12.65","fl":"10","condition":"--","Active":"TRUE","name":"feco76 faluja"}, // EVOLUCION: 12 12 12 12 12
          {"condition":"OK","x":"-82","y":"55","distance":"13.04","fl":"15","Active":"TRUE","name":"Osada: Wrex"}, // EVOLUCION: 15 15 15 15
          {"condition":"OK","x":"-83","y":"56","distance":"13.42","fl":"10","Active":"TRUE","name":"ex300`s village"}, // EVOLUCION: 11 11 11 11 11
      ];
