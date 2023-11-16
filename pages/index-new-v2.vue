<template>
  <section>
    <header>
      <h1 class="text-center mt-5">
        Benvenuto nella Digital Library
      </h1>
    </header>
    <div class="mb-5 search-form-wrapper">
      <ui-search-form />
      <label class="sr-only">
        <b>Cerca per tipo</b>
      </label>
      <ui-chip-list
        class="mt-4"
        :list="fetchedTypologies"
      />
    </div>
    <div class="row">
      <div class="col-12 col-md-8 mb-5">
        <div id="grafico-list" style="margin-top: 5rem">
          <div v-for="graphObj in grafici" :key="graphObj.question" style="margin-bottom: 6rem">
            <h3 class="h5">
              {{ graphObj.title }}
            </h3>
            <p>{{ graphObj.description }}</p>
            <div v-if="graphObj.type === 'bar'">
              <div v-for="grafico in graphObj.data" :key="grafico.id" style="margin-bottom: 3rem">
                <p class="text-center text-100" style="font-size: smaller">
                  {{ grafico.title }}
                </p>
                <div v-if="grafico.options !== undefined">
                  <div v-if="grafico.percentage">
                    <DataBarPercentageChart
                      :data="grafico.data"
                      :options="grafico.options"
                    />
                  </div>
                  <div v-else>
                    <DataBarChart
                      :data="grafico.data"
                      :options="grafico.options"
                    />
                  </div>
                </div>
                <div v-else-if="grafico.bigNumbers">
                  <DataBarBigNumbersChart
                    :data="grafico.data"
                  />
                </div>
                <div v-else-if="grafico.percentage">
                  <DataBarPercentageChart
                    :data="grafico.data"
                  />
                </div>
                <div v-else>
                  <DataBarChart
                    :data="grafico.data"
                  />
                </div>
              </div>
            </div>
            <div v-else-if="graphObj.type === 'doughnut'">
              <div v-for="grafico in graphObj.data" :key="grafico.id" style="margin-bottom: 3rem">
                <p v-if="grafico.title !== undefined" class="text-center text-100" style="font-size: larger; margin-top: 1em; margin-bottom: 0.5em">
                  {{ grafico.title }}
                </p>
                <div v-if="grafico.percentage">
                  <DataDoughnutPercentageChart
                    :data="grafico.data"
                  />
                </div>
                <div v-else>
                  <DataDoughnutChart
                    :data="grafico.data"
                  />
                </div>
                <div v-if="grafico.acronyms !== undefined" class="text-center text-100" style="font-size: smaller; margin-top: 1em">
                  <div v-for="acronym in grafico.acronyms" :key="acronym">
                    <p style="margin-bottom: 0">
                      {{ acronym }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <h3 class="h5">
          Albero amministrativo delle strutture culturali italiane
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut auctor lacus. Curabitur facilisis suscipit sodales. Nunc eget sapien porttitor, ornare velit a, vestibulum massa.
        </p>
        <div
          v-if="!$fetchState.pending"
          class="bg-white border border-secondary p-3"
        >
          <data-tree
            :data-tree="dataTree"
          />
        </div>
        <div
          v-else
          class="row align-items-center loader-wrapper"
        >
          <div class="col">
            <div class="progress-spinner progress-spinner-active m-auto">
              <span class="sr-only">Caricamento...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DataDoughnutPercentageChart from '../components/data/data-doughnut-percentage-chart'
import DataBarBigNumbersChart from '../components/data/data-bar-bigNumbers-chart'
export default {
  components: { DataBarBigNumbersChart, DataDoughnutPercentageChart },
  data () {
    return {
      barChartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [{ gridLines: { display: false } }],
          yAxes: [{ gridLines: { display: false } }]
        }
      },
      grafici: [
        {
          question: 'grafico2_1',
          title: 'Categoria alla quale appartiene il sito web istituzionale ufficiale',
          description: 'Il grafico mostra come si suddividono i siti web ufficiali dei vari istituiti, distinguendo i risultati per il settore al quale appartengono gli istituti.',
          type: 'bar',
          data: [{
            id: 0,
            title: 'Valori assoluti',
            data: {
              labels: ['Sito anagrafica', 'Sito web con contenuti redazionali', "Sito web con servizi orientati all'utente", 'Sito web interattivo', 'nd'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [10, 75, 34, 1, 0],
                  borderColor: 'rgb(184, 230, 196)',
                  backgroundColor: 'rgb(174, 220, 186)'
                },
                {
                  label: 'ARTI',
                  data: [55, 178, 32, 6, 10],
                  borderColor: 'rgb(255, 207, 163)',
                  backgroundColor: 'rgb(255, 197, 153)'
                },
                {
                  label: 'BIBLIOTECHE',
                  data: [6, 19, 16, 5, 0],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                },
                {
                  label: 'TOTALE',
                  data: [71, 272, 82, 12, 10],
                  borderColor: 'rgb(244, 77, 63)',
                  backgroundColor: 'rgb(234, 67, 53)'
                }
              ]
            }
          },
          {
            id: 1,
            percentage: true,
            title: 'Valori relativi',
            data: {
              labels: ['Sito anagrafica', 'Sito web con contenuti redazionali', "Sito web con servizi orientati all'utente", 'Sito web interattivo', 'nd'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [8.3, 62.5, 28.3, 0.8, 0.0],
                  borderColor: 'rgb(184, 230, 196)',
                  backgroundColor: 'rgb(174, 220, 186)'
                },
                {
                  label: 'ARTI',
                  data: [19.6, 63.3, 11.4, 2.1, 3.6],
                  borderColor: 'rgb(255, 207, 163)',
                  backgroundColor: 'rgb(255, 197, 153)'
                },
                {
                  label: 'BIBLIOTECHE',
                  data: [13.0, 41.3, 34.8, 10.9, 0.0],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                },
                {
                  label: 'TOTALE',
                  data: [15.9, 60.9, 18.3, 2.7, 2.2],
                  borderColor: 'rgb(244, 77, 63)',
                  backgroundColor: 'rgb(234, 67, 53)'
                }
              ]
            }
          }]
        },
        {
          question: 'grafico4_0',
          title: 'Servizi digitali offerti dagli istituti',
          description: 'Il grafico mostra quali sono i servizi digitali offerti dagli istituti, suddividendo i risultati in base al settore al quale appartengono gli istituti.',
          type: 'bar',
          data: [{
            id: 0,
            title: 'Valori assoluti',
            data: {
              labels: ['Audio guide', 'Visita virtuale', 'Rappresentazioni in 3D', 'Realtà virtuale', 'Realtà aumentata', 'Riproduzioni olografiche', 'Gaming', 'Stampa 3D', 'Tutorial/strumenti didattici', 'Ticketing', 'Prenotazioni accesso', 'Prenotazioni richieste consultazione', 'Riproduzioni digitali / document delivery', 'Prestito', 'E-commerce', 'Merchandising', 'Consultazione banche dati', 'Altro'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [10, 17, 4, 3, 2, 2, 1, 1, 22, 4, 37, 41, 60, 2, 3, 0, 78, 10],
                  borderColor: 'rgb(184, 230, 196)',
                  backgroundColor: 'rgb(174, 220, 186)'
                },
                {
                  label: 'ARTI',
                  data: [76, 43, 30, 21, 12, 4, 9, 9, 70, 69, 101, 56, 54, 16, 4, 24, 43, 9],
                  borderColor: 'rgb(255, 207, 163)',
                  backgroundColor: 'rgb(255, 197, 153)'
                },
                {
                  label: 'BIBLIOTECHE',
                  data: [6, 14, 1, 1, 2, 1, 1, 0, 9, 2, 22, 28, 31, 30, 0, 0, 40, 9],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                },
                {
                  label: 'TOTALE',
                  data: [92, 74, 35, 25, 16, 7, 11, 10, 101, 75, 160, 125, 145, 48, 7, 24, 161, 28],
                  borderColor: 'rgb(244, 77, 63)',
                  backgroundColor: 'rgb(234, 67, 53)'
                }
              ]
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                yAxes: [{ gridLines: { display: false } }]
              }
            }
          },
          {
            id: 1,
            percentage: true,
            title: 'Valori relativi',
            data: {
              labels: ['Audio guide', 'Visita virtuale', 'Rappresentazioni in 3D', 'Realtà virtuale', 'Realtà aumentata', 'Riproduzioni olografiche', 'Gaming', 'Stampa 3D', 'Tutorial/strumenti didattici', 'Ticketing', 'Prenotazioni accesso', 'Prenotazioni richieste consultazione', 'Riproduzioni digitali / document delivery', 'Prestito', 'E-commerce', 'Merchandising', 'Consultazione banche dati', 'Altro'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [8.3, 14.2, 3.3, 2.5, 1.7, 1.7, 0.8, 0.8, 18.3, 3.3, 30.8, 34.2, 50.0, 1.7, 2.5, 0.0, 65.0, 8.3],
                  borderColor: 'rgb(184, 230, 196)',
                  backgroundColor: 'rgb(174, 220, 186)'
                },
                {
                  label: 'ARTI',
                  data: [27.0, 15.3, 10.7, 7.5, 4.3, 1.4, 3.2, 3.2, 24.9, 24.6, 35.9, 19.9, 19.2, 5.7, 1.4, 8.5, 15.3, 3.2],
                  borderColor: 'rgb(255, 207, 163)',
                  backgroundColor: 'rgb(255, 197, 153)'
                },
                {
                  label: 'BIBLIOTECHE',
                  data: [13.0, 30.4, 2.2, 2.2, 4.3, 2.2, 2.2, 0.0, 19.6, 4.3, 47.8, 60.9, 67.4, 65.2, 0.0, 0.0, 87.0, 19.6],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                },
                {
                  label: 'TOTALE',
                  data: [20.6, 16.6, 7.8, 5.6, 3.6, 1.6, 2.5, 2.2, 22.6, 16.8, 35.8, 28.0, 32.4, 10.7, 1.6, 5.4, 36.0, 6.3],
                  borderColor: 'rgb(244, 77, 63)',
                  backgroundColor: 'rgb(234, 67, 53)'
                }
              ]
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                yAxes: [{ gridLines: { display: false } }]
              },
              tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                  label (tooltipItems) {
                    return tooltipItems.xLabel + ' : ' + tooltipItems.yLabel + '%'
                  }
                }
              }
            }
          }]
        },
        {
          question: 'grafico5_0',
          title: 'Social network utilizzati dagli istituti',
          description: 'Il grafico mostra in quali social network sono presenti gli istituti, distinguendo i risultati in base al settore al quale appartengono tali istituti.',
          type: 'bar',
          data: [{
            id: 0,
            title: 'Valori assoluti',
            data: {
              labels: ['Facebook', 'Instagram', 'Twitter', 'Linkedin', 'Youtube', 'TikTok'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [98, 31, 13, 2, 33, 2],
                  borderColor: 'rgb(184, 230, 196)',
                  backgroundColor: 'rgb(174, 220, 186)'
                },
                {
                  label: 'ARTI',
                  data: [222, 166, 65, 8, 108, 9],
                  borderColor: 'rgb(255, 207, 163)',
                  backgroundColor: 'rgb(255, 197, 153)'
                },
                {
                  label: 'BIBLIOTECHE',
                  data: [34, 21, 8, 0, 18, 0],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                },
                {
                  label: 'TOTALE',
                  data: [354, 218, 86, 10, 159, 11],
                  borderColor: 'rgb(244, 77, 63)',
                  backgroundColor: 'rgb(234, 67, 53)'
                }
              ]
            }
          },
          {
            id: 1,
            percentage: true,
            title: 'Valori relativi',
            data: {
              labels: ['Facebook', 'Instagram', 'Twitter', 'Linkedin', 'Youtube', 'TikTok'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [81.7, 25.8, 10.8, 1.7, 27.5, 1.7],
                  borderColor: 'rgb(184, 230, 196)',
                  backgroundColor: 'rgb(174, 220, 186)'
                },
                {
                  label: 'ARTI',
                  data: [79.0, 59.1, 23.1, 2.8, 38.4, 3.2],
                  borderColor: 'rgb(255, 207, 163)',
                  backgroundColor: 'rgb(255, 197, 153)'
                },
                {
                  label: 'BIBLIOTECHE',
                  data: [73.9, 45.7, 17.4, 0.0, 39.1, 0.0],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                },
                {
                  label: 'TOTALE',
                  data: [79.2, 48.8, 19.2, 2.2, 35.6, 2.5],
                  borderColor: 'rgb(244, 77, 63)',
                  backgroundColor: 'rgb(234, 67, 53)'
                }
              ]
            }
          }]
        },
        {
          question: 'grafico5_1',
          title: 'Numero di follower sui social network',
          description: 'Il grafico mostra la somma del numero di follower di tutti gli account appartenenti agli istituti.',
          type: 'bar',
          data: [{
            id: 0,
            bigNumbers: true,
            title: 'Valori assoluti',
            data: {
              labels: ['Facebook', 'Instagram', 'Twitter', 'Linkedin', 'Youtube', 'TikTok'],
              datasets: [
                {
                  label: 'TOTALE',
                  data: [2758563, 2262623, 356042, 12866, 84298, 74431],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                }
              ]
            }
          }]
        },
        {
          question: 'grafico12_1_3',
          title: 'Origine dei fondi utilizzati dagli istituti per la realizzazione dei loro applicativi',
          description: 'Il grafico descrive l\'origine dei fondi utilizzati dagli istituti per la realizzazione dei loro applicativi. Si può notare come il MiBACT sia la fonte più grande degli istituti, indipendentemente dal settore al quale appartengono.',
          type: 'bar',
          data: [{
            id: 0,
            title: 'Valori assoluti',
            data: {
              labels: ['MIBACT', 'Fondi Europei', 'Fondi di altre PA', 'Fondi privati', 'Fondi propri'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [54, 0, 4, 3, 6],
                  borderColor: 'rgb(184, 230, 196)',
                  backgroundColor: 'rgb(174, 220, 186)'
                },
                {
                  label: 'ARTI',
                  data: [84, 6, 3, 7, 19],
                  borderColor: 'rgb(255, 207, 163)',
                  backgroundColor: 'rgb(255, 197, 153)'
                },
                {
                  label: 'BIBLIOTECHE',
                  data: [31, 0, 6, 2, 0],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                },
                {
                  label: 'TOTALE',
                  data: [169, 6, 13, 12, 25],
                  borderColor: 'rgb(244, 77, 63)',
                  backgroundColor: 'rgb(234, 67, 53)'
                }
              ]
            }
          },
          {
            id: 1,
            percentage: true,
            title: 'Valori relativi',
            data: {
              labels: ['MIBACT', 'Fondi Europei', 'Fondi di altre PA', 'Fondi privati', 'Fondi propri'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [66.7, 0.0, 4.9, 3.7, 7.4],
                  borderColor: 'rgb(184, 230, 196)',
                  backgroundColor: 'rgb(174, 220, 186)'
                },
                {
                  label: 'ARTI',
                  data: [73.0, 5.2, 2.6, 6.1, 16.5],
                  borderColor: 'rgb(255, 207, 163)',
                  backgroundColor: 'rgb(255, 197, 153)'
                },
                {
                  label: 'BIBLIOTECHE',
                  data: [81.6, 0.0, 16.2, 5.4, 0.0],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                },
                {
                  label: 'TOTALE',
                  data: [72.2, 2.6, 5.6, 5.2, 10.7],
                  borderColor: 'rgb(244, 77, 63)',
                  backgroundColor: 'rgb(234, 67, 53)'
                }
              ]
            }
          }]
        },
        {
          question: 'grafico12_2',
          title: 'Numero di record consultabili online (esclusi i sistemi nazionali)',
          description: 'Il grafico evidenzia la somma del numero di record consultabili online, suddivisi per il settore degli istituti ai quali appartengono.',
          type: 'bar',
          data: [{
            id: 0,
            bigNumbers: true,
            title: 'Valori assoluti',
            data: {
              labels: ['Numero record'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [9849879],
                  borderColor: 'rgb(184, 230, 196)',
                  backgroundColor: 'rgb(174, 220, 186)'
                },
                {
                  label: 'ARTI',
                  data: [6042408],
                  borderColor: 'rgb(255, 207, 163)',
                  backgroundColor: 'rgb(255, 197, 153)'
                },
                {
                  label: 'BIBLIOTECHE',
                  data: [51320704],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                },
                {
                  label: 'TOTALE',
                  data: [67212991],
                  borderColor: 'rgb(244, 77, 63)',
                  backgroundColor: 'rgb(234, 67, 53)'
                }
              ]
            }
          }]
        },
        {
          question: 'grafico12_3',
          title: 'Numero di risorse digitali accessibili online (esclusi i sistemi nazionali)',
          description: 'Il grafico evidenzia la somma del numero di risorse digitali accessibili online, suddivisi per il settore degli istituti ai quali appartengono.',
          type: 'bar',
          data: [{
            id: 0,
            bigNumbers: true,
            title: 'Valori assoluti',
            data: {
              labels: ['Numero risorse digitali'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [4938110],
                  borderColor: 'rgb(184, 230, 196)',
                  backgroundColor: 'rgb(174, 220, 186)'
                },
                {
                  label: 'ARTI',
                  data: [8047958],
                  borderColor: 'rgb(255, 207, 163)',
                  backgroundColor: 'rgb(255, 197, 153)'
                },
                {
                  label: 'BIBLIOTECHE',
                  data: [2251613],
                  borderColor: 'rgb(136, 219, 225)',
                  backgroundColor: 'rgb(126, 209, 215)'
                },
                {
                  label: 'TOTALE',
                  data: [15237681],
                  borderColor: 'rgb(244, 77, 63)',
                  backgroundColor: 'rgb(234, 67, 53)'
                }
              ]
            }
          }]
        },
        {
          question: 'grafico12_4',
          title: 'Licenza d\'uso sui dati alla quale si riferisce l\'applicativo',
          description: 'Il grafico rappresenta le tipologie di licenza d\'uso sui dati di tutti gli applicativi (quindi se lo stesso applicativo è utilizzato da due istituti viene contato due volte, anche se la licenza può essere diversa), suddivisi per il settore degli istituti che possiedono tali applicativi.',
          type: 'doughnut',
          data: [{
            id: 0,
            percentage: false,
            data: {
              labels: ['CC-BY', 'CC-BY-NC', 'CC-BY-NC-ND', 'CC-BY-NC-SA', 'CC-BY-SA', 'CC0', 'IODL', 'Tutti i diritti riservati', 'Nessuna licenza', 'nd'],
              datasets: [
                {
                  label: 'TOTALE',
                  data: [13, 6, 1, 22, 16, 30, 7, 29, 70, 136],
                  backgroundColor: ['rgb(174, 220, 186)', 'rgb(255, 197, 153)', 'rgb(204, 204, 204)', 'rgb(126, 209, 215)', 'rgb(234, 67, 53)', 'rgb(142, 124, 195)', 'rgb(253, 228, 155)', 'rgb(133, 32, 12)', '#1E90FF', '#008080']
                }
              ]
            }
          }]
        },
        {
          question: 'grafico12_5',
          title: 'Licenza d\'uso sulle immagini alla quale si riferisce l\'applicativo',
          description: 'Il grafico rappresenta le tipologie di licenza d\'uso sulle immagini di tutti gli applicativi (quindi se lo stesso applicativo è utilizzato da due istituti viene contato due volte, anche se la licenza può essere diversa), suddivisi per il settore degli istituti che possiedono questi applicativi.',
          type: 'doughnut',
          data: [{
            id: 0,
            percentage: false,
            data: {
              labels: ['CC-BY', 'CC-BY-NC', 'CC-BY-NC-ND', 'CC-BY-NC-SA', 'CC-BY-SA', 'CC0', 'IODL', 'Tutti i diritti riservati', 'Nessuna licenza', 'nd'],
              datasets: [
                {
                  label: 'TOTALE',
                  data: [5, 8, 1, 23, 14, 17, 2, 43, 68, 149],
                  backgroundColor: ['rgb(174, 220, 186)', 'rgb(255, 197, 153)', 'rgb(204, 204, 204)', 'rgb(126, 209, 215)', 'rgb(234, 67, 53)', 'rgb(142, 124, 195)', 'rgb(253, 228, 155)', 'rgb(133, 32, 12)', '#1E90FF', '#008080']
                }
              ]
            }
          }]
        },
        {
          question: 'grafico12_6',
          title: 'Licenza d\'uso sui testi/contenuti redazionali alla quale si riferisce l\'applicativo',
          description: 'Il grafico rappresenta le tipologie di licenza d\'uso sui testi/contenuti redazionali di tutti gli applicativi (quindi se lo stesso applicativo è utilizzato da due istituti viene contato due volte, anche se la licenza può essere diversa), suddivisi per il settore degli istituti che possiedono tali applicativi.',
          type: 'doughnut',
          data: [{
            id: 0,
            percentage: false,
            data: {
              labels: ['CC-BY', 'CC-BY-NC', 'CC-BY-NC-ND', 'CC-BY-NC-SA', 'CC-BY-SA', 'CC0', 'IODL', 'Tutti i diritti riservati', 'Nessuna licenza', 'nd'],
              datasets: [
                {
                  label: 'TOTALE',
                  data: [6, 11, 1, 20, 16, 23, 3, 31, 72, 147],
                  backgroundColor: ['rgb(174, 220, 186)', 'rgb(255, 197, 153)', 'rgb(204, 204, 204)', 'rgb(126, 209, 215)', 'rgb(234, 67, 53)', 'rgb(142, 124, 195)', 'rgb(253, 228, 155)', 'rgb(133, 32, 12)', '#1E90FF', '#008080']
                }
              ]
            }
          }]
        },
        {
          question: 'grafico12_8',
          title: 'Software applicativi più diffusi',
          description: 'I seguenti grafici rappresentano i 7 applicativi più utilizzati da ogni settore. Si può notare che gli applicativi più utilizzati da ciascun settore non hanno particolare riscontro con quelli utilizzati dagli altri. Le voci con un asterisco sono degli acronimi che vengo riportati in calce al grafico.',
          type: 'doughnut',
          data: [{
            id: 0,
            percentage: true,
            title: 'ARCHIVI',
            acronyms: ['SIAS: Sistema Informativo degli Archivi di Stato', 'SIUSA: Sistema Informativo Unificato per le Soprintendenze Archivistiche', 'SAN: Sistema Archivistico Nazionale'],
            data: {
              labels: ['Archimista', 'MS Office', 'SIAS*', 'Arianna', 'SIUSA*', 'xDams', 'SAN*', 'Altro'],
              datasets: [
                {
                  label: 'ARCHIVI',
                  data: [17.5, 15.9, 13.5, 8.7, 8.7, 7.9, 5.6, 22.2],
                  backgroundColor: ['rgb(174, 220, 186)', 'rgb(255, 197, 153)', 'rgb(204, 204, 204)', 'rgb(126, 209, 215)', 'rgb(234, 67, 53)', 'rgb(142, 124, 195)', 'rgb(253, 228, 155)', 'rgb(133, 32, 12)']
                }
              ]
            }
          },
          {
            id: 1,
            percentage: true,
            title: 'ARTI',
            acronyms: ['RAPTOR: Ricerca Archivi e Pratiche per la Tutela Operativa Regionale', 'CRBC: Centro Regionale per i Beni Culturali della Campania'],
            data: {
              labels: ['SIGECweb', 'Hera', 'xDams', 'RAPTOR*', 'MS Office', 'CRBC*', 'coMwork', 'Altro'],
              datasets: [
                {
                  label: 'ARTI',
                  data: [52.7, 4.0, 2.7, 2.7, 2.0, 2.0, 2.0, 32.0],
                  backgroundColor: ['rgb(174, 220, 186)', 'rgb(255, 197, 153)', 'rgb(204, 204, 204)', 'rgb(126, 209, 215)', 'rgb(234, 67, 53)', 'rgb(142, 124, 195)', 'rgb(253, 228, 155)', 'rgb(133, 32, 12)']
                }
              ]
            }
          },
          {
            id: 2,
            percentage: true,
            title: 'BIBLIOTECHE',
            acronyms: ['NBM: Nuova Biblioteca Manoscritta'],
            data: {
              labels: ['SBN Web', 'SebinaNEXT', 'Manus OnLine', 'Alma Ex Libris', 'NBM*', 'OPAC SBN', 'Archimista', 'Altro'],
              datasets: [
                {
                  label: 'BIBLIOTECHE',
                  data: [37.0, 14.8, 9.3, 5.6, 5.6, 3.7, 1.9, 22.2],
                  backgroundColor: ['rgb(174, 220, 186)', 'rgb(255, 197, 153)', 'rgb(204, 204, 204)', 'rgb(126, 209, 215)', 'rgb(234, 67, 53)', 'rgb(142, 124, 195)', 'rgb(253, 228, 155)', 'rgb(133, 32, 12)']
                }
              ]
            }
          }]
        }
      ],
      dataTree: {},
      metadata: {
        description: ''
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: { display: false }
            }
          ],
          yAxes: [
            {
              gridLines: { display: false }
            }
          ]
        }
      },
      lineChartData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Musei',
            data: [52907177, 59401861, 70731744, 75852378, 14639939],
            backgroundColor: '#365c77'
          }
        ]
      },
      barChartData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Educazione, Ricerca e Istituti Culturali',
            data: [331724, 341784, 341454, 286509, 238474],
            backgroundColor: '#FF555E'
          },
          {
            label: 'Archeologia, Belle Arti e Paesaggio',
            data: [391038, 465934, 816309, 602702, 266897],
            backgroundColor: '#FF8650'
          },
          {
            label: 'Archivi',
            data: [269338, 317535, 325617, 343079, 261001],
            backgroundColor: '#FFE981'
          },
          {
            label: 'Biblioteche e Diritto d\'Autore',
            data: [1110201, 1109746, 1147160, 1146784, 309329],
            backgroundColor: '#8BF18B'
          },
          {
            label: 'ICDP - Digital Library',
            data: [681021, 837848, 838765, 728231, 296577],
            backgroundColor: '#83B2FF'
          },
          {
            label: 'Segretario Generale',
            data: [22495, 41420, 36581, 51750, 78780],
            backgroundColor: '#9B6EF3'
          }
        ]
      }
    }
  },
  async fetch () {
    this.dataTree = await this.$axios.$get('/api/v0/facilities-diagram')
    if (this.fetchedRegions.length === 0) {
      await this.$store.dispatch('getRegions')
    }
    if (this.fetchedTypologies.length === 0) {
      await this.$store.dispatch('getTypologies')
    }
  },
  head () {
    return {
      title: 'Cerca tra le strutture culturali italiane | ICDP - Digital Library',
      meta: [
        { hid: 'description', name: 'description', content: this.metadata.description }
      ]
    }
  },
  computed: {
    fetchedRegions () {
      return this.$store.state.regions
    },
    fetchedTypologies () {
      return this.$store.state.typologies
    }
  }

}
</script>

<style lang="scss" scoped>
.search-form-wrapper {
  max-width: 920px;
  margin:  0 auto;
}
</style>
