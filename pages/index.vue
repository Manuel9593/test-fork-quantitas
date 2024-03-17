<script lang="ts" setup>
import FacilityType from "~/types/prismaTypes/facilityType";
import { useStore } from "~/composables/store";
const dataTree = ref<FacilityType[]>([]);
$fetch<FacilityType[]>("/api/facilities-diagram").then(
  (result) => (dataTree.value = result)
);
const typologies = useStore().getTypologies;
</script>

<script lang="ts">
import "chart.js/auto";
import { Bar, Doughnut } from "vue-chartjs";
import grafici from "./grafici.json";
import GraphOutcome from "~/types/graphTypes";
import { DataTree } from "#components";

export default {
  components: { Bar, Doughnut, DataTree },
  data() {
    return {
      barChartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } }
        }
      },
      barPercentageOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } }
        },
        tooltips: {
          enabled: true,
          mode: "single",
          callbacks: {
            label: (context: any) => {
              return context.parsed.x + " : " + context.parsed.y + "%";
            }
          }
        }
      },
      barSeparatorOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: { grid: { display: false } }
        }
      },
      bigNumbersOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } }
        },
        tooltips: {
          enabled: true,
          mode: "nearest",
          callbacks: {
            label: function (context: any) {
              const num = context.dataset.yLabel;
              let numStr = num.toString();
              if (num > 1000000) {
                numStr =
                  numStr.slice(0, numStr.length - 6) +
                  "." +
                  numStr.slice(numStr.length - 6, numStr.length - 3) +
                  "." +
                  numStr.slice(numStr.length - 3);
              } else if (num > 1000) {
                numStr =
                  numStr.slice(0, numStr.length - 3) +
                  "." +
                  numStr.slice(numStr.length - 3);
              }
              return context.dataset.xLabel + " : " + numStr;
            }
          }
        }
      },
      separatorPercentageOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: { grid: { display: false } }
        }
      },
      doughnutOptions: {
        maintainAspectRatio: false,
        responsive: true
      },
      doughnutPercentageOptions: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          enabled: true,
          mode: "nearest",
          callbacks: {
            label(context: any, data: any) {
              return (
                data.labels[context.dataIndex] +
                " : " +
                data.datasets[context.datasetIndex].data[context.dataIndex] +
                "%"
              );
            }
          }
        }
      },
      grafici: grafici as unknown as GraphOutcome,
      metadata: {
        description: ""
      },
      lineChartData: {
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Musei",
            data: [52907177, 59401861, 70731744, 75852378, 14639939],
            backgroundColor: "#365c77"
          }
        ]
      },
      barChartData: {
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Educazione, Ricerca e Istituti Culturali",
            data: [331724, 341784, 341454, 286509, 238474],
            backgroundColor: "#FF555E"
          },
          {
            label: "Archeologia, Belle Arti e Paesaggio",
            data: [391038, 465934, 816309, 602702, 266897],
            backgroundColor: "#FF8650"
          },
          {
            label: "Archivi",
            data: [269338, 317535, 325617, 343079, 261001],
            backgroundColor: "#FFE981"
          },
          {
            label: "Biblioteche e Diritto d'Autore",
            data: [1110201, 1109746, 1147160, 1146784, 309329],
            backgroundColor: "#8BF18B"
          },
          {
            label: "ICDP - Digital Library",
            data: [681021, 837848, 838765, 728231, 296577],
            backgroundColor: "#83B2FF"
          },
          {
            label: "Segretario Generale",
            data: [22495, 41420, 36581, 51750, 78780],
            backgroundColor: "#9B6EF3"
          }
        ]
      }
    };
  },
  head() {
    return {
      title:
        "Cerca tra le strutture culturali italiane | ICDP - Digital Library",
      meta: [{ hid: "description", name: "description", content: "" }]
    };
  }
};
</script>

<template>
  <div>
    <section>
      <header>
        <h1 class="text-center mt-5">Benvenuto nella Digital Library</h1>
      </header>
      <div class="mb-5 search-form-wrapper">
        <ui-search-form />
        <label class="hidden">
          <b>Cerca per tipo</b>
        </label>
        <ui-chip-list class="mt-4" :list="typologies" />
      </div>
      <div class="flex flex-row justify-center md:flex-wrap gap-3">
        <div class="basis-1/3 flex-auto">
          <div id="grafico-list">
            <div
              v-for="graphObj in grafici"
              :key="graphObj.question"
              style="margin-bottom: 6rem"
            >
              <h3>
                {{ graphObj.title }}
              </h3>
              <p>{{ graphObj.description }}</p>
              <div v-if="graphObj.type === 'bar'">
                <div
                  v-for="grafico in graphObj.data"
                  :key="grafico.id"
                  style="margin-bottom: 3rem"
                >
                  <p
                    class="text-center text-gray-500 italic"
                    style="font-size: smaller"
                  >
                    {{ grafico.title }}
                  </p>
                  <!-- <div v-if="grafico.options !== undefined">
                    <div v-if="grafico.percentage">
                      <Bar
                        :data="grafico.data"
                        :options="barPercentageOptions"
                      />
                    </div>
                    <div v-else>
                      <Bar
                        :data="grafico.data"
                        :options="barChartOptions"
                      />
                    </div>
                  </div> -->
                  <div v-if="grafico.bigNumbers">
                    <Bar :data="grafico.data" :options="bigNumbersOptions" />
                  </div>
                  <div v-else-if="grafico.percentage">
                    <div v-if="grafico.separator">
                      <Bar
                        :data="grafico.data"
                        :options="separatorPercentageOptions"
                      />
                    </div>
                    <div v-else>
                      <Bar
                        :data="grafico.data"
                        :options="barPercentageOptions"
                      />
                    </div>
                  </div>
                  <div v-else>
                    <div v-if="grafico.separator">
                      <Bar
                        :data="grafico.data"
                        :options="barSeparatorOptions"
                      />
                    </div>
                    <div v-else>
                      <Bar :data="grafico.data" :options="barChartOptions" />
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="graphObj.type === 'doughnut'">
                <div
                  v-for="grafico in graphObj.data"
                  :key="grafico.id"
                  style="margin-bottom: 3rem"
                >
                  <p
                    v-if="grafico.title !== undefined"
                    class="text-center text-gray-500 italic"
                    style="
                      font-size: larger;
                      margin-top: 1em;
                      margin-bottom: 0.5em;
                    "
                  >
                    {{ grafico.title }}
                  </p>
                  <div v-if="grafico.percentage">
                    <Doughnut
                      :data="grafico.data"
                      :options="doughnutPercentageOptions"
                    />
                  </div>
                  <div v-else>
                    <Doughnut :data="grafico.data" :options="doughnutOptions" />
                  </div>
                  <div v-if="grafico.acronyms">
                    <div v-for="acronym in grafico.acronyms" :key="acronym">
                      <p
                        class="text-center font-light text-xs text-blue-900 italic"
                      >
                        {{ acronym }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-1/6 flex-auto">
          <h3>Albero amministrativo delle strutture culturali italiane</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
            auctor lacus. Curabitur facilisis suscipit sodales. Nunc eget sapien
            porttitor, ornare velit a, vestibulum massa.
          </p>
          <div v-if="dataTree.length" class="bg-white border p-3">
            <DataTree :data-tree="dataTree" />
          </div>
          <div v-else class="flex flex-row items-center">
            <div class="flex-1">
              <UProgress
                animation="swing"
                size="2xl"
                :ui="{ progress: { color: 'bg-slate-900' } }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
