const facilities = [
  {
      "code": 152,
      "level": 1,
      "name": "Direzione Generale Musei",
      "website": "www.musei.beniculturali.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele, 22",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 300,
      "level": 2,
      "name": "Direzione Regionale Musei Piemonte",
      "website": "polomusealepiemonte.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Accademia delle Scienze",
          "zip-code": "10123",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5248,
      "level": 3,
      "name": "Abbazia di Fruttuaria",
      "website": "http://polomusealepiemonte.beniculturali.it/index.php/musei-e-luoghi-della-cultura/abbazia-di-fruttuaria/visita-labbazia-di-fruttuaria/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Cardinale delle Lanze, 1",
          "zip-code": "10080",
          "comune": "San Benigno Canavese",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 300,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 303,
      "level": 2,
      "name": "Direzione Regionale Musei Emilia Romagna",
      "website": "polomusealeemiliaromagna.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Belle Arti n. 52",
          "zip-code": "40126",
          "comune": "Bologna",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 931,
      "level": 3,
      "name": "Abbazia di Pomposa e Museo pomposiano",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/abbazia-di-pomposa-e-museo-pomposiano",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Pomposa Centro",
          "zip-code": "44021",
          "comune": "Codigoro",
          "provincia": "Ferrara",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 302,
      "level": 2,
      "name": "Direzione Regionale Musei Abruzzo",
      "website": "musei.abruzzo.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via G.Costanzi, 2",
          "zip-code": "66100",
          "comune": "Chieti",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 943,
      "level": 3,
      "name": "Abbazia di San Clemente a Casauria",
      "website": "http://www.sanclementeacasauria.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Contrada san Clemente",
          "zip-code": "65020",
          "comune": "Castiglione a Casauria",
          "provincia": "Pescara",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5957,
      "level": 3,
      "name": "Abbazia di Santo Spirito al Morrone",
      "website": "https://www.musei.abruzzo.beniculturali.it/museimid741nomeabbazia-di-santo-spirito-al-morrone",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Badia, 24",
          "zip-code": "67039",
          "comune": "Sulmona",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 151,
      "level": 1,
      "name": "Direzione Generale Archeologia, Belle Arti e Paesaggio",
      "website": "www.dgabap.beniculturali.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele, 22",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 255,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio del Friuli Venezia Giulia",
      "website": "http://www.sabap.fvg.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Libert\u00e0, 7",
          "zip-code": "34170",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 922,
      "level": 3,
      "name": "Acquedotto Romano della Val Rosandra",
      "website": "https://www.beniculturali.it/luogo/acquedotto-romano-della-val-rosandra",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Val Rosandra",
          "zip-code": "34018",
          "comune": "San Dorligo della Valle - Dolina",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 311,
      "level": 2,
      "name": "Direzione Regionale Musei Sardegna",
      "website": "musei.sardegna.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Carlo Felice",
          "zip-code": "09124",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5149,
      "level": 3,
      "name": "Altare prenuragico di Monte d\u2019Accoddi",
      "website": "https://www.beniculturali.it/luogo/altare-prenuragico-di-monte-d-accoddi",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Ex Strada Statale 121 - Km 222 Ottava, Sassari",
          "zip-code": "07100",
          "comune": "Sassari",
          "provincia": "Sassari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 307,
      "level": 2,
      "name": "Direzione Regionale Musei Campania",
      "website": "http://www.polomusealecampania.beniculturali.it/",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Tito Angelini, 22",
          "zip-code": "80129",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 657,
      "level": 3,
      "name": "Anfiteatro Campano",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/l-anfiteatro",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza I Ottobre 1860",
          "zip-code": "81055",
          "comune": "Santa Maria Capua Vetere",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 205,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Alessandria, Asti e Cuneo",
      "website": "http://www.sabap-al.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pavia - Cittadella Ex Caserma Pasubio",
          "zip-code": "15121",
          "comune": "Alessandria",
          "provincia": "Alessandria",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 913,
      "level": 3,
      "name": "Anfiteatro di Ivrea",
      "website": "http://archeo.piemonte.beniculturali.it/index.php/it/musei/aree-archeologiche/70-aree-arch-prov-di-torino/343-anfiteatro-di-ivrea",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Vercelli",
          "zip-code": "10015",
          "comune": "Ivrea",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 205,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 345,
      "level": 2,
      "name": "Parco Archeologico dei Campi Flegrei",
      "website": "www.pafleg.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Rione Terra - Palazzo De Fraja",
          "zip-code": "80078",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 919,
      "level": 3,
      "name": "Anfiteatro di Liternum",
      "website": "http://musei.beniculturali.it/musei?mid=4761&nome=parco-archeologico-dei-campi-flegrei-anfiteatro-di-liternum",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Varcaturiello, 55",
          "zip-code": "80014",
          "comune": "Giugliano in Campania",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 662,
      "level": 3,
      "name": "Anfiteatro Flavio",
      "website": "http://www.pafleg.it/it/4388/localit/66/anfiteatro-flavio",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Terracciano, 75",
          "zip-code": "80078",
          "comune": "Pozzuoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 270,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Salerno e Avellino",
      "website": "http://ambientesa.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Tasso",
          "zip-code": "84121",
          "comune": "Salerno",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6104,
      "level": 3,
      "name": "Anfiteatro Romano di Alife",
      "website": "",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Caduti sul Lavoro, 136",
          "zip-code": "81011",
          "comune": "Alife",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 310,
      "level": 2,
      "name": "Direzione Regionale Musei Puglia",
      "website": "musei.puglia.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pier l\u2019Eremita",
          "zip-code": "70122",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 914,
      "level": 3,
      "name": "Anfiteatro Romano di Lecce",
      "website": "http://musei.puglia.beniculturali.it/musei/anfiteatro-romano-lecce",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza S. Oronzo",
          "zip-code": "73100",
          "comune": "Lecce",
          "provincia": "Lecce",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 238,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per l'area Metropolitana di Roma e per la Provincia di Rieti",
      "website": "http://www.sabap-rm-met.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cavalletti, 2",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 917,
      "level": 3,
      "name": "Anfiteatro Romano di Sutri",
      "website": "https://www.archeoares.it/anfiteatro-e-parco-archeologico-di-sutri",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Cassia, SP82",
          "zip-code": "01015",
          "comune": "Sutri",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 912,
      "level": 3,
      "name": "Antica Spezieria di San Giovanni Evangelista",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/antica-spezieria-di-san-giovanni",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Borgo Pipa 1/A",
          "zip-code": "43121",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 237,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Ravenna, Forl\u00ec-Cesena e Rimini",
      "website": "http://www.soprintendenzaravenna.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Vitale, 17",
          "zip-code": "48121",
          "comune": "Ravenna",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 670,
      "level": 3,
      "name": "Antico Porto di Classe",
      "website": "http://www.anticoportoravenna.it/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Marabina, 7",
          "zip-code": "48124",
          "comune": "Ravenna",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 237,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 910,
      "level": 3,
      "name": "Antiquarium di Ariano Irpino",
      "website": "http://musei.beniculturali.it/musei?mid=88&nome=antiquarium-di-ariano-irpino",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Donato Anzani, 8",
          "zip-code": "83031",
          "comune": "Ariano Irpino",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5943,
      "level": 3,
      "name": "Antiquarium di Avella",
      "website": "https://www.beniculturali.it/luogo/antiquarium-di-avella",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Francesco De Sanctis, 1",
          "zip-code": "83021",
          "comune": "Avella",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 643,
      "level": 3,
      "name": "Antiquarium di Lucus Feroniae",
      "website": "http://www.sabap-rm-met.beniculturali.it/it/388/antiquarium-di-lucus-feroniae",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Tiberina, Km. 18.500",
          "zip-code": "00060",
          "comune": "Capena",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 825,
      "level": 3,
      "name": "Antiquarium di Pyrgi e Area archeologica",
      "website": "http://musei.beniculturali.it/musei?mid=181&nome=antiquarium-di-pyrgi-e-area-archeologica",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Castello di Santa Severa",
          "zip-code": "00058",
          "comune": "Santa Marinella",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 921,
      "level": 3,
      "name": "Antiquarium e Acquedotto Romano di Trieste",
      "website": "http://musei.beniculturali.it/musei?mid=138&nome=antiquarium-e-acquedotto-romano-di-trieste",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Donaggio, 17",
          "zip-code": "34148",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5107,
      "level": 3,
      "name": "Antiquarium e mura di Via del Seminario",
      "website": "https://www.beniculturali.it/luogo/antiquarium-e-mura-di-via-del-seminario",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Seminario",
          "zip-code": "34100",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 909,
      "level": 3,
      "name": "Antiquarium e sepolcreto di via Donota",
      "website": "http://musei.beniculturali.it/musei?mid=140&nome=antiquarium-e-sepolcreto-di-via-donota",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Donota",
          "zip-code": "34121",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 846,
      "level": 3,
      "name": "Antiquarium e zona archeologica di Canne della Battaglia",
      "website": "https://musei.puglia.beniculturali.it/musei/antiquarium-canne-della-battaglia/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale n. 142 Barletta-Canosa di Puglia",
          "zip-code": "70051",
          "comune": "Barletta",
          "provincia": "Barletta-Andria-Trani",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 271,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Siena, Grosseto e Arezzo",
      "website": "http://www.sabap-siena.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Citt\u00e0, 138/140",
          "zip-code": "53100",
          "comune": "Siena",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 4854,
      "level": 3,
      "name": "Antiquarium Nazionale di Sestino",
      "website": "https://www.beniculturali.it/luogo/antiquarium-nazionale-di-sestino",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Marche",
          "zip-code": "",
          "comune": "Sestino",
          "provincia": "Arezzo",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 271,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 348,
      "level": 2,
      "name": "Parco Archeologico di Ostia Antica",
      "website": "www.ostiaantica.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Romagnoli, 717",
          "zip-code": "00119",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 905,
      "level": 3,
      "name": "Antiquarium Ostiense",
      "website": "https://www.lazio.beniculturali.it/?p=159",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale dei Romagnoli, 717",
          "zip-code": "60127",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 348,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 313,
      "level": 2,
      "name": "Direzione Regionale Musei Marche",
      "website": "musei.marche.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Rinascimento, 13",
          "zip-code": "61029",
          "comune": "Urbino",
          "provincia": "Pesaro e Urbino",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 904,
      "level": 3,
      "name": "Antiquarium Statale di Numana",
      "website": "https://www.musei.marche.beniculturali.it/musei/?mid=203&nome=antiquarium-statale-di-numana",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via La Fenice, 4",
          "zip-code": "60026",
          "comune": "Numana",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 313,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 149,
      "level": 1,
      "name": "Direzione Generale Archivi",
      "website": "www.archivi.beniculturali.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele, 22",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 4,
      "level": 2,
      "name": "Archivio Centrale dello Stato",
      "website": "www.acs.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale degli Archivi, 27",
          "zip-code": "00144",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6902,
      "level": 3,
      "name": "Archivio Centrale dello Stato",
      "website": "http://acs.beniculturali.it",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale degli ArchivI, 27",
          "zip-code": "00144",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 4,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 27,
      "level": 2,
      "name": "Archivio di Stato dell'Aquila",
      "website": "archiviodistatolaquila.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Galileo Galilei, 2",
          "zip-code": "67010",
          "comune": "L'Aquila",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6846,
      "level": 3,
      "name": "Archivio di Stato dell'Aquila",
      "website": "http://www.archiviodistatolaquila.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Galileo Galilei, 2",
          "zip-code": "67100",
          "comune": "Bazzano",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6935,
      "level": 3,
      "name": "Archivio di Stato dell'Aquila. Sezione di Avezzano",
      "website": "http://www.archiviodistatolaquila.beniculturali.it/index.php?it/121/sezione-di-avezzano",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Torlonia, 36",
          "zip-code": "67051",
          "comune": "Avezzano",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6936,
      "level": 3,
      "name": "Archivio di Stato dell'Aquila. Sezione di Sulmona",
      "website": "http://www.archiviodistatolaquila.beniculturali.it/index.php?it/120/sezione-di-sulmona",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Sant'Antonio, 20",
          "zip-code": "67039",
          "comune": "Sulmona",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 28,
      "level": 2,
      "name": "Archivio di Stato di Agrigento",
      "website": "www.asagrigento.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Mazzini, 185",
          "zip-code": "92100",
          "comune": "Agrigento",
          "provincia": "Agrigento",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6678,
      "level": 3,
      "name": "Archivio di Stato di Agrigento",
      "website": "http://www.asagrigento.beniculturali.it/index.php?it/1/home",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Mazzini, 185",
          "zip-code": "92100",
          "comune": "Agrigento",
          "provincia": "Agrigento",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 7016,
      "level": 3,
      "name": "Archivio di Stato di Agrigento. Deposito sussidiario",
      "website": "http://www.asagrigento.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Via Piersanti Mattarella, 237",
          "zip-code": "92100",
          "comune": "Agrigento",
          "provincia": "Agrigento",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6679,
      "level": 3,
      "name": "Archivio di Stato di Agrigento. Sezione di Sciacca",
      "website": "http://www.asagrigento.beniculturali.it/index.php?it/147/sezione-di-archivio-di-stato-di-sciacca",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Figuli, 28",
          "zip-code": "92019",
          "comune": "Sciacca",
          "provincia": "Agrigento",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 29,
      "level": 2,
      "name": "Archivio di Stato di Alessandria",
      "website": "www.asalessandria.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via G. Solero, 43",
          "zip-code": "15100",
          "comune": "Alessandria",
          "provincia": "Alessandria",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6682,
      "level": 3,
      "name": "Archivio di Stato di Alessandria",
      "website": "http://archiviodistatoalessandria.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giorgio Solero, 43",
          "zip-code": "15100",
          "comune": "Alessandria",
          "provincia": "Alessandria",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 30,
      "level": 2,
      "name": "Archivio di Stato di Ancona",
      "website": "www.archiviodistatoancona.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Maggini, 80",
          "zip-code": "60127",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 902,
      "level": 3,
      "name": "Archivio di Stato di Ancona",
      "website": "http://www.archiviodistatoancona.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Maggini, 80",
          "zip-code": "60127",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 899,
      "level": 3,
      "name": "Archivio di Stato di Ancona",
      "website": "https://www.archiviodistatoancona.beniculturali.it/index.php?id=2",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Maggini, 80",
          "zip-code": "82100",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 901,
      "level": 3,
      "name": "Archivio di Stato di Ancona. Sede distaccata",
      "website": "",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell\u2019Agricoltura",
          "zip-code": "60044",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 900,
      "level": 3,
      "name": "Archivio di Stato di Ancona. Sede distaccata",
      "website": "",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pezzotti, 16/a",
          "zip-code": "32100",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 898,
      "level": 3,
      "name": "Archivio di Stato di Ancona. Sezione di Fabriano",
      "website": "https://www.san.beniculturali.it/web/san/dettaglio-soggetto-conservatore?codiSan=san.cat.sogC.4986&id=4986",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cesare Battisti, 23",
          "zip-code": "39100",
          "comune": "Fabriano",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 31,
      "level": 2,
      "name": "Archivio di Stato di Arezzo",
      "website": "www.archiviostato.arezzo.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Commissario, 1",
          "zip-code": "52100",
          "comune": "Arezzo",
          "provincia": "Arezzo",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6656,
      "level": 3,
      "name": "Archivio di Stato di Arezzo",
      "website": "http://www.archiviostato.arezzo.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Commissario, 1",
          "zip-code": "",
          "comune": "Arezzo",
          "provincia": "Arezzo",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 32,
      "level": 2,
      "name": "Archivio di Stato di Ascoli Piceno",
      "website": "www.archiviodistatoap.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via S. Serafino, 8/C",
          "zip-code": "63100",
          "comune": "Ascoli Piceno",
          "provincia": "Ascoli Piceno",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6683,
      "level": 3,
      "name": "Archivio di Stato di Ascoli Piceno",
      "website": "https://www.archiviodistatoap.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via San Serafino da Montegranaro, 8/C",
          "zip-code": "63100",
          "comune": "Ascoli Piceno",
          "provincia": "Ascoli Piceno",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 34,
      "level": 2,
      "name": "Archivio di Stato di Asti",
      "website": "www.archiviodistatoasti.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Generale Giuseppe Govone",
          "zip-code": "14100",
          "comune": "Asti",
          "provincia": "Asti",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6684,
      "level": 3,
      "name": "Archivio di Stato di Asti",
      "website": "https://archiviodistatoasti.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Generale Giuseppe Gavone, 9",
          "zip-code": "14100",
          "comune": "Asti",
          "provincia": "Asti",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 35,
      "level": 2,
      "name": "Archivio di Stato di Avellino",
      "website": "www.asavellino.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via G. Verdi, 15/17",
          "zip-code": "83100",
          "comune": "Avellino",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6108,
      "level": 3,
      "name": "Archivio di Stato di Avellino",
      "website": "http://www.asavellino.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giuseppe Verdi 15/17",
          "zip-code": "83100",
          "comune": "Avellino",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 36,
      "level": 2,
      "name": "Archivio di Stato di Bari",
      "website": "www.archiviodistatodibari.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pietro Oreste, 45",
          "zip-code": "70123",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6685,
      "level": 3,
      "name": "Archivio di Stato di Bari",
      "website": "http://archiviodistatodibari.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pietro Oreste, 45",
          "zip-code": "70123",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6687,
      "level": 3,
      "name": "Archivio di Stato di Bari. Sezione di Barletta",
      "website": "http://www.archiviodistatodibari.beniculturali.it/index.php?it/156/sezione-di-trani",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ferdinando d'Aragona, 132",
          "zip-code": "76121",
          "comune": "Barletta",
          "provincia": "Barletta-Andria-Trani",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6686,
      "level": 3,
      "name": "Archivio di Stato di Bari. Sezione di Trani",
      "website": "http://www.archiviodistatodibari.beniculturali.it/index.php?it/156/sezione-di-trani",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Sacra Regia Udienza, 3",
          "zip-code": "70059",
          "comune": "Trani",
          "provincia": "Barletta-Andria-Trani",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 38,
      "level": 2,
      "name": "Archivio di Stato di Benevento",
      "website": "www.archiviodistatobenevento.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via G. De Vita, 3",
          "zip-code": "82100",
          "comune": "Benevento",
          "provincia": "Benevento",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 897,
      "level": 3,
      "name": "Archivio di Stato di Belluno",
      "website": "http://www.archiviodistatobelluno.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Santa Maria dei Battuti, 3",
          "zip-code": "32100",
          "comune": "Belluno",
          "provincia": "Belluno",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 896,
      "level": 3,
      "name": "Archivio di Stato di Benevento",
      "website": "http://archiviodistatobenevento.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giovanni De Vita, 3",
          "zip-code": "82100",
          "comune": "Benevento",
          "provincia": "Benevento",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 39,
      "level": 2,
      "name": "Archivio di Stato di Bergamo",
      "website": "www.asbergamo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via F.lli Bronzetti 24,26 e 30",
          "zip-code": "24124",
          "comune": "Bergamo",
          "provincia": "Bergamo",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6688,
      "level": 3,
      "name": "Archivio di Stato di Bergamo",
      "website": "http://www.asbergamo.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Fratelli Bronzetti, 24",
          "zip-code": "24124",
          "comune": "Bergamo",
          "provincia": "Bergamo",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 40,
      "level": 2,
      "name": "Archivio di Stato di Biella",
      "website": "www.asbi.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Arnulfo, 15/a",
          "zip-code": "13900",
          "comune": "Biella",
          "provincia": "Biella",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6271,
      "level": 3,
      "name": "Archivio di Stato di Biella",
      "website": "http://www.asbi.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giuseppe Arnulfo, 15",
          "zip-code": "13900",
          "comune": "Biella",
          "provincia": "Biella",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 353,
      "level": 2,
      "name": "Archivio di Stato di Bologna",
      "website": "www.archiviodistatobologna.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de' Celestini, 4",
          "zip-code": "40123",
          "comune": "Bologna",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6689,
      "level": 3,
      "name": "Archivio di Stato di Bologna",
      "website": "http://www.archiviodistatobologna.it/",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "P.zza Celestini, 4/ Vicolo Santo Spirito, 4",
          "zip-code": "40123",
          "comune": "Bologna",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 353,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 42,
      "level": 2,
      "name": "Archivio di Stato di Bolzano",
      "website": "www.asbolzano.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via A. Diaz, 8",
          "zip-code": "39100",
          "comune": "Bolzano/Bozen",
          "provincia": "Bolzano/Bozen",
          "regione": "Trentino-Alto Adige"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6691,
      "level": 3,
      "name": "Archivio di Stato di Bolzano",
      "website": "http://www.asbolzano.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Armando Diaz, 8/A",
          "zip-code": "39100",
          "comune": "Bolzano/Bozen",
          "provincia": "Bolzano/Bozen",
          "regione": "Trentino-Alto Adige"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 43,
      "level": 2,
      "name": "Archivio di Stato di Brescia",
      "website": "www.asbrescia.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via G. Galilei, 42/44",
          "zip-code": "25121",
          "comune": "Brescia",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 895,
      "level": 3,
      "name": "Archivio di Stato di Brescia",
      "website": "http://www.asbrescia.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via G. Galilei 42/44",
          "zip-code": "25124",
          "comune": "Brescia",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 44,
      "level": 2,
      "name": "Archivio di Stato di Brindisi",
      "website": "www.asbrindisi.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza S. Teresa, 4",
          "zip-code": "72100",
          "comune": "Brindisi",
          "provincia": "Brindisi",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 894,
      "level": 3,
      "name": "Archivio di Stato di Brindisi",
      "website": "http://www.archiviodistatobrindisi.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza S. Teresa, 4",
          "zip-code": "72100",
          "comune": "Brindisi",
          "provincia": "Brindisi",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 45,
      "level": 2,
      "name": "Archivio di Stato di Cagliari",
      "website": "www.archiviostatocagliari.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gallura",
          "zip-code": "09125",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 893,
      "level": 3,
      "name": "Archivio di Stato di Cagliari",
      "website": "http://www.archiviostatocagliari.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gallura, 2",
          "zip-code": "09125",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 46,
      "level": 2,
      "name": "Archivio di Stato di Caltanissetta",
      "website": "www.ascaltanissetta.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via P. Borsellino, 2 - 2a",
          "zip-code": "93100",
          "comune": "Caltanissetta",
          "provincia": "Caltanissetta",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6692,
      "level": 3,
      "name": "Archivio di Stato di Caltanissetta",
      "website": "http://www.ascaltanissetta.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Paolo Borsellino, 2/2A, Via Libert\u00e0 2",
          "zip-code": "93100",
          "comune": "Caltanissetta",
          "provincia": "Caltanissetta",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 47,
      "level": 2,
      "name": "Archivio di Stato di Campobasso",
      "website": "www.ascampobasso.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Orefici, 43-45",
          "zip-code": "86100",
          "comune": "Campobasso",
          "provincia": "Campobasso",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6693,
      "level": 3,
      "name": "Archivio di Stato di Campobasso",
      "website": "http://www.ascampobasso.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Orefici, 43",
          "zip-code": "86100",
          "comune": "Campobasso",
          "provincia": "Campobasso",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 48,
      "level": 2,
      "name": "Archivio di Stato di Caserta",
      "website": "www.ascaserta.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "piazza Carlo di Borbone",
          "zip-code": "81100",
          "comune": "Caserta",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 892,
      "level": 3,
      "name": "Archivio di Stato di Caserta",
      "website": "http://www.ascaserta.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Carlo di Borbone",
          "zip-code": "81100",
          "comune": "Caserta",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 49,
      "level": 2,
      "name": "Archivio di Stato di Catania",
      "website": "www.ascatania.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Vittorio Emanuele, 156",
          "zip-code": "95131",
          "comune": "Catania",
          "provincia": "Catania",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6694,
      "level": 3,
      "name": "Archivio di Stato di Catania",
      "website": "http://www.ascatania.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Vittorio Emanuele II, 156",
          "zip-code": "95131",
          "comune": "Catania",
          "provincia": "Catania",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6695,
      "level": 3,
      "name": "Archivio di Stato di Catania. Sezione di Caltagirone",
      "website": "http://www.ascatania.beniculturali.it/index.php?it/196/sezione-di-archivio-di-stato-di-caltagirone",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Santa Maria di Ges\u00f9, 90",
          "zip-code": "95041",
          "comune": "Caltagirone",
          "provincia": "Catania",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 50,
      "level": 2,
      "name": "Archivio di Stato di Catanzaro",
      "website": "www.ascatanzaro.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Rosario, 6",
          "zip-code": "88100",
          "comune": "Catanzaro",
          "provincia": "Catanzaro",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6696,
      "level": 3,
      "name": "Archivio di Stato di Catanzaro",
      "website": "http://www.ascatanzaro.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Rosario, 6",
          "zip-code": "88100",
          "comune": "Catanzaro",
          "provincia": "Catanzaro",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6697,
      "level": 3,
      "name": "Archivio di Stato di Catanzaro. Sezione di Lamezia Terme",
      "website": "http://www.ascatanzaro.beniculturali.it/index.php?it/143/sezione-di-archivio-di-stato-di-lamezia-terme",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Aldo Moro, 40",
          "zip-code": "88046",
          "comune": "Lamezia Terme",
          "provincia": "Catanzaro",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 51,
      "level": 2,
      "name": "Archivio di Stato di Chieti",
      "website": "www.aschieti.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ferdinando Ferri, 25-27",
          "zip-code": "66100",
          "comune": "Chieti",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6698,
      "level": 3,
      "name": "Archivio di Stato di Chieti",
      "website": "http://www.aschieti.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Fernando Ferri, 25",
          "zip-code": "66100",
          "comune": "Chieti",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6699,
      "level": 3,
      "name": "Archivio di Stato di Chieti. Sezione di Lanciano",
      "website": "http://www.aschieti.beniculturali.it/index.php?it/97/sezione-di-archivio-di-stato-di-lanciano",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Cappuccini, 131",
          "zip-code": "66034",
          "comune": "Lanciano",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 52,
      "level": 2,
      "name": "Archivio di Stato di Como",
      "website": "www.ascomo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Briantea, 8",
          "zip-code": "22100",
          "comune": "Como",
          "provincia": "Como",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6700,
      "level": 3,
      "name": "Archivio di Stato di Como",
      "website": "http://www.ascomo.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Briantea, 8",
          "zip-code": "22100",
          "comune": "Como",
          "provincia": "Como",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 53,
      "level": 2,
      "name": "Archivio di Stato di Cosenza",
      "website": "www.archiviodistatocosenza.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gian Vincenzo Gravina",
          "zip-code": "87100",
          "comune": "Cosenza",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6701,
      "level": 3,
      "name": "Archivio di Stato di Cosenza",
      "website": "http://www.archiviodistatocosenza.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gian Vincenzo Gravina, 12",
          "zip-code": "87100",
          "comune": "Cosenza",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6702,
      "level": 3,
      "name": "Archivio di Stato di Cosenza. Sezione di Castrovillari",
      "website": "http://www.archiviodistatocosenza.beniculturali.it/index.php?it/130/sezione-di-castrovillari",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Porta della Catena, 1",
          "zip-code": "87012",
          "comune": "Castrovillari",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 54,
      "level": 2,
      "name": "Archivio di Stato di Cremona",
      "website": "www.archiviodistatocremona.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Antica Porta Tintoria, 2",
          "zip-code": "26100",
          "comune": "Cremona",
          "provincia": "Cremona",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6703,
      "level": 3,
      "name": "Archivio di Stato di Cremona",
      "website": "http://www.archiviodistatocremona.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Antica Porta Tintoria, 2",
          "zip-code": "26100",
          "comune": "Cremona",
          "provincia": "Cremona",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 55,
      "level": 2,
      "name": "Archivio di Stato di Cuneo",
      "website": "www.ascuneo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Marcello Soleri",
          "zip-code": "12100",
          "comune": "Cuneo",
          "provincia": "Cuneo",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6847,
      "level": 3,
      "name": "Archivio di Stato di Cuneo",
      "website": "",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Marcello Soleri",
          "zip-code": "12100",
          "comune": "Cuneo",
          "provincia": "Cuneo",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 56,
      "level": 2,
      "name": "Archivio di Stato di Enna",
      "website": "www.asenna.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Angelo Tranchida",
          "zip-code": "94100",
          "comune": "Enna",
          "provincia": "Enna",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6593,
      "level": 3,
      "name": "Archivio di Stato di Enna",
      "website": "http://www.archiviodistatoenna.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Extraurbana Santa Lucia, 24",
          "zip-code": "94100",
          "comune": "Enna",
          "provincia": "Enna",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 33,
      "level": 2,
      "name": "Archivio di Stato di Fermo",
      "website": "www.asfermo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Saffi, 5",
          "zip-code": "63900",
          "comune": "Fermo",
          "provincia": "Fermo",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6848,
      "level": 3,
      "name": "Archivio di Stato di Fermo",
      "website": "http://www.asfermo.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Saffi",
          "zip-code": "63900",
          "comune": "Fermo",
          "provincia": "Fermo",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 57,
      "level": 2,
      "name": "Archivio di Stato di Ferrara",
      "website": "www.asferrara.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Giovecca, 146",
          "zip-code": "44100",
          "comune": "Ferrara",
          "provincia": "Ferrara",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6560,
      "level": 3,
      "name": "Archivio di Stato di Ferrara",
      "website": "http://archiviodistatoferrara.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso della Giovecca, 146",
          "zip-code": "44121",
          "comune": "Ferrara",
          "provincia": "Ferrara",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 58,
      "level": 2,
      "name": "Archivio di Stato di Firenze",
      "website": "www.archiviodistato.firenze.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Giovine Italia, 6",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6863,
      "level": 3,
      "name": "Archivio di Stato di Firenze",
      "website": "https://www.archiviodistato.firenze.it/asfi/home",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale della Giovine Italia, 6",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 58,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 59,
      "level": 2,
      "name": "Archivio di Stato di Foggia",
      "website": "www.archiviodistatofoggia.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza XX Settembre, 3",
          "zip-code": "71100",
          "comune": "Foggia",
          "provincia": "Foggia",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6778,
      "level": 3,
      "name": "Archivio di Stato di Foggia",
      "website": "http://www.archiviodistatofoggia.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza XX Settembre, 3",
          "zip-code": "71100",
          "comune": "Foggia",
          "provincia": "Foggia",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 60,
      "level": 2,
      "name": "Archivio di Stato di Forl\u00ec-Cesena",
      "website": "www.archiviodistato.forli-cesena.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Gerolimini, 6",
          "zip-code": "47121",
          "comune": "Forl\u00ec",
          "provincia": "Forl\u00ec-Cesena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6767,
      "level": 3,
      "name": "Archivio di Stato di Forl\u00ec-Cesena",
      "website": "http://www.archiviodistato.forli-cesena.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Gerolimini, 6",
          "zip-code": "47121",
          "comune": "Forl\u00ec",
          "provincia": "Forl\u00ec-Cesena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6766,
      "level": 3,
      "name": "Archivio di Stato di Forl\u00ec-Cesena. Sezione di Cesena",
      "website": "http://www.archiviodistato.forli-cesena.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Via Montalti, 4",
          "zip-code": "47521",
          "comune": "Cesena",
          "provincia": "Forl\u00ec-Cesena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 61,
      "level": 2,
      "name": "Archivio di Stato di Frosinone",
      "website": "www.asfrosinone.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale De Matthaeis, 41",
          "zip-code": "03100",
          "comune": "Frosinone",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6768,
      "level": 3,
      "name": "Archivio di Stato di Frosinone",
      "website": "http://www.asfrosinone.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale De Matthaeis, 4",
          "zip-code": "03100",
          "comune": "Frosinone",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 361,
      "level": 2,
      "name": "Archivio di Stato di Genova",
      "website": "www.archiviodistatogenova.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza S. Maria in Via Lata",
          "zip-code": "16128",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 891,
      "level": 3,
      "name": "Archivio di Stato di Genova",
      "website": "http://www.archiviodistatogenova.beniculturali.it",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Santa Maria in Via Lata, 7",
          "zip-code": "18100",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 63,
      "level": 2,
      "name": "Archivio di Stato di Gorizia",
      "website": "www.archiviodistatogorizia.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell\u2019Ospitale, 2",
          "zip-code": "34170",
          "comune": "Gorizia",
          "provincia": "Gorizia",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 890,
      "level": 3,
      "name": "Archivio di Stato di Gorizia",
      "website": "http://archiviodistatogorizia.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell\u2019Ospitale, 2",
          "zip-code": "34170",
          "comune": "Gorizia",
          "provincia": "Gorizia",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 64,
      "level": 2,
      "name": "Archivio di Stato di Grosseto",
      "website": "www.asgrosseto.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Ettore Socci, 3",
          "zip-code": "58100",
          "comune": "Grosseto",
          "provincia": "Grosseto",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 889,
      "level": 3,
      "name": "Archivio di Stato di Grosseto",
      "website": "http://www.asgrosseto.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Ettore Socci, 3",
          "zip-code": "58100",
          "comune": "Grosseto",
          "provincia": "Grosseto",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 65,
      "level": 2,
      "name": "Archivio di Stato di Imperia",
      "website": "www.asimperia.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Matteotti, 105",
          "zip-code": "18100",
          "comune": "Imperia",
          "provincia": "Imperia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6669,
      "level": 3,
      "name": "Archivio di Stato di Imperia",
      "website": "http://www.archiviodistatoimperia.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Matteotti, 105",
          "zip-code": "18100",
          "comune": "Imperia",
          "provincia": "Imperia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 7007,
      "level": 3,
      "name": "Archivio di Stato di Imperia - Sezione di Sanremo",
      "website": "http://www.archiviodistatoimperia.beniculturali.it/index.php?it/152/sezione-di-san-remo",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Corso Felice Cavallotti, 362",
          "zip-code": "18038",
          "comune": "Sanremo",
          "provincia": "Imperia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 888,
      "level": 3,
      "name": "Archivio di Stato di Imperia. Sezione di Ventimiglia",
      "website": "http://www.asimperia.beniculturali.it/index.php?it/153/sezione-di-ventimiglia",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Via Hanbury, 12",
          "zip-code": "18039",
          "comune": "Ventimiglia",
          "provincia": "Imperia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 66,
      "level": 2,
      "name": "Archivio di Stato di Isernia",
      "website": "www.asisernia.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Risorgimento",
          "zip-code": "86170",
          "comune": "Isernia",
          "provincia": "Isernia",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 887,
      "level": 3,
      "name": "Archivio di Stato di Isernia",
      "website": "http://www.archiviodistatoisernia.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Risorgimento",
          "zip-code": "98124",
          "comune": "Isernia",
          "provincia": "Isernia",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 67,
      "level": 2,
      "name": "Archivio di Stato di La Spezia",
      "website": "archiviodistatolaspezia.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Galvani, 21",
          "zip-code": "19124",
          "comune": "La Spezia",
          "provincia": "La Spezia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6849,
      "level": 3,
      "name": "Archivio di Stato di La Spezia",
      "website": "http://archiviodistatolaspezia.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Galvani",
          "zip-code": "19124",
          "comune": "La Spezia",
          "provincia": "La Spezia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 68,
      "level": 2,
      "name": "Archivio di Stato di Latina",
      "website": "www.archiviodistatolatina.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Piceni, 24",
          "zip-code": "04100",
          "comune": "Latina",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5922,
      "level": 3,
      "name": "Archivio di Stato di Latina",
      "website": "http://www.archiviodistatolatina.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Piceni, 24",
          "zip-code": "04100",
          "comune": "Latina",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 70,
      "level": 2,
      "name": "Archivio di Stato di Livorno",
      "website": "www.aslivorno.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Fiume, 40",
          "zip-code": "57100",
          "comune": "Livorno",
          "provincia": "Livorno",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6831,
      "level": 3,
      "name": "Archivio di Stato di Livorno",
      "website": "http://www.archiviodistatolivorno.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Fiume, 40",
          "zip-code": "57123",
          "comune": "Livorno",
          "provincia": "Livorno",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 71,
      "level": 2,
      "name": "Archivio di Stato di Lucca",
      "website": "www.archiviodistatoinlucca.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Guidiccioni, 8",
          "zip-code": "55100",
          "comune": "Lucca",
          "provincia": "Lucca",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6779,
      "level": 3,
      "name": "Archivio di Stato di Lucca",
      "website": "http://www.archiviodistatoinlucca.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Guidiccioni, 8",
          "zip-code": "55100",
          "comune": "Lucca",
          "provincia": "Lucca",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 7036,
      "level": 3,
      "name": "Archivio di Stato di Lucca - Sede Sussidiaria",
      "website": "https://www.archiviodistatoinlucca.beniculturali.it/index.php?id=2",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Via Pubblici Macelli, 155",
          "zip-code": "55100",
          "comune": "Lucca",
          "provincia": "Lucca",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 72,
      "level": 2,
      "name": "Archivio di Stato di Macerata",
      "website": "www.archiviodistatomacerata.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso F.lli Cairoli, 175",
          "zip-code": "62100",
          "comune": "Macerata",
          "provincia": "Macerata",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6785,
      "level": 3,
      "name": "Archivio di Stato di Macerata",
      "website": "http://www.archiviodistatomacerata.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Fratelli Cairoli, 175",
          "zip-code": "62100",
          "comune": "Macerata",
          "provincia": "Macerata",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6866,
      "level": 3,
      "name": "Archivio di Stato di Macerata - Sezione di Camerino",
      "website": "https://www.archiviodistatomacerata.beniculturali.it/sezione-camerino/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Venanzi, 20",
          "zip-code": "62032",
          "comune": "Camerino",
          "provincia": "Macerata",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 73,
      "level": 2,
      "name": "Archivio di Stato di Mantova",
      "website": "www.archiviodistatomantova.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Roberto Ardig\u00f2, 11",
          "zip-code": "46100",
          "comune": "Mantova",
          "provincia": "Mantova",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6850,
      "level": 3,
      "name": "Archivio di Stato di Mantova",
      "website": "https://www.archiviodistatomantova.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Roberto Ardig\u00f2, 11",
          "zip-code": "46100",
          "comune": "Mantova",
          "provincia": "Mantova",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 74,
      "level": 2,
      "name": "Archivio di Stato di Massa",
      "website": "www.asmassa.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via G. Sforza, 3",
          "zip-code": "54100",
          "comune": "Massa",
          "provincia": "Massa-Carrara",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6973,
      "level": 3,
      "name": "Archivio di Stato di Massa",
      "website": "http://www.asmassa.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giovanni Sforza, 3",
          "zip-code": "54100",
          "comune": "Massa",
          "provincia": "Massa-Carrara",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 75,
      "level": 2,
      "name": "Archivio di Stato di Matera",
      "website": "www.asmatera.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Tommaso Stigliani, 25",
          "zip-code": "75100",
          "comune": "Matera",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6937,
      "level": 3,
      "name": "Archivio di Stato di Matera",
      "website": "http://www.asmatera.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via T. Stigliani, 25",
          "zip-code": "75100",
          "comune": "Matera",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 77,
      "level": 2,
      "name": "Archivio di Stato di Milano",
      "website": "www.archiviodistatomilano.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Senato, 10",
          "zip-code": "20121",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6828,
      "level": 3,
      "name": "Archivio di Stato di Milano",
      "website": "http://www.archiviodistatomilano.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Senato, 10",
          "zip-code": "20121",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 78,
      "level": 2,
      "name": "Archivio di Stato di Modena",
      "website": "www.asmo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Cavour, 21",
          "zip-code": "41100",
          "comune": "Modena",
          "provincia": "Modena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6712,
      "level": 3,
      "name": "Archivio di Stato di Modena",
      "website": "http://www.asmo.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Cavour, 21",
          "zip-code": "41121",
          "comune": "Modena",
          "provincia": "Modena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 79,
      "level": 2,
      "name": "Archivio di Stato di Napoli",
      "website": "www.archiviodistatonapoli.it/asnaCMS",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Grande Archivio, 5",
          "zip-code": "80138",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6132,
      "level": 3,
      "name": "Archivio di Stato di Napoli",
      "website": "http://www.archiviodistatonapoli.it/",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta del Grande Archivio, 5",
          "zip-code": "80138",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 79,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 80,
      "level": 2,
      "name": "Archivio di Stato di Novara",
      "website": "http://www.archiviodistatonovara.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell\u2019Archivio, 2",
          "zip-code": "28100",
          "comune": "Novara",
          "provincia": "Novara",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5179,
      "level": 3,
      "name": "Archivio di Stato di Novara",
      "website": "http://www.archiviodistatonovara.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell\u2019Archivio, 2",
          "zip-code": "28100",
          "comune": "Novara",
          "provincia": "Novara",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 81,
      "level": 2,
      "name": "Archivio di Stato di Nuoro",
      "website": "www.archiviodistatonuoro.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Antonio Mereu",
          "zip-code": "08100",
          "comune": "Nuoro",
          "provincia": "Nuoro",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 384,
      "level": 3,
      "name": "Archivio di Stato di Nuoro",
      "website": "http://www.archiviodistatonuoro.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Antonio Mereu, 49",
          "zip-code": "08100",
          "comune": "Nuoro",
          "provincia": "Nuoro",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 82,
      "level": 2,
      "name": "Archivio di Stato di Oristano",
      "website": "www.archiviodistatooristano.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Ungheria",
          "zip-code": "09170",
          "comune": "Oristano",
          "provincia": "Oristano",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 385,
      "level": 3,
      "name": "Archivio di Stato di Oristano",
      "website": "http://www.archiviodistatooristano.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Ungheria, 5",
          "zip-code": "09170",
          "comune": "Oristano",
          "provincia": "Oristano",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 83,
      "level": 2,
      "name": "Archivio di Stato di Padova",
      "website": "www.aspd.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Dei Colli",
          "zip-code": "35143",
          "comune": "Padova",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6851,
      "level": 3,
      "name": "Archivio di Stato di Padova",
      "website": "http://www.aspd.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Colli, 24",
          "zip-code": "35143",
          "comune": "Padova",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 199,
      "level": 2,
      "name": "Soprintendenza Archivistica della Sicilia - Archivio di Stato di Palermo",
      "website": "www.saassipa.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Vittorio Emanuele, 31",
          "zip-code": "90133",
          "comune": "Palermo",
          "provincia": "Palermo",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6577,
      "level": 3,
      "name": "Archivio di Stato di Palermo",
      "website": "http://www.saassipa.beniculturali.it",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Vittorio Emanuele, 31",
          "zip-code": "90133",
          "comune": "Palermo",
          "provincia": "Palermo",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 199,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 85,
      "level": 2,
      "name": "Archivio di Stato di Parma",
      "website": "www.archiviodistatoparma.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada M. D\u2019Azeglio, 45",
          "zip-code": "43125",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6873,
      "level": 3,
      "name": "Archivio di Stato di Parma",
      "website": "http://www.archiviodistatoparma.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada M. D\u2019Azeglio, 45",
          "zip-code": "43125",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 86,
      "level": 2,
      "name": "Archivio di Stato di Pavia",
      "website": "www.archiviodistatopavia.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cardano, 45",
          "zip-code": "27100",
          "comune": "Pavia",
          "provincia": "Pavia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 953,
      "level": 3,
      "name": "Archivio di Stato di Pavia",
      "website": "http://www.archiviodistatopavia.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gerolamo Cardano, 45",
          "zip-code": "27100",
          "comune": "Pavia",
          "provincia": "Pavia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 87,
      "level": 2,
      "name": "Archivio di Stato di Perugia",
      "website": "www.archiviodistatoperugia.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Giordano Bruno, 10",
          "zip-code": "06121",
          "comune": "Perugia",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6798,
      "level": 3,
      "name": "Archivio di Stato di Perugia",
      "website": "http://www.archiviodistatoperugia.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Giordano Bruno, 10",
          "zip-code": "06121",
          "comune": "Perugia",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6932,
      "level": 3,
      "name": "Archivio di Stato di Perugia. Sezione di Assisi",
      "website": "http://www.archiviodistatoperugia.it/listituto/le-sedi/assisi",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Mazzini",
          "zip-code": "06081",
          "comune": "Assisi",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6931,
      "level": 3,
      "name": "Archivio di Stato di Perugia. Sezione di Foligno",
      "website": "http://www.archiviodistatoperugia.it/listituto/le-sedi/foligno",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Grano, 2",
          "zip-code": "06034",
          "comune": "Foligno",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6933,
      "level": 3,
      "name": "Archivio di Stato di Perugia. Sezione di Gubbio",
      "website": "http://www.archiviodistatoperugia.it/L%27Istituto/Le%20sedi/Gubbio",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza XL Martiri, 1",
          "zip-code": "06024",
          "comune": "Gubbio",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6930,
      "level": 3,
      "name": "Archivio di Stato di Perugia. Sezione di Spoleto",
      "website": "http://www.archiviodistatoperugia.it/listituto/le-sedi/spoleto",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Giuseppe Ermini, 1",
          "zip-code": "06049",
          "comune": "Spoleto",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 88,
      "level": 2,
      "name": "Archivio di Stato di Pesaro-Urbino",
      "website": "www.aspesaro.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via della Neviera, 44",
          "zip-code": "61121",
          "comune": "Pesaro",
          "provincia": "Pesaro e Urbino",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 886,
      "level": 3,
      "name": "Archivio di Stato di Pesaro",
      "website": "http://aspesaro.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Neviera, 44",
          "zip-code": "61121",
          "comune": "Pesaro",
          "provincia": "Pesaro e Urbino",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 885,
      "level": 3,
      "name": "Archivio di Stato di Pesaro-Urbino. Sezione di Fano",
      "website": "http://aspesaro.beniculturali.it/fano",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Via Castracane, 3",
          "zip-code": "61032",
          "comune": "Fano",
          "provincia": "Pesaro e Urbino",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 884,
      "level": 3,
      "name": "Archivio di Stato di Pesaro-Urbino. Sezione di Urbino",
      "website": "http://aspesaro.beniculturali.it/urbino-2",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Piano Santa Lucia, 11",
          "zip-code": "61029",
          "comune": "Urbino",
          "provincia": "Pesaro e Urbino",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 89,
      "level": 2,
      "name": "Archivio di Stato di Pescara",
      "website": "www.archiviodistatopescara.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cesare De Titta",
          "zip-code": "65129",
          "comune": "Pescara",
          "provincia": "Pescara",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 883,
      "level": 3,
      "name": "Archivio di Stato di Pescara",
      "website": "http://www.archiviodistatopescara.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cesare De Titta, 1",
          "zip-code": "65129",
          "comune": "Pescara",
          "provincia": "Pescara",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 90,
      "level": 2,
      "name": "Archivio di Stato di Piacenza",
      "website": "www.archiviodistatopiacenza.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Cittadella",
          "zip-code": "29100",
          "comune": "Piacenza",
          "provincia": "Piacenza",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6862,
      "level": 3,
      "name": "Archivio di Stato di Piacenza",
      "website": "http://www.archiviodistatopiacenza.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Cittadella, 29",
          "zip-code": "29121",
          "comune": "Piacenza",
          "provincia": "Piacenza",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 91,
      "level": 2,
      "name": "Archivio di Stato di Pisa",
      "website": "www.aspisa.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Lungarno Mediceo, 17",
          "zip-code": "56100",
          "comune": "Pisa",
          "provincia": "Pisa",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6832,
      "level": 3,
      "name": "Archivio di Stato di Pisa",
      "website": "http://www.aspisa.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Lungarno Mediceo",
          "zip-code": "",
          "comune": "Pisa",
          "provincia": "Pisa",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 92,
      "level": 2,
      "name": "Archivio di Stato di Pistoia",
      "website": "www.aspistoia.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza delle Scuole Normali, 2",
          "zip-code": "51100",
          "comune": "Pistoia",
          "provincia": "Pistoia",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6868,
      "level": 3,
      "name": "Archivio di Stato di Pistoia. Sezione di Pescia",
      "website": "http://www.archiviodistatopistoia.beniculturali.it/index.php?it/164/sezione-di-archivio-di-stato-di-pescia",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Piazza XX Settembre, 3",
          "zip-code": "51017",
          "comune": "Pescia",
          "provincia": "Pistoia",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 93,
      "level": 2,
      "name": "Archivio di Stato di Pordenone",
      "website": "www.archiviodistatopordenone.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Montereale, 7",
          "zip-code": "33170",
          "comune": "Pordenone",
          "provincia": "Pordenone",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7015,
      "level": 3,
      "name": "Archivio di Stato di Pordenone",
      "website": "https://www.archiviodistatopordenone.beniculturali.it/index.php?id=2",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Montereale, 7",
          "zip-code": "33170",
          "comune": "Pordenone",
          "provincia": "Pordenone",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 94,
      "level": 2,
      "name": "Archivio di Stato di Potenza",
      "website": "www.archiviodistatopotenza.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Nazario Sauro, 1",
          "zip-code": "85100",
          "comune": "Potenza",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6852,
      "level": 3,
      "name": "Archivio di Stato di Potenza",
      "website": "http://archiviodistatopotenza.beniculturali.it/aspz/Startup.do",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Nazario Sauro, 1",
          "zip-code": "85100",
          "comune": "Potenza",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 95,
      "level": 2,
      "name": "Archivio di Stato di Prato",
      "website": "www.archiviodistato.prato.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via ser Lapo Mazzei",
          "zip-code": "59100",
          "comune": "Prato",
          "provincia": "Prato",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 882,
      "level": 3,
      "name": "Archivio di Stato di Prato",
      "website": "http://www.archiviodistato.prato.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ser Lapo Mazzei, 41",
          "zip-code": "59100",
          "comune": "Prato",
          "provincia": "Prato",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 96,
      "level": 2,
      "name": "Archivio di Stato di Ragusa",
      "website": "www.asragusa.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale del Fante, 7",
          "zip-code": "97100",
          "comune": "Ragusa",
          "provincia": "Ragusa",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6680,
      "level": 3,
      "name": "Archivio di Stato di Ragusa",
      "website": "http://www.asragusa.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale del Fante, 7",
          "zip-code": "97100",
          "comune": "Ragusa",
          "provincia": "Ragusa",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6681,
      "level": 3,
      "name": "Archivio di Stato di Ragusa. Sezione di Modica",
      "website": "http://www.asragusa.beniculturali.it/index.php?it/193/sezione-di-archivio-di-stato-di-modica",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Liceo Convitto, 33",
          "zip-code": "97015",
          "comune": "Modica",
          "provincia": "Ragusa",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 97,
      "level": 2,
      "name": "Archivio di Stato di Ravenna",
      "website": "www.asravenna.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta dell\u2019Esarcato,1",
          "zip-code": "48100",
          "comune": "Ravenna",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6978,
      "level": 3,
      "name": "Archivio di Stato di Ravenna",
      "website": "http://asravenna.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta dell'Esarcato, 1",
          "zip-code": "48121",
          "comune": "Ravenna",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 98,
      "level": 2,
      "name": "Archivio di Stato di Reggio Calabria",
      "website": "archiviodistatoreggiocalabria.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Lia Casalotto",
          "zip-code": "89122",
          "comune": "Reggio di Calabria",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 4546,
      "level": 3,
      "name": "Archivio di Stato di Reggio Calabria",
      "website": "http://archiviodistatoreggiocalabria.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Lia Casalotto",
          "zip-code": "89122",
          "comune": "Reggio di Calabria",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6938,
      "level": 3,
      "name": "Archivio di Stato di Reggio Calabria. Sezione di Locri",
      "website": "http://www.archiviodistatoreggiocalabria.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giacomo Matteotti, 354",
          "zip-code": "89044",
          "comune": "Locri",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6939,
      "level": 3,
      "name": "Archivio di Stato di Reggio Calabria. Sezione di Palmi",
      "website": "http://www.archiviodistatoreggiocalabria.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Francesco Carbone, 3",
          "zip-code": "89015",
          "comune": "Palmi",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 100,
      "level": 2,
      "name": "Archivio di Stato di Rieti",
      "website": "www.asrieti.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ludovico Canali",
          "zip-code": "02100",
          "comune": "Rieti",
          "provincia": "Rieti",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6830,
      "level": 3,
      "name": "Archivio di Stato di Rieti",
      "website": "https://www.as-ri.beniculturali.it/index.php?id=2",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ludovico Canali, 7",
          "zip-code": "02100",
          "comune": "Rieti",
          "provincia": "Rieti",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 101,
      "level": 2,
      "name": "Archivio di Stato di Rimini",
      "website": "www.archiviodistato.rimini.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta San Bernardino, 1",
          "zip-code": "47900",
          "comune": "Rimini",
          "provincia": "Rimini",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7048,
      "level": 3,
      "name": "Archivio di Stato di Rimini",
      "website": "http://www.archiviodistatorimini.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta San Bernardino, 1",
          "zip-code": "47921",
          "comune": "Rimini",
          "provincia": "Rimini",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 102,
      "level": 2,
      "name": "Archivio di Stato di Roma",
      "website": "www.archiviodistatoroma.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso  Rinascimento, 40",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 881,
      "level": 3,
      "name": "Archivio di Stato di Roma",
      "website": "http://www.archiviodistatoroma.beniculturali.it/",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Rinascimento, 40",
          "zip-code": "00036",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 102,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 880,
      "level": 3,
      "name": "Archivio di Stato di Roma. Sede distaccata",
      "website": "https://www.archiviodistatoroma.beniculturali.it/",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Galla Placidia, 93",
          "zip-code": "84021",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 103,
      "level": 2,
      "name": "Archivio di Stato di Rovigo",
      "website": "www.archiviodistatorovigo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Sichirollo,  9",
          "zip-code": "45100",
          "comune": "Rovigo",
          "provincia": "Rovigo",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6337,
      "level": 3,
      "name": "Archivio di Stato di Rovigo",
      "website": "http://asrovigo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Sichirollo, 9-11",
          "zip-code": "45100",
          "comune": "Rovigo",
          "provincia": "Rovigo",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 104,
      "level": 2,
      "name": "Archivio di Stato di Salerno",
      "website": "www.archiviodistatosalerno.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Abate Conforti, 7",
          "zip-code": "84121",
          "comune": "Salerno",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5956,
      "level": 3,
      "name": "Archivio di Stato di Salerno",
      "website": "http://www.archiviodistatosalerno.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Abate Conforti, 7",
          "zip-code": "84121",
          "comune": "Salerno",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 105,
      "level": 2,
      "name": "Archivio di Stato di Sassari",
      "website": "www.archiviodistatosassari.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Enrico Costa, 57",
          "zip-code": "07100",
          "comune": "Sassari",
          "provincia": "Sassari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7012,
      "level": 3,
      "name": "Archivio di Stato di Sassari",
      "website": "http://www.archiviodistatosassari.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Enrico Costa, 57",
          "zip-code": "07100",
          "comune": "Sassari",
          "provincia": "Sassari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 106,
      "level": 2,
      "name": "Archivio di Stato di Savona",
      "website": "www.assavona.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Valletta S.Cristoforo",
          "zip-code": "17100",
          "comune": "Savona",
          "provincia": "Savona",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7025,
      "level": 3,
      "name": "Archivio di Stato di Savona",
      "website": "http://www.archiviodistatosavona.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Valletta San Cristoforo, 15",
          "zip-code": "17100",
          "comune": "Savona",
          "provincia": "Savona",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 107,
      "level": 2,
      "name": "Archivio di Stato di Siena",
      "website": "http://archiviostato.si.it/assi/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Banchi di Sotto, 52",
          "zip-code": "53100",
          "comune": "Siena",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6770,
      "level": 3,
      "name": "Archivio di Stato di Siena",
      "website": "http://www.archiviodistato.siena.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Banchi di Sotto, 52",
          "zip-code": "53100",
          "comune": "Siena",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 108,
      "level": 2,
      "name": "Archivio di Stato di Siracusa",
      "website": "www.assiracusa.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Turchia, 24",
          "zip-code": "96100",
          "comune": "Siracusa",
          "provincia": "Siracusa",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6794,
      "level": 3,
      "name": "Archivio di Stato di Siracusa",
      "website": "http://www.assiracusa.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Turchia, 4",
          "zip-code": "96100",
          "comune": "Siracusa",
          "provincia": "Siracusa",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6795,
      "level": 3,
      "name": "Archivio di Stato di Siracusa. Sezione di Noto",
      "website": "http://archiviodistatosiracusa.beniculturali.it/index.php?it/100/sezione-di-archivio-di-stato-di-noto",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Simone Impellizzeri, 2",
          "zip-code": "96017",
          "comune": "Noto",
          "provincia": "Siracusa",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 110,
      "level": 2,
      "name": "Archivio di Stato di Taranto",
      "website": "www.astaranto.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Palma, 4",
          "zip-code": "74100",
          "comune": "Taranto",
          "provincia": "Taranto",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6825,
      "level": 3,
      "name": "Archivio di Stato di Taranto",
      "website": "http://www.astaranto.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Federico di Palma, 4",
          "zip-code": "74100",
          "comune": "Taranto",
          "provincia": "Taranto",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 111,
      "level": 2,
      "name": "Archivio di Stato di Teramo",
      "website": "www.archiviodistatoteramo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cesare Battisti",
          "zip-code": "64100",
          "comune": "Teramo",
          "provincia": "Teramo",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 946,
      "level": 3,
      "name": "Archivio di Stato di Teramo",
      "website": "http://www.archiviodistatoteramo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cesare Battisti, 55",
          "zip-code": "64100",
          "comune": "Teramo",
          "provincia": "Teramo",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 284,
      "level": 2,
      "name": "Archivio di Stato di Terni",
      "website": "www.asterni.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cavour, 28",
          "zip-code": "05100",
          "comune": "Terni",
          "provincia": "Terni",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6668,
      "level": 3,
      "name": "Archivio di Stato di Terni",
      "website": "http://archiviodistatoterni.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cavour, 28",
          "zip-code": "05100",
          "comune": "Terni",
          "provincia": "Terni",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 112,
      "level": 2,
      "name": "Archivio di Stato di Torino",
      "website": "archiviodistatotorino.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Castello, 209",
          "zip-code": "10124",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5282,
      "level": 3,
      "name": "Archivio di Stato di Torino",
      "website": "http://www.archiviodistatotorino.it",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Castello, 209",
          "zip-code": "10124",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 112,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 113,
      "level": 2,
      "name": "Archivio di Stato di Trapani",
      "website": "www.astrapani.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta S. Anna, 22",
          "zip-code": "91100",
          "comune": "Trapani",
          "provincia": "Trapani",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6784,
      "level": 3,
      "name": "Archivio di Stato di Trapani",
      "website": "http://www.astrapani.beniculturali.it/index",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "S. Anna",
          "zip-code": "91100",
          "comune": "Trapani",
          "provincia": "Trapani",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 114,
      "level": 2,
      "name": "Archivio di Stato di Trento",
      "website": "www.archiviodistatotrento.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Maestri del Lavoro, 4",
          "zip-code": "38100",
          "comune": "Trento",
          "provincia": "Trento",
          "regione": "Trentino-Alto Adige"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6839,
      "level": 3,
      "name": "Archivio di Stato di Trento",
      "website": "http://www.archiviodistatotrento.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Maestri del Lavoro, 4",
          "zip-code": "38121",
          "comune": "Trento",
          "provincia": "Trento",
          "regione": "Trentino-Alto Adige"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 115,
      "level": 2,
      "name": "Archivio di Stato di Treviso",
      "website": "www.archiviodistatotreviso.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pietro di Dante,11",
          "zip-code": "31100",
          "comune": "Treviso",
          "provincia": "Treviso",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6827,
      "level": 3,
      "name": "Archivio di Stato di Treviso",
      "website": "http://www.archiviodistatotreviso.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pietro di Dante, 9",
          "zip-code": "31100",
          "comune": "Treviso",
          "provincia": "Treviso",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 116,
      "level": 2,
      "name": "Archivio Di Stato Di Trieste",
      "website": "www.archiviodistatotrieste.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via La Marmora",
          "zip-code": "34139",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6654,
      "level": 3,
      "name": "Archivio di Stato di Trieste",
      "website": "http://www.archiviodistatotrieste.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Alessandro Lamormara, 17",
          "zip-code": "34139",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 117,
      "level": 2,
      "name": "Archivio di Stato di Udine",
      "website": "www.archiviodistatoudine.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via F. Urbanis, 1",
          "zip-code": "33100",
          "comune": "Udine",
          "provincia": "Udine",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6765,
      "level": 3,
      "name": "Archivio di Stato di Udine",
      "website": "http://www.archiviodistatoudine.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Francesco Urbanis, 1",
          "zip-code": "33100",
          "comune": "Udine",
          "provincia": "Udine",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 118,
      "level": 2,
      "name": "Archivio di Stato di Varese",
      "website": "www.archiviodistatovarese.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Col di Lana, 5",
          "zip-code": "21100",
          "comune": "Varese",
          "provincia": "Varese",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6853,
      "level": 3,
      "name": "Archivio di Stato di Varese",
      "website": "http://www.archiviodistatovarese.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Col di Lana, 5",
          "zip-code": "21100",
          "comune": "Varese",
          "provincia": "Varese",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 119,
      "level": 2,
      "name": "Archivio di Stato di Venezia",
      "website": "www.archiviodistatovenezia.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "San Polo",
          "zip-code": "30125",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6854,
      "level": 3,
      "name": "Archivio di Stato di Venezia",
      "website": "http://www.archiviodistatovenezia.it",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "San Polo",
          "zip-code": "30125",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 119,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 120,
      "level": 2,
      "name": "Archivio di Stato di Verbania",
      "website": "www.asverbania.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cadorna, 37",
          "zip-code": "28922",
          "comune": "Verbania",
          "provincia": "Verbano-Cusio-Ossola",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6994,
      "level": 3,
      "name": "Archivio di Stato di Verbania",
      "website": "http://www.asverbania.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Luigi Cadorna, 37",
          "zip-code": "28922",
          "comune": "Verbania",
          "provincia": "Verbano-Cusio-Ossola",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6934,
      "level": 3,
      "name": "Archivio di Stato di Verbania, Auditorium",
      "website": "http://asverbania.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Luigi Cadorna, 37",
          "zip-code": "28801",
          "comune": "Verbania",
          "provincia": "Verbano-Cusio-Ossola",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 121,
      "level": 2,
      "name": "Archivio di Stato di Vercelli",
      "website": "www.asvercelli.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via A. Manzoni, 11",
          "zip-code": "13100",
          "comune": "Vercelli",
          "provincia": "Vercelli",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6305,
      "level": 3,
      "name": "Archivio di Stato di Vercelli",
      "website": "http://www.asvercelli.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Alessandro Manzoni, 15",
          "zip-code": "13100",
          "comune": "Vercelli",
          "provincia": "Vercelli",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6306,
      "level": 3,
      "name": "Archivio di Stato di Vercelli. Sezione di Varallo",
      "website": "http://asvercelli.beniculturali.it/index.php?it/187/sezione-di-varallo",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Mario Tancredi Rossi, 9",
          "zip-code": "13109",
          "comune": "Varallo",
          "provincia": "Vercelli",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 122,
      "level": 2,
      "name": "Archivio di Stato di Verona",
      "website": "www.archiviodistatoverona.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Santa Teresa",
          "zip-code": "37135",
          "comune": "Verona",
          "provincia": "Verona",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 879,
      "level": 3,
      "name": "Archivio di Stato di Verona",
      "website": "http://www.archiviodistatoverona.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Santa Teresa, 12",
          "zip-code": "37122",
          "comune": "Verona",
          "provincia": "Verona",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 123,
      "level": 2,
      "name": "Archivio di Stato di Vibo Valentia",
      "website": "www.asvibo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Jan Palach, 46",
          "zip-code": "89900",
          "comune": "Vibo Valentia",
          "provincia": "Vibo Valentia",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6855,
      "level": 3,
      "name": "Archivio di Stato di Vibo Valentia",
      "website": "http://www.asvibo.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via J. Palach, 46",
          "zip-code": "89900",
          "comune": "Vibo Valentia",
          "provincia": "Vibo Valentia",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 124,
      "level": 2,
      "name": "Archivio di Stato di Vicenza",
      "website": "www.archiviodistatovicenza.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Borgo Casale",
          "zip-code": "36100",
          "comune": "Vicenza",
          "provincia": "Vicenza",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6856,
      "level": 3,
      "name": "Archivio di Stato di Vicenza",
      "website": "http://www.archiviodistatovicenza.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Borgo Casale, 91",
          "zip-code": "36100",
          "comune": "Vicenza",
          "provincia": "Vicenza",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 464,
      "level": 3,
      "name": "Archivio di Stato di Vicenza, Sezione di Bassano del Grappa",
      "website": "http://www.archiviodistatovicenza.beniculturali.it/index.php?it/171/archivio-di-stato-sezione-di-bassano",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Beata Giovanna, 58",
          "zip-code": "36061",
          "comune": "Bassano del Grappa",
          "provincia": "Vicenza",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 125,
      "level": 2,
      "name": "Archivio di Stato di Viterbo",
      "website": "www.archiviodistatoviterbo.beniculturali.it/",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Vincenzo Cardarelli, 18",
          "zip-code": "01100",
          "comune": "Viterbo",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6857,
      "level": 3,
      "name": "Archivio di Stato di Viterbo",
      "website": "http://www.archiviodistatoviterbo.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Vincenzo Cardarelli, 18",
          "zip-code": "01100",
          "comune": "Viterbo",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 274,
      "level": 2,
      "name": "Soprintendenza Speciale Archeologia, Belle Arti e Paesaggio di Roma",
      "website": "www.soprintendenzaspecialeroma.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza dei Cinquecento, 67",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 878,
      "level": 3,
      "name": "Arco di Malborghetto",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/arco-di-malborghetto_2972/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Barlassina, 1",
          "zip-code": "00188",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 288,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per l'area Metropolitana di Napoli",
      "website": "http://www.sabap.metropolitanana.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Plebiscito, 1 (Palazzo Reale)",
          "zip-code": "80132",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6114,
      "level": 3,
      "name": "Arco di Traiano",
      "website": "https://www.beniculturali.it/luogo/arco-di-traiano",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Pomerio; Via Port'Aurea",
          "zip-code": "82100",
          "comune": "Benevento",
          "provincia": "Benevento",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 473,
      "level": 3,
      "name": "Area Archeologica \"S. Pietro degli Schiavoni\"",
      "website": "http://musei.beniculturali.it/en/museums?mid=878&nome=area-archeologica-s-pietro-degli-schiavoni",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Casimiro",
          "zip-code": "72100",
          "comune": "Brindisi",
          "provincia": "Brindisi",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 223,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la citt\u00e0 dell'Aquila e Teramo",
      "website": "http://su-aq.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Basilio (Ex Monastero Agostiniano di S.Amico)",
          "zip-code": "67100",
          "comune": "L'Aquila",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 844,
      "level": 3,
      "name": "Area Archeologica Amiternum",
      "website": "http://musei.beniculturali.it/musei?mid=321&nome=area-archeologica-amiternum",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Frazione S. Vittorino",
          "zip-code": "67010",
          "comune": "L'Aquila",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 223,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 860,
      "level": 3,
      "name": "Area Archeologica Antica Citt\u00e0 di Ferento",
      "website": "http://musei.beniculturali.it/musei?mid=402&nome=area-archeologica-antica-citta-di-ferento",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "S.P. Teverina Km. 8.000",
          "zip-code": "01100",
          "comune": "Viterbo",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 312,
      "level": 2,
      "name": "Direzione Regionale Musei Toscana",
      "website": "polomusealetoscana.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de\u2019 Mozzi, 2",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 814,
      "level": 3,
      "name": "Area Archeologica del Sodo e Tomba di Camucia",
      "website": "https://cortonamaec.org/it/il-parco-archeologico/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Sodo di Cortona",
          "zip-code": "52044",
          "comune": "Cortona",
          "provincia": "Arezzo",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 869,
      "level": 3,
      "name": "Area Archeologica del Teatro Ellenistico-Romano di Nocera Superiore",
      "website": "https://www.beniculturali.it/luogo/area-archeologica-del-teatro-ellenistico-romano-di-nocera-superiore",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Loc. Pareti",
          "zip-code": "",
          "comune": "Nocera Superiore",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 867,
      "level": 3,
      "name": "Area Archeologica del Tempio Italico di Casalbore",
      "website": "http://musei.beniculturali.it/musei?mid=815&nome=area-archeologica-del-tempio-italico-di-casalbore",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Macchia Porcara",
          "zip-code": "83034",
          "comune": "Casalbore",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 214,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la citt\u00e0 metropolitana di Milano",
      "website": "www.sabap.milano.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Magenta (Palazzo Litta)",
          "zip-code": "20123",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5178,
      "level": 3,
      "name": "Area archeologica della Basilica romana di Brescia",
      "website": "https://www.beniculturali.it/luogo/area-archeologica-della-basilica-romana-di-brescia",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Giovanni Labus, 3",
          "zip-code": "25100",
          "comune": "Brescia",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 214,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 850,
      "level": 3,
      "name": "Area Archeologica della Citt\u00e0 Romana di Industria",
      "website": "http://archeo.piemonte.beniculturali.it/index.php/it/musei/aree-archeologiche/70-aree-arch-prov-di-torino/278-area-archeologica-della-citta-romana-di-industria",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Industria",
          "zip-code": "10020",
          "comune": "Monteu da Po",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 205,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 855,
      "level": 3,
      "name": "Area archeologica della necropoli monumentale di Avella",
      "website": "http://musei.beniculturali.it/musei?mid=336&nome=area-archeologica-della-necropoli-monumentale-di-avella",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Tombe romane",
          "zip-code": "83021",
          "comune": "Avella",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6119,
      "level": 3,
      "name": "Area archeologica della necropoli monumentale di et\u00e0 romana di Nocera Superiore",
      "website": "http://www.ambientesa.beniculturali.it",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "loc. Pizzone",
          "zip-code": "",
          "comune": "Nocera Superiore",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 203,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le Province di Frosinone e Latina",
      "website": "http://www.sabap_lazio.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Angelo Celli,1",
          "zip-code": "04100",
          "comune": "Latina",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7009,
      "level": 3,
      "name": "Area archeologica della Villa Giulia",
      "website": "http://musei.beniculturali.it/musei?mid=8757&nome=area-archeologica-della-villa-giulia",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Olivi",
          "zip-code": "04020",
          "comune": "Ventotene",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 203,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 871,
      "level": 3,
      "name": "Area Archeologica dell'Anfiteatro Romano di Avella",
      "website": "http://musei.beniculturali.it/musei?mid=718&nome=area-archeologica-dellanfiteatro-romano-di-avella",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell'Anfiteatro",
          "zip-code": "83021",
          "comune": "Avella",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 875,
      "level": 3,
      "name": "Area Archeologica dell'Antica Abellinum",
      "website": "http://musei.beniculturali.it/musei?mid=717&nome=area-archeologica-dellantica-abellinum",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Manfredi",
          "zip-code": "83024",
          "comune": "Atripalda",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6125,
      "level": 3,
      "name": "Area archeologica di Aequum Tuticum",
      "website": "http://musei.beniculturali.it/musei?mid=4382&nome=area-archeologica-di-aequum-tuticum",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale 90bis",
          "zip-code": "83031",
          "comune": "Ariano Irpino",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 253,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio dell'Abruzzo per le province di Chieti e Pescara",
      "website": "http://www.sabap-abruzzo.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via degli Agostiniani, 14",
          "zip-code": "66100",
          "comune": "Chieti",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6914,
      "level": 3,
      "name": "Area Archeologica di Alba Fucens",
      "website": "https://www.sabap-abruzzo.beniculturali.it/alba-fucens-massa-d-albe/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Alba Fucens",
          "zip-code": "67050",
          "comune": "Massa d'Albe",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 253,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 851,
      "level": 3,
      "name": "Area archeologica di Augusta Bagiennorum",
      "website": "http://archeo.piemonte.beniculturali.it/index.php/it/musei/aree-archeologiche/68-aree-arch-prov-di-cuneo/267-area-archeologica-di-augusta-bagiennorum",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Roncaglia",
          "zip-code": "12041",
          "comune": "Bene Vagienna",
          "provincia": "Cuneo",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 205,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 841,
      "level": 3,
      "name": "Area Archeologica di Cales",
      "website": "http://musei.beniculturali.it/musei?mid=338&nome=area-archeologica-di-cales",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Calvi Vecchia",
          "zip-code": "80142",
          "comune": "Calvi Risorta",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 840,
      "level": 3,
      "name": "Area Archeologica di Carminiello ai Mannesi",
      "website": "http://musei.beniculturali.it/musei?mid=831&nome=area-archeologica-di-carminiello-ai-mannesi",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Vico I Carminiello ai Mannesi",
          "zip-code": "80138",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 304,
      "level": 2,
      "name": "Direzione Regionale Musei Umbria",
      "website": "http://polomusealeumbria.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Vannucci",
          "zip-code": "06121",
          "comune": "Perugia",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 839,
      "level": 3,
      "name": "Area archeologica di Carsulae",
      "website": "https://www.beniculturali.it/luogo/area-archeologica-di-carsulae",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada di Carsoli, 8",
          "zip-code": "05100",
          "comune": "Terni",
          "provincia": "Terni",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 304,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6103,
      "level": 3,
      "name": "Area archeologica di Conza",
      "website": "http://musei.beniculturali.it/musei?mid=337&nome=area-archeologica-di-conza",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Conza in Campania",
          "zip-code": "83040",
          "comune": "Conza della Campania",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 868,
      "level": 3,
      "name": "Area Archeologica di Eboli",
      "website": "http://musei.beniculturali.it/musei?mid=4259&nome=area-archeologica-di-eboli",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Paterno",
          "zip-code": "84063",
          "comune": "Eboli",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 206,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per l'area Metropolitana di Venezia e le province di Belluno, Padova e Treviso",
      "website": "http://soprintendenza.pdve.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Aquileia, 7 (Palazzo Folco)",
          "zip-code": "35139",
          "comune": "Padova",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 719,
      "level": 3,
      "name": "Area Archeologica di Feltre",
      "website": "https://soprintendenza.pdve.beniculturali.it/soprintendenza/sede-di-padova/aree-archeologiche/feltre-area-archeologica-sottostante-la-piazza-della-cattedrale/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Duomo",
          "zip-code": "32032",
          "comune": "Feltre",
          "provincia": "Belluno",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 206,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 836,
      "level": 3,
      "name": "Area Archeologica di Gabii",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/area-archeologica-di-gabii_3005/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Prenestina km 19,300",
          "zip-code": "00132",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 906,
      "level": 3,
      "name": "Area Archeologica di Libarna",
      "website": "http://www.libarna.al.it/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Arquata, 63",
          "zip-code": "15069",
          "comune": "Serravalle Scrivia",
          "provincia": "Alessandria",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 205,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 308,
      "level": 2,
      "name": "Direzione Regionale Musei Liguria",
      "website": "musei.liguria.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Balbi",
          "zip-code": "16100",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 845,
      "level": 3,
      "name": "Area Archeologica di Nervia",
      "website": "www.nervia.beniculturali.it",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Genova, 134",
          "zip-code": "18039",
          "comune": "Ventimiglia",
          "provincia": "Imperia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5158,
      "level": 3,
      "name": "Area archeologica di Nora",
      "website": "https://musei.sardegna.beniculturali.it/musei/area-archeologica-di-nora/  https://www.beniculturali.it/luogo/area-archeologica-di-nora",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Nora",
          "zip-code": "09010",
          "comune": "Pula",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 834,
      "level": 3,
      "name": "Area Archeologica di Roselle",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.phpit/280/grosseto-area-archeologica-di-roselle",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Ruderi, 46",
          "zip-code": "58040",
          "comune": "Grosseto",
          "provincia": "Grosseto",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 357,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la citt\u00e0 metropolitana di Bologna e le province di Modena, Reggio Emilia e Ferrara",
      "website": "http://www.sbapbo.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via IV Novembre, 5",
          "zip-code": "40125",
          "comune": "Bologna",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 833,
      "level": 3,
      "name": "Area Archeologica di S. Maria in Padovetere",
      "website": "http://www.archeobologna.beniculturali.it/Ferrara/area.htm",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Fiume",
          "zip-code": "44022",
          "comune": "Comacchio",
          "provincia": "Ferrara",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 357,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 262,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la citt\u00e0 metropolitana di Genova e la provincia di La Spezia",
      "website": "http://www.soprintendenza.liguria.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Balbi, 10 (Palazzo Reale)",
          "zip-code": "16126",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 832,
      "level": 3,
      "name": "Area Archeologica di San Paragorio",
      "website": "https://www.beniculturali.it/luogo/area-archeologica-di-san-paragorio",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Collegio",
          "zip-code": "17026",
          "comune": "Noli",
          "provincia": "Savona",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 262,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 248,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Caserta e Benevento",
      "website": "http://www.sopri-caserta.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Douhet (Reggia)",
          "zip-code": "81100",
          "comune": "Caserta",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6133,
      "level": 3,
      "name": "Area archeologica di Sinuessa",
      "website": "https://www.beniculturali.it/luogo/area-archeologica-di-sinuessa",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Padule",
          "zip-code": "81034",
          "comune": "Mondragone",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 248,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6813,
      "level": 3,
      "name": "Area archeologica di Sutri",
      "website": "http://www.sabap-rm-met.beniculturali.it/it/288/sutri",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cassia km 50,00",
          "zip-code": "01015",
          "comune": "Sutri",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5122,
      "level": 3,
      "name": "Area archeologica di Tharros",
      "website": "https://www.tharros.sardegna.it/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Tharros",
          "zip-code": "09072",
          "comune": "San Giovanni di Sinis, Cabras",
          "provincia": "Oristano",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 381,
      "level": 2,
      "name": "Direzione Musei Statali della Citt\u00e0 di Roma",
      "website": "https://www.direzionemuseistataliroma.beniculturali.it/",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Lungotevere Castello, 50",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 827,
      "level": 3,
      "name": "Area Archeologica di Veio - Santuario etrusco dell'Apollo",
      "website": "https://www.beniculturali.it/luogo/area-archeologica-di-veio-santuario-etrusco-dell-apollo",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Riserva Campetti",
          "zip-code": "00123",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 381,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 908,
      "level": 3,
      "name": "Area Archeologica di Veleia Romana",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/area-archeologica-di-veleia-romana",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale 14",
          "zip-code": "29020",
          "comune": "Lugagnano Val d'Arda",
          "provincia": "Piacenza",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 330,
      "level": 2,
      "name": "Parco Archeologico di Paestum e Velia",
      "website": "www.paestum.museum",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Magna Grecia, 919",
          "zip-code": "84047",
          "comune": "Capaccio Paestum",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 826,
      "level": 3,
      "name": "Area Archeologica di Velia",
      "website": "https://www.museopaestum.beniculturali.it/area-archeologica-di-velia/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale Amedeo Maiuri",
          "zip-code": "84046",
          "comune": "Ascea",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 330,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 876,
      "level": 3,
      "name": "Area Archeologica di Vetulonia",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/282/grosseto-area-archeologica-di-vetulonia",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Case di Siena, s.n.c.",
          "zip-code": "58043",
          "comune": "Castiglione della Pescaia",
          "provincia": "Grosseto",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6812,
      "level": 3,
      "name": "Area Archeologica di Volsini",
      "website": "http://www.sabap-rm-met.beniculturali.it/it/281/area-archeologica-di-volsinii",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Orvietana, s.n.c.",
          "zip-code": "01023",
          "comune": "Bolsena",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5334,
      "level": 3,
      "name": "Area Archeologica Monsorino di Golasecca",
      "website": "http://www.archeologica.lombardia.beniculturali.it; https://www.beniculturali.it/luogo/area-archeologica-monsorino-di-golasecca",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Monsorino",
          "zip-code": "21010",
          "comune": "Golasecca",
          "provincia": "Varese",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 214,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5112,
      "level": 3,
      "name": "Area Archeologica Su Nuraxi \"Centro G. Lilliu\"",
      "website": "https://musei.sardegna.beniculturali.it/musei/complesso-nuragico-su-nuraxi-di-barumini/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Su Nuraxi",
          "zip-code": "09021",
          "comune": "Barumini",
          "provincia": "Medio Campidano",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 829,
      "level": 3,
      "name": "Area Archeologica Villa Romana di Torre",
      "website": "http://musei.beniculturali.it/musei?mid=3896&nome=area-archeologica-villa-romana-di-torre",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Vittorio Veneto",
          "zip-code": "33170",
          "comune": "Pordenone",
          "provincia": "Pordenone",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6674,
      "level": 3,
      "name": "Aree Archeologiche di Susa",
      "website": "http://archeo.piemonte.beniculturali.it/index.php/it/musei/aree-archeologiche/70-aree-arch-prov-di-torino/345-aree-archeologiche-di-susa",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via degli Archi e della Consolata",
          "zip-code": "",
          "comune": "Susa",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 205,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 332,
      "level": 2,
      "name": "Musei Reali",
      "website": "http://www.museireali.beniculturali.it/",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Reale",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 808,
      "level": 3,
      "name": "Armeria Reale",
      "website": "https://www.museireali.beniculturali.it/armeria-reale/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Reale, 1",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 332,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 367,
      "level": 2,
      "name": "Parco Archeologico del Colosseo",
      "website": "www.colosseo.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza S. Maria Nova",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6882,
      "level": 3,
      "name": "Auditoria di Adriano",
      "website": "http://musei.beniculturali.it/musei?mid=5314&nome=auditoria-di-adriano",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza di Santa Maria Nova, 53",
          "zip-code": "00100",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 804,
      "level": 3,
      "name": "Basilica di San Cesareo de Appia",
      "website": "http://musei.beniculturali.it/musei?mid=856&nome=basilica-di-san-cesareo-de-appia",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Porta S. Sebastiano",
          "zip-code": "00179",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 381,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 802,
      "level": 3,
      "name": "Basilica di San Francesco",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/176/arezzo-basilica-di-san-francesco",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Francesco, 1",
          "zip-code": "52100",
          "comune": "Arezzo",
          "provincia": "Arezzo",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 297,
      "level": 2,
      "name": "Direzione Regionale Musei Lazio",
      "website": "www.polomusealelazio.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Marco, 49",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 803,
      "level": 3,
      "name": "Basilica di San Francesco alla Rocca",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/256/basilica-di-san-francesco",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Francesco, 4",
          "zip-code": "01100",
          "comune": "Viterbo",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 801,
      "level": 3,
      "name": "Basilica di Sant'Apollinare in Classe",
      "website": "http://www.polomusealeemiliaromagna.beniculturali.it/musei/sant-apollinare-in-classe",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Romea Sud, 224",
          "zip-code": "48124",
          "comune": "Ravenna",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 800,
      "level": 3,
      "name": "Basilica Paleocristiana di Via Madonna del Mare",
      "website": "http://musei.beniculturali.it/musei?mid=748&nome=basilica-paleocristiana-di-via-madonna-del-mare",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Madonna del Mare, 11",
          "zip-code": "34124",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5114,
      "level": 3,
      "name": "Basilica Paleocristiana ed altomedievale",
      "website": "https://www.beniculturali.it/luogo/basilica-paleocristiana-ed-altomedievale",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "",
          "zip-code": "33029",
          "comune": "Villa Santina",
          "provincia": "Udine",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 797,
      "level": 3,
      "name": "Basilica Sotterranea di Porta Maggiore",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/basilica-sotterranea-di-porta-maggiore_2971/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale Labicano, 2",
          "zip-code": "00182",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 795,
      "level": 3,
      "name": "Battistero degli Ariani",
      "website": "http://www.polomusealeemiliaromagna.beniculturali.it/musei/battistero-degli-ariani",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta degli Ariani",
          "zip-code": "48121",
          "comune": "Ravenna",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 154,
      "level": 1,
      "name": "Direzione Generale Biblioteche e Diritto d'Autore",
      "website": "www.librari.beniculturali.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Michele Mercati, 4",
          "zip-code": "00197",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 5,
      "level": 2,
      "name": "Biblioteca Angelica di Roma",
      "website": "www.bibliotecaangelica.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza S. Agostino, 8",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 794,
      "level": 3,
      "name": "Biblioteca Angelica",
      "website": "http://www.bibliotecaangelica.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza S. Agostino, 8",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6,
      "level": 2,
      "name": "Biblioteca Casanatense di Roma",
      "website": "www.casanatense.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via S. Ignazio, 52",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 793,
      "level": 3,
      "name": "Biblioteca Casanatense",
      "website": "https://casanatense.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via S. Ignazio, 52",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 6743,
      "level": 3,
      "name": "Biblioteca di Archeologia e Storia dell\u2019Arte",
      "website": "http://www.archeologica.librari.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Venezia, 3",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 14,
      "level": 2,
      "name": "Biblioteca di Storia Moderna e Contemporanea di Roma",
      "website": "http://www.bsmc.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Michelangelo Caetani, 32",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6400,
      "level": 3,
      "name": "Biblioteca di Storia Moderna e Contemporanea",
      "website": "http://www.bsmc.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Michelangelo Caetani, 32",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 317,
      "level": 2,
      "name": "Gallerie Estensi",
      "website": "www.gallerie-estensi.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Porta Sant'Agostino",
          "zip-code": "41121",
          "comune": "Modena",
          "provincia": "Modena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6475,
      "level": 3,
      "name": "Biblioteca Estense Universitaria",
      "website": "http://bibliotecaestense.beniculturali.it; www.gallerie-estensi.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Porta Sant'Agostino, 337",
          "zip-code": "41121",
          "comune": "Modena",
          "provincia": "Modena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 317,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 16,
      "level": 2,
      "name": "Biblioteca Marucelliana di Firenze",
      "website": "www.maru.firenze.sbn.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cavour, 43",
          "zip-code": "50129",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5963,
      "level": 3,
      "name": "Biblioteca Marucelliana",
      "website": "http://www.maru.firenze.sbn.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cavour, 43",
          "zip-code": "50129",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 17,
      "level": 2,
      "name": "Biblioteca Medica Statale di Roma",
      "website": "www.bibliotecamedicastatale.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Castro Pretorio",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6749,
      "level": 3,
      "name": "Biblioteca Medica Statale di Roma",
      "website": "http://www.bibliotecamedicastatale.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Castro Pretorio, 105",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 18,
      "level": 2,
      "name": "Biblioteca Medicea Laurenziana di Firenze",
      "website": "www.bmlonline.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Lorenzo 9",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6195,
      "level": 3,
      "name": "Biblioteca Medicea Laurenziana",
      "website": "http://www.bmlonline.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Lorenzo, 9",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 128,
      "level": 2,
      "name": "Biblioteca Nazionale di Bari",
      "website": "www.bibliotecanazionalebari.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pietro Oreste",
          "zip-code": "70123",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6723,
      "level": 3,
      "name": "Biblioteca Nazionale \"Sagarriga Visconti Volpi\"",
      "website": "http://www.bibliotecanazionalebari.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pietro Oreste, 45",
          "zip-code": "70123",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 130,
      "level": 2,
      "name": "Biblioteca Nazionale Centrale di Firenze",
      "website": "www.bncf.firenze.sbn.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Cavalleggeri, 1",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6750,
      "level": 3,
      "name": "Biblioteca Nazionale Centrale di Firenze",
      "website": "http://www.bncf.firenze.sbn.it/index.php",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza dei CavalleggerI, 1",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 130,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 131,
      "level": 2,
      "name": "Biblioteca Nazionale Centrale di Roma",
      "website": "www.bncrm.librari.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Castro Pretorio, 105",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6742,
      "level": 3,
      "name": "Biblioteca Nazionale Centrale di Roma",
      "website": "http://www.bncrm.librari.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Castro Pretorio, 105",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 131,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 126,
      "level": 2,
      "name": "Biblioteca Nazionale di Cosenza",
      "website": "www.bncs.librari.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza A. Parrasio",
          "zip-code": "87100",
          "comune": "Cosenza",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6751,
      "level": 3,
      "name": "Biblioteca Nazionale di Cosenza",
      "website": "http://www.bncs.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Antonio Toscano",
          "zip-code": "87100",
          "comune": "Cosenza",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 127,
      "level": 2,
      "name": "Biblioteca Nazionale di Napoli - Vittorio Emanuele III",
      "website": "www.bnnonline.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Plebiscito",
          "zip-code": "80132",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6747,
      "level": 3,
      "name": "Biblioteca Nazionale di Napoli \"Vittorio Emanuele III\"",
      "website": "http://www.bnnonline.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Plebiscito, 1",
          "zip-code": "80132",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 127,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 133,
      "level": 2,
      "name": "Biblioteca Nazionale Marciana di Venezia",
      "website": "marciana.venezia.sbn.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Marco, 7",
          "zip-code": "30124",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6521,
      "level": 3,
      "name": "Biblioteca Nazionale Marciana",
      "website": "http://marciana.venezia.sbn.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta San Marco, 7",
          "zip-code": "30124",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 133,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5181,
      "level": 3,
      "name": "Biblioteca Reale di Torino",
      "website": "https://www.museireali.beniculturali.it/biblioteca-reale/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Reale, 1",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 332,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 21,
      "level": 2,
      "name": "Biblioteca Riccardiana di Firenze",
      "website": "www.riccardiana.firenze.sbn.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via d\u00e8 Ginori",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6727,
      "level": 3,
      "name": "Biblioteca Riccardiana",
      "website": "http://www.riccardiana.firenze.sbn.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ginori, 10",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 137,
      "level": 2,
      "name": "Biblioteca Statale Antonio Baldini",
      "website": "www.bibliotecabaldini.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Villa Sacchetti, 5",
          "zip-code": "00197",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6744,
      "level": 3,
      "name": "Biblioteca Statale Antonio Baldini",
      "website": "http://www.bibliotecabaldini.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Villa SacchettI, 5",
          "zip-code": "00197",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 2,
      "level": 2,
      "name": "Biblioteca Statale del Monumento Nazionale della Badia di Cava",
      "website": "www.bibliotecabadiadicava.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Morcaldi, 6",
          "zip-code": "84010",
          "comune": "Cava de' Tirreni",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6752,
      "level": 3,
      "name": "Biblioteca Statale del Monumento Nazionale della Badia di Cava",
      "website": "http://www.bibliotecabadiadicava.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Michele Morcaldi, 6",
          "zip-code": "84013",
          "comune": "Cava de' Tirreni",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 7,
      "level": 2,
      "name": "Biblioteca Statale del Monumento Nazionale di Casamari",
      "website": "www.abbaziadicasamari.it/index.php/biblioteca",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Maria, 25",
          "zip-code": "03029",
          "comune": "Veroli",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6637,
      "level": 3,
      "name": "Biblioteca Statale del Monumento Nazionale di Casamari",
      "website": "https://abbaziadicasamari.it/index.php/biblioteca",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Maria, 25",
          "zip-code": "03029",
          "comune": "Veroli",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 10,
      "level": 2,
      "name": "Biblioteca Statale del Monumento Nazionale di Montecassino",
      "website": "www.bibliotecamontecassino.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Montecassino",
          "zip-code": "03043",
          "comune": "Cassino",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6753,
      "level": 3,
      "name": "Biblioteca Statale del Monumento Nazionale di Montecassino",
      "website": "http://www.bibliotecamontecassino.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Montecassino, 1",
          "zip-code": "03043",
          "comune": "Cassino",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 3,
      "level": 2,
      "name": "Biblioteca Statale del Monumento Nazionale di Montevergine",
      "website": "bibliotecastataledimontevergine.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Domenico Antonio Vaccaro, 1",
          "zip-code": "83013",
          "comune": "Mercogliano",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 391,
      "level": 3,
      "name": "Biblioteca Statale del Monumento Nazionale di Montevergine",
      "website": "http://www.bibliotecastataledimontevergine.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Domenico Antonio Vaccaro, 1",
          "zip-code": "83013",
          "comune": "Mercogliano",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 280,
      "level": 2,
      "name": "Biblioteca Statale del Monumento Nazionale di Praglia",
      "website": "www.praglia.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Abbazia di Praglia, 16",
          "zip-code": "35037",
          "comune": "Teolo",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6755,
      "level": 3,
      "name": "Biblioteca Statale del Monumento Nazionale di Praglia",
      "website": "https://www.movio.beniculturali.it/dgbic/bibvio/it/52/praglia",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Abbazia di Praglia, 16",
          "zip-code": "35037",
          "comune": "Teolo",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 11,
      "level": 2,
      "name": "Biblioteca Statale del Monumento Nazionale di Santa Giustina",
      "website": "www.bibliotecasantagiustina.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via G. Ferrari, 2/A",
          "zip-code": "35123",
          "comune": "Padova",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6754,
      "level": 3,
      "name": "Biblioteca Statale del Monumento Nazionale di Santa Giustina",
      "website": "https://bibliotecasantagiustina.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giuseppe Ferrari, 2/a",
          "zip-code": "",
          "comune": "Padova",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 287,
      "level": 2,
      "name": "Biblioteca Statale del Monumento Nazionale di Santa Scolastica",
      "website": "www.scolastica.librari.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Monasteri",
          "zip-code": "00028",
          "comune": "Subiaco",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6756,
      "level": 3,
      "name": "Biblioteca Statale del Monumento Nazionale di Santa Scolastica",
      "website": "http://www.scolastica.librari.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Monasteri, 22",
          "zip-code": "00028",
          "comune": "Subiaco",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 12,
      "level": 2,
      "name": "Biblioteca Statale del Monumento Nazionale di Trisulti",
      "website": "www.librari.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Trisulti, 8",
          "zip-code": "03010",
          "comune": "Collepardo",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6757,
      "level": 3,
      "name": "Biblioteca Statale del Monumento Nazionale di Trisulti",
      "website": "",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Trisulti",
          "zip-code": "03010",
          "comune": "Collepardo",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 134,
      "level": 2,
      "name": "Biblioteca Statale di Cremona",
      "website": "www.bibliocremona.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ugolani Dati, 4",
          "zip-code": "26100",
          "comune": "Cremona",
          "provincia": "Cremona",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6461,
      "level": 3,
      "name": "Biblioteca Statale di Cremona",
      "website": "http://www.bibliocremona.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ugolani Dati, 4",
          "zip-code": "26100",
          "comune": "Cremona",
          "provincia": "Cremona",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 135,
      "level": 2,
      "name": "Biblioteca Statale di Lucca",
      "website": "www.bibliotecastatalelucca-bslu.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via S. Maria Corteorlandini",
          "zip-code": "55100",
          "comune": "Lucca",
          "provincia": "Lucca",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6738,
      "level": 3,
      "name": "Biblioteca Statale di Lucca",
      "website": "http://www.bibliotecastatalelucca-bslu.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Santa Maria Corteorlandini, 12",
          "zip-code": "55100",
          "comune": "Lucca",
          "provincia": "Lucca",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 138,
      "level": 2,
      "name": "Biblioteca Statale di Macerata",
      "website": "www.bibliotecastatalemacerata.sinp.net",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Garibaldi, 20",
          "zip-code": "62100",
          "comune": "Macerata",
          "provincia": "Macerata",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6741,
      "level": 3,
      "name": "Biblioteca Statale di Macerata",
      "website": "http://www.bibliotecastatalemacerata.sinp.net",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Garibaldi, 20",
          "zip-code": "62100",
          "comune": "Macerata",
          "provincia": "Macerata",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 139,
      "level": 2,
      "name": "Biblioteca Statale Isontina di Gorizia",
      "website": "www.isontina.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Goffredo Mameli, 12",
          "zip-code": "34170",
          "comune": "Gorizia",
          "provincia": "Gorizia",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5921,
      "level": 3,
      "name": "Biblioteca Statale Isontina di Gorizia",
      "website": "http://www.isontina.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Goffredo Mameli, 12",
          "zip-code": "34170",
          "comune": "Gorizia",
          "provincia": "Gorizia",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 136,
      "level": 2,
      "name": "Biblioteca Statale Stelio Crise di Trieste",
      "website": "bibliotecacrise.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Papa Giovanni XXIII, 6",
          "zip-code": "34123",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6711,
      "level": 3,
      "name": "Biblioteca Statale Stelio Crise di Trieste",
      "website": "https://bibliotecacrise.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Papa Giovanni XXIII, 26",
          "zip-code": "34123",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 148,
      "level": 2,
      "name": "Biblioteca Universitaria Alessandrina di Roma",
      "website": "www.alessandrina.librari.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale  Aldo Moro, 5",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6707,
      "level": 3,
      "name": "Biblioteca Universitaria Alessandrina",
      "website": "http://www.alessandrina.librari.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale Aldo Moro, 5",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 141,
      "level": 2,
      "name": "Biblioteca Universitaria di Cagliari",
      "website": "www.buca.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Universit\u00e0, 32",
          "zip-code": "09124",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 386,
      "level": 3,
      "name": "Biblioteca Universitaria di Cagliari",
      "website": "http://www.buca.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Universit\u00e0, 32",
          "zip-code": "09124",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 140,
      "level": 2,
      "name": "Biblioteca Universitaria di Genova",
      "website": "www.bibliotecauniversitaria.ge.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Balbi",
          "zip-code": "16126",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6673,
      "level": 3,
      "name": "Biblioteca Universitaria di Genova",
      "website": "http://www.bibliotecauniversitaria.ge.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Balbi, 40",
          "zip-code": "16126",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 140,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 147,
      "level": 2,
      "name": "Biblioteca Universitaria di Napoli",
      "website": "www.bibliotecauniversitarianapoli.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giovanni Paladino, 39",
          "zip-code": "80138",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6709,
      "level": 3,
      "name": "Biblioteca Universitaria di Napoli",
      "website": "http://www.bibliotecauniversitarianapoli.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giovanni Paladino, 39",
          "zip-code": "80138",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 147,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 146,
      "level": 2,
      "name": "Biblioteca Universitaria di Padova",
      "website": "www.bibliotecauniversitariapadova.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Biagio, 7",
          "zip-code": "35121",
          "comune": "Padova",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6704,
      "level": 3,
      "name": "Biblioteca Universitaria di Padova",
      "website": "http://www.bibliotecauniversitariapadova.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Biagio, 7",
          "zip-code": "35121",
          "comune": "Padova",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 144,
      "level": 2,
      "name": "Biblioteca Universitaria di Pavia",
      "website": "www.bibliotecauniversitariapavia.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Nuova",
          "zip-code": "27100",
          "comune": "Pavia",
          "provincia": "Pavia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6740,
      "level": 3,
      "name": "Biblioteca Universitaria di Pavia",
      "website": "http://www.bibliotecauniversitariapavia.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Nuova, 65",
          "zip-code": "27100",
          "comune": "Pavia",
          "provincia": "Pavia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 145,
      "level": 2,
      "name": "Biblioteca Universitaria di Pisa",
      "website": "www.bibliotecauniversitaria.pi.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Curtatone e Montanara, 15",
          "zip-code": "56100",
          "comune": "Pisa",
          "provincia": "Pisa",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6623,
      "level": 3,
      "name": "Biblioteca Universitaria di Pisa",
      "website": "http://www.bibliotecauniversitaria.pi.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Santa Maria, 5",
          "zip-code": "56100",
          "comune": "Pisa",
          "provincia": "Pisa",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 143,
      "level": 2,
      "name": "Biblioteca Universitaria di Sassari",
      "website": "www.bibliotecauniversitariasassari.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Enrico Costa",
          "zip-code": "07100",
          "comune": "Sassari",
          "provincia": "Sassari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 389,
      "level": 3,
      "name": "Biblioteca Universitaria di Sassari",
      "website": "http://www.bibliotecauniversitariasassari.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Enrico Costa, 57",
          "zip-code": "07100",
          "comune": "Sassari",
          "provincia": "Sassari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 22,
      "level": 2,
      "name": "Biblioteca Vallicelliana di Roma",
      "website": "www.vallicelliana.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Chiesa Nuova, 18",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6710,
      "level": 3,
      "name": "Biblioteca Vallicelliana",
      "website": "http://www.vallicelliana.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Chiesa Nuova, 18",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 333,
      "level": 2,
      "name": "Reggia di Caserta",
      "website": "www.reggiadicaserta.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Douhet, 2a",
          "zip-code": "81100",
          "comune": "Caserta",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6988,
      "level": 3,
      "name": "Bosco di San Silvestro",
      "website": "https://www.reggiadicaserta.beniculturali.it/bosco-di-san-silvestro/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Giardini Reali, 78",
          "zip-code": "81100",
          "comune": "Caserta",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 333,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 792,
      "level": 3,
      "name": "Camera di San Paolo e Cella di Santa Caterina",
      "website": "http://polomusealeemiliaromagna.beniculturali.it/musei/camera-di-san-paolo-e-cella-di-santa-caterina",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Melloni, 3A",
          "zip-code": "43121",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 756,
      "level": 3,
      "name": "Camera di San Paolo e Cella di Santa Caterina",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/camera-di-san-paolo-e-cella-di-santa-caterina",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Melloni Macedonio, 3A",
          "zip-code": "43100",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6805,
      "level": 3,
      "name": "Cappella del Taja nel Palazzo ex Barabesi",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/229/siena-cappella-del-taja-nel-palazzo-ex-barabesi",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Matteotti",
          "zip-code": "53100",
          "comune": "Siena",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 791,
      "level": 3,
      "name": "Cappella della Sacra Sindone",
      "website": "https://www.museireali.beniculturali.it/cappella-della-sacra-sindone/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Reale, 1",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 332,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 7010,
      "level": 3,
      "name": "Cappella della Ss. Annunziata",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/257/cappella-dellannunziata",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "",
      "place": {
          "address": "Via dell'Annunziata, 59",
          "zip-code": "04010",
          "comune": "Cori",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6927,
      "level": 3,
      "name": "Cappella della Ss. Annunziata",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/257/cappella-dellannunziata",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell\u2019Annunziata, 59",
          "zip-code": "04010",
          "comune": "Cori",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 309,
      "level": 2,
      "name": "Direzione regionale Musei Lombardia",
      "website": "musei.lombardia.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Magenta, 24 (Palazzo Arese Litta)",
          "zip-code": "20123",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5329,
      "level": 3,
      "name": "Cappella Espiatoria",
      "website": "https://www.reggiadimonza.it/it/content/things-to-do/cappella-espiatoria",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Matteo da Campione, 8",
          "zip-code": "20900",
          "comune": "Monza",
          "provincia": "Monza e della Brianza",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6664,
      "level": 3,
      "name": "Carcere Borbonico",
      "website": "http://www.ambientesa.beniculturali.it",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Dalmazia, 22",
          "zip-code": "83100",
          "comune": "Avellino",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5955,
      "level": 3,
      "name": "Casa Bellezza",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/casa-bellezza_2973/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Arrigo VII",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 787,
      "level": 3,
      "name": "Casa di San Tommaso D'Aquino",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/258/casa-di-san-tommaso",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Costanzo",
          "zip-code": "03031",
          "comune": "Aquino",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6773,
      "level": 3,
      "name": "Casa Minerbi",
      "website": "https://polomusealeemiliaromagna.beniculturali.it/musei/casa-minerbi",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gioco del Pallone 15",
          "zip-code": "44121",
          "comune": "Ferrara",
          "provincia": "Ferrara",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 247,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la citt\u00e0 metropolitana di Cagliari e le province di Oristano e Sud Sardegna",
      "website": "http://www.sabapca.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cesare Battisti, 2",
          "zip-code": "09123",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 962,
      "level": 3,
      "name": "Casteddu Ezzu",
      "website": "https://www.sabapca.beniculturali.it/it/337/siti-e-monumenti/4863/casteddu-ezzu",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "SP19",
          "zip-code": "09073",
          "comune": "Cuglieri",
          "provincia": "Oristano",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 247,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 782,
      "level": 3,
      "name": "Castel del Monte",
      "website": "https://www.casteldelmonte.beniculturali.it/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Statale 170",
          "zip-code": "70031",
          "comune": "Andria",
          "provincia": "Barletta-Andria-Trani",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 951,
      "level": 3,
      "name": "Castel Sant'Elmo e Museo del Novecento a Napoli",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-castello",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Tito Angelini, 22",
          "zip-code": "80129",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 781,
      "level": 3,
      "name": "Castello Bufalini",
      "website": "http://www.castellobufalini.beniculturali.it/index.php?lang=it",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Largo Crociani,3",
          "zip-code": "06016",
          "comune": "San Giustino",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 304,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 555,
      "level": 3,
      "name": "Castello di Canossa e Museo Nazionale \"Naborre Campanini\"",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/castello-di-canossa-e-museo-nazionale-naborre-campanini",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale 73",
          "zip-code": "42026",
          "comune": "Canossa",
          "provincia": "Reggio nell'Emilia",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 299,
      "level": 2,
      "name": "Direzione Regionale Musei Molise",
      "website": "www.musei.molise.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Salita San Bartolomeo",
          "zip-code": "86100",
          "comune": "Campobasso",
          "provincia": "Campobasso",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 765,
      "level": 3,
      "name": "Castello di Capua",
      "website": "https://www.musei.molise.beniculturali.it/musei?mid=870&nome=castello-di-capua",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Castello",
          "zip-code": "86013",
          "comune": "Gambatesa",
          "provincia": "Campobasso",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6490,
      "level": 3,
      "name": "Castello di Civitacampomarano",
      "website": "https://www.musei.molise.beniculturali.it/musei?mid=934&nome=castello-di-civitacampomarano",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Vincenzo Cuoco, 2",
          "zip-code": "86030",
          "comune": "Civitacampomarano",
          "provincia": "Campobasso",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 775,
      "level": 3,
      "name": "Castello di Copertino",
      "website": "https://musei.puglia.beniculturali.it/musei/castello-copertino/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Castello",
          "zip-code": "73043",
          "comune": "Copertino",
          "provincia": "Lecce",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 305,
      "level": 2,
      "name": "Direzione Regionale Musei Basilicata",
      "website": "musei.basilicata.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Recinto II D'Addozio",
          "zip-code": "75100",
          "comune": "Matera",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5174,
      "level": 3,
      "name": "Castello di Lagopesole",
      "website": "http://www.castellodilagopesole.com",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Castello",
          "zip-code": "85021",
          "comune": "Lagopesole",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 779,
      "level": 3,
      "name": "Castello di Moncalieri",
      "website": "http://polomusealepiemonte.beniculturali.it/index.php/musei-e-luoghi-della-cultura/castello-di-moncalieri",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Baden Baden, 4",
          "zip-code": "10024",
          "comune": "Moncalieri",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 300,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 251,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Sassari e Nuoro",
      "website": "http://sabap_ssnu.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "piazza Sant'Agostino",
          "zip-code": "07100",
          "comune": "Sassari",
          "provincia": "Sassari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5111,
      "level": 3,
      "name": "Castello di Pedres",
      "website": "ttps://www.beniculturali.it/luogo/castello-di-pedres",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Castello Pedrese",
          "zip-code": "07026",
          "comune": "Olbia",
          "provincia": "Olbia-Tempio",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 251,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 771,
      "level": 3,
      "name": "Castello di San Terenzo",
      "website": "https://www.musei.liguria.beniculturali.it/musei?mid=5054&nome=castello-di-san-terenzo",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Castello, 8",
          "zip-code": "19032",
          "comune": "Lerici",
          "provincia": "La Spezia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 769,
      "level": 3,
      "name": "Castello di Serralunga d'Alba",
      "website": "https://www.castellodiserralunga.it",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Castello, 1",
          "zip-code": "12060",
          "comune": "Serralunga d'Alba",
          "provincia": "Cuneo",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 300,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 768,
      "level": 3,
      "name": "Castello di Torrechiara",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/castello-di-torrechiara",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Borgo del Castello Langhirano",
          "zip-code": "43013",
          "comune": "Langhirano",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 527,
      "level": 3,
      "name": "Castello Giulio II",
      "website": "https://www.ostiaantica.beniculturali.it/it/aree-archeologiche-e-monumentali/ostia-antica/borgo-di-ostia-antica-e-castello-di-giulio-ii/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Rocca, 13",
          "zip-code": "00119",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 348,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 766,
      "level": 3,
      "name": "Castello Malaspina dal Verme Bobbio",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/castello-malaspina-di-bobbio",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Francesco",
          "zip-code": "29022",
          "comune": "Bobbio",
          "provincia": "Piacenza",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 585,
      "level": 3,
      "name": "Castello Piccolomini - Collezione Torlonia e Museo d'Arte Sacra della Marsica",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=62&nome=castello-piccolomini-collezione-torlonia-e-museo-darte-sacra-della-marsica",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Cavalieri di Vittorio Veneto",
          "zip-code": "67043",
          "comune": "Celano",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5176,
      "level": 3,
      "name": "Castello Scaligero di Sirmione",
      "website": "musei.lombardia.beniculturali.it/musei/castello-scaligero-di-sirmione/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Castello, 34",
          "zip-code": "25019",
          "comune": "Sirmione",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 763,
      "level": 3,
      "name": "Castello Svevo di Bari",
      "website": "https://musei.puglia.beniculturali.it/musei/castello-svevo-di-bari/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Federico II di Svevia, 4",
          "zip-code": "70122",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5661,
      "level": 3,
      "name": "Castello Svevo di Trani",
      "website": "https://www.castelloditrani.beniculturali.it/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Manfredi Re, 16",
          "zip-code": "76125",
          "comune": "Trani",
          "provincia": "Barletta-Andria-Trani",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 755,
      "level": 3,
      "name": "Cenacolo del Fuligno",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/156/firenze-cenacolo-del-fuligno",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Faenza, 40",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 753,
      "level": 3,
      "name": "Cenacolo di Andrea del Sarto a San Salvi",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/177/firenze-cenacolo-di-andrea-del-sarto",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Salvi, 16",
          "zip-code": "50135",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 754,
      "level": 3,
      "name": "Cenacolo di Ognissanti",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/178/firenze-cenacolo-di-ognissanti",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Borgo Ognissanti, 42",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 752,
      "level": 3,
      "name": "Cenacolo di Sant'Apollonia",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/179/firenze-cenacolo-di-santapollonia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via XXVII Aprile, 1",
          "zip-code": "50129",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 858,
      "level": 3,
      "name": "Cento Camerelle, Bauli",
      "website": "http://www.pafleg.it/it/4388/localit/49/cento-camerelle",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cento Camerelle",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 230,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la citt\u00e0 metropolitana di Bari",
      "website": "http://www.sabap-ba.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pier l'Eremita, 25/b",
          "zip-code": "70100",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7001,
      "level": 3,
      "name": "Centro operativo per l'Archeologia",
      "website": "http://www.sabap-ba.beniculturali.it/index.php?it/207/centro-operativo-per-larcheologia-di-gravina-in-puglia-ba",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Aspromonte",
          "zip-code": "70024",
          "comune": "Gravina in Puglia",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 230,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 281,
      "level": 2,
      "name": "Centro per il Libro e la Lettura",
      "website": "www.cepell.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pasquale Stanislao Mancini, 20",
          "zip-code": "00196",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6859,
      "level": 3,
      "name": "Centro per il libro e la lettura",
      "website": "http://www.cepell.it",
      "entity-tipology": "",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pasquale Stanislao Mancini",
          "zip-code": "00196",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 281,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 750,
      "level": 3,
      "name": "Certosa di San Giacomo",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/la-certosa-sangiacomo",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Certosa",
          "zip-code": "80073",
          "comune": "Capri",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 749,
      "level": 3,
      "name": "Certosa di San Lorenzo",
      "website": "https://www.padula.eu/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Certosa, 1",
          "zip-code": "84034",
          "comune": "Padula",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 926,
      "level": 3,
      "name": "Certosa di Trisulti",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/259/certosa-di-trisulti",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Trisulti",
          "zip-code": "03010",
          "comune": "Collepardo",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 748,
      "level": 3,
      "name": "Certosa e Museo di San Martino",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/certosa-e-museo",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo San Martino, 5",
          "zip-code": "80129",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6228,
      "level": 3,
      "name": "Chiesa del Santuccio",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/230/siena-chiesa-di-santa-maria-degli-angeli-detta-il-santuccio",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Roma, 69",
          "zip-code": "53100",
          "comune": "Siena",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 742,
      "level": 3,
      "name": "Chiesa di San Bartolomeo",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=64&nome=chiesa-di-san-bartolomeo",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Contrada San Bartolomeo",
          "zip-code": "65010",
          "comune": "Carpineto della Nora",
          "provincia": "Pescara",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6804,
      "level": 3,
      "name": "Chiesa di San Bernardino",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=1282&nome=chiesa-di-san-bernardino",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Bernardino",
          "zip-code": "67100",
          "comune": "L'Aquila",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 941,
      "level": 3,
      "name": "Chiesa di San Domenico al Corso",
      "website": "https://www.beniculturali.it/luogo/chiesa-di-san-domenico-al-corso",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Marrucino",
          "zip-code": "66100",
          "comune": "Chieti",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 306,
      "level": 2,
      "name": "Direzione Regionale Musei Calabria",
      "website": "musei.calabria.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gian Vincenzo Gravina",
          "zip-code": "87100",
          "comune": "Cosenza",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 740,
      "level": 3,
      "name": "Chiesa di San Francesco d'Assisi",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=813&nome=chiesa-di-san-francesco-dassisi",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza delle Tre Chiese",
          "zip-code": "89040",
          "comune": "Gerace",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5109,
      "level": 3,
      "name": "Chiesa di San Giovanni in Tuba",
      "website": "https://www.beniculturali.it/luogo/chiesa-di-san-giovanni-in-tuba",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": ".",
          "zip-code": "34019",
          "comune": "SS14, Duino-Aurisina",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 737,
      "level": 3,
      "name": "Chiesa di San Pietro",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/261/chiesa-di-san-pietro",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Colle San Pietro",
          "zip-code": "01017",
          "comune": "Tuscania",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 736,
      "level": 3,
      "name": "Chiesa di San Pietro ad Oratorium",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=740&nome=chiesa-di-san-pietro-ad-oratorium",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "\r\nLocalit\u00e0 Bivio Capodacqua - incrocio con Colle S. Giacomo Capestrano\r",
          "zip-code": "67022",
          "comune": "Capestrano",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 738,
      "level": 3,
      "name": "Chiesa di San Pietro in Albe",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=323&nome=chiesa-di-san-pietro-in-alba-fucens https://www.musei.abruzzo.beniculturali.it/musei?mid=323&nome=chiesa-di-san-pietro-in-alba-fucens https://www.musei.abruzzo.beniculturali.it/musei?mid=323&no",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Alba Fucens",
          "zip-code": "67050",
          "comune": "Massa d'Albe",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 734,
      "level": 3,
      "name": "Chiesa di Santa Maria delle Nevi",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.phpit/231/siena-chiesa-di-santa-maria-delle-nevi",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Montanini, 1",
          "zip-code": "53100",
          "comune": "Siena",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 227,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Ancona e Pesaro e Urbino",
      "website": "http://sabapmarche.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Senato, 15",
          "zip-code": "60121",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6823,
      "level": 3,
      "name": "Chiesa di Santa Maria di Portonovo",
      "website": "S. Maria di Portonovo \u2013 Sabap Marche (beniculturali.it)",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Portonovo",
          "zip-code": "60129",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 227,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 731,
      "level": 3,
      "name": "Chiesa di Santa Maria Maggiore di Tuscania",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/260/chiesa-di-santa-maria-maggiore",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Colle San Pietro",
          "zip-code": "01017",
          "comune": "Tuscania",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 326,
      "level": 2,
      "name": "Musei del Bargello",
      "website": "http://www.bargellomusei.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Proconsolo",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 727,
      "level": 3,
      "name": "Chiesa e Museo di Orsanmichele",
      "website": "http://www.bargellomusei.beniculturali.it/musei/3/orsanmichele/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell'Arte della Lana",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 326,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5662,
      "level": 3,
      "name": "Chiostro del convento di San Domenico",
      "website": "https://www.beniculturali.it/luogo/chiostro-del-convento-di-san-domenico",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Duomo",
          "zip-code": "74100",
          "comune": "Taranto",
          "provincia": "Taranto",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 726,
      "level": 3,
      "name": "Chiostro dello Scalzo",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/183/firenze-chiostro-dello-scalzo",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Cavour, 69",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6906,
      "level": 3,
      "name": "Chiostro di Santa Chiara",
      "website": "https://www.beniculturali.it/luogo/chiostro-di-santa-chiara",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Pier l'Eremita 25/B",
          "zip-code": "",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 230,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 918,
      "level": 3,
      "name": "Colosseo",
      "website": "http://parcocolosseo.it",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Colosseo, 1",
          "zip-code": "00184",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5119,
      "level": 3,
      "name": "Compendio Garibaldino di Caprera",
      "website": "https://www.garibaldicaprera.beniculturali.it/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Isola Caprera",
          "zip-code": "07024",
          "comune": "La Maddalena",
          "provincia": "Olbia-Tempio",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 2200,
      "level": 3,
      "name": "Complesso dei Girolamini",
      "website": "http://www.bibliotecadeigirolamini.beniculturali.it/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Duomo",
          "zip-code": "80138",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 7002,
      "level": 3,
      "name": "Complesso di Santa Chiara e San Francesco della Scarpa",
      "website": "http://www.sabap-ba.beniculturali.it/index.php?it/200/complesso-monumentale-di-santa-chiara-bari",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pier L'Eremita, 25",
          "zip-code": "70122",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 230,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 778,
      "level": 3,
      "name": "Complesso Monumentale del Castello Ducale, del Giardino e Parco di Agli\u00e9",
      "website": "http://musei.beniculturali.it/musei?mid=5181&nome=complesso-monumentale-del-castello-ducale-del-giardino-e-parco-di-aglie",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Castello, 1",
          "zip-code": "10011",
          "comune": "Agli\u00e8",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 300,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 767,
      "level": 3,
      "name": "Complesso Monumentale del Castello e Parco di Racconigi",
      "website": "http://polomusealepiemonte.beniculturali.it/index.php/musei-e-luoghi-della-cultura/castello-di-racconigi/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Carlo Alberto",
          "zip-code": "12035",
          "comune": "Racconigi",
          "provincia": "Cuneo",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 300,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 341,
      "level": 2,
      "name": "Complesso Monumentale della Pilotta",
      "website": "complessopilotta.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale della Pilotta,15",
          "zip-code": "43121",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6746,
      "level": 3,
      "name": "Complesso Monumentale della Pilotta - Biblioteca Palatina di Parma",
      "website": "http://bibliotecapalatina.beniculturali.it/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Pilotta, 3",
          "zip-code": "43121",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 341,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 639,
      "level": 3,
      "name": "Complesso Monumentale della Pilotta - Museo archeologico nazionale di Parma",
      "website": "https://complessopilotta.it/museo-archeologico/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale della Pilotta, 15",
          "zip-code": "43100",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 341,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 459,
      "level": 3,
      "name": "Complesso Monumentale della Pilotta - Teatro Farnese",
      "website": "https://complessopilotta.it/teatro-farnese/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale della Pilotta, 15",
          "zip-code": "43121",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 341,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6801,
      "level": 3,
      "name": "Complesso Monumentale di San Domenico",
      "website": "http://musei.beniculturali.it/musei?mid=1360&nome=complesso-monumentale-di-san-domenico",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Domenico",
          "zip-code": "88046",
          "comune": "Lamezia Terme",
          "provincia": "Catanzaro",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 261,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la Provincia di Cosenza",
      "website": "www.archeologiabelleartiepaesaggiocosenza.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Valdesi",
          "zip-code": "87100",
          "comune": "Cosenza",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6951,
      "level": 3,
      "name": "Complesso Monumentale di San Francesco d'Assisi",
      "website": "http://www.archeologiabelleartiepaesaggiocosenza.beniculturali.it/schede.php?id=188",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via delle Grotte",
          "zip-code": "87100",
          "comune": "Cosenza",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 261,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 1362,
      "level": 3,
      "name": "Complesso Monumentale di San Vincenzo al Volturno",
      "website": "https://www.musei.molise.beniculturali.it/musei?mid=210&nome=complesso-monumentale-di-san-vincenzo-al-volturno",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Frazione Cartiera, 1",
          "zip-code": "86070",
          "comune": "Castel San Vincenzo",
          "provincia": "Isernia",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6835,
      "level": 3,
      "name": "Complesso Monumentale San Pietro a Corte - ipogeo e Chiesa S.Anna",
      "website": "http://ambientesa.beniculturali.it/BAP/?q=luoghi&luogo=&provincia=&comune=&src=SAN%20PIETRO%20A%20CORTE&ID=9",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Antica Corte",
          "zip-code": "84100",
          "comune": "Salerno",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 328,
      "level": 2,
      "name": "Palazzo Ducale di Mantova",
      "website": "www.mantovaducale.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Sordello",
          "zip-code": "46100",
          "comune": "Mantova",
          "provincia": "Mantova",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5169,
      "level": 3,
      "name": "Complesso Museale Palazzo Ducale di Mantova",
      "website": "http://www.mantovaducale.beniculturali.it/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Sordello, 40",
          "zip-code": "46100",
          "comune": "Mantova",
          "provincia": "Mantova",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 328,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6105,
      "level": 3,
      "name": "Complesso Termale di Via Terracina",
      "website": "http://www.archeona.beniculturali.it",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Terracina",
          "zip-code": "80125",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6844,
      "level": 3,
      "name": "Comprensorio Archeologico del Circeo",
      "website": "http://www.sabap_lazio.beniculturali.it/index.php?it/243/comprensorio-archeologico-del-circeo",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Palazzo, loc. Molella",
          "zip-code": "04016",
          "comune": "Sabaudia",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 203,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 455,
      "level": 3,
      "name": "Comprensorio Archeologico di Minturnae",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/608/comprensorio-archeologico-e-antiquarium-di-minturnae",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ferdinando II di Borbone/Via Punta Fiume",
          "zip-code": "04026",
          "comune": "Minturno",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 716,
      "level": 3,
      "name": "Comprensorio Archeologico di Santa Croce in Gerusalemme",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/comprensorio-archeologico-di-santa-croce-in-gerusalemme_3034/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Santa Croce in Gerusalemme, 1",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 4579,
      "level": 3,
      "name": "Concordia Sagittaria, area archeologica di Terme e Mura",
      "website": "https://soprintendenza.pdve.beniculturali.it/soprintendenza/sede-di-padova/aree-archeologiche/concordia-sagittaria-il-percorso-archeologico/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Cardinal Celso Costantini, 1",
          "zip-code": "30023",
          "comune": "Concordia Sagittaria",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 206,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 301,
      "level": 2,
      "name": "Direzione Regionale Musei Veneto",
      "website": "polomusealeveneto.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Marco",
          "zip-code": "30124",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 798,
      "level": 3,
      "name": "Concordia Sagittaria, area archeologica sotto la Cattedrale",
      "website": "https://soprintendenza.pdve.beniculturali.it/soprintendenza/sede-di-padova/aree-archeologiche/concordia-sagittaria-il-percorso-archeologico/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Cattedrale",
          "zip-code": "30023",
          "comune": "Concordia Sagittaria",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 709,
      "level": 3,
      "name": "Concordia Sagittaria, Domus dei Signini e Pozzi Romani",
      "website": "https://www.beniculturali.it/luogo/concordia-sagittaria-domus-dei-signini-e-pozzi-romani",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Pozzi Romani",
          "zip-code": "53100",
          "comune": "Concordia Sagittaria",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 206,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 489,
      "level": 3,
      "name": "Concordia Sagittaria, ponte romano",
      "website": "https://soprintendenza.pdve.beniculturali.it/soprintendenza/sede-di-padova/aree-archeologiche/concordia-sagittaria-il-percorso-archeologico/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via S.Pietro, 285",
          "zip-code": "30023",
          "comune": "Concordia Sagittaria",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 206,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 315,
      "level": 2,
      "name": "Gallerie degli Uffizi",
      "website": "www.uffizi.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale degli Uffizi",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 713,
      "level": 3,
      "name": "Corridoio Vasariano",
      "website": "https://www.uffizi.it/corridoio-vasariano",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Lungarno degli Archibusieri, 2",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 252,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per il Comune di Napoli",
      "website": "http://sabap.na.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Plebiscito (Palazzo Reale)",
          "zip-code": "80132",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6140,
      "level": 3,
      "name": "Crypta Neapolitana",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/approfondimenti/60-parco-e-tomba-di-virgilio-sezioni/297-crypta-neapolitana",
      "entity-tipology": "",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Salita della Grotta",
          "zip-code": "80100",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 252,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5952,
      "level": 3,
      "name": "Deposito Pleistocenico della Polledrara di Cecanibbio",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/polledrara-di-cecanibbio_2974/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Cecanibbio",
          "zip-code": "00166",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6905,
      "level": 3,
      "name": "Dolmen di San Silvestro",
      "website": "https://dolmensansilvestro.beniculturali.it/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale, 107",
          "zip-code": "70054",
          "comune": "Giovinazzo",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 230,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 710,
      "level": 3,
      "name": "Domus Aurea",
      "website": "https://parcocolosseo.it/area/domus-aurea/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale della Domus Aurea, 1",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 707,
      "level": 3,
      "name": "Eremo di San Leonardo al Lago",
      "website": "https://www.beniculturali.it/luogo/eremo-di-san-leonardo-al-lago",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada dell'Osteriaccia, 4",
          "zip-code": "53035",
          "comune": "Monteriggioni",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 706,
      "level": 3,
      "name": "Ex Chiesa del Tau",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/216/pistoia-ex-chiesa-del-tau",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Silvano Fedi, 28",
          "zip-code": "51100",
          "comune": "Pistoia",
          "provincia": "Pistoia",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6745,
      "level": 3,
      "name": "Ex Chiesa di San Barbaziano",
      "website": "http://www.polomusealeemiliaromagna.beniculturali.it/musei/ex-chiese-di-san-barbaziano-e-san-mattia-e-torre-jussi",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cesare Battisti, 35",
          "zip-code": "40123",
          "comune": "Bologna",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 705,
      "level": 3,
      "name": "Ex Chiesa di San Mattia",
      "website": "https://polomusealeemiliaromagna.beniculturali.it/musei/ex-chiese-di-san-barbaziano-e-san-mattia-e-torre-jussi",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Sant\u2019Isaia",
          "zip-code": "40123",
          "comune": "Bologna",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6969,
      "level": 3,
      "name": "Ex Convento di San Francesco della Scarpa",
      "website": "http://www.musei.puglia.beniculturali.it",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pier l'Eremita, 25",
          "zip-code": "70122",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6803,
      "level": 3,
      "name": "Ex Ospedale di San Rocco con annessa Chiesa di Cristo Flagellato",
      "website": "https://www.beniculturali.it/luogo/ex-ospedale-di-san-rocco-con-annessa-chiesa-di-cristo-flagellato",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Giovanni",
          "zip-code": "75100",
          "comune": "Matera",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5120,
      "level": 3,
      "name": "Ex Regio Museo archeologico",
      "website": "http://museoarcheocagliari.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Arsenale, 1",
          "zip-code": "09124",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6816,
      "level": 3,
      "name": "Fonte di Anna Perenna",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/fonte-di-anna-perenna_2976/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Guidobaldo del Monte, 4B",
          "zip-code": "00197",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 699,
      "level": 3,
      "name": "Fornace Romana di S. Margherita di Staffora",
      "website": "http://musei.beniculturali.it/musei?mid=412&nome=fornace-romana-di-s-margherita-di-staffora",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Frazione Massinigo",
          "zip-code": "27050",
          "comune": "Santa Margherita di Staffora",
          "provincia": "Pavia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 214,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 698,
      "level": 3,
      "name": "Fornaci Romane di C\u00e0 Turci",
      "website": "http://www.archeobologna.beniculturali.it/cesenatico_fornaci/fornaci_romane.htm",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Canale di Bonificazione",
          "zip-code": "33020",
          "comune": "Cesenatico",
          "provincia": "Forl\u00ec-Cesena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 237,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5328,
      "level": 3,
      "name": "Fornaci romane di Lonato",
      "website": "http://www.fornaciromanedilonato.it/fornaci",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Mantova, 54",
          "zip-code": "25017",
          "comune": "Lonato del Garda",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 214,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 694,
      "level": 3,
      "name": "Forte di Gavi",
      "website": "http://polomusealepiemonte.beniculturali.it/index.php/musei-e-luoghi-della-cultura/forte-di-gavi",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via al Forte, 14",
          "zip-code": "15066",
          "comune": "Gavi",
          "provincia": "Alessandria",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 300,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6922,
      "level": 3,
      "name": "Forte di Torre Saline - Area archeologica",
      "website": "https://www.beniculturali.it/luogo/forte-di-torre-saline-area-archeologica",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "",
          "zip-code": "",
          "comune": "Grosseto",
          "provincia": "Grosseto",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 271,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6772,
      "level": 3,
      "name": "Forte San Giovanni",
      "website": "https://www.musei.liguria.beniculturali.it/musei?mid=190&nome=forte-san-giovanni",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Beretta",
          "zip-code": "17024",
          "comune": "Finale Ligure",
          "provincia": "Savona",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6771,
      "level": 3,
      "name": "Forte Santa Tecla",
      "website": "http://www.fortesantatecla.it/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Nazario Sauro, 7",
          "zip-code": "18038",
          "comune": "Sanremo",
          "provincia": "Imperia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 770,
      "level": 3,
      "name": "Fortezza di Castruccio Castracani - Castello di Sarzanello",
      "website": "http://www.fortezzadisarzanello.com",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via alla Fortezza",
          "zip-code": "19038",
          "comune": "Sarzana",
          "provincia": "La Spezia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6455,
      "level": 3,
      "name": "Fortezza di San Leo",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/fortezza-di-san-leo",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giacomo Leopardi",
          "zip-code": "47865",
          "comune": "San Leo",
          "provincia": "Rimini",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 690,
      "level": 3,
      "name": "Fortezza di Santa Barbara",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/214/pistoia-fortezza-di-santa-barbara",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Resistenza",
          "zip-code": "51100",
          "comune": "Pistoia",
          "provincia": "Pistoia",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6845,
      "level": 3,
      "name": "Fortezza Firmafede",
      "website": "http://www.fortezzafirmafede.it/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Cittadella",
          "zip-code": "19038",
          "comune": "Sarzana",
          "provincia": "La Spezia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5136,
      "level": 3,
      "name": "Fortezza vecchia",
      "website": "https://www.beniculturali.it/luogo/fortezza-vecchia",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Fortezza Vecchia",
          "zip-code": "09049",
          "comune": "Villasimius",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 247,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 935,
      "level": 3,
      "name": "Gabinetto dei Disegni e delle Stampe",
      "website": "https://www.uffizi.it/pagine/gabinetto-disegni-e-stampe-degli-uffizi",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via della Ninna, 5",
          "zip-code": "04015",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 314,
      "level": 2,
      "name": "Galleria Borghese",
      "website": "https://galleriaborghese.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale  Scipione Borghese, 5",
          "zip-code": "00197",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 689,
      "level": 3,
      "name": "Galleria Borghese",
      "website": "http://galleriaborghese.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale Scipione Borghese, 5",
          "zip-code": "00197",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 314,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 322,
      "level": 2,
      "name": "Gallerie Nazionali d'Arte Antica",
      "website": "www.barberinicorsini.org/",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via delle Quattro Fontane",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 681,
      "level": 3,
      "name": "Galleria Corsini",
      "website": "http://www.barberinicorsini.org",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Lungara 10",
          "zip-code": "00165",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 322,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 688,
      "level": 3,
      "name": "Galleria d'Arte Moderna",
      "website": "https://www.uffizi.it/palazzo-pitti/galleria-d-arte-moderna",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de' Pitti, 1",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 316,
      "level": 2,
      "name": "Galleria dell'Accademia di Firenze",
      "website": "www.galleriaaccademiafirenze.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ricasoli, 58-60",
          "zip-code": "50129",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 685,
      "level": 3,
      "name": "Galleria dell'Accademia di Firenze",
      "website": "https://www.galleriaaccademiafirenze.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ricasoli, 58",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 316,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 132,
      "level": 2,
      "name": "Biblioteca Nazionale di Potenza",
      "website": "www.bnpz.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Don Minozzi, snc",
          "zip-code": "85100",
          "comune": "Potenza",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5173,
      "level": 3,
      "name": "Biblioteca Nazionale di Potenza",
      "website": "http://www.bnpz.beniculturali.it",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Don Minozzi, snc",
          "zip-code": "85100",
          "comune": "Potenza",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina C|C afferisce ad A|liv.1 coordina liv.3|liv.3 afferisce a liv.1"
      }
  },
  {
      "code": 684,
      "level": 3,
      "name": "Galleria Estense",
      "website": "https://www.gallerie-estensi.beniculturali.it/galleria-estense/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Porta Sant'Agostino, 337",
          "zip-code": "41121",
          "comune": "Modena",
          "provincia": "Modena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 317,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5652,
      "level": 3,
      "name": "Galleria Giorgio Franchetti alla Ca' d'Oro",
      "website": "http://www.polomusealeveneto.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Cannaregio",
          "zip-code": "30126",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 320,
      "level": 2,
      "name": "Galleria Nazionale d'Arte Moderna e Contemporanea",
      "website": "lagallerianazionale.com",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale delle Belle Arti, 131",
          "zip-code": "00197",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 947,
      "level": 3,
      "name": "Galleria Nazionale d'Arte Moderna e Contemporanea",
      "website": "www.lagallerianazionale.com",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale delle Belle Arti, 131",
          "zip-code": "00197",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 320,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 936,
      "level": 3,
      "name": "Galleria Nazionale della Puglia Girolamo e Rosaria Devanna",
      "website": "https://www.gallerianazionalepuglia.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Giandonato Rogadeo, 14",
          "zip-code": "03029",
          "comune": "Bitonto",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 318,
      "level": 2,
      "name": "Galleria Nazionale delle Marche",
      "website": "www.gallerianazionalemarche.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Rinascimento",
          "zip-code": "61029",
          "comune": "Urbino",
          "provincia": "Pesaro e Urbino",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 679,
      "level": 3,
      "name": "Galleria Nazionale delle Marche",
      "website": "http://www.gallerianazionalemarche.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Rinascimento, 13",
          "zip-code": "61029",
          "comune": "Urbino",
          "provincia": "Pesaro e Urbino",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 318,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 319,
      "level": 2,
      "name": "Galleria Nazionale dell'Umbria",
      "website": "gallerianazionaledellumbria.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Vannucci,19",
          "zip-code": "06123",
          "comune": "Perugia",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 680,
      "level": 3,
      "name": "Galleria Nazionale dell'Umbria",
      "website": "https://gallerianazionaledellumbria.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Vannucci, 19",
          "zip-code": "06121",
          "comune": "Perugia",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 319,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 678,
      "level": 3,
      "name": "Galleria Nazionale di Cosenza",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=80&nome=galleria-nazionale-di-cosenza",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gian Vincenzo Gravina",
          "zip-code": "87100",
          "comune": "Cosenza",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 683,
      "level": 3,
      "name": "Galleria Nazionale di Parma",
      "website": "https://complessopilotta.it/galleria-nazionale/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Pilotta, 15",
          "zip-code": "43121",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 341,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 677,
      "level": 3,
      "name": "Galleria Palatina e Appartamenti Reali e Imperiali",
      "website": "https://www.uffizi.it/palazzo-pitti/galleria-palatina",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de' Pitti, 1",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 676,
      "level": 3,
      "name": "Galleria Sabauda",
      "website": "https://www.museireali.beniculturali.it/galleria-sabauda/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Reale, 1",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 332,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 675,
      "level": 3,
      "name": "Galleria Spada",
      "website": "http://galleriaspada.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Capo di Ferro, 13",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 381,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 321,
      "level": 2,
      "name": "Gallerie dell'Accademia di Venezia",
      "website": "www.gallerieaccademia.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Campo della Carit\u00e0 1050 - Dorsoduro",
          "zip-code": "30123",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5653,
      "level": 3,
      "name": "Gallerie dell\u2019Accademia di Venezia",
      "website": "http://www.gallerieaccademia.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Campo della Carita, 1050",
          "zip-code": "30123",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 321,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 329,
      "level": 2,
      "name": "Palazzo Reale di Genova",
      "website": "www.palazzorealegenova.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Balbi, 10",
          "zip-code": "16126",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 954,
      "level": 3,
      "name": "Gallerie Nazionali di Palazzo Spinola",
      "website": "http://www.palazzospinola.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Pellicceria, 1",
          "zip-code": "16123",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 329,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6797,
      "level": 3,
      "name": "Giardini Reali",
      "website": "https://www.museireali.beniculturali.it/giardini-reali/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Reale, 1",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 332,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 498,
      "level": 3,
      "name": "Giardino della Villa medicea di Castello",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/174/giardino-della-villa-a-castello-firenze",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Castello, 44",
          "zip-code": "50141",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6252,
      "level": 3,
      "name": "Giardino delle Scuderie Reali e Pagliere",
      "website": "https://www.uffizi.it/opere/giardino-delle-scuderie-reali",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale di Porta Romana, 1",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 674,
      "level": 3,
      "name": "Giardino di Boboli",
      "website": "https://www.uffizi.it/giardino-boboli",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de' Pitti, 1",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 687,
      "level": 3,
      "name": "Galleria degli Uffizi",
      "website": "https://www.uffizi.it/gli-uffizi",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale degli Uffizi, 6",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 673,
      "level": 3,
      "name": "Grotta Azzurra",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/la-grotta",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Accesso dal mare Grotta Azzurra",
          "zip-code": "80073",
          "comune": "Anacapri",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5115,
      "level": 3,
      "name": "Grotta del Mitreo (Duino Aurisina)",
      "website": "https://www.beniculturali.it/luogo/grotta-del-mitreo-duino-aurisina",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Grotta V.G. 4024",
          "zip-code": "34013",
          "comune": "Duino-Aurisina",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 7006,
      "level": 3,
      "name": "Grotta Guattari",
      "website": "http://www.sabap_lazio.beniculturali.it/index.php?it/243/comprensorio-archeologico-del-circeo",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Alcide De Gasperi, 1",
          "zip-code": "04017",
          "comune": "San Felice Circeo",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 203,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5177,
      "level": 3,
      "name": "Grotte di Catullo e Museo Archeologico di Sirmione",
      "website": "http://www.grottedicatullo.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Orti Manara, 4",
          "zip-code": "25019",
          "comune": "Sirmione",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5161,
      "level": 3,
      "name": "Grotte di Toirano",
      "website": "http://www.toiranogrotte.it",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via alle grotte, Piazzale Dario, Via P. G. Maineri",
          "zip-code": "17055",
          "comune": "Toirano",
          "provincia": "Savona",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 262,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 668,
      "level": 3,
      "name": "Ipogei del Fondo Caiazzo",
      "website": "http://www.pafleg.it/it/4388/localit/133/ipogei-del-fondo-caiazzo",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Vecchia Campana, 1",
          "zip-code": "80078",
          "comune": "Pozzuoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5951,
      "level": 3,
      "name": "Ipogeo degli Ottavi",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/ipogeo-degli-ottavi_2977/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Stazione di Ottavia, 73",
          "zip-code": "00135",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 372,
      "level": 1,
      "name": "Istituto Centrale per la Digitalizzazione del Patrimonio Culturale - Digital Library",
      "website": "",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele, 18",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 174,
      "level": 2,
      "name": "Istituto Centrale per i Beni Sonori ed Audiovisivi",
      "website": "www.icbsa.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Michelangelo Caetani, 32",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 372,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6706,
      "level": 3,
      "name": "Istituto Centrale per i Beni Sonori ed Audiovisivi",
      "website": "http://www.icbsa.it/",
      "entity-tipology": "",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Michelagelo Caetani, 32",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 174,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 175,
      "level": 2,
      "name": "Istituto Centrale per il Catalogo e la Documentazione",
      "website": "www.iccd.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele, 18",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 372,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5940,
      "level": 3,
      "name": "Istituto Centrale per il Catalogo e la Documentazione",
      "website": "http://www.iccd.beniculturali.it",
      "entity-tipology": "",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele, 18",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 175,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 176,
      "level": 2,
      "name": "Istituto Centrale per il Catalogo Unico delle Biblioteche Italiane",
      "website": "www.iccu.sbn.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Castro Pretorio, 105",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 372,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6867,
      "level": 3,
      "name": "Istituto Centrale per il Catalogo Unico delle biblioteche italiane e per le informazioni bibliografiche - ICCU",
      "website": "http://www.iccu.sbn.it",
      "entity-tipology": "",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Castro Pretorio",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 176,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 178,
      "level": 2,
      "name": "Istituto Centrale per il Patrimonio Immateriale",
      "website": "https://icpi.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Marconi, 8/10",
          "zip-code": "00144",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6899,
      "level": 3,
      "name": "Istituto Centrale per il Patrimonio Immateriale",
      "website": "http://www.idea.mat.beniculturali.it/",
      "entity-tipology": "",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Guglielmo Marconi, 10",
          "zip-code": "00144",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 178,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 295,
      "level": 1,
      "name": "Direzione Generale  Educazione, Ricerca e Istituti Culturali",
      "website": "www.dger.beniculturali.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Milano, 76",
          "zip-code": "00184",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 179,
      "level": 2,
      "name": "Istituto Centrale per la Grafica",
      "website": "www.grafica.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Stamperia, 6",
          "zip-code": "00187",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 295,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6876,
      "level": 3,
      "name": "Istituto Centrale per la Grafica - Calcografia",
      "website": "https://www.grafica.beniculturali.it/calcografia-nazionale?et_fb=1&PageSpeed=off",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Stamperia, 6",
          "zip-code": "00187",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 179,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6837,
      "level": 3,
      "name": "Istituto Centrale per la Grafica - Palazzo Poli",
      "website": "http://www.grafica.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Poli",
          "zip-code": "00187",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 179,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 177,
      "level": 2,
      "name": "Istituto Centrale per la Patologia degli Archivi e del Libro",
      "website": "www.icpal.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Milano,  76",
          "zip-code": "00184",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 295,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6924,
      "level": 3,
      "name": "Istituto Centrale per la Patologia degli Archivi e del Libro",
      "website": "http://www.icpal.beniculturali.it",
      "entity-tipology": "",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Milano, 76",
          "zip-code": "00184",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 177,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 746,
      "level": 3,
      "name": "La Cattolica",
      "website": "http://www.cattolicadistilo.it",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Cattolica",
          "zip-code": "89049",
          "comune": "Stilo",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 691,
      "level": 3,
      "name": "Le Castella",
      "website": "http://musei.beniculturali.it/musei?mid=812&nome=le-castella",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale Castello",
          "zip-code": "88076",
          "comune": "Isola di Capo Rizzuto",
          "provincia": "Crotone",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 324,
      "level": 2,
      "name": "Museo Archeologico Nazionale di Reggio Calabria",
      "website": "www.museoarcheologicoreggiocalabria.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Giuseppe De Nava",
          "zip-code": "89123",
          "comune": "Reggio di Calabria",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 634,
      "level": 3,
      "name": "MArRC - Museo Archeologico Nazionale di Reggio di Calabria",
      "website": "https://www.museoarcheologicoreggiocalabria.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Giuseppe De Nava, 26",
          "zip-code": "89100",
          "comune": "Reggio di Calabria",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 324,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6869,
      "level": 3,
      "name": "Mausoleo \"La Celsa\"",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/mausoleo-la-celsa_2978/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Suzzara, 48",
          "zip-code": "00188",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 661,
      "level": 3,
      "name": "Mausoleo c.d. delle Carceri Vecchie",
      "website": "http://musei.beniculturali.it/musei?mid=1347&nome=mausoleo-c-d-delle-carceri-vecchie",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Nazionale Appia",
          "zip-code": "81054",
          "comune": "San Prisco",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 346,
      "level": 2,
      "name": "Parco Archeologico dell'Appia Antica",
      "website": "www.parcoarcheologicoappiaantica.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza delle Finanze",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 660,
      "level": 3,
      "name": "Mausoleo di Cecilia Metella e Castrum Caetani",
      "website": "http://www.parcoarcheologicoappiaantica.it/luoghi/mausoleo-di-cecilia-metella-e-castrum-caetani/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Appia Antica, 161",
          "zip-code": "00179",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6781,
      "level": 3,
      "name": "Mausoleo di Sant'Elena",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/mausoleo-di-sant-elena_2979/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Casilina, 641",
          "zip-code": "00177",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 659,
      "level": 3,
      "name": "Mausoleo di Teodorico",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/mausoleo-di-teodorico",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via delle Industrie, 14",
          "zip-code": "48122",
          "comune": "Ravenna",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 466,
      "level": 3,
      "name": "Mel, sepolcreto preromano",
      "website": "https://www.beniculturali.it/luogo/mel-sepolcreto-preromano",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Tempietto",
          "zip-code": "32026",
          "comune": "Mel",
          "provincia": "Belluno",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 206,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6814,
      "level": 3,
      "name": "Mitreo Barberini",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/mitreo-barberini_2980/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via delle Quattro Fontane, 13",
          "zip-code": "00184",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6815,
      "level": 3,
      "name": "Mitreo di Santa Prisca",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/mitreo-di-santa-prisca_3024/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Santa Prisca, 8",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6880,
      "level": 3,
      "name": "Mitreo di Sutri",
      "website": "http://sabap-rm-met.beniculturali.it/it/294/mitreo",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cassia, km 50",
          "zip-code": "01015",
          "comune": "Sutri",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 656,
      "level": 3,
      "name": "Monastero di San Benedetto Sacro Speco",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/262/monastero-di-san-benedetto-sacro-speco",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo San Benedetto, 1",
          "zip-code": "00028",
          "comune": "Subiaco",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 655,
      "level": 3,
      "name": "Monastero di Santa Scolastica",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/263/monastero-di-santa-scolastica",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Monasteri, 22",
          "zip-code": "00028",
          "comune": "Subiaco",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 717,
      "level": 3,
      "name": "Montegrotto Terme, Area Archeologica di Viale Stazione / Via degli Scavi",
      "website": "https://soprintendenza.pdve.beniculturali.it/soprintendenza/sede-di-padova/aree-archeologiche/615-2/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Scavi, 4",
          "zip-code": "35036",
          "comune": "Montegrotto Terme",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 206,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6953,
      "level": 3,
      "name": "Monumento a Cesare Battisti sul Doss",
      "website": "http://musei.beniculturali.it/musei?mid=6691&nome=monumento-a-cesare-battisti-sul-doss",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via D\u00f2s Trento",
          "zip-code": "38122",
          "comune": "Trento",
          "provincia": "Trento",
          "regione": "Trentino-Alto Adige"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5659,
      "level": 3,
      "name": "Monumento a Vittorio Emanuele II (Vittoriano)",
      "website": "https://vittoriano.beniculturali.it/it",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Venezia",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6954,
      "level": 3,
      "name": "Monumento alla Vittoria",
      "website": "https://www.monumentoallavittoria.com/it.html",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Vittoria, 2012",
          "zip-code": "39100",
          "comune": "Bolzano/Bozen",
          "provincia": "Bolzano/Bozen",
          "regione": "Trentino-Alto Adige"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 575,
      "level": 3,
      "name": "Museo Nazionale d'Abruzzo",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=63&nome=munda-museo-nazionale-dabruzzo",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Tancredi da Pentima",
          "zip-code": "67100",
          "comune": "L'Aquila",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6659,
      "level": 3,
      "name": "MUPRE - Museo Nazionale della Preistoria della Valle Camonica",
      "website": "http://www.mupre.capodiponte.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Martino, 7",
          "zip-code": "25044",
          "comune": "Capo di Ponte",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 629,
      "level": 3,
      "name": "Nuovo Museo Paludi di Celano - Centro di restauro",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=319&nome=muse-nuovo-museo-paludi-di-celano-centro-di-restauro",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Paludi",
          "zip-code": "67043",
          "comune": "Celano",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5948,
      "level": 3,
      "name": "Musei del Bargello - Museo di Casa Martelli",
      "website": "http://www.bargellomusei.beniculturali.it/musei/5/martelli/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ferdinando Zannetti, 8",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 326,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6817,
      "level": 3,
      "name": "Musei Reali",
      "website": "http://www.museireali.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Reale, 1",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 332,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 605,
      "level": 3,
      "name": "Museo Archeologico dell'Agro atellano",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-succivo",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Roma, 23",
          "zip-code": "81030",
          "comune": "Succivo",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 692,
      "level": 3,
      "name": "Museo Archeologico dell'Agro Falisco - Forte Sangallo",
      "website": "https://www.fortesangallo.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Forte, 1",
          "zip-code": "01033",
          "comune": "Civita Castellana",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 650,
      "level": 3,
      "name": "Museo Archeologico dell'Antica Allifae",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-alife",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza XIX Ottobre",
          "zip-code": "81011",
          "comune": "Alife",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 648,
      "level": 3,
      "name": "Museo Archeologico dell'antica Capua e Mitreo",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-e-mitreo",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Roberto d'Angi\u00f2, 48",
          "zip-code": "81055",
          "comune": "Santa Maria Capua Vetere",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 649,
      "level": 3,
      "name": "Museo Archeologico di Calatia",
      "website": "http://museoarcheologicocalatia.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Caudina, 353",
          "zip-code": "81024",
          "comune": "Maddaloni",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 614,
      "level": 3,
      "name": "Museo Archeologico di Chiavari",
      "website": "https://www.musei.liguria.beniculturali.it/musei?mid=187&nome=museo-archeologico-di-chiavari-palazzo-rocca",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Costaguta, 4",
          "zip-code": "16043",
          "comune": "Chiavari",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 911,
      "level": 3,
      "name": "Museo Archeologico di Sala Consilina",
      "website": "http://ambientesa.beniculturali.it/BAP/?q=luoghi&luogo=&provincia=&comune=&src=&ID=62",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Cappuccini",
          "zip-code": "84036",
          "comune": "Sala Consilina",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 646,
      "level": 3,
      "name": "Museo Archeologico di Teanum Sidicinum",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-teano",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Nicola Gigli, 23",
          "zip-code": "81057",
          "comune": "Teano",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 653,
      "level": 3,
      "name": "Museo Archeologico di Venafro",
      "website": "https://www.musei.molise.beniculturali.it/musei?mid=213&nome=museo-archeologico-di-venafro",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Garibaldi,8",
          "zip-code": "86079",
          "comune": "Venafro",
          "provincia": "Isernia",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6058,
      "level": 3,
      "name": "Museo Archeologico lametino",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=1362&nome=museo-archeologico-lametino",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Domenico",
          "zip-code": "88046",
          "comune": "Lamezia Terme",
          "provincia": "Catanzaro",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6791,
      "level": 3,
      "name": "Museo Archeologico Metauros",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=1363&nome=museo-archeologico-metauros",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Roma, C/o Palazzo Baldari e Via Roma, 30",
          "zip-code": "89013",
          "comune": "Gioia Tauro",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 559,
      "level": 3,
      "name": "Museo Archeologico Nazionale \"Domenico Ridola\"",
      "website": "https://www.museonazionaledimatera.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Domenico Ridola, 24",
          "zip-code": "75100",
          "comune": "Matera",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5127,
      "level": 3,
      "name": "Museo Archeologico Nazionale \"G. Asproni\"",
      "website": "https://musei.sardegna.beniculturali.it/musei/museo-archeologico-nazionale-g-asproni-di-nuoro/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giorgio Asproni, 8",
          "zip-code": "08100",
          "comune": "Nuoro",
          "provincia": "Nuoro",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 616,
      "level": 3,
      "name": "Museo Archeologico Nazionale \"G. Carettoni\" e Area archeologica di Casinum",
      "website": "http://polomusealelazio.beniculturali.it/index.php?it/561/museo-archeologico-nazionale-g-carettoni-e-area-archeologica-di-casinum",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Montecassino",
          "zip-code": "03043",
          "comune": "Cassino",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 642,
      "level": 3,
      "name": "Museo Archeologico Nazionale \"La Civitella\"",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=316&nome=museo-archeologico-nazionale-la-civitella",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giuseppe Salvatore Pianell, 1",
          "zip-code": "66100",
          "comune": "Chieti",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 610,
      "level": 3,
      "name": "Museo Archeologico Nazionale \"Vito Capialbi\"",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=87&nome=museo-archeologico-nazionale-vito-capialbi",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Castello Normanno Svevo",
          "zip-code": "89900",
          "comune": "Vibo Valentia",
          "provincia": "Vibo Valentia",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 628,
      "level": 3,
      "name": "Museo Archeologico Nazionale \u201cGaio Cilnio Mecenate\u201d e Anfiteatro romano",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/196/arezzo-museo-archeologico-nazionale-gaio-cilnio-mecenate",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Margaritone, 10",
          "zip-code": "52100",
          "comune": "Arezzo",
          "provincia": "Arezzo",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 903,
      "level": 3,
      "name": "Museo Archeologico Nazionale Antiquarium Turritano e Area Archeologica",
      "website": "https://musei.sardegna.beniculturali.it/musei/museo-archeologico-nazionale-antiquarium-turritano-e-area-archeologica",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ponte Romano, 99",
          "zip-code": "07046",
          "comune": "Porto Torres",
          "provincia": "Sassari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 627,
      "level": 3,
      "name": "Museo Archeologico Nazionale d'Abruzzo - Villa Frigerj",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=61&nome=museo-archeologico-nazionale-dabruzzo-villa-frigerj",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Guido Costanzi",
          "zip-code": "66100",
          "comune": "Chieti",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 774,
      "level": 3,
      "name": "Museo Archeologico Nazionale del Melfese Massimo Pallottino",
      "website": "http://www.archeobasilicata.beniculturali.it/WA_Musei_Archeologici.aspx?pagina=Melfi",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Normanni",
          "zip-code": "85025",
          "comune": "Melfi",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 764,
      "level": 3,
      "name": "Museo Archeologico Nazionale del Sannio Caudino di Montesarchio",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-montesarchio",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Castello",
          "zip-code": "82016",
          "comune": "Montesarchio",
          "provincia": "Benevento",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 411,
      "level": 3,
      "name": "Museo Archeologico Nazionale della Basilicata \"Dinu Adamesteanu\" di Potenza",
      "website": "https://musei.basilicata.beniculturali.it/musei/?mid=76&nome=museo-archeologico-nazionale-della-basilicata-dinu-adamesteanu",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Andrea Serrao, 11",
          "zip-code": "85100",
          "comune": "Potenza",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6904,
      "level": 3,
      "name": "Museo Archeologico Nazionale della Laguna di Venezia",
      "website": "https://polomusealeveneto.beniculturali.it/musei/museo-archeologico-nazionale-della-laguna-di-venezia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Isola del Lazzaretto Vecchio",
          "zip-code": "30126",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5330,
      "level": 3,
      "name": "Museo Archeologico Nazionale della Lomellina",
      "website": "http://www.museoarcheologico.vigevano.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Ducale, 20",
          "zip-code": "27029",
          "comune": "Vigevano",
          "provincia": "Pavia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 571,
      "level": 3,
      "name": "Museo Archeologico Nazionale della Siritide - Policoro",
      "website": "https://musei.basilicata.beniculturali.it/musei/?mid=71&nome=museo-archeologico-nazionale-della-siritide",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cristoforo Colombo, 8",
          "zip-code": "75025",
          "comune": "Policoro",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5326,
      "level": 3,
      "name": "Museo Archeologico Nazionale della Valle Camonica",
      "website": "http://www.museoarcheologico.valcamonicaromana.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Roma, 29",
          "zip-code": "25040",
          "comune": "Cividate Camuno",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 4537,
      "level": 3,
      "name": "Museo Archeologico Nazionale della Valle del Sarno",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-sarno",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Camillo Benso Cavour, 7",
          "zip-code": "84087",
          "comune": "Sarno",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 626,
      "level": 3,
      "name": "Museo Archeologico Nazionale dell'Alta Val d'Agri",
      "website": "https://musei.basilicata.beniculturali.it/musei/?mid=72&nome=museo-archeologico-nazionale-dellalta-val-dagri",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Contrada Spineta",
          "zip-code": "85050",
          "comune": "Grumento Nova",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 624,
      "level": 3,
      "name": "Museo Archeologico Nazionale delle Marche",
      "website": "https://www.musei.marche.beniculturali.it/musei/?mid=200&nome=museo-archeologico-nazionale-delle-marche",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gabriele Ferretti, 6",
          "zip-code": "60121",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 313,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 636,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Adria",
      "website": "https://polomusealeveneto.beniculturali.it/musei/museo-archeologico-nazionale-di-adria",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via G. Badini, 59",
          "zip-code": "45011",
          "comune": "Adria",
          "provincia": "Rovigo",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 652,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Amendolara",
      "website": "https://cultura.gov.it/luogo/museo-archeologico-nazionale-di-amendolara",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "piazza Giovanni XXIII",
          "zip-code": "87071",
          "comune": "Amendolara",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 298,
      "level": 2,
      "name": "Direzione Regionale Musei Friuli Venezia Giulia",
      "website": "musei.fvg.beniculturali.it",
      "entity-tipology": "Direzione Regionale Musei",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Libert\u00e0, 7",
          "zip-code": "34135",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7004,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Aquileia",
      "website": "http://www.museoarcheologicoaquileia.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Roma, 1",
          "zip-code": "33051",
          "comune": "Aquileia",
          "provincia": "Udine",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 298,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 494,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Cagliari",
      "website": "http://museoarcheocagliari.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Arsenale, 1",
          "zip-code": "09124",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 463,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Campli",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=67&nome=museo-archeologico-nazionale-di-campli",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Francesco",
          "zip-code": "64012",
          "comune": "Campli",
          "provincia": "Teramo",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5941,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Canosa di Puglia - Palazzo Sinesi",
      "website": "http://www.musei.puglia.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Kennedy",
          "zip-code": "70053",
          "comune": "Canosa di Puglia",
          "provincia": "Barletta-Andria-Trani",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 4341,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Castiglioncello",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/210/rosignano-marittimo-li-museo-archeologico-nazionale-di-castiglioncello",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Museo, 8",
          "zip-code": "57016",
          "comune": "Castiglioncello",
          "provincia": "Livorno",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6900,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Cividale del Friuli",
      "website": "http://www.museoarcheologicocividale.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Duomo, 13",
          "zip-code": "33100",
          "comune": "Cividale del Friuli",
          "provincia": "Udine",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 298,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 581,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Civitavecchia",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/227/museo-archeologico-nazionale-civitavecchia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Camillo Benso Conte di Cavour, 1",
          "zip-code": "00053",
          "comune": "Civitavecchia",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 633,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Crotone",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=82&nome=museo-archeologico-nazionale-di-crotone",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Risorgimento, 14",
          "zip-code": "88074",
          "comune": "Crotone",
          "provincia": "Crotone",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 622,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Eboli e della Media Valle del Sele",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-eboli",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Francesco, 1",
          "zip-code": "84025",
          "comune": "Eboli",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6865,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Ferrara - Palazzo Costabili",
      "website": "http://www.archeoferrara.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via XX Settembre, 122",
          "zip-code": "44121",
          "comune": "Ferrara",
          "provincia": "Ferrara",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 618,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Firenze",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/198/firenze-maf-museo-archeologico-nazionale",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Santissima Annunziata, 9",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 631,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Formia",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/554/museo-archeologico-nazionale-di-formia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Vitruvio, 184",
          "zip-code": "04023",
          "comune": "Formia",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 957,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Fratta Polesine",
      "website": "https://polomusealeveneto.beniculturali.it/musei/museo-archeologico-nazionale-di-fratta-polesine",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Giovanni Tasso, 1",
          "zip-code": "45025",
          "comune": "Fratta Polesine",
          "provincia": "Rovigo",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 582,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Gioia del Colle",
      "website": "https://musei.puglia.beniculturali.it/musei/museo-archeologico-nazionale-castello-di-gioia-del-colle/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza dei Martiri del 1799",
          "zip-code": "70023",
          "comune": "Gioia del Colle",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 621,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Metaponto",
      "website": "https://musei.basilicata.beniculturali.it/musei/?mid=68&nome=museo-archeologico-nazionale-di-metaponto",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Aristea, 21",
          "zip-code": "75012",
          "comune": "Bernalda",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 1076,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Muro Lucano",
      "website": "https://musei.basilicata.beniculturali.it/musei/?mid=74&nome=museo-archeologico-nazionale-di-muro-lucano",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Seminario, 6",
          "zip-code": "85054",
          "comune": "Muro Lucano",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 323,
      "level": 2,
      "name": "Museo Archeologico Nazionale di Napoli",
      "website": "www.museoarcheologiconapoli.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Museo",
          "zip-code": "80135",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 638,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Napoli",
      "website": "http://www.museoarcheologiconapoli.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Museo, 19",
          "zip-code": "80135",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 323,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5852,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Orvieto",
      "website": "https://www.musei.umbria.beniculturali.it/?page_id=153",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Duomo",
          "zip-code": "05018",
          "comune": "Orvieto",
          "provincia": "Terni",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 304,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 615,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Palestrina e Santuario della Fortuna Primigenia",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/228/museo-archeologico-nazionale-prenestino",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Cortina",
          "zip-code": "00036",
          "comune": "Palestrina",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 569,
      "level": 3,
      "name": "Museo Archeologico nazionale di Pontecagnano",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-pontecagnano",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Lucania, 55",
          "zip-code": "84098",
          "comune": "Pontecagnano Faiano",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 611,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Sarsina",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/museo-archeologico-nazionale-di-sarsina",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cesio Sabino, 38",
          "zip-code": "47027",
          "comune": "Sarsina",
          "provincia": "Forl\u00ec-Cesena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 640,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Siena",
      "website": "https://www.santamariadellascala.com/it/collezioni/museo-archeologico-nazionale",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "piazza Duomo, 1",
          "zip-code": "53100",
          "comune": "Siena",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 620,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Sperlonga e Area archeologica",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/172/museo-archeologico-nazionale-e-area-archeologica-di-sperlonga",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Flacca Km. 16.300",
          "zip-code": "04029",
          "comune": "Sperlonga",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 325,
      "level": 2,
      "name": "Museo Archeologico Nazionale di Taranto",
      "website": "www.museotaranto.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Camillo Benso Conte di Cavour,10",
          "zip-code": "74100",
          "comune": "Taranto",
          "provincia": "Taranto",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 580,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Taranto - MArTA",
      "website": "http://www.museotaranto.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cavour, 10",
          "zip-code": "74123",
          "comune": "Taranto",
          "provincia": "Taranto",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 325,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 587,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Tarquinia",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/556/museo-archeologico-nazionale-di-tarquinia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Cavour, 1",
          "zip-code": "01016",
          "comune": "Tarquinia",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 583,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Tuscania",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/558/museo-archeologico-nazionale-di-tuscania",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Mario Moretti, 1",
          "zip-code": "01017",
          "comune": "Tuscania",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5654,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Venezia",
      "website": "https://polomusealeveneto.beniculturali.it/musei/museo-archeologico-nazionale-di-venezia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza S. Marco, 17/52,",
          "zip-code": "30124",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 632,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Venosa",
      "website": "https://musei.basilicata.beniculturali.it/musei/?mid=77&nome=museo-archeologico-nazionale-di-venosa",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Umberto I, 49",
          "zip-code": "85029",
          "comune": "Venosa",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 1751,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Verona",
      "website": "https://polomusealeveneto.beniculturali.it/musei/museo-archeologico-nazionale-di-verona",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Stradone San Tomaso, 3",
          "zip-code": "37129",
          "comune": "Verona",
          "provincia": "Verona",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5950,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Volcei \"Marcello Gigante\" di Buccino",
      "website": "http://www.volcei.net/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Municipio, 1",
          "zip-code": "84021",
          "comune": "Buccino",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 645,
      "level": 3,
      "name": "Museo Archeologico Nazionale di Vulci",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/551/museo-archeologico-di-vulci",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Castello dell'Abbadia",
          "zip-code": "01011",
          "comune": "Canino",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 617,
      "level": 3,
      "name": "Museo Archeologico Nazionale e Teatro romano di Spoleto",
      "website": "https://www.musei.umbria.beniculturali.it/?page_id=151",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Sant'Agata, 18",
          "zip-code": "06049",
          "comune": "Spoleto",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 304,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 619,
      "level": 3,
      "name": "Museo Archeologico Nazionale e zona archeologica di Luni",
      "website": "https://www.musei.liguria.beniculturali.it/musei?mid=404&nome=museo-archeologico-nazionale-e-zona-archeologica-di-luni",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Luni, 37",
          "zip-code": "19034",
          "comune": "Ortonovo",
          "provincia": "La Spezia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 623,
      "level": 3,
      "name": "Museo Archeologico Nazionale ed Area Archeologica di Cosa",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/227/orbetello-gr-museo-archeologico-nazionale-e-antica-citt-di-cosa",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via delle Ginestre, 35",
          "zip-code": "58015",
          "comune": "Orbetello",
          "provincia": "Grosseto",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 612,
      "level": 3,
      "name": "Museo Archeologico Santa Maria delle Monache",
      "website": "https://www.musei.molise.beniculturali.it/musei?mid=211&nome=museo-archeologico-santa-maria-delle-monache",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Marcelli, 42",
          "zip-code": "86170",
          "comune": "Isernia",
          "provincia": "Isernia",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 607,
      "level": 3,
      "name": "Museo Archeologico statale di Arcevia",
      "website": "https://www.musei.marche.beniculturali.it/musei/?mid=202&nome=museo-archeologico-statale-di-arcevia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Giuseppe Mazzini, 64",
          "zip-code": "60011",
          "comune": "Arcevia",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 313,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 606,
      "level": 3,
      "name": "Museo Archeologico statale di Ascoli Piceno",
      "website": "https://www.musei.marche.beniculturali.it/musei/?mid=204&nome=museo-archeologico-statale-di-ascoli-piceno",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Arringo, 28",
          "zip-code": "63100",
          "comune": "Ascoli Piceno",
          "provincia": "Ascoli Piceno",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 313,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 608,
      "level": 3,
      "name": "Museo Archeologico statale di Cingoli",
      "website": "https://www.musei.marche.beniculturali.it/musei/?mid=205&nome=museo-archeologico-statale-di-cingoli",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Vittorio Emanuele II, 25",
          "zip-code": "62011",
          "comune": "Cingoli",
          "provincia": "Macerata",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 313,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 609,
      "level": 3,
      "name": "Museo Archeologico statale di Urbisaglia",
      "website": "https://www.musei.marche.beniculturali.it/musei/?mid=206&nome=museo-archeologico-statale-di-urbisaglia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Traversa Piccinini",
          "zip-code": "62010",
          "comune": "Urbisaglia",
          "provincia": "Macerata",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 313,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 4956,
      "level": 3,
      "name": "Museo Archeologico territoriale della penisola sorrentina \"Georges Vallet\"",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-gvallet",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ripa di Cassano",
          "zip-code": "80067",
          "comune": "Piano di Sorrento",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 603,
      "level": 3,
      "name": "Museo Boncompagni Ludovisi per le arti decorative, il costume e la moda dei secoli XIX e XX",
      "website": "https://www.direzionemuseistataliroma.beniculturali.it/istituti/museo-boncompagni-ludovisi-per-le-arti-decorative-il-costume-e-la-moda-dei-secoli-xix-e-xx/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Boncompagni, 18",
          "zip-code": "00187",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 381,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 602,
      "level": 3,
      "name": "Museo casa natale di Gabriele d'Annunzio",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=65&nome=museo-casa-natale-di-gabriele-dannunzio",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Gabriele Manthon\u00e8, 116",
          "zip-code": "65127",
          "comune": "Pescara",
          "provincia": "Pescara",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5655,
      "level": 3,
      "name": "Museo d\u2019Arte Orientale Venezia",
      "website": "https://polomusealeveneto.beniculturali.it/musei/museo-d%E2%80%99arte-orientale",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Santa Croce, 2076",
          "zip-code": "30135",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5175,
      "level": 3,
      "name": "Museo del Cenacolo Vinciano",
      "website": "www.cenacolovinciano.org/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza di Santa Maria delle Grazie, 2",
          "zip-code": "20100",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 663,
      "level": 3,
      "name": "Museo del Lapidario di Urbino",
      "website": "https://www.beniculturali.it/luogo/museo-del-lapidario-di-urbino",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Duca Federico, 1",
          "zip-code": "61029",
          "comune": "Urbino",
          "provincia": "Pesaro e Urbino",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 313,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 952,
      "level": 3,
      "name": "Museo del Palazzo della Dogana dei Grani",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-palazzo-atripalda",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Umberto I",
          "zip-code": "83043",
          "comune": "Atripalda",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6802,
      "level": 3,
      "name": "Museo del Risorgimento",
      "website": "http://musei.beniculturali.it/musei?mid=1361&nome=museo-del-risorgimento",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pascali, 40",
          "zip-code": "88100",
          "comune": "Catanzaro",
          "provincia": "Catanzaro",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 233,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le Province di Brindisi e Lecce",
      "website": "http://www.sabap-le.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Antonio Galateo, 2",
          "zip-code": "73100",
          "comune": "Lecce",
          "provincia": "Lecce",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6918,
      "level": 3,
      "name": "Museo della Cartapesta",
      "website": "http://musei.beniculturali.it/musei?mid=6028&nome=museo-della-cartapesta",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale XXV Luglio",
          "zip-code": "73100",
          "comune": "Lecce",
          "provincia": "Lecce",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 233,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 572,
      "level": 3,
      "name": "Museo della ceramica Duca di Martina in Villa Floridiana",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Aniello Falcone, 171 \u2013 Via Domenico Cimarosa, 77",
          "zip-code": "80127",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5333,
      "level": 3,
      "name": "Museo della Certosa di Pavia",
      "website": "http://www.museo.certosadipavia.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Monumento, 4",
          "zip-code": "27012",
          "comune": "Certosa di Pavia",
          "provincia": "Pavia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5942,
      "level": 3,
      "name": "Museo della citt\u00e0 e del territorio - Sepino",
      "website": "https://www.musei.molise.beniculturali.it/musei?mid=209&nome=museo-della-citta-e-del-territorio-sepino",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Contrada Altilia I, SP82",
          "zip-code": "86017",
          "comune": "Sepino",
          "provincia": "Campobasso",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 686,
      "level": 3,
      "name": "Museo della Moda e del Costume",
      "website": "https://www.uffizi.it/palazzo-pitti/museo-della-moda-e-del-costume",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de' Pitti, 1",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5153,
      "level": 3,
      "name": "Museo della via Ostiense - Porta San Paolo",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/museo-della-via-ostiense-porta-san-paolo_3032/",
      "entity-tipology": "museo",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Via Raffaele Persichetti, 3",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 544,
      "level": 3,
      "name": "Museo delle arti e tradizioni popolari dell\u2019Alta Valle del Tevere - Palazzo Taglieschi",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/194/anghiari-ar-museo-delle-arti-e-tradizioni-popolari-dellalta-valle-del-tevere-palazzo-taglieschi",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Mameli",
          "zip-code": "52031",
          "comune": "Anghiari",
          "provincia": "Arezzo",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 790,
      "level": 3,
      "name": "Museo delle Cappelle Medicee",
      "website": "https://www.bargellomusei.beniculturali.it/musei/2/medicee/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza di Madonna degli Aldobrandini, 6",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 326,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 598,
      "level": 3,
      "name": "Museo delle carrozze (Palazzo Pitti)",
      "website": "http://www.uffizi.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de' Pitti, 1",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 342,
      "level": 2,
      "name": "Museo delle Civilt\u00e0",
      "website": "www.museocivilta.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Guglielmo Marconi, 14",
          "zip-code": "00144",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6913,
      "level": 3,
      "name": "Museo delle Civilt\u00e0",
      "website": "https://museocivilta.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Guglielmo Marconi, 14",
          "zip-code": "00144",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 342,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 597,
      "level": 3,
      "name": "Museo delle navi romane di Nemi",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/229/museo-delle-navi-romane",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Diana, 13",
          "zip-code": "00040",
          "comune": "Nemi",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 596,
      "level": 3,
      "name": "Museo delle porcellane",
      "website": "https://www.uffizi.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de' Pitti, 1",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 945,
      "level": 3,
      "name": "Museo di Antichit\u00e0",
      "website": "https://www.museireali.beniculturali.it/museo-antichita/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Reale, 1",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 332,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 785,
      "level": 3,
      "name": "Museo di Casa Romei",
      "website": "http://www.polomusealeemiliaromagna.beniculturali.it/musei/museodicasaromei",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Savonarola, 28-30",
          "zip-code": "44121",
          "comune": "Ferrara",
          "provincia": "Ferrara",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 784,
      "level": 3,
      "name": "Museo di Casa Vasari",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/192/museo-di-casa-vasari-arezzo",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via XX Settembre, 55",
          "zip-code": "52100",
          "comune": "Arezzo",
          "provincia": "Arezzo",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 599,
      "level": 3,
      "name": "Museo di Palazzo Davanzati",
      "website": "http://www.bargellomusei.beniculturali.it/musei/4/davanzati/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Porta Rossa, 13",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 326,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5947,
      "level": 3,
      "name": "Museo di Palazzo Grimani",
      "website": "http://www.polomusealeveneto.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Castello Ramo Grimani, 4858  -  Ruga Giuffa, 4858",
          "zip-code": "30122",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 558,
      "level": 3,
      "name": "Museo di Palazzo Mansi",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/182/lucca-museo-di-palazzo-mansi",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Galli Tassi, 43",
          "zip-code": "55100",
          "comune": "Lucca",
          "provincia": "Lucca",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6989,
      "level": 3,
      "name": "Museo di Palazzo Nieddu del Rio",
      "website": "http://musei.beniculturali.it/musei?mid=8411&nome=museo-di-palazzo-nieddu-del-rio",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Vittorio Emanuele",
          "zip-code": "89044",
          "comune": "Locri",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 594,
      "level": 3,
      "name": "Museo di San Francesco a Folloni",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-montella",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Francesco",
          "zip-code": "83048",
          "comune": "Montella",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 593,
      "level": 3,
      "name": "Museo di San Marco",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/190/firenze-museo-di-san-marco",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Marco, 3",
          "zip-code": "50121",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 548,
      "level": 3,
      "name": "Museo Diego Aragona Pignatelli Cortes e Museo delle Carrozze",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-pignatelli",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Riviera di Chjaia, 200",
          "zip-code": "80121",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 4740,
      "level": 3,
      "name": "Museo e Galleria Mozzi Bardini",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.phpit/225/firenze-museo-e-galleria-mozzi-bardini",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de' Mozzi, 2",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6391,
      "level": 3,
      "name": "Museo e Parco archeologico Archeoderi",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=1366&nome=museo-e-parco-archeologico-archeoderi",
      "entity-tipology": "museo e parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 San Pasquale, s.n.c.",
          "zip-code": "89035",
          "comune": "Bova Marina",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 870,
      "level": 3,
      "name": "Museo e Parco archeologico dell'Antica Kaulon",
      "website": "http://www.museoarcheologicomonasterace.it",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Contrada Runci",
          "zip-code": "89040",
          "comune": "Monasterace",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 212,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la citt\u00e0 metropolitana di Reggio Calabria e la provincia di Vibo Valentia",
      "website": "http://www.sabap-rc.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Fata Morgana, 3",
          "zip-code": "89125",
          "comune": "Reggio di Calabria",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6809,
      "level": 3,
      "name": "Museo e Parco archeologico di Medma",
      "website": "https://sabap-rc.beniculturali.it/it/215/il-museo",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Filippo Medma",
          "zip-code": "89025",
          "comune": "Rosarno",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 212,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 400,
      "level": 3,
      "name": "Museo e Parco archeologico nazionale di Capo Colonna",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=83&nome=museo-e-parco-archeologico-nazionale-di-capo-colonna",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale 50/Via Hera Lacinia",
          "zip-code": "88900",
          "comune": "Crotone",
          "provincia": "Crotone",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 564,
      "level": 3,
      "name": "Museo e Parco archeologico nazionale di Locri",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=84&nome=museo-e-parco-archeologico-nazionale-di-locri",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Statale 106 Jonica - Contrada Masar\u00e0",
          "zip-code": "89044",
          "comune": "Locri",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 502,
      "level": 3,
      "name": "Museo e Parco archeologico nazionale di Scolacium",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=332&nome=museo-e-parco-archeologico-nazionale-di-scolacium",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Scylletion",
          "zip-code": "88021",
          "comune": "Borgia",
          "provincia": "Catanzaro",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 327,
      "level": 2,
      "name": "Museo e Real Bosco di Capodimonte",
      "website": "www.museocapodimonte.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Miano, 2",
          "zip-code": "80137",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 595,
      "level": 3,
      "name": "Museo e Real Bosco di Capodimonte",
      "website": "http://www.museocapodimonte.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Miano, 2",
          "zip-code": "80131",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 327,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 589,
      "level": 3,
      "name": "Museo Giacomo Manz\u00f9",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/247/museo-giacomo-manz",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Laurentina, Km 32",
          "zip-code": "00040",
          "comune": "Ardea",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 591,
      "level": 3,
      "name": "Museo Hendrik Christian Andersen",
      "website": "https://www.direzionemuseistataliroma.beniculturali.it/istituti/museo-hendrik-christian-andersen-roma/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pasquale Stanislao Mancini, 20",
          "zip-code": "00196",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 381,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 590,
      "level": 3,
      "name": "Museo lapidario estense",
      "website": "https://www.gallerie-estensi.beniculturali.it/museo-lapidario-estense/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Porta Sant'Agostino, 337",
          "zip-code": "41121",
          "comune": "Modena",
          "provincia": "Modena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 317,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 588,
      "level": 3,
      "name": "Museo Mario Praz",
      "website": "https://www.direzionemuseistataliroma.beniculturali.it/istituti/casa-museo-mario-praz/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giuseppe Zanardelli, 3",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 381,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 647,
      "level": 3,
      "name": "Museo Nazionale \"Giuseppe Andreassi\" e Parco archeologico di Egnazia",
      "website": "https://musei.puglia.beniculturali.it/musei/museo-nazionale-giuseppe-andreassi-e-parco-archeologico-di-egnazia/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via delle carceri, 87",
          "zip-code": "72010",
          "comune": "Fasano",
          "provincia": "Brindisi",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 584,
      "level": 3,
      "name": "Museo Nazionale archeologico Cerite",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/230/museo-nazionale-archeologico-cerite",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Santa Maria",
          "zip-code": "00053",
          "comune": "Cerveteri",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 625,
      "level": 3,
      "name": "Museo Nazionale archeologico della Sibaritide",
      "website": "https://cultura.gov.it/luogo/museo-nazionale-archeologico-della-sibaritide",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Casa Bianca",
          "zip-code": "87011",
          "comune": "Cassano all'Ionio",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5521,
      "level": 3,
      "name": "Museo Nazionale Archeologico di Altamura",
      "website": "https://musei.puglia.beniculturali.it/musei/museo-nazionale-archeologico-di-altamura/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Santeramo in Colle, 88",
          "zip-code": "70022",
          "comune": "Altamura",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 637,
      "level": 3,
      "name": "Museo Nazionale Archeologico di Manfredonia",
      "website": "https://musei.puglia.beniculturali.it/musei/museo-nazionale-archeologico-di-manfredonia/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale Ferri, 1",
          "zip-code": "71043",
          "comune": "Manfredonia",
          "provincia": "Foggia",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 579,
      "level": 3,
      "name": "Museo Nazionale archeologico ed etnografico \"Giovanni Antonio Sanna\"",
      "website": "https://musei.sardegna.beniculturali.it/musei/museo-nazionale-archeologico-ed-etnografico-g-a-sanna-di-sassari/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Roma, 64",
          "zip-code": "07100",
          "comune": "Sassari",
          "provincia": "Sassari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 577,
      "level": 3,
      "name": "Museo Nazionale Atestino",
      "website": "https://polomusealeveneto.beniculturali.it/musei/museo-nazionale-atestino",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Guido Negri, 9",
          "zip-code": "35042",
          "comune": "Este",
          "provincia": "Padova",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6894,
      "level": 3,
      "name": "Museo Nazionale Collezione Salce",
      "website": "http://www.collezionesalce.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Carlo Alberto, 31",
          "zip-code": "31100",
          "comune": "Treviso",
          "provincia": "Treviso",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 576,
      "level": 3,
      "name": "Museo Nazionale Concordiese di Portogruaro",
      "website": "https://polomusealeveneto.beniculturali.it/musei/museo-archeologico-nazionale-concordiense",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Seminario, 26",
          "zip-code": "30026",
          "comune": "Portogruaro",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 546,
      "level": 3,
      "name": "Museo Nazionale d'arte medievale e moderna",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/195/arezzo-museo-nazionale-darte-medievale-e-moderna",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Lorentino, 8",
          "zip-code": "52100",
          "comune": "Arezzo",
          "provincia": "Arezzo",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 578,
      "level": 3,
      "name": "Museo Nazionale d'Arte Medievale e Moderna della Basilicata - Palazzo Lanfranchi - Matera",
      "website": "https://www.museonazionaledimatera.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Giovanni Pascoli, 1",
          "zip-code": "75100",
          "comune": "Matera",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 600,
      "level": 3,
      "name": "Museo Nazionale degli strumenti musicali",
      "website": "http://museostrumentimusicali.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza di Santa Croce in Gerusalemme, 9",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 381,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 574,
      "level": 3,
      "name": "Museo Nazionale del Bargello",
      "website": "http://www.bargellomusei.beniculturali.it/musei/1/bargello/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Proconsolo, 4",
          "zip-code": "50122",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 326,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 573,
      "level": 3,
      "name": "Museo Nazionale del Palazzo di Venezia",
      "website": "http://museopalazzovenezia.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Venezia, 3",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 523,
      "level": 3,
      "name": "Museo Nazionale del Paleolitico di Isernia",
      "website": "https://www.musei.molise.beniculturali.it/musei?mid=212&nome=museo-nazionale-del-paleolitico-di-isernia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ramiera Vecchia",
          "zip-code": "86170",
          "comune": "Isernia",
          "provincia": "Isernia",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 747,
      "level": 3,
      "name": "Museo Nazionale della Certosa Monumentale di Calci",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/180/calci-pi-museo-nazionale-della-certosa-monumentale-di-calci",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Roma, 79",
          "zip-code": "56011",
          "comune": "Calci",
          "provincia": "Pisa",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 568,
      "level": 3,
      "name": "Museo Nazionale delle residenze Napoleoniche Palazzina dei Mulini",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/217/portoferraio-li-museo-nazionale-delle-residenze-napoleoniche-palazzina-dei-mulini",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Salita Napoleone",
          "zip-code": "57037",
          "comune": "Portoferraio",
          "provincia": "Livorno",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 567,
      "level": 3,
      "name": "Museo Nazionale delle residenze Napoleoniche Villa S. Martino",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/218/portoferraio-li-museo-nazionale-delle-residenze-napoleoniche-dellisola-delba-villa-di-san-martino",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 San Martino",
          "zip-code": "57037",
          "comune": "Portoferraio",
          "provincia": "Livorno",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 513,
      "level": 3,
      "name": "Museo Nazionale dell'et\u00e0 neoclassica in Romagna - Palazzo Milzetti",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/museo-dell-eta-neoclassica-in-romagna-palazzo-milzetti",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giulio Cesare Tonducci, 15",
          "zip-code": "48018",
          "comune": "Faenza",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6819,
      "level": 3,
      "name": "Museo Nazionale di Archeologia del Mare",
      "website": "http://polomusealeveneto.beniculturali.it/musei/museo-nazionale-di-archeologia-del-mare",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Nuova, 80",
          "zip-code": "30021",
          "comune": "Caorle",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6748,
      "level": 3,
      "name": "Museo Nazionale di Archeologia Subacquea",
      "website": "http://musei.beniculturali.it/musei?mid=4519&nome=museo-nazionale-di-archeologia-subacquea",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Lungomare Nazario Sauro",
          "zip-code": "34073",
          "comune": "Grado",
          "provincia": "Gorizia",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 298,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 566,
      "level": 3,
      "name": "Museo Nazionale di Casa Giusti",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/224/monsummano-terme-pt-museo-nazionale-di-casa-giusti",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Vincenzo Martini, 18",
          "zip-code": "51015",
          "comune": "Monsummano Terme",
          "provincia": "Pistoia",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 565,
      "level": 3,
      "name": "Museo Nazionale di Castel Sant'Angelo",
      "website": "http://castelsantangelo.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Lungotevere Castello, 50",
          "zip-code": "00193",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 381,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 440,
      "level": 3,
      "name": "Museo Nazionale di Castello Pandone",
      "website": "http://www.castellopandone.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Tre Cappelle",
          "zip-code": "86079",
          "comune": "Venafro",
          "provincia": "Isernia",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 563,
      "level": 3,
      "name": "Museo Nazionale di Palazzo Reale",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/202/pisa-museo-nazionale-di-palazzo-reale",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Lungarno Antonio Pacinotti, 46",
          "zip-code": "56126",
          "comune": "Pisa",
          "provincia": "Pisa",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 586,
      "level": 3,
      "name": "Museo Nazionale di Ravenna",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/museo-nazionale-di-ravenna",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Vitale, 17",
          "zip-code": "48121",
          "comune": "Ravenna",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 562,
      "level": 3,
      "name": "Museo Nazionale di San Matteo",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/204/pisa-museo-nazionale-di-san-matteo",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Matteo In Soarta, 1",
          "zip-code": "56127",
          "comune": "Pisa",
          "provincia": "Pisa",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 561,
      "level": 3,
      "name": "Museo Nazionale di Villa Guinigi",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/181/lucca-museo-nazionale-di-villa-guinigi",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Quarquonia, 4",
          "zip-code": "55100",
          "comune": "Lucca",
          "provincia": "Lucca",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 560,
      "level": 3,
      "name": "Museo Nazionale di Villa Pisani",
      "website": "http://www.villapisani.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Doge Pisani, 7",
          "zip-code": "30039",
          "comune": "Stra",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 635,
      "level": 3,
      "name": "Museo Nazionale e Area archeologica di Altino",
      "website": "https://polomusealeveneto.beniculturali.it/musei/museo-archeologico-nazionale-e-area-archeologica-di-altino",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via S. Eliodoro, 56",
          "zip-code": "30020",
          "comune": "Quarto d'Altino",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 556,
      "level": 3,
      "name": "Museo Nazionale etrusco \"Pompeo Aria\"",
      "website": "http://www.archeobologna.beniculturali.it/marzabotto/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Porrettana Sud, 13",
          "zip-code": "40043",
          "comune": "Marzabotto",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 641,
      "level": 3,
      "name": "Museo Nazionale Etrusco di Chiusi. Necropoli di Poggio Renzo e Tomba del Colle",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/228/chiusi-si-museo-nazionale-etrusco-di-chiusi-necropoli-di-poggio-renzo-e-tomba-del-colle",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Porsenna, 93",
          "zip-code": "53043",
          "comune": "Chiusi",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 343,
      "level": 2,
      "name": "Museo Nazionale Etrusco di Villa Giulia",
      "website": "www.museoetru.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale di Villa Giulia, 9",
          "zip-code": "00196",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 557,
      "level": 3,
      "name": "Museo Nazionale etrusco di Villa Giulia",
      "website": "http://www.museoetru.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale di Villa Giulia, 9",
          "zip-code": "00196",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 343,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 613,
      "level": 3,
      "name": "Museo Nazionale etrusco Rocca Albornoz",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/174/museo-nazionale-etrusco-rocca-albornoz",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Rocca, 21",
          "zip-code": "01100",
          "comune": "Viterbo",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6877,
      "level": 3,
      "name": "Museo Nazionale Jatta",
      "website": "https://musei.puglia.beniculturali.it/musei/museo-archeologico-nazionale-jatta/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza G. Bovio, 35",
          "zip-code": "70037",
          "comune": "Ruvo di Puglia",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6667,
      "level": 3,
      "name": "Museo Nazionale Memoriale Giuseppe Garibaldi",
      "website": "https://www.garibaldicaprera.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Fortezza Arbuticci",
          "zip-code": "07024",
          "comune": "La Maddalena",
          "provincia": "Olbia-Tempio",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 362,
      "level": 2,
      "name": "Museo Nazionale Romano",
      "website": "www.museonazionaleromano.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via di S. Apollinare (Palazzo Altemps)",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 554,
      "level": 3,
      "name": "Museo Nazionale Romano - Aula ottagona delle Terme di Diocleziano",
      "website": "http://musei.beniculturali.it/musei?mid=379&nome=museo-nazionale-romano-aula-ottagona-delle-terme-di-diocleziano",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giuseppe Romita, 8",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 362,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 553,
      "level": 3,
      "name": "Museo Nazionale Romano - Crypta Balbi",
      "website": "https://museonazionaleromano.beniculturali.it/crypta-balbi/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via delle Botteghe Oscure, 31",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 362,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 551,
      "level": 3,
      "name": "Museo Nazionale Romano - Palazzo Altemps",
      "website": "https://museonazionaleromano.beniculturali.it/palazzo-altemps/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza di Sant\u2019Apollinare, 46",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 362,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 550,
      "level": 3,
      "name": "Museo Nazionale Romano - Palazzo Massimo",
      "website": "https://museonazionaleromano.beniculturali.it/palazzo-massimo/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo di Villa Peretti, 2",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 362,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 552,
      "level": 3,
      "name": "Museo Nazionale Romano - Terme di Diocleziano",
      "website": "https://museonazionaleromano.beniculturali.it/terme-di-diocleziano/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Enrico de Nicola, 78",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 362,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5958,
      "level": 3,
      "name": "Museo Palazzo Pistilli",
      "website": "https://www.musei.molise.beniculturali.it/musei?mid=5212&nome=palazzo-pistilli",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Salita San Bartolomeo, 18",
          "zip-code": "86100",
          "comune": "Campobasso",
          "provincia": "Campobasso",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 955,
      "level": 3,
      "name": "Museo Palazzo Reale di Genova",
      "website": "http://www.palazzorealegenova.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Balbi, 10",
          "zip-code": "16126",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 329,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 549,
      "level": 3,
      "name": "Museo paleocristiano di Aquileia",
      "website": "https://musei.fvg.beniculturali.it/musei?mid=7198&nome=museo-paleocristiano-di-aquileia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Monastero",
          "zip-code": "33051",
          "comune": "Aquileia",
          "provincia": "Udine",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 298,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 547,
      "level": 3,
      "name": "Museo preistorico dei \"Balzi Rossi\" e zona archeologica",
      "website": "https://www.musei.liguria.beniculturali.it/musei?mid=403&nome=museo-preistorico-dei-balzi-rossi-e-zona-archeologica",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Balzi Rossi, 9",
          "zip-code": "18039",
          "comune": "Ventimiglia",
          "provincia": "Imperia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 3113,
      "level": 3,
      "name": "Museo Richard-Ginori della manifattura di Doccia",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.phpit/278/sesto-fiorentino-fi-museo-richard-ginori-della-manifattura-di-doccia",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Pratese, 31",
          "zip-code": "50019",
          "comune": "Sesto Fiorentino",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5126,
      "level": 3,
      "name": "Museo sannitico",
      "website": "https://www.musei.molise.beniculturali.it/musei?mid=208&nome=museo-sannitico",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Anselmo Chiarizia, 12",
          "zip-code": "86100",
          "comune": "Campobasso",
          "provincia": "Campobasso",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 545,
      "level": 3,
      "name": "Museo statale di Mileto",
      "website": "https://musei.calabria.beniculturali.it/musei?mid=86&nome=museo-statale-di-mileto",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale 10",
          "zip-code": "89852",
          "comune": "Mileto",
          "provincia": "Vibo Valentia",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 543,
      "level": 3,
      "name": "Museo storico archeologico di Nola",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-museo-nola",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Senatore Cocozza, 2",
          "zip-code": "80035",
          "comune": "Nola",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 344,
      "level": 2,
      "name": "Museo Storico e Parco del Castello di Miramare",
      "website": "www.miramare.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "viale Miramare",
          "zip-code": "34151",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6665,
      "level": 3,
      "name": "Museo Storico e il Parco del Castello di Miramare",
      "website": "http://www.miramare.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Miramare",
          "zip-code": "34151",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 344,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 949,
      "level": 3,
      "name": "Museo Tattile Statale Omero",
      "website": "http://www.museoomero.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Banchina Giovanni da Chio, 28",
          "zip-code": "60121",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 313,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 822,
      "level": 3,
      "name": "Necropoli \"Madonna dell'Olivo\"",
      "website": "http://musei.beniculturali.it/musei?mid=401&nome=necropoli-madonna-dellolivo",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell'Olivo",
          "zip-code": "01017",
          "comune": "Tuscania",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 539,
      "level": 3,
      "name": "Necropoli dei Monterozzi di Tarquinia",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/556/museo-archeologico-nazionale-di-tarquinia-e-necropoli-di-monterozzi",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale 43",
          "zip-code": "01016",
          "comune": "Tarquinia",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 541,
      "level": 3,
      "name": "Necropoli della Banditaccia",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/230/museo-nazionale-archeologico-cerite-e-necropoli-della-banditaccia",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Necropoli, 43",
          "zip-code": "00052",
          "comune": "Cerveteri",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5944,
      "level": 3,
      "name": "Necropoli di Poggio Renzo",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/228/chiusi-si-museo-nazionale-etrusco-di-chiusi-necropoli-di-poggio-renzo-e-tomba-del-colle;",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Porsenna, 93",
          "zip-code": "53043",
          "comune": "Chiusi",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5954,
      "level": 3,
      "name": "Necropoli di Villa Doria Pamphilj",
      "website": "http://musei.beniculturali.it/musei?mid=4395&nome=necropoli-di-villa-doria-pamphilj",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Aurelia Antica, 111",
          "zip-code": "00165",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 538,
      "level": 3,
      "name": "Necropoli etrusca di Crocifisso del Tufo",
      "website": "https://www.musei.umbria.beniculturali.it/?page_id=5293",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Volsinia",
          "zip-code": "05018",
          "comune": "Orvieto",
          "provincia": "Terni",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 304,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 536,
      "level": 3,
      "name": "Necropoli Romana di Voghenza",
      "website": "http://www.archeobologna.beniculturali.it/ferrara/area.htm#Necropoli_Romana_di_Voghenza",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Dante Alighieri, 8",
          "zip-code": "44019",
          "comune": "Voghiera",
          "provincia": "Ferrara",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 357,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 25,
      "level": 2,
      "name": "Opificio delle Pietre Dure",
      "website": "www.opificiodellepietredure.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via degli Alfani, 78",
          "zip-code": "50121",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 295,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 530,
      "level": 3,
      "name": "Opificio delle pietre dure",
      "website": "http://www.opificiodellepietredure.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via  degli Alfani, 78",
          "zip-code": "50121",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 25,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 529,
      "level": 3,
      "name": "Oratorio di San Desiderio",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/215/pistoia-oratorio-di-san-desiderio",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Laudesi, 53",
          "zip-code": "51100",
          "comune": "Pistoia",
          "provincia": "Pistoia",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 521,
      "level": 3,
      "name": "Palazzo Altieri",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/238/palazzo-altieri",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Umberto I, 20",
          "zip-code": "01010",
          "comune": "Oriolo Romano",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 682,
      "level": 3,
      "name": "Palazzo Barberini",
      "website": "http://www.barberinicorsini.org/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via delle Quattro Fontane, 13",
          "zip-code": "00184",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 322,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 198,
      "level": 2,
      "name": "Soprintendenza Archivistica della Sardegna",
      "website": "www.sa-sardegna.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Marche, 15",
          "zip-code": "09127",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 388,
      "level": 3,
      "name": "Palazzo Barrago",
      "website": "https://www.sa-sardegna.beniculturali.it/index.php?id=461",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Marche, 17",
          "zip-code": "09127",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 198,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5167,
      "level": 3,
      "name": "Palazzo Besta",
      "website": "https://musei.lombardia.beniculturali.it/musei/palazzo-besta/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Fabio Besta, 8",
          "zip-code": "23036",
          "comune": "Teglio",
          "provincia": "Sondrio",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 194,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica della Campania",
      "website": "www.sab-campania.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via S. Biagio dei Librai, 121",
          "zip-code": "80138",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7053,
      "level": 3,
      "name": "Palazzo Carafa, Soprintendenza archivistica e bibliografica della Campania",
      "website": "https://www.sab-campania.beniculturali.it/la-soprintendenza/palazzo-carafa/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Biagio dei Librai, 121",
          "zip-code": "80138",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 194,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 4852,
      "level": 3,
      "name": "Palazzo Carignano",
      "website": "http://polomusealepiemonte.beniculturali.it/index.php/musei-e-luoghi-della-cultura/palazzo-carignano/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Accademia delle Scienze, 5",
          "zip-code": "10123",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 300,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6799,
      "level": 3,
      "name": "Palazzo Chigi Piccolomini alla Postierla",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.phpit/232/siena-palazzo-chigi-piccolomini-alla-postierla",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Capitano, 1",
          "zip-code": "53100",
          "comune": "Siena",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5172,
      "level": 3,
      "name": "Palazzo De Lieto - Pinacoteca Angelo Brando di Maratea",
      "website": "https://musei.basilicata.beniculturali.it/musei/?mid=1353&nome=palazzo-de-lieto-pinacoteca-angelo-brando",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gafaro, 5",
          "zip-code": "85046",
          "comune": "Maratea",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 519,
      "level": 3,
      "name": "Palazzo de Nordis",
      "website": "https://www.sabap.fvg.beniculturali.it/soprintendenza/palazzo-de-nordis/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Duomo, 5",
          "zip-code": "33043",
          "comune": "Cividale del Friuli",
          "provincia": "Udine",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 517,
      "level": 3,
      "name": "Palazzo di Teodorico",
      "website": "https://www.polomusealeemiliaromagna.beniculturali.it/musei/palazzo-di-teodorico",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Roma",
          "zip-code": "48121",
          "comune": "Ravenna",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 516,
      "level": 3,
      "name": "Palazzo ducale di Gubbio",
      "website": "https://www.musei.umbria.beniculturali.it/?page_id=3679",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Federico da Montefeltro",
          "zip-code": "06024",
          "comune": "Gubbio",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 304,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 515,
      "level": 3,
      "name": "Palazzo Ducale di Sassuolo",
      "website": "https://www.gallerie-estensi.beniculturali.it/palazzo-ducale-di-sassuolo/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzale della Rosa, 10",
          "zip-code": "41049",
          "comune": "Sassuolo",
          "provincia": "Modena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 317,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6821,
      "level": 3,
      "name": "Palazzo Ducale di Tricarico",
      "website": "https://www.basilicata.beniculturali.it/luogo-della-cultura/tricarico-mt-sede-espositiva-di-palazzo-ducale/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Vittorio Veneto, 2",
          "zip-code": "75019",
          "comune": "Tricarico",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6972,
      "level": 3,
      "name": "Palazzo Economo",
      "website": "https://www.sabap.fvg.beniculturali.it/soprintendenza/palazzo-economo/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Libert\u00e0, 7",
          "zip-code": "34132",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 514,
      "level": 3,
      "name": "Palazzo Farnese",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/239/palazzo-farnese",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Farnese, 1",
          "zip-code": "01032",
          "comune": "Caprarola",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 200,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica della Toscana",
      "website": "www.sa-toscana.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Ginori, 7",
          "zip-code": "50123",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 6872,
      "level": 3,
      "name": "Palazzo Neroni",
      "website": "http://www.soprintendenzaarchivisticatoscana.beniculturali.it/index.php?id=57",
      "entity-tipology": "archivio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via de' Ginori, 7",
          "zip-code": "50100",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 200,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 7024,
      "level": 3,
      "name": "Palazzo Patrizi Clementi",
      "website": "http://www.sabap-rm-met.beniculturali.it/it/397/palazzo-patrizi-clementi",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cavalletti, 2",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5663,
      "level": 3,
      "name": "Palazzo Pepoli Campogrande",
      "website": "https://www.pinacotecabologna.beniculturali.it/it/palazzo_pepoli_b",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Castiglione, 7",
          "zip-code": "40124",
          "comune": "Bologna",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 664,
      "level": 3,
      "name": "Palazzo Reale",
      "website": "https://www.reggiadicaserta.beniculturali.it/palazzo-reale/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Carlo di Borbone",
          "zip-code": "81100",
          "comune": "Caserta",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 333,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 511,
      "level": 3,
      "name": "Palazzo Reale di Napoli",
      "website": "https://palazzorealedinapoli.org/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Plebiscito, 1",
          "zip-code": "80132",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 512,
      "level": 3,
      "name": "Palazzo Reale di Torino",
      "website": "https://www.museireali.beniculturali.it/palazzo-reale/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Reale, 1",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 332,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5522,
      "level": 3,
      "name": "Palazzo Simi - Centro operativo per l'Archeologia",
      "website": "http://www.sabap-ba.beniculturali.it/index.php?it/199/palazzo-simi-bari",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Lamberti, 1",
          "zip-code": "70122",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 230,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6995,
      "level": 3,
      "name": "Palazzo Valdesi",
      "website": "http://www.archeologiabelleartiepaesaggiocosenza.beniculturali.it/categorie.php?set=0&liv=3&padre=9",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza dei Valdesi, 13",
          "zip-code": "87100",
          "comune": "Cosenza",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 261,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5474,
      "level": 3,
      "name": "Paleolab",
      "website": "https://www.beniculturali.it/luogo/paleolab",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Civita Cavere",
          "zip-code": "82030",
          "comune": "Pietraroja",
          "provincia": "Benevento",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 248,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 509,
      "level": 3,
      "name": "Pantheon",
      "website": "https://www.direzionemuseistataliroma.beniculturali.it/istituti/pantheon/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Rotonda",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 381,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 651,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei",
      "website": "http://www.pafleg.it",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Castello, 39",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6111,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Necropoli c.d. di San Vito, settore della necropoli di Puteoli",
      "website": "http://www.pafleg.it/it/4388/localit/78/necropoli-di-san-vito",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Campana Vecchia",
          "zip-code": "80078",
          "comune": "Pozzuoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6116,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Necropoli di Cappella, Misenum",
      "website": "Necropoli di Cappella - Parco Archeologico Campi Flegrei (pafleg.it)",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piaza Michele Sovente",
          "zip-code": "80070",
          "comune": "Monte di Procida",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 537,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Necropoli di Via Celle, settore della necropoli di Puteoli",
      "website": "http://www.pafleg.it/it/4388/localit/68/la-necropoli-di-via-celle",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Celle, 1",
          "zip-code": "80078",
          "comune": "Pozzuoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 506,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Parco archeologico delle Terme di Baia",
      "website": "http://www.pafleg.it/it/4388/localit/51/terme-romane",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Sella di Baia, 22",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 505,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Parco archeologico di Cuma",
      "website": "http://www.pafleg.it/it/4388/localit/57/parco-archeologico-di-cuma",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Monte di Cuma, 1",
          "zip-code": "80078",
          "comune": "Pozzuoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 500,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Parco archeologico sommerso di Baia",
      "website": "http://www.pafleg.it/it/4388/localit/52/parco-sommerso",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Lucullo, 94",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 496,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Parco monumentale di Baia",
      "website": "http://www.pafleg.it/it/4388/localit/53/parco-monumentale",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Bellavista, 37",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 490,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Piscina Mirabilis, Misenum",
      "website": "http://www.pafleg.it/it/4388/localit/65/piscina-mirabile",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Piscina Mirabile, 27",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 474,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Sacello degli Augustali, Misenum",
      "website": "http://www.pafleg.it/it/4388/localit/62/sacello-degli-augustali",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Sacello degli Augustali, 42",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6107,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Stadio puteolano di Antonino Pio, Puteoli",
      "website": "http://www.pafleg.it/it/4388/localit/72/lo-stadio-puteolano-di-antonino-pio",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Castello, 37      via Campi Flegrei, 11-17",
          "zip-code": "80070",
          "comune": "Bacoli  /Pozzuoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 460,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Teatro romano, Misenum",
      "website": "http://www.pafleg.it/it/4388/localit/63/teatro-romano",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Plinio il Vecchio, 27",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6128,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Tempio c.d. di Diana, Baia",
      "website": "http://www.pafleg.it/it/4388/localit/54/tempio-di-diana",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Alcide De Gasperi",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 450,
      "level": 3,
      "name": "Parco archeologico dei Campi Flegrei - Tomba c.d. di Agrippina, Bauli",
      "website": "http://www.pafleg.it/it/4388/localit/50/tomba-di-agrippina",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ortenzio/Via Privata Falci, 39",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6810,
      "level": 3,
      "name": "Parco archeologico dei Taureani",
      "website": "https://www.beniculturali.it/luogo/parco-archeologico-dei-taureani",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Taureana",
          "zip-code": "89015",
          "comune": "Palmi",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 212,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6775,
      "level": 3,
      "name": "Parco archeologico del Colosseo - Arco di Costantino",
      "website": "https://parcocolosseo.it/area/arco-di-costantino-e-meta-sudans/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Greogrio",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6958,
      "level": 3,
      "name": "Parco archeologico del Colosseo - Aula Isiaca con Loggia Mattei",
      "website": "https://parcocolosseo.it/mirabilia/laula-isiaca-con-la-loggia-mattei/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Gregorio, 30",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6955,
      "level": 3,
      "name": "Parco archeologico del Colosseo - Casa di Augusto",
      "website": "https://parcocolosseo.it/mirabilia/la-casa-di-augusto/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Cerchi, 81",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6956,
      "level": 3,
      "name": "Parco archeologico del Colosseo - Casa di Livia",
      "website": "https://parcocolosseo.it/mirabilia/la-casa-di-livia/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Gregorio, 30",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6961,
      "level": 3,
      "name": "Parco archeologico del Colosseo - Criptoportico neroniano",
      "website": "https://parcocolosseo.it/mirabilia/il-criptoportico-neroniano/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Bonaventura, 7",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 522,
      "level": 3,
      "name": "Parco archeologico del Colosseo - Foro Romano e Palatino",
      "website": "http://www.parcocolosseo.it",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Santa Maria Nova, 53",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6776,
      "level": 3,
      "name": "Parco archeologico del Colosseo - Meta Sudans",
      "website": "https://parcocolosseo.it/area/arco-di-costantino-e-meta-sudans/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Colosseo, 1",
          "zip-code": "00184",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6959,
      "level": 3,
      "name": "Parco archeologico del Colosseo - Museo Palatino",
      "website": "https://parcocolosseo.it/area/musei/museo-palatino/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Gregorio, 30",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6806,
      "level": 3,
      "name": "Parco archeologico del Colosseo - Santa Maria Antiqua (Foro Romano)",
      "website": "https://parcocolosseo.it/mirabilia/santa-maria-antiqua-con-loratorio-dei-quaranta-martiri-e-la-rampa-di-domiziano/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza di Santa Maria Nova, 53",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6960,
      "level": 3,
      "name": "Parco archeologico del Colosseo - Tempio di Romolo",
      "website": "https://parcocolosseo.it/mirabilia/il-tempio-di-romolo/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Sacra",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 367,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5325,
      "level": 3,
      "name": "Parco archeologico del teatro e dell\u2019anfiteatro di Cividate Camuno",
      "website": "http://www.parcoarcheologicocividate.valcamonicaromana.beniculturali.it",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Tovini, 1",
          "zip-code": "25040",
          "comune": "Cividate Camuno",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 214,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5164,
      "level": 3,
      "name": "Parco archeologico dell\u2019area urbana di Metaponto",
      "website": "http://www.archeobasilicata.beniculturali.it/WA_Musei_Archeologici.aspx",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via D. Adamesteanu, 21\n75012 Bernalda",
          "zip-code": "75012",
          "comune": "Bernalda",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 866,
      "level": 3,
      "name": "Parco archeologico dell'Antica Aeclanum",
      "website": "http://musei.beniculturali.it/musei?mid=719&nome=parco-archeologico-dellantica-aeclanum",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Nazionale delle Puglie",
          "zip-code": "83036",
          "comune": "Mirabella Eclano",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 7039,
      "level": 3,
      "name": "Parco archeologico dell'Appia antica - Acquedotti Claudio, Marcio e Anio Novus",
      "website": "http://www.parcoarcheologicoappiaantica.it/luoghi/acquedotti-claudio-marcio-e-novus/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Appio Claudio",
          "zip-code": "00178",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 7040,
      "level": 3,
      "name": "Parco archeologico dell'Appia antica - Acquedotto dei Quintili",
      "website": "http://www.parcoarcheologicoappiaantica.it/luoghi/acquedotto-dei-quintili/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Appia Nuova",
          "zip-code": "00178",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 7041,
      "level": 3,
      "name": "Parco archeologico dell'Appia antica - Acquedotto di Sette Bassi",
      "website": "http://www.parcoarcheologicoappiaantica.it/luoghi/villa-dei-sette-bassi/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "",
      "place": {
          "address": "Via Tuscolana, 1700",
          "zip-code": "00173",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6774,
      "level": 3,
      "name": "Parco archeologico dell'Appia antica - Antiquarium di Lucrezia Romana",
      "website": "http://www.parcoarcheologicoappiaantica.it/luoghi/antiquarium-di-lucrezia-romana/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Lucrezia Romana, 62",
          "zip-code": "00178",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5949,
      "level": 3,
      "name": "Parco archeologico dell'Appia Antica - Complesso di Capo di Bove",
      "website": "http://www.parcoarcheologicoappiaantica.it/luoghi/complesso-di-capo-di-bove/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Via Appia Antica, 222",
          "zip-code": "00178",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 499,
      "level": 3,
      "name": "Parco archeologico dell'Appia antica - Parco delle Tombe della via Latina e Basilica di Santo Stefano",
      "website": "http://www.parcoarcheologicoappiaantica.it/luoghi/tombe-della-via-latina/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell\u2019Arco di Travertino, 151",
          "zip-code": "00178",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 7038,
      "level": 3,
      "name": "Parco archeologico dell'Appia antica - Torre del Fiscale",
      "website": "http://www.parcoarcheologicoappiaantica.it/luoghi/torre-del-fiscale/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dell'Acquedotto Felice, 120",
          "zip-code": "00178",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 7042,
      "level": 3,
      "name": "Parco archeologico dell'Appia antica - Tratto demaniale della via Appia con annessi monumenti e mausolei",
      "website": "http://www.parcoarcheologicoappiaantica.it/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Appia Antica",
          "zip-code": "00179",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6921,
      "level": 3,
      "name": "Parco archeologico di Collepasso",
      "website": "Parco archeologico di Collepasso \u2013 Direzione generale Musei (beniculturali.it)",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Rondinelli",
          "zip-code": "74121",
          "comune": "Taranto",
          "provincia": "Taranto",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 233,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6897,
      "level": 3,
      "name": "Parco archeologico di Collepasso",
      "website": "https://www.beniculturali.it/luogo/parco-archeologico-di-collepasso",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Via Rondinelli",
          "zip-code": "74122",
          "comune": "Taranto",
          "provincia": "Taranto",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 233,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5953,
      "level": 3,
      "name": "Parco archeologico di Crustumerium",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/parco-archeologico-di-crustumerium_3004/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Marcigliana, 1052",
          "zip-code": "00138",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 347,
      "level": 2,
      "name": "Parco Archeologico di Ercolano",
      "website": "ercolano.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Resina",
          "zip-code": "80056",
          "comune": "Ercolano",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 468,
      "level": 3,
      "name": "Parco archeologico di Ercolano",
      "website": "http://ercolano.beniculturali.it/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Resina, 187",
          "zip-code": "80056",
          "comune": "Ercolano",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 347,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6121,
      "level": 3,
      "name": "Parco archeologico di Ercolano - Teatro romano",
      "website": "http://ercolano.beniculturali.it/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Resina",
          "zip-code": "80056",
          "comune": "Ercolano",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 347,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6118,
      "level": 3,
      "name": "Parco archeologico di Ercolano - Villa dei Papiri",
      "website": "https://www.museoarcheologiconapoli.it/it/villa-dei-papiri/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Villa dei Papiri Ercolanesi",
          "zip-code": "80056",
          "comune": "Ercolano",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 347,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 225,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la Basilicata",
      "website": "http://www.sbap.basilicata.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Andrea Serrao",
          "zip-code": "85100",
          "comune": "Potenza",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5171,
      "level": 3,
      "name": "Parco archeologico di Herakleia",
      "website": "https://www.beniculturali.it/luogo/parco-archeologico-di-herakleia",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cristoforo Colombo, 13",
          "zip-code": "75025",
          "comune": "Policoro",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 225,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 504,
      "level": 3,
      "name": "Parco archeologico di Iuvanum",
      "website": "https://www.sabap-abruzzo.beniculturali.it/iuvanum/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Loc. Fonticelle",
          "zip-code": "66010",
          "comune": "Montenerodomo",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 253,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6808,
      "level": 3,
      "name": "Parco archeologico di Laos Santa Maria del Cedro",
      "website": "http://musei.beniculturali.it/musei?mid=1365&nome=parco-archeologico-di-laos-santa-maria-del-cedro; http://www.archeologiabelleartiepaesaggiocosenza.beniculturali.it",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via degli Scavi",
          "zip-code": "87020",
          "comune": "Santa Maria del Cedro",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 261,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 697,
      "level": 3,
      "name": "Parco archeologico di Liternum",
      "website": "http://www.pafleg.it/it/4388/localit/59/parco-archeologico-di-liternum",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Scipione l'Africano",
          "zip-code": "80014",
          "comune": "Giugliano in Campania",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 503,
      "level": 3,
      "name": "Parco archeologico di Monte Sannace",
      "website": "https://musei.puglia.beniculturali.it/musei/parco-archeologico-di-monte-sannace/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale 61 - Gioia del Colle - Turi Km 4,5",
          "zip-code": "70023",
          "comune": "Gioia del Colle",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 528,
      "level": 3,
      "name": "Parco archeologico di Ostia antica - Basilica di Pianabella",
      "website": "https://www.ostiaantica.beniculturali.it/it/aree-archeologiche-e-monumentali/ostia-antica/necropoli-e-basilica-di-pianabella/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di Pianabella",
          "zip-code": "00124",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 348,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5660,
      "level": 3,
      "name": "Parco archeologico di Ostia antica - Basilica di S. Ippolito e annesso Antiquarium",
      "website": "https://www.ostiaantica.beniculturali.it/it/aree-archeologiche-e-monumentali/necropoli-di-porto/complesso-della-basilica-di-s-ippolito/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale dei Romagnoli, 717",
          "zip-code": "00054",
          "comune": "Ostia Antica",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 348,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 4685,
      "level": 3,
      "name": "Parco archeologico di Ostia Antica - Museo delle Navi\r di Fiumicino",
      "website": "https://www.ostiaantica.beniculturali.it/it/aree-archeologiche-e-monumentali/porti-imperiali-di-claudio-e-traiano/museo-delle-navi-di-fiumicino/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Alessandro Guidoni",
          "zip-code": "54",
          "comune": "Fiumicino",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 348,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 526,
      "level": 3,
      "name": "Parco archeologico di Ostia antica - Necropoli della via Laurentina",
      "website": "https://www.ostiaantica.beniculturali.it/it/aree-archeologiche-e-monumentali/ostia-antica/la-necropoli-laurentina/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale dei Romagnoli, 717",
          "zip-code": "00119",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 348,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 414,
      "level": 3,
      "name": "Parco archeologico di Ostia Antica - Scavi di Ostia antica e Museo Ostiense",
      "website": "http://www.ostiaantica.beniculturali.it/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale dei Romagnoli, 717",
          "zip-code": "00119",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 348,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 525,
      "level": 3,
      "name": "Parco archeologico di Ostia antica - Villa Romana costiera di Procoio di Pianabella",
      "website": "https://www.ostiaantica.beniculturali.it/it/aree-archeologiche-e-monumentali/ostia-antica/ville-costiere-di-procoio/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale dei Romagnoli, 717",
          "zip-code": "00119",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 348,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5946,
      "level": 3,
      "name": "Parco archeologico di Paestum e Velia - Area archeologica del Santuario di Hera alla Foce del Sele",
      "website": "https://www.museopaestum.beniculturali.it/museo-di-hera-alla-foce-del-sele/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Barizzo Foce Sele, 29",
          "zip-code": "84047",
          "comune": "Capaccio Paestum",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 330,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5938,
      "level": 3,
      "name": "Parco archeologico di Paestum e Velia - Area archeologica di Paestum",
      "website": "https://www.museopaestum.beniculturali.it/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Magna Graecia, 917/919",
          "zip-code": "84047",
          "comune": "Capaccio Paestum",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 330,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 592,
      "level": 3,
      "name": "Parco archeologico di Paestum e Velia - Museo archeologico nazionale",
      "website": "https://www.museopaestum.beniculturali.it/il-museo/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Magna Grecia, 919",
          "zip-code": "84047",
          "comune": "Capaccio Paestum",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 330,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6110,
      "level": 3,
      "name": "Parco archeologico di Paestum e Velia - Museo narrante del Santuario di Hera alla Foce del Sele",
      "website": "https://www.museopaestum.beniculturali.it/museo-di-hera-alla-foce-del-sele/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Barizzo, 29",
          "zip-code": "84047",
          "comune": "Capaccio Paestum",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 330,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 273,
      "level": 2,
      "name": "Parco Archeologico di Pompei",
      "website": "www.pompeiisites.org",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Villa dei Misteri",
          "zip-code": "80045",
          "comune": "Pompei",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5937,
      "level": 3,
      "name": "Parco archeologico di Pompei - Antiquarium di Boscoreale",
      "website": "http://pompeiisites.org/boscoreale/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Villa Regina, 1",
          "zip-code": "80041",
          "comune": "Boscoreale",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 273,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 467,
      "level": 3,
      "name": "Parco archeologico di Pompei - Area archeologica di Pompei",
      "website": "http://pompeiisites.org/parco-archeologico-di-pompei/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Villa dei Misteri, 2",
          "zip-code": "80045",
          "comune": "Pompei",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 273,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6996,
      "level": 3,
      "name": "Parco archeologico di Pompei - Area archeologica di Villa Sora",
      "website": "http://pompeiisites.org/villa-sora/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Giuseppe alle Paludi, 81",
          "zip-code": "80059",
          "comune": "Torre del Greco",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 273,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6997,
      "level": 3,
      "name": "Parco archeologico di Pompei - Castello di Lettere",
      "website": "http://pompeiisites.org/lettere/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Nicola Castello",
          "zip-code": "80050",
          "comune": "Lettere",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 273,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6999,
      "level": 3,
      "name": "Parco archeologico di Pompei - Ex Real Polverificio borbonico",
      "website": "http://pompeiisites.org/polverificio-borbonico/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pasquale Vitiello, 102",
          "zip-code": "84018",
          "comune": "Scafati",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 273,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6998,
      "level": 3,
      "name": "Parco archeologico di Pompei - Parco archeologico di Longola",
      "website": "http://pompeiisites.org/longola/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Longola",
          "zip-code": "80040",
          "comune": "Poggiomarino",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 273,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6109,
      "level": 3,
      "name": "Parco archeologico di Pompei - Scavi archeologici di Stabiae (Villa Arianna)",
      "website": "http://pompeiisites.org/stabiae/villa-arianna/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Passeggiata Archeologica",
          "zip-code": "80053",
          "comune": "Castellammare di Stabia",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 273,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6115,
      "level": 3,
      "name": "Parco archeologico di Pompei - Scavi archeologici di Stabiae (Villa San Marco)",
      "website": "http://musei.beniculturali.it/en/museums?mid=816&nome=arco-di-traiano",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Passeggiata archeologica",
          "zip-code": "80053",
          "comune": "Castellammare di Stabia",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 273,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 470,
      "level": 3,
      "name": "Parco archeologico di Pompei - Scavi di Oplontis",
      "website": "http://pompeiisites.org/oplontis/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Sepolcri",
          "zip-code": "80058",
          "comune": "Torre Annunziata",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 273,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 469,
      "level": 3,
      "name": "Parco archeologico di Pompei - Villa Regina",
      "website": "http://pompeiisites.org/gallery-boscoreale/villa-regina/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Villa Regina",
          "zip-code": "80041",
          "comune": "Boscoreale",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 273,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 501,
      "level": 3,
      "name": "Parco archeologico di Sibari",
      "website": "https://cultura.gov.it/luogo/parco-archeologico-di-sibari-1",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Statale 106 Jonica, Km 24",
          "zip-code": "87011",
          "comune": "Cassano all'Ionio",
          "provincia": "Cosenza",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 306,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6658,
      "level": 3,
      "name": "Parco archeologico di Siponto",
      "website": "https://musei.puglia.beniculturali.it/musei/parco-archeologico-di-siponto/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via de Nittis, 7",
          "zip-code": "71100",
          "comune": "Siponto",
          "provincia": "Foggia",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 310,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 507,
      "level": 3,
      "name": "Parco archeologico di Venosa",
      "website": "https://musei.basilicata.beniculturali.it/musei/?mid=331&nome=parco-archeologico-nazionale-di-venosa",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada provinciale 18 Ofantina, adiacente alla chiesa di San Rocco",
          "zip-code": "85029",
          "comune": "Venosa",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 305,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5166,
      "level": 3,
      "name": "Parco archeologico e Antiquarium di Castelseprio",
      "website": "http://www.archeologica.lombardia.beniculturali.it",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Castelvecchio, 1513",
          "zip-code": "21050",
          "comune": "Castelseprio",
          "provincia": "Varese",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 214,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5945,
      "level": 3,
      "name": "Parco archeologico Nazionale dei Massi di Cemmo",
      "website": "http://www.parcoarcheologico.massidicemmo.beniculturali.it/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pieve di San Siro, 4",
          "zip-code": "01010",
          "comune": "Capo di Ponte",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6120,
      "level": 3,
      "name": "Parco archeologico Sommerso di Gaiola",
      "website": "http://www.areamarinaprotettagaiola.it",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Discesa Gaiola",
          "zip-code": "80123",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6112,
      "level": 3,
      "name": "Parco archeologico urbano dell\u2019antica Picentia",
      "website": "Parco archeologico urbano dell\u2019antica Picentia \u2013 Direzione generale Musei (beniculturali.it)",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Stadio",
          "zip-code": "84098",
          "comune": "Pontecagnano Faiano",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6788,
      "level": 3,
      "name": "Parco archeologico urbano dell'antica Volcei",
      "website": "http://www.ambientesa.beniculturali.it ; http://www.volcei.net",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Centro Storico",
          "zip-code": "84021",
          "comune": "Buccino",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5327,
      "level": 3,
      "name": "Parco dell\u2019Anfiteatro romano e Antiquarium \"Alda Levi\"",
      "website": "http://www.parcoanfiteatromilano.beniculturali.it",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via De Amicis, 17",
          "zip-code": "20123",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 214,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 508,
      "level": 3,
      "name": "Parco di Villa Il Ventaglio",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/191/parco-di-villa-il-ventaglio-firenze",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giovanni Aldini, 12",
          "zip-code": "50131",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 497,
      "level": 3,
      "name": "Parco e Tomba di Virgilio",
      "website": "http://polomusealecampania.beniculturali.it/index.php/il-parco",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Salita della Grotta, 20",
          "zip-code": "80121",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 811,
      "level": 3,
      "name": "Parco Naturalistico Archeologico di Vulci",
      "website": "http://vulci.it/parco-di-vulci",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale 107",
          "zip-code": "01014",
          "comune": "Canino",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 495,
      "level": 3,
      "name": "Parco Nazionale delle Incisioni Rupestri",
      "website": "http://www.parcoincisioni.capodiponte.beniculturali.it/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Loc. Naquane, 1",
          "zip-code": "25044",
          "comune": "Capo di Ponte",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 331,
      "level": 2,
      "name": "Pinacoteca di Brera",
      "website": "pinacotecabrera.org",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Brera, 28",
          "zip-code": "20121",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 5331,
      "level": 3,
      "name": "Pinacoteca di Brera",
      "website": "https://pinacotecabrera.org/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Brera, 28",
          "zip-code": "20121",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 331,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6705,
      "level": 3,
      "name": "Pinacoteca di Brera - Biblioteca Nazionale Braidense di Milano",
      "website": "https://bibliotecabraidense.org/",
      "entity-tipology": "biblioteca",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Brera, 28",
          "zip-code": "20121",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 331,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 492,
      "level": 3,
      "name": "Pinacoteca nazionale di Bologna",
      "website": "http://www.pinacotecabologna.beniculturali.it",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via delle Belle Arti, 56",
          "zip-code": "40126",
          "comune": "Bologna",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5121,
      "level": 3,
      "name": "Pinacoteca nazionale di Cagliari",
      "website": "http://musei.sardegna.beniculturali.it/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Arsenale, 1",
          "zip-code": "09124",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 493,
      "level": 3,
      "name": "Pinacoteca nazionale di Ferrara",
      "website": "https://www.gallerie-estensi.beniculturali.it/pinacoteca-nazionale/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Ercole I d\u2019Este, 21",
          "zip-code": "44121",
          "comune": "Ferrara",
          "provincia": "Ferrara",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 317,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5118,
      "level": 3,
      "name": "Pinacoteca nazionale di Sassari",
      "website": "https://musei.sardegna.beniculturali.it/musei/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Santa Caterina",
          "zip-code": "07100",
          "comune": "Sassari",
          "provincia": "Sassari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 491,
      "level": 3,
      "name": "Pinacoteca nazionale di Siena",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.phpit/211/siena-pinacoteca-nazionale",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Pietro, 29",
          "zip-code": "53100",
          "comune": "Siena",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 948,
      "level": 3,
      "name": "Piramide di Caio Cestio",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/piramide-di-caio-cestio_3006/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Raffaele Persichetti",
          "zip-code": "00154",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6983,
      "level": 3,
      "name": "Ponte Real Ferdinando",
      "website": "http://www.sabap_lazio.beniculturali.it/index.php?it/312/ponte-real-ferdinando",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Ferdinando II di Borbone",
          "zip-code": "04026",
          "comune": "Minturno",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 203,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 486,
      "level": 3,
      "name": "Procuratie nuove - ex Palazzo reale",
      "website": "https://storico.beniculturali.it/mibac/opencms/MiBAC/sito-MiBAC/Luogo/MibacUnif/Luoghi-della-Cultura/visualizza_asset.html?id=152834&pagename=50",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Marco, 119",
          "zip-code": "30124",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 206,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6657,
      "level": 3,
      "name": "Real sito di Carditello",
      "website": "http://www.fondazionecarditello.org/website/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Carditello",
          "zip-code": "81050",
          "comune": "San Tammaro",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6987,
      "level": 3,
      "name": "Reggia di Caserta - Acquedotto Carolino",
      "website": "https://www.reggiadicaserta.beniculturali.it/acquedotto-carolino/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Statale 265",
          "zip-code": "81020",
          "comune": "Valle di Maddaloni",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 333,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 510,
      "level": 3,
      "name": "Reggia di Caserta - Parco Reale e Giardino Inglese",
      "website": "http://www.reggiadicaserta.beniculturali.it/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Carlo di Borbone",
          "zip-code": "81100",
          "comune": "Caserta",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 333,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 812,
      "level": 3,
      "name": "Resti della Citt\u00e0 Romana di Mevaniola",
      "website": "https://www.beniculturali.it/luogo/resti-della-citta-romana-di-mevaniola",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Borgo",
          "zip-code": "47010",
          "comune": "Galeata",
          "provincia": "Forl\u00ec-Cesena",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 237,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 482,
      "level": 3,
      "name": "Resti delle due cinta murarie e di una domus di et\u00e0 augustea",
      "website": "https://www.beniculturali.it/luogo/resti-delle-due-cinta-murarie-e-di-una-domus-di-eta-augustea",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via S. Cosimo",
          "zip-code": "37121",
          "comune": "Verona",
          "provincia": "Verona",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 206,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6126,
      "level": 3,
      "name": "Rione Terra",
      "website": "https://www.beniculturali.it/luogo/rione-terra",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Rione Terra",
          "zip-code": "80078",
          "comune": "Pozzuoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6833,
      "level": 3,
      "name": "Rione Testaccio",
      "website": "https://www.beniculturali.it/luogo/rione-testaccio",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Nicola Zabaglia",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5837,
      "level": 3,
      "name": "Rocca Albornoz - Museo Nazionale del Ducato di Spoleto",
      "website": "http://polomusealeumbria.beniculturali.it/page_id3609",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Bernardino Campello, 1",
          "zip-code": "06049",
          "comune": "Spoleto",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 304,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 476,
      "level": 3,
      "name": "Rocca demaniale di Gradara",
      "website": "http://www.roccadigradara.org/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Alberta Porta Natale, 1",
          "zip-code": "61012",
          "comune": "Gradara",
          "provincia": "Pesaro e Urbino",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 313,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 475,
      "level": 3,
      "name": "Rocca Roveresca di Senigallia",
      "website": "http://www.roccasenigallia.it/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Duca, 2",
          "zip-code": "60019",
          "comune": "Senigallia",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 313,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 3084,
      "level": 3,
      "name": "Sala del Perugino",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/184/sala-del-perugino-firenze",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Colonna, 9",
          "zip-code": "50121",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6836,
      "level": 3,
      "name": "Sala Espositiva presso il Castello Ducale di Sessa Aurunca",
      "website": "http://musei.beniculturali.it/musei?mid=4253&nome=sala-espositiva-presso-il-castello-ducale-di-sessa-aurunca",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Castello Ducale",
          "zip-code": "81037",
          "comune": "Sessa Aurunca",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 248,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5962,
      "level": 3,
      "name": "Sale Chiablese",
      "website": "https://www.museireali.beniculturali.it/spazio-mostre-chiablese/",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta Reale, 1",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 332,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5332,
      "level": 3,
      "name": "Santuario di Minerva di Breno",
      "website": "https://www.beniculturali.it/luogo/santuario-di-minerva-di-breno",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Spinera",
          "zip-code": "25043",
          "comune": "Breno",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 214,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 862,
      "level": 3,
      "name": "Santuario Italico",
      "website": "https://www.musei.molise.beniculturali.it/musei?mid=6691&nome=santuario-italico",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Calcatello",
          "zip-code": "86085",
          "comune": "Pietrabbondante",
          "provincia": "Isernia",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 299,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 735,
      "level": 3,
      "name": "Santuario Madonna della Quercia",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/240/santuario-madonna-della-quercia",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "piazza del Santuario",
          "zip-code": "01030",
          "comune": "Viterbo",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 472,
      "level": 3,
      "name": "Sito archeologico Ercole Curino",
      "website": "http://www.archeoabruzzo.beniculturali.it/ErcoleCurino.html",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Badia",
          "zip-code": "67039",
          "comune": "Sulmona",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 253,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 7060,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica dell'Umbria",
      "website": "http://www.sabu.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "corso Garibaldi, 185",
          "zip-code": "06123",
          "comune": "Perugia",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7073,
      "level": 3,
      "name": "Soprintendenza archivistica e bibliografica dell'Umbria",
      "website": "http://www.sa-uma.beniculturali.it/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Martiri dei Lager, 65",
          "zip-code": "06128",
          "comune": "Perugia",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 7060,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 720,
      "level": 3,
      "name": "Spazio San Pancrazio",
      "website": "https://www.beniculturali.it/luogo/spazio-san-pancrazio",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Arsenale, 1",
          "zip-code": "09123",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 311,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 942,
      "level": 3,
      "name": "Taverna ducale",
      "website": "https://www.musei.abruzzo.beniculturali.it/musei?mid=66&nome=taverna-ducale",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giuseppe Garibaldi, 3",
          "zip-code": "65026",
          "comune": "Popoli",
          "provincia": "Pescara",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 302,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 940,
      "level": 3,
      "name": "Teate - Resti della Citt\u00e0 Romana",
      "website": "http://musei.beniculturali.it/en/museums?mid=317&nome=teate-resti-della-citta-romana",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via delle Terme Romane",
          "zip-code": "66100",
          "comune": "Chieti",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 253,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 712,
      "level": 3,
      "name": "Teatro e Criptoportico Romano di Sessa Aurunca",
      "website": "https://storico.beniculturali.it/mibac/opencms/MiBAC/sito-MiBAC/Luogo/MibacUnif/Luoghi-della-Cultura/visualizza_asset.html?id=151137&pagename=157031",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Aldo Moro",
          "zip-code": "81037",
          "comune": "Sessa Aurunca",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6122,
      "level": 3,
      "name": "Teatro ellenistico-romano di Sarno",
      "website": "http://musei.beniculturali.it/en/museums?mid=836&nome=teatro-ellenistico-romano-di-sarno",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Foce",
          "zip-code": "84087",
          "comune": "Sarno",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 458,
      "level": 3,
      "name": "Teatro romano di Benevento",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-teatro",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Ponzio Telesino",
          "zip-code": "82100",
          "comune": "Benevento",
          "provincia": "Benevento",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 457,
      "level": 3,
      "name": "Teatro Romano di Chieti",
      "website": "https://www.beniculturali.it/luogo/teatro-romano-di-chieti",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Asinio Herio, 46",
          "zip-code": "06042",
          "comune": "Chieti",
          "provincia": "Chieti",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 253,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5170,
      "level": 3,
      "name": "Teatro Romano di Grumento Nova",
      "website": "https://musei.basilicata.beniculturali.it/musei/?mid=328&nome=teatro-romano-di-grumento-nova",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "area archeologica di Grumentum",
          "zip-code": "85050",
          "comune": "Grumento Nova",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 225,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 456,
      "level": 3,
      "name": "Teatro Romano di Teanum Sidicinum",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/il-teatro-teano",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Pioppeto",
          "zip-code": "81057",
          "comune": "Teano",
          "provincia": "Caserta",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5106,
      "level": 3,
      "name": "Teatro Romano di Trieste",
      "website": "https://www.beniculturali.it/luogo/teatro-romano-di-trieste",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Teatro Romano",
          "zip-code": "34100",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 390,
      "level": 3,
      "name": "Teatro Romano e Antiquarium di Gubbio",
      "website": "https://www.musei.umbria.beniculturali.it/?page_id=5289",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Teatro Romano",
          "zip-code": "06024",
          "comune": "Gubbio",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 304,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 454,
      "level": 3,
      "name": "Tempietto sul Clitunno",
      "website": "https://www.musei.umbria.beniculturali.it/?page_id=3676",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Statale Flaminia",
          "zip-code": "06042",
          "comune": "Pissignano",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 304,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5917,
      "level": 3,
      "name": "Tempio delle Tavole Palatine",
      "website": "http://musei.beniculturali.it/musei?mid=326&nome=tempio-delle-tavole-palatine",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Statale 106 Jonica",
          "zip-code": "75012",
          "comune": "Bernalda",
          "provincia": "Matera",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 225,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 453,
      "level": 3,
      "name": "Tempio di Minerva Medica",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/tempio-di-minerva-medica-cosiddetto_3117/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Giovanni Giolitti, 166",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6780,
      "level": 3,
      "name": "Tempio di Portunus al Foro Boario",
      "website": "https://www.beniculturali.it/luogo/tempio-di-portunus-al-foro-boario",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Bocca della Verit\u00e0",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 452,
      "level": 3,
      "name": "Terme di Caracalla",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/terme-di-caracalla_3009/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale delle Terme di Caracalla, 52",
          "zip-code": "00179",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 451,
      "level": 3,
      "name": "Terme Taurine o di Traiano",
      "website": "http://www.sabap-rm-met.beniculturali.it/it/312/civitavecchia",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Terme di Traiano",
          "zip-code": "00053",
          "comune": "Civitavecchia",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 601,
      "level": 3,
      "name": "Tesoro dei Granduchi (Palazzo Pitti)",
      "website": "https://www.uffizi.it/palazzo-pitti/tesoro-dei-granduchi",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Pitti",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 315,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 447,
      "level": 3,
      "name": "Tomba della Scimmia",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.phpit/228/chiusi-si-museo-nazionale-etrusco-di-chiusi-necropoli-di-poggio-renzo-e-tomba-del-colle",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Porsenna, 93",
          "zip-code": "53043",
          "comune": "Chiusi",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6986,
      "level": 3,
      "name": "Tomba di Cicerone",
      "website": "http://www.sabap_lazio.beniculturali.it/index.php?it/324/area-archeologica-tomba-di-cicerone-a-formia-lt",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Appia Km 139",
          "zip-code": "04023",
          "comune": "Formia",
          "provincia": "Latina",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 203,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 442,
      "level": 3,
      "name": "Tomba di Montefortini - Area archeologica di Comeana",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/287/carmignano-po-area-archeologica-di-comeana-tumuli-di-montefortini-e-boschetti",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Montefortini, 1/Via Giuseppe Garibaldi, 43",
          "zip-code": "59015",
          "comune": "Carmignano",
          "provincia": "Prato",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 604,
      "level": 3,
      "name": "Tomba Fran\u00e7ois",
      "website": "http://www.sabap-rm-met.beniculturali.it/it/329/la-tomba-francois",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Provinciale 106",
          "zip-code": "01011",
          "comune": "Canino",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 445,
      "level": 3,
      "name": "Torre di Cicerone",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/233/torre-di-cicerone",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Civitavecchia",
          "zip-code": "03033",
          "comune": "Arpino",
          "provincia": "Frosinone",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6820,
      "level": 3,
      "name": "Torre Jussi",
      "website": "https://polomusealeemiliaromagna.beniculturali.it/musei/ex-chiese-di-san-barbaziano-e-san-mattia-e-torre-jussi",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 Serra Sarzana, Rocca di Roffeno",
          "zip-code": "40034",
          "comune": "Castel d'Aiano",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 303,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5151,
      "level": 3,
      "name": "Torre spagnola di Portoscuso",
      "website": "https://www.beniculturali.it/luogo/torre-spagnola-di-portoscuso",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "09010 Portoscuso",
          "zip-code": "09010",
          "comune": "Portoscuso",
          "provincia": "Carbonia-Iglesias",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 247,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 349,
      "level": 2,
      "name": "Villa Adriana e Villa d'Este",
      "website": "www.levillae.com",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Trento, 5",
          "zip-code": "00019",
          "comune": "Tivoli",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 152,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7050,
      "level": 3,
      "name": "Villa Adriana e Villa d'Este - Area archeologica di Villa Adriana",
      "website": "https://www.levillae.com/i-luoghi/villa-adriana/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Marguerite Yourcenar, 1",
          "zip-code": "00019",
          "comune": "Tivoli",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 349,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 4831,
      "level": 3,
      "name": "Villa Adriana e Villa d'Este - Mensa ponderaria e Augusteum",
      "website": "https://www.levillae.com/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Duomo, 4",
          "zip-code": "00019",
          "comune": "Tivoli",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 349,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 471,
      "level": 3,
      "name": "Villa Adriana e Villa d'Este - Santuario di Ercole Vincitore",
      "website": "https://www.levillae.com/i-luoghi/santuario-di-ercole-vincitore/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via degli Stabilimenti, 5",
          "zip-code": "00019",
          "comune": "Tivoli",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 349,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 436,
      "level": 3,
      "name": "Villa Adriana e Villa d'Este - Villa d'Este",
      "website": "https://www.levillae.com/i-luoghi/villa-deste/",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Trento, 5",
          "zip-code": "00019",
          "comune": "Tivoli",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 349,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6330,
      "level": 3,
      "name": "Villa Brandi",
      "website": "http://polomusealetoscana.beniculturali.it/index.php?it/233/siena-villa-brandi",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "strada di Busseto, 42 Vignano",
          "zip-code": "53100",
          "comune": "Siena",
          "provincia": "Siena",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 425,
      "level": 3,
      "name": "Villa Carducci - Pandolfini a Legnaia",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.phpit/188/villa-carducci-pandolfini-a-legnaia-firenze",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Guardiavia, 18",
          "zip-code": "50143",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 437,
      "level": 3,
      "name": "Villa Corsini a Castello",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/189/firenze-villa-corsini-a-castello",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Petraia, 38/27",
          "zip-code": "50141",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 418,
      "level": 3,
      "name": "Villa Damecuta",
      "website": "http://musei.beniculturali.it/en/museums?mid=764&nome=villa-damecuta",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Amedeo Maiuri/ Via Vigna",
          "zip-code": "80071",
          "comune": "Anacapri",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 435,
      "level": 3,
      "name": "Villa dei Quintili e Santa Maria Nova",
      "website": "http://www.parcoarcheologicoappiaantica.it/luoghi/villa-dei-quintili-e-santa-maria-nova/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Appia Nuova, 1092",
          "zip-code": "00178",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6881,
      "level": 3,
      "name": "Villa dei Volusii",
      "website": "http://sabap-rm-met.beniculturali.it/it/300/la-villa-dei-volusii",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Tiberina, Km 18,5",
          "zip-code": "00065",
          "comune": "Fiano Romano",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 434,
      "level": 3,
      "name": "Villa del Bene",
      "website": "https://polomusealeveneto.beniculturali.it/musei/villa-del-bene",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Villa del Bene, 116",
          "zip-code": "37020",
          "comune": "Dolc\u00e8",
          "provincia": "Verona",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 301,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6870,
      "level": 3,
      "name": "Villa del Cimitero Flaminio",
      "website": "https://www.beniculturali.it/luogo/villa-del-cimitero-flaminio",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Tiberina, Km 1,6",
          "zip-code": "00188",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 433,
      "level": 3,
      "name": "Villa del Colle del Cardinale",
      "website": "https://www.musei.umbria.beniculturali.it/?page_id=3685",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada per Sant' Antonio, 47",
          "zip-code": "06133",
          "comune": "Perugia",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 304,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 432,
      "level": 3,
      "name": "Villa della Regina",
      "website": "http://polomusealepiemonte.beniculturali.it/index.php/musei-e-luoghi-della-cultura/villa-della-regina/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Comunale Santa Margherita, 79",
          "zip-code": "10131",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 300,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 431,
      "level": 3,
      "name": "Villa di Livia",
      "website": "https://www.soprintendenzaspecialeroma.it/schede/villa-di-livia_3027/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede distaccata",
      "place": {
          "address": "Via Villa di Livia, 187",
          "zip-code": "00188",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 274,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 430,
      "level": 3,
      "name": "Villa di Orazio",
      "website": "http://www.sabap-rm-met.beniculturali.it/it/204/licenza",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Licinese",
          "zip-code": "00026",
          "comune": "Licenza",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 238,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6871,
      "level": 3,
      "name": "Villa di Sette Bassi",
      "website": "http://www.parcoarcheologicoappiaantica.it/luoghi/villa-dei-sette-bassi/",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Tuscolana",
          "zip-code": "00173",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 346,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6137,
      "level": 3,
      "name": "Villa di Vedio Pollione",
      "website": "http://musei.beniculturali.it/musei?mid=725&nome=villa-di-vedio-pollione",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Discesa Coroglio",
          "zip-code": "80123",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 288,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5960,
      "level": 3,
      "name": "Villa Giustiniani Odescalchi",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/242/villa-giustiniani",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Umberto I",
          "zip-code": "01030",
          "comune": "Bassano Romano",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 429,
      "level": 3,
      "name": "Villa Jovis",
      "website": "http://www.polomusealecampania.beniculturali.it/index.php/la-villa",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Tiberio",
          "zip-code": "80073",
          "comune": "Capri",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 307,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 428,
      "level": 3,
      "name": "Villa Lante",
      "website": "http://www.polomusealelazio.beniculturali.it/index.php?it/243/villa-lante",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Jacopo Barozzi, 71",
          "zip-code": "01100",
          "comune": "Viterbo",
          "provincia": "Viterbo",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 297,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 426,
      "level": 3,
      "name": "Villa Medicea della Petraia",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.phpit/185/firenze-villa-medicea-della-petraia",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via della Petraia, 40",
          "zip-code": "50141",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 570,
      "level": 3,
      "name": "Villa Medicea di Cerreto Guidi e Museo storico della Caccia e del Territorio",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/186/cerreto-guidi-fi-villa-medicea-di-cerreto-guidi-e-museo-storico-della-caccia-e-del-territorio-firenze",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via dei Ponti Medicei, 7",
          "zip-code": "50050",
          "comune": "Cerreto Guidi",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 427,
      "level": 3,
      "name": "Villa Medicea di Poggio a Caiano e Museo della Natura Morta",
      "website": "http://www.polomusealetoscana.beniculturali.it/index.php?it/187/villa-medicea-di-poggio-a-caiano-e-museo-della-natura-morta-poggio-a-caiano-po",
      "entity-tipology": "complesso monumentale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de' Medici, 14",
          "zip-code": "59016",
          "comune": "Poggio a Caiano",
          "provincia": "Prato",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 312,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5110,
      "level": 3,
      "name": "Villa Romana (Parco Randaccio)",
      "website": "https://www.beniculturali.it/luogo/villa-romana-parco-randaccio",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Localit\u00e0 San Giovanni al Timavo",
          "zip-code": "34013",
          "comune": "Duino-Aurisina",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 255,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 421,
      "level": 3,
      "name": "Villa Romana del Varignano",
      "website": "https://www.musei.liguria.beniculturali.it/musei?mid=405&nome=villa-romana-del-varignano",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Varignano Vecchio",
          "zip-code": "19025",
          "comune": "Portovenere",
          "provincia": "La Spezia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 423,
      "level": 3,
      "name": "Villa Romana della Foce",
      "website": "http://soprintendenza.liguria.beniculturali.it/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via San Rocco",
          "zip-code": "18038",
          "comune": "Sanremo",
          "provincia": "Imperia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 262,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 419,
      "level": 3,
      "name": "Villa Romana di Bussana",
      "website": "https://www.beniculturali.it/luogo/villa-romana-di-bussana",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via al Mare/Via Aurelia",
          "zip-code": "18038",
          "comune": "Sanremo",
          "provincia": "Imperia",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 262,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 907,
      "level": 3,
      "name": "Villa Romana di Minori",
      "website": "http://ambientesa.beniculturali.it/BAP/?q=luoghi&luogo=&provincia=&comune=&src=&ID=55",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Capo di Piazza, 28",
          "zip-code": "84010",
          "comune": "Minori",
          "provincia": "Salerno",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 422,
      "level": 3,
      "name": "Villa Romana di Russi",
      "website": "https://polomusealeemiliaromagna.beniculturali.it/musei/villa-romana-di-russi",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Fiumazzo, 17",
          "zip-code": "48026",
          "comune": "Russi",
          "provincia": "Ravenna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 237,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 872,
      "level": 3,
      "name": "Villa Romana di San Giovanni in Palco",
      "website": "https://www.beniculturali.it/luogo/villa-romana-di-san-giovanni-in-palco",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Giovanni in Palco",
          "zip-code": "83023",
          "comune": "Lauro",
          "provincia": "Avellino",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 270,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5324,
      "level": 3,
      "name": "Villa Romana di Toscolano Maderno",
      "website": "http://www.archeologica.lombardia.beniculturali.it; https://www.beniculturali.it/luogo/villa-romana-di-toscolano-maderno",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza SS. Maria del Benaco",
          "zip-code": "25088",
          "comune": "Toscolano-Maderno",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 214,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5168,
      "level": 3,
      "name": "Villa Romana e Antiquarium",
      "website": "http://www.villaromanadesenzano.beniculturali.it/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Crocefisso, 22",
          "zip-code": "25015",
          "comune": "Desenzano del Garda",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 309,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 5165,
      "level": 3,
      "name": "Villa Romana e Antiquarium di Palazzo Pignano",
      "website": "http://www.archeologica.lombardia.beniculturali.it http://www.palazzopignano.info/",
      "entity-tipology": "area archeologica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Luoghi Vecchi - Palazzo Pignano",
          "zip-code": "26020",
          "comune": "Cremona",
          "provincia": "Cremona",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 214,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 1330,
      "level": 3,
      "name": "Villa Rosa - Museo dell'Arte Vetraria Altarese",
      "website": "http://www.museodelvetro.org",
      "entity-tipology": "museo",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Consolato, 4",
          "zip-code": "17041",
          "comune": "Altare",
          "provincia": "Savona",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 308,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 6130,
      "level": 3,
      "name": "visitabile su richiesta prenotando al + 39 081 5235593",
      "website": "http://www.pafleg.it",
      "entity-tipology": "parco archeologico",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Castello, 37",
          "zip-code": "80070",
          "comune": "Bacoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 345,
          "parent-level": 2,
          "parent-relation-name": "coordina|B gestisce C|C fa parte di B|liv.2 gestisce liv.3|liv.3 fa parte di liv.2"
      }
  },
  {
      "code": 37,
      "level": 2,
      "name": "Archivio di Stato di Belluno",
      "website": "www.asbelluno.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via S. Maria dei Battuti, 3",
          "zip-code": "32100",
          "comune": "Belluno",
          "provincia": "Belluno",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 69,
      "level": 2,
      "name": "Archivio di Stato di Lecce",
      "website": "www.archiviodistatolecce.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Sozy Carafa, 15",
          "zip-code": "73100",
          "comune": "Lecce",
          "provincia": "Lecce",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 76,
      "level": 2,
      "name": "Archivio di Stato di Messina",
      "website": "www.asmessina.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Avellino n. 1",
          "zip-code": "98124",
          "comune": "Messina",
          "provincia": "Messina",
          "regione": "Sicilia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 99,
      "level": 2,
      "name": "Archivio di Stato di Reggio Emilia",
      "website": "www.archiviodistatoreggioemilia.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Cairoli, 6",
          "zip-code": "42100",
          "comune": "Reggio nell'Emilia",
          "provincia": "Reggio nell'Emilia",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 109,
      "level": 2,
      "name": "Archivio di Stato di Sondrio",
      "website": "www.assondrio.beniculturali.it",
      "entity-tipology": "Archivio di Stato",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Dante",
          "zip-code": "23100",
          "comune": "Sondrio",
          "provincia": "Sondrio",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 283,
      "level": 2,
      "name": "Biblioteca e il Complesso Monumentale dei Girolamini",
      "website": "http://www.bibliotecadeigirolamini.beniculturali.it/",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Duomo, 142",
          "zip-code": "80138",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 285,
      "level": 2,
      "name": "Biblioteca Nazionale Universitaria di Torino",
      "website": "www.bnto.librari.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Carlo Alberto, 3",
          "zip-code": "10123",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 8,
      "level": 2,
      "name": "Biblioteca Statale del Monumento Nazionale di Farfa",
      "website": "www.bibliotecafarfa.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Monastero, 1",
          "zip-code": "02110",
          "comune": "Fara in Sabina",
          "provincia": "Rieti",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 9,
      "level": 2,
      "name": "Biblioteca Statale del Monumento Nazionale di Grottaferrata",
      "website": "www.bibliotecagrottaferrata.beniculturali.it",
      "entity-tipology": "Biblioteca Statale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso del Popolo, 128",
          "zip-code": "00046",
          "comune": "Grottaferrata",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 154,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 23,
      "level": 2,
      "name": "Istituto Centrale per gli Archivi",
      "website": "www.icar.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Viale Castro Pretorio, 105",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 372,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 180,
      "level": 2,
      "name": "Istituto Centrale per il Restauro",
      "website": "hwww.iscr.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele, 23",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 295,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 363,
      "level": 2,
      "name": "Istituto Centrale per l'Archeologia",
      "website": "www.ic_archeo.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via San Michele, 22",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 282,
      "level": 1,
      "name": "Segretario Generale",
      "website": "",
      "entity-tipology": "Segretariato Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Collegio Romano, 27",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 157,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per il Friuli Venezia Giulia",
      "website": "www.fvg.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Liberta'",
          "zip-code": "34135",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 158,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per il Lazio",
      "website": "www.lazio.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele,22",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 159,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per il Molise",
      "website": "www.molise.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Salita San Bartolomeo, 10",
          "zip-code": "86100",
          "comune": "Campobasso",
          "provincia": "Campobasso",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 160,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per il Piemonte",
      "website": "www.piemonte.beniculturali.it/",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Giovanni, 2",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 161,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per il Veneto",
      "website": "www.veneto.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Ca' Michiel dalle Colonne",
          "zip-code": "30124",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 165,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per la Basilicata",
      "website": "www.basilicata.beniculturali.it/",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso XVIII Agosto 1860 n.84",
          "zip-code": "85100",
          "comune": "Potenza",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 166,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per la Calabria",
      "website": "www.beniculturalicalabria.it/",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Scylletion",
          "zip-code": "88021",
          "comune": "Borgia",
          "provincia": "Catanzaro",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 167,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per la Campania",
      "website": "www.campania.beniculturali.it/",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Eldorado, 1",
          "zip-code": "80132",
          "comune": "Napoli",
          "provincia": "Napoli",
          "regione": "Campania"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 168,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per la Liguria",
      "website": "www.liguria.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Balbi, 10",
          "zip-code": "16100",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 169,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per la Lombardia",
      "website": "www.lombardia.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Magenta, 24",
          "zip-code": "20123",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 170,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per la Puglia",
      "website": "www.puglia.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada dei Dottula - Isolato 49",
          "zip-code": "70122",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 171,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per la Sardegna",
      "website": "www.sardegna.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Largo Carlo Felice",
          "zip-code": "09124",
          "comune": "Cagliari",
          "provincia": "Cagliari",
          "regione": "Sardegna"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 172,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per la Toscana",
      "website": "www.toscana.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza d\u00e8 Mozzi, 2",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 162,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per l'Abruzzo",
      "website": "www.abruzzo.beniculturali.it/",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via F. Filomusi Guelfi",
          "zip-code": "67100",
          "comune": "L'Aquila",
          "provincia": "L'Aquila",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 173,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per le Marche",
      "website": "www.marche.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Birarelli, 35",
          "zip-code": "60121",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 163,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per l'Emilia-Romagna",
      "website": "www.emiliaromagna.beniculturali.it/",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Maggiore, 80",
          "zip-code": "40125",
          "comune": "Bologna",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 164,
      "level": 2,
      "name": "Segretariato Regionale del Ministero della cultura per l'Umbria",
      "website": "www.umbria.beniculturali.it",
      "entity-tipology": "Segretariato Regionale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza IV Novembre, 36",
          "zip-code": "06121",
          "comune": "Perugia",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 282,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7104,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio delle Marche",
      "website": "http://sabapmarche.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza del Senato, 15",
          "zip-code": "60121",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 259,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio dell'Umbria",
      "website": "http://www.sabap-umbria.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazzetta della Sinagoga",
          "zip-code": "06123",
          "comune": "Perugia",
          "provincia": "Perugia",
          "regione": "Umbria"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 228,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per il Comune di Venezia e Laguna",
      "website": "http://www.soprintendenza.venezia.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Marco (Palazzo Ducale)",
          "zip-code": "30124",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7069,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per il Molise",
      "website": "http://www.sabapmolise.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Salita San Bartolomeo, 10",
          "zip-code": "86100",
          "comune": "Campobasso",
          "provincia": "Campobasso",
          "regione": "Molise"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 249,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la citt\u00e0 metropolitana di Firenze e le province di Pistoia e Prato",
      "website": "http://www.sbap-fi.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Pitti, 1",
          "zip-code": "50125",
          "comune": "Firenze",
          "provincia": "Firenze",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 240,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la citt\u00e0 metropolitana di Torino",
      "website": "http://www.sabap-to.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza S. Giovanni, 2 (Palazzo Chiablese)",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7068,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per la provincia di Viterbo e per l'Etruria meridionale",
      "website": "http://www.sabap-rm-met.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Cavalletti, 2",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7067,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Ascoli Piceno, Fermo e Macerata",
      "website": "",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "da assegnare",
          "zip-code": "63100",
          "comune": "Ascoli Piceno",
          "provincia": "Ascoli Piceno",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 352,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Barletta, Andria, Trani e Foggia",
      "website": "https://www.sabapfoggia.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Alberto Valentini Alvarez",
          "zip-code": "71121",
          "comune": "Foggia",
          "provincia": "Foggia",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 243,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Bergamo e Brescia",
      "website": "http://www.architettonicibrescia.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Gezio Calini, 26",
          "zip-code": "25121",
          "comune": "Brescia",
          "provincia": "Brescia",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 258,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le Province di Biella, Novara, Verbano-Cusio-Ossola e Vercelli",
      "website": "http://www.sabap-no.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Corso Felice Cavallotti, 27 (Palazzo San Paolo)",
          "zip-code": "28100",
          "comune": "Novara",
          "provincia": "Novara",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7070,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Catanzaro e Crotone",
      "website": "",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Castello snc Castello Carlo V",
          "zip-code": "88900",
          "comune": "Crotone",
          "provincia": "Crotone",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7065,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Como, Lecco, Sondrio e Varese",
      "website": "",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Edmondo De Amicis, 11",
          "zip-code": "20123",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 351,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le Province di Cremona, Mantova e Lodi",
      "website": "www.sabap-mn.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Sordello (Palazzo Ducale)",
          "zip-code": "46100",
          "comune": "Mantova",
          "provincia": "Mantova",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 7066,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Imperia e Savona",
      "website": "",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Balbi, 10 (Palazzo Reale)",
          "zip-code": "16126",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 250,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Lucca e Massa Carrara",
      "website": "http://www.sbappsae-lu.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza della Magione",
          "zip-code": "55100",
          "comune": "Lucca",
          "provincia": "Lucca",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 267,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Monza-Brianza e Pavia",
      "website": "http://www.archeologica.lombardia.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Edmondo De Amicis, 11",
          "zip-code": "20123",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 236,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le Province di Parma e Piacenza",
      "website": "http://sabap-pr.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza San Giovanni Paolo II, 5A",
          "zip-code": "43121",
          "comune": "Parma",
          "provincia": "Parma",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 245,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per Le province di Pisa e Livorno",
      "website": "http://www.sbappsae-pi.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Lungarno Pacinotti",
          "zip-code": "56100",
          "comune": "Pisa",
          "provincia": "Pisa",
          "regione": "Toscana"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 254,
      "level": 2,
      "name": "Soprintendenza Archeologia, Belle Arti e Paesaggio per le province di Verona, Rovigo e Vicenza",
      "website": "http://www.sbap-vr.beniculturali.it",
      "entity-tipology": "Soprintendenza Archeologia, Belle Arti e Paesaggio",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "piazza San Fermo",
          "zip-code": "37121",
          "comune": "Verona",
          "provincia": "Verona",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 184,
      "level": 2,
      "name": "Soprintendenza Archivistica del Friuli-Venezia Giulia",
      "website": "www.sa-fvg.archivi.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Alessandro La Marmora, 17",
          "zip-code": "34139",
          "comune": "Trieste",
          "provincia": "Trieste",
          "regione": "Friuli-Venezia Giulia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 185,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica del Lazio",
      "website": "www.sa-lazio.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele, 17",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 187,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica del Piemonte e della Valle D'aosta",
      "website": "www.sato-archivi.it/Sito/index.php",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via S. Chiara, 40/H",
          "zip-code": "10122",
          "comune": "Torino",
          "provincia": "Torino",
          "regione": "Piemonte"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 188,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica del Veneto e del Trentino Alto-Adige",
      "website": "www.sab-vta.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Campo dei Frari, 3002",
          "zip-code": "30125",
          "comune": "Venezia",
          "provincia": "Venezia",
          "regione": "Veneto"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 190,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica dell\u2019Emilia-Romagna",
      "website": "www.sa-ero.archivi.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza de' Celestini, 4",
          "zip-code": "40123",
          "comune": "Bologna",
          "provincia": "Bologna",
          "regione": "Emilia-Romagna"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 383,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica della Basilicata",
      "website": "http://www.archivisticabasilicata.beniculturali.it/",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Discesa San Gerardo, 7",
          "zip-code": "85100",
          "comune": "Potenza",
          "provincia": "Potenza",
          "regione": "Basilicata"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 360,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica della Calabria",
      "website": "www.sa-cal.archivi.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Lia Casalotto",
          "zip-code": "89122",
          "comune": "Reggio di Calabria",
          "provincia": "Reggio di Calabria",
          "regione": "Calabria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 195,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica della Liguria",
      "website": "www.sa-liguria.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Balbi, 10",
          "zip-code": "16121",
          "comune": "Genova",
          "provincia": "Genova",
          "regione": "Liguria"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 196,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica della Lombardia",
      "website": "www.sa-lom.archivi.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Senato",
          "zip-code": "20121",
          "comune": "Milano",
          "provincia": "Milano",
          "regione": "Lombardia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 197,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica della Puglia",
      "website": "www.sapuglia.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Strada Sagges, 3",
          "zip-code": "70122",
          "comune": "Bari",
          "provincia": "Bari",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 189,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica dell'Abruzzo e del Molise",
      "website": "www.sa-abruzzo.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Italia, 15",
          "zip-code": "65121",
          "comune": "Pescara",
          "provincia": "Pescara",
          "regione": "Abruzzo"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 201,
      "level": 2,
      "name": "Soprintendenza Archivistica e Bibliografica delle Marche",
      "website": "www.sa-uma.beniculturali.it",
      "entity-tipology": "Soprintendenza Archivistica e Bibliografica",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Alessando Maggini, 8",
          "zip-code": "60127",
          "comune": "Ancona",
          "provincia": "Ancona",
          "regione": "Marche"
      },
      "parent": {
          "parent-code": 149,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 373,
      "level": 2,
      "name": "Soprintendenza Nazionale per Il Patrimonio Culturale Subacqueo",
      "website": "",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via Duomo n. 33",
          "zip-code": "74123",
          "comune": "Taranto",
          "provincia": "Taranto",
          "regione": "Puglia"
      },
      "parent": {
          "parent-code": 151,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 382,
      "level": 1,
      "name": "Direzione Generale Sicurezza del Patrimonio Culturale",
      "website": "dgspatrimonioculturale.beniculturali.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele, 22",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 364,
      "level": 2,
      "name": "Ufficio del Soprintendente Speciale per le Aree Colpite dal Sisma del 24 Agosto 2016",
      "website": "uss-sisma2016.beniculturali.it",
      "entity-tipology": "Istituto dotato di autonomia speciale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Mattonato, 3",
          "zip-code": "02100",
          "comune": "Rieti",
          "provincia": "Rieti",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": 382,
          "parent-level": 1,
          "parent-relation-name": "coordina|A coordina B|B afferisce ad A|liv.1 coordina liv.2|liv.2 afferisce a liv.1"
      }
  },
  {
      "code": 150,
      "level": 1,
      "name": "Direzione Generale Cinema e Audiovisivo",
      "website": "www.cinema.beniculturali.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Santa Croce in Gerusalemme, 9/A",
          "zip-code": "00184",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 155,
      "level": 1,
      "name": "Direzione Generale Spettacolo",
      "website": "www.spettacolodalvivo.beniculturali.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Piazza Santa Croce in Gerusalemme, 9/A",
          "zip-code": "00184",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 156,
      "level": 1,
      "name": "Direzione Generale Organizzazione",
      "website": "cultura.gov.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via del Collegio Romano, 27",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 292,
      "level": 1,
      "name": "Direzione Generale Creativit\u00e0 Contemporanea",
      "website": "www.aap.beniculturali.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "Via di San Michele, 22",
          "zip-code": "00153",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 293,
      "level": 1,
      "name": "Direzione Generale Turismo",
      "website": "www.turismo.beniculturali.it",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via Marghera, 2",
          "zip-code": "00185",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  },
  {
      "code": 294,
      "level": 1,
      "name": "Direzione Generale Bilancio",
      "website": "",
      "entity-tipology": "Direzione Generale",
      "entity-venue": "Sede Principale",
      "place": {
          "address": "via del Collegio Romano, 27",
          "zip-code": "00186",
          "comune": "Roma",
          "provincia": "Roma",
          "regione": "Lazio"
      },
      "parent": {
          "parent-code": -1,
          "parent-level": -1,
          "parent-relation-name": "-"
      }
  }
]
export default facilities
