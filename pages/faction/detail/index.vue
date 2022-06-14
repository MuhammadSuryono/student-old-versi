<template>
  <div class="bg-img">
    <div class="header-module">
      <div class="card-title">
        <img src="~/assets/images/faction/logo.svg" class="logo-faction">
        <img
          src="~/assets/images/module/box-title.svg"
          class="background-button"
        >
        <div class="name-card">
          FACTION COMPETITION
        </div>
      </div>
      <div class="btn-back" @click="goBack()">
        <Back />
      </div>
    </div>
    <div class="content-faction">
      <div class="columns is-gapless mb-0 pb-0">
        <div v-if="selected1" class="no-select tab-petra">
          <img src="~/assets/images/tab/tab-active.svg" class="icon-button">
          <div class="text-petra">
            Progress Bar
          </div>
        </div>
        <div v-else class="no-select tab-petra" @click="tab(1, true)">
          <img
            src="~/assets/images/tab/tab-nonactive.svg"
            class="icon-button"
          >
          <div class="text-petra">
            Progress Bar
          </div>
        </div>
        <div v-if="selected2" class="no-select tab-petra">
          <img src="~/assets/images/tab/tab-active.svg" class="icon-button">
          <div class="text-petra">
            Module Dominance
          </div>
        </div>
        <div v-else class="no-select tab-petra" @click="tab(2, true)">
          <img
            src="~/assets/images/tab/tab-nonactive.svg"
            class="icon-button"
          >
          <div class="text-petra">
            Module Dominance
          </div>
        </div>
        <div v-if="selected3" class="no-select tab-petra">
          <img src="~/assets/images/tab/tab-active.svg" class="icon-button">
          <div class="text-petra">
            Comment Stars
          </div>
        </div>
        <div v-else class="no-select tab-petra" @click="tab(3, true)">
          <img
            src="~/assets/images/tab/tab-nonactive.svg"
            class="icon-button"
          >
          <div class="text-petra">
            Comment Stars
          </div>
        </div>
      </div>
      <div v-if="selected1" class="columns is-gapless">
        <div class="column is-narrow left-side-faction">
          <div class="columns is-gapless no-select current-progress">
            <div class="column is-narrow left-current">
              <div class="text-current">
                Current Progress
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div class="progress-skill columns is-gapless">
            <div class="columns is-narrow" style="margin-top: 0px">
              <img
                src="~/assets/images/faction/icon_1.png"
                class="icon-faction"
              >
            </div>
            <div
              class="columns is-narrow"
              style="
                width: 500px;
                margin-left: 20px;
                margin-top: 0px;
                margin-bottom: 0px;
              "
            >
              <div
                v-for="(progres, index2) in 10"
                :key="index2"
                class="column sub-prog"
              >
                <div
                  v-if="
                    parseFloat(value1) - Math.floor(parseFloat(value1)) === 0
                  "
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(value1)"
                    class="sub-det sub-filled"
                    style="background-color: #ff8383"
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="index2 < Math.trunc(parseFloat(value1))"
                    class="sub-det sub-filled"
                    style="background-color: #ff8383"
                  />
                  <div
                    v-if="index2 === Math.trunc(parseFloat(value1))"
                    class="sub-filled sub-no-width"
                    style="background-color: #ff8383"
                    :style="{
                      width:
                        Number(
                          (value1 - Math.trunc(parseFloat(value1))).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              LV {{ value1 }} /10
            </div>
          </div>
          <div class="progress-skill columns is-gapless">
            <div class="columns is-narrow" style="margin-top: 0px">
              <img
                src="~/assets/images/faction/icon_2.png"
                class="icon-faction"
              >
            </div>
            <div
              class="columns is-narrow"
              style="
                width: 500px;
                margin-left: 20px;
                margin-top: 0px;
                margin-bottom: 0px;
              "
            >
              <div
                v-for="(progres, index2) in 10"
                :key="index2"
                class="column sub-prog"
              >
                <div
                  v-if="
                    parseFloat(value2) - Math.floor(parseFloat(value2)) === 0
                  "
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(value2)"
                    class="sub-det sub-filled"
                    style="background-color: #ffc973"
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="index2 < Math.trunc(parseFloat(value2))"
                    class="sub-det sub-filled"
                    style="background-color: #ffc973"
                  />
                  <div
                    v-if="index2 === Math.trunc(parseFloat(value2))"
                    class="sub-filled sub-no-width"
                    style="background-color: #ffc973"
                    :style="{
                      width:
                        Number(
                          (value2 - Math.trunc(parseFloat(value2))).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              LV {{ value2 }} /10
            </div>
          </div>
          <div class="progress-skill columns is-gapless">
            <div class="columns is-narrow" style="margin-top: 0px">
              <img
                src="~/assets/images/faction/icon_3.png"
                class="icon-faction"
              >
            </div>
            <div
              class="columns is-narrow"
              style="
                width: 500px;
                margin-left: 20px;
                margin-top: 0px;
                margin-bottom: 0px;
              "
            >
              <div
                v-for="(progres, index2) in 10"
                :key="index2"
                class="column sub-prog"
              >
                <div
                  v-if="
                    parseFloat(value3) - Math.floor(parseFloat(value3)) === 0
                  "
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(value3)"
                    class="sub-det sub-filled"
                    style="background-color: #d1a171"
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="index2 < Math.trunc(parseFloat(value3))"
                    class="sub-det sub-filled"
                    style="background-color: #d1a171"
                  />
                  <div
                    v-if="index2 === Math.trunc(parseFloat(value3))"
                    class="sub-filled sub-no-width"
                    style="background-color: #d1a171"
                    :style="{
                      width:
                        Number(
                          (value3 - Math.trunc(parseFloat(value3))).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              LV {{ value3 }} /10
            </div>
          </div>
          <div class="progress-skill columns is-gapless">
            <div class="columns is-narrow" style="margin-top: 0px">
              <img
                src="~/assets/images/faction/icon_4.png"
                class="icon-faction"
              >
            </div>
            <div
              class="columns is-narrow"
              style="
                width: 500px;
                margin-left: 20px;
                margin-top: 0px;
                margin-bottom: 0px;
              "
            >
              <div
                v-for="(progres, index2) in 10"
                :key="index2"
                class="column sub-prog"
              >
                <div
                  v-if="
                    parseFloat(value4) - Math.floor(parseFloat(value4)) === 0
                  "
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(value4)"
                    class="sub-det sub-filled"
                    style="background-color: #bdff83"
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="index2 < Math.trunc(parseFloat(value4))"
                    class="sub-det sub-filled"
                    style="background-color: #bdff83"
                  />
                  <div
                    v-if="index2 === Math.trunc(parseFloat(value4))"
                    class="sub-filled sub-no-width"
                    style="background-color: #bdff83"
                    :style="{
                      width:
                        Number(
                          (value4 - Math.trunc(parseFloat(value4))).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              LV {{ value4 }} /10
            </div>
          </div>
          <div class="progress-skill columns is-gapless">
            <div class="columns is-narrow" style="margin-top: 0px">
              <img
                src="~/assets/images/faction/icon_5.png"
                class="icon-faction"
              >
            </div>
            <div
              class="columns is-narrow"
              style="
                width: 500px;
                margin-left: 20px;
                margin-top: 0px;
                margin-bottom: 0px;
              "
            >
              <div
                v-for="(progres, index2) in 10"
                :key="index2"
                class="column sub-prog"
              >
                <div
                  v-if="
                    parseFloat(value5) - Math.floor(parseFloat(value5)) === 0
                  "
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(value5)"
                    class="sub-det sub-filled"
                    style="background-color: #66d4ff"
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="index2 < Math.trunc(parseFloat(value5))"
                    class="sub-det sub-filled"
                    style="background-color: #66d4ff"
                  />
                  <div
                    v-if="index2 === Math.trunc(parseFloat(value5))"
                    class="sub-filled sub-no-width"
                    style="background-color: #66d4ff"
                    :style="{
                      width:
                        Number(
                          (value5 - Math.trunc(parseFloat(value5))).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              LV {{ value5 }} /10
            </div>
          </div>
        </div>
      </div>
      <div v-if="selected2" class="columns is-gapless">
        <div class="column is-narrow left-side-faction">
          <div class="columns is-gapless no-select current-progress">
            <div class="column is-narrow left-current">
              <div class="text-current">
                Progress this Month
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div class="progress-skill columns is-gapless">
            <div class="columns is-narrow">
              <img
                src="~/assets/images/faction/icon_1.png"
                class="icon-faction"
                style="margin-top: 10px"
              >
            </div>
            <div
              class="columns is-narrow"
              style="width: 500px; margin-left: 17px; transform: skew(18deg)"
            >
              <div
                v-for="(progres, index2) in 4"
                :key="index2"
                class="column sub-prog"
                style="padding-top: 24px; margin-top: 25px"
              >
                <div
                  v-if="parseFloat(value) - Math.floor(parseFloat(value)) === 0"
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(value)"
                    class="sub-det sub-filled"
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="index2 < Math.trunc(parseFloat(value))"
                    class="sub-det sub-filled"
                  />
                  <div
                    v-if="index2 === Math.trunc(parseFloat(value))"
                    class="sub-filled sub-no-width"
                    :style="{
                      width:
                        Number(
                          (value - Math.trunc(parseFloat(value))).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              50%
            </div>
          </div>
          <div class="progress-skill columns is-gapless">
            <div class="columns is-narrow">
              <img
                src="~/assets/images/faction/icon_2.png"
                class="icon-faction"
                style="margin-top: 10px"
              >
            </div>
            <div
              class="columns is-narrow"
              style="width: 500px; margin-left: 17px; transform: skew(18deg)"
            >
              <div
                v-for="(progres, index2) in 4"
                :key="index2"
                class="column sub-prog"
                style="padding-top: 24px; margin-top: 25px"
              >
                <div
                  v-if="parseFloat(value) - Math.floor(parseFloat(value)) === 0"
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(value)"
                    class="sub-det sub-filled"
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="index2 < Math.trunc(parseFloat(value))"
                    class="sub-det sub-filled"
                  />
                  <div
                    v-if="index2 === Math.trunc(parseFloat(value))"
                    class="sub-filled sub-no-width"
                    :style="{
                      width:
                        Number(
                          (value - Math.trunc(parseFloat(value))).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              50%
            </div>
          </div>
          <div class="progress-skill columns is-gapless">
            <div class="columns is-narrow">
              <img
                src="~/assets/images/faction/icon_3.png"
                class="icon-faction"
                style="margin-top: 10px"
              >
            </div>
            <div
              class="columns is-narrow"
              style="width: 500px; margin-left: 17px; transform: skew(18deg)"
            >
              <div
                v-for="(progres, index2) in 4"
                :key="index2"
                class="column sub-prog"
                style="padding-top: 24px; margin-top: 25px"
              >
                <div
                  v-if="parseFloat(value) - Math.floor(parseFloat(value)) === 0"
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(value)"
                    class="sub-det sub-filled"
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="index2 < Math.trunc(parseFloat(value))"
                    class="sub-det sub-filled"
                  />
                  <div
                    v-if="index2 === Math.trunc(parseFloat(value))"
                    class="sub-filled sub-no-width"
                    :style="{
                      width:
                        Number(
                          (value - Math.trunc(parseFloat(value))).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              50%
            </div>
          </div>
          <div class="progress-skill columns is-gapless">
            <div class="columns is-narrow">
              <img
                src="~/assets/images/faction/icon_4.png"
                class="icon-faction"
                style="margin-top: 10px"
              >
            </div>
            <div
              class="columns is-narrow"
              style="width: 500px; margin-left: 17px; transform: skew(18deg)"
            >
              <div
                v-for="(progres, index2) in 4"
                :key="index2"
                class="column sub-prog"
                style="padding-top: 24px; margin-top: 25px"
              >
                <div
                  v-if="parseFloat(value) - Math.floor(parseFloat(value)) === 0"
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(value)"
                    class="sub-det sub-filled"
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="index2 < Math.trunc(parseFloat(value))"
                    class="sub-det sub-filled"
                  />
                  <div
                    v-if="index2 === Math.trunc(parseFloat(value))"
                    class="sub-filled sub-no-width"
                    :style="{
                      width:
                        Number(
                          (value - Math.trunc(parseFloat(value))).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              50%
            </div>
          </div>
          <div class="progress-skill columns is-gapless">
            <div class="columns is-narrow">
              <img
                src="~/assets/images/faction/icon_5.png"
                class="icon-faction"
                style="margin-top: 10px"
              >
            </div>
            <div
              class="columns is-narrow"
              style="width: 500px; margin-left: 17px; transform: skew(18deg)"
            >
              <div
                v-for="(progres, index2) in 4"
                :key="index2"
                class="column sub-prog"
                style="padding-top: 24px; margin-top: 25px"
              >
                <div
                  v-if="parseFloat(value) - Math.floor(parseFloat(value)) === 0"
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(value)"
                    class="sub-det sub-filled"
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="index2 < Math.trunc(parseFloat(value))"
                    class="sub-det sub-filled"
                  />
                  <div
                    v-if="index2 === Math.trunc(parseFloat(value))"
                    class="sub-filled sub-no-width"
                    :style="{
                      width:
                        Number(
                          (value - Math.trunc(parseFloat(value))).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              50%
            </div>
          </div>
        </div>
        <div class="column is-narrow right-side-faction">
          <div class="columns is-gapless grown-card">
            <div class="column is-narrow">
              <img src="~/assets/images/faction/Crown.png" class="logo-crown">
            </div>
            <div class="column is-narrow" style="margin-left: 15px">
              <div class="text-lead">
                Current leading faction
              </div>
              <div class="text-growth">
                GROWTH
              </div>
            </div>
          </div>
          <div class="columns is-gapless no-select current-progress">
            <div class="column is-narrow left-current">
              <div class="text-current">
                Next Level Reward
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div class="next-level-card">
            <div class="columns is-gapless">
              <div class="column is-narrow left-img" />
              <div class="column is-narrow right-img" />
            </div>
            <div class="card-user">
              <div class="user-avatar">
                USER AVATAR
              </div>
              <div class="user-strategy">
                THE STRATEGISTS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selected3" class="columns is-gapless">
        <div class="column is-narrow left-side-faction">
          <div class="columns is-gapless no-select current-progress">
            <div class="column is-narrow left-current">
              <div class="text-current">
                Progress this Month
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div class="columns is-gapless">
            <div class="column is-narrow">
              <div
                class="progress-skill columns is-gapless"
                style="width: 210px; height: 55px"
              >
                <div class="columns is-narrow">
                  <img
                    src="~/assets/images/faction/icon_1.png"
                    class="icon-faction"
                    style="margin-top: 14px"
                  >
                </div>
                <div class="column is-narrow" style="margin-left: 15px">
                  <div
                    style="
                      font-size: 12px;
                      color: #ffffff;
                      margin-top: 5px;
                      width: 100%;
                      font-weight: 600;
                      transform: skew(18deg);
                      margin-left: 5px;
                    "
                  >
                    Comment Star Count
                  </div>
                  <div
                    style="
                      margin-left: 5px;
                      background: #2e5799;
                      border-radius: 2px;
                      height: 23px;
                      width: 128.5px;
                      color: #ff8383;
                      text-align: center;
                      font-weight: 700;
                    "
                  >
                    <div style="transform: skew(18deg)">
                      321
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="progress-skill columns is-gapless"
                style="width: 210px; height: 55px"
              >
                <div class="columns is-narrow">
                  <img
                    src="~/assets/images/faction/icon_2.png"
                    class="icon-faction"
                    style="margin-top: 14px"
                  >
                </div>
                <div class="column is-narrow" style="margin-left: 15px">
                  <div
                    style="
                      font-size: 12px;
                      color: #ffffff;
                      margin-top: 5px;
                      width: 100%;
                      font-weight: 600;
                      transform: skew(18deg);
                      margin-left: 5px;
                    "
                  >
                    Comment Star Count
                  </div>
                  <div
                    style="
                      margin-left: 5px;
                      background: #2e5799;
                      border-radius: 2px;
                      height: 23px;
                      width: 128.5px;
                      color: #ff8383;
                      text-align: center;
                      font-weight: 700;
                    "
                  >
                    <div style="transform: skew(18deg)">
                      321
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="progress-skill columns is-gapless"
                style="width: 210px; height: 55px"
              >
                <div class="columns is-narrow">
                  <img
                    src="~/assets/images/faction/icon_3.png"
                    class="icon-faction"
                    style="margin-top: 14px"
                  >
                </div>
                <div class="column is-narrow" style="margin-left: 15px">
                  <div
                    style="
                      font-size: 12px;
                      color: #ffffff;
                      margin-top: 5px;
                      width: 100%;
                      font-weight: 600;
                      transform: skew(18deg);
                      margin-left: 5px;
                    "
                  >
                    Comment Star Count
                  </div>
                  <div
                    style="
                      margin-left: 5px;
                      background: #2e5799;
                      border-radius: 2px;
                      height: 23px;
                      width: 128.5px;
                      color: #ff8383;
                      text-align: center;
                      font-weight: 700;
                    "
                  >
                    <div style="transform: skew(18deg)">
                      321
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="progress-skill columns is-gapless"
                style="width: 210px; height: 55px"
              >
                <div class="columns is-narrow">
                  <img
                    src="~/assets/images/faction/icon_4.png"
                    class="icon-faction"
                    style="margin-top: 14px"
                  >
                </div>
                <div class="column is-narrow" style="margin-left: 15px">
                  <div
                    style="
                      font-size: 12px;
                      color: #ffffff;
                      margin-top: 5px;
                      width: 100%;
                      font-weight: 600;
                      transform: skew(18deg);
                      margin-left: 5px;
                    "
                  >
                    Comment Star Count
                  </div>
                  <div
                    style="
                      margin-left: 5px;
                      background: #2e5799;
                      border-radius: 2px;
                      height: 23px;
                      width: 128.5px;
                      color: #ff8383;
                      text-align: center;
                      font-weight: 700;
                    "
                  >
                    <div style="transform: skew(18deg)">
                      321
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="progress-skill columns is-gapless"
                style="width: 210px; height: 55px"
              >
                <div class="columns is-narrow">
                  <img
                    src="~/assets/images/faction/icon_5.png"
                    class="icon-faction"
                    style="margin-top: 14px"
                  >
                </div>
                <div class="column is-narrow" style="margin-left: 15px">
                  <div
                    style="
                      font-size: 12px;
                      color: #ffffff;
                      margin-top: 5px;
                      width: 100%;
                      font-weight: 600;
                      transform: skew(18deg);
                      margin-left: 5px;
                    "
                  >
                    Comment Star Count
                  </div>
                  <div
                    style="
                      margin-left: 5px;
                      background: #2e5799;
                      border-radius: 2px;
                      height: 23px;
                      width: 128.5px;
                      color: #ff8383;
                      text-align: center;
                      font-weight: 700;
                    "
                  >
                    <div style="transform: skew(18deg)">
                      321
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-narrow petra-content">
              <div
                v-for="(review, indexReview) in 5"
                :key="indexReview"
                class="columns is-gapless"
              >
                <div
                  class="column is-narrow"
                  style="height: 80px"
                  :style="{ backgroundColor: '#48ffde' }"
                >
                  <img
                    src="~/assets/images/ava.png"
                    class="pic-petra"
                    style="
                      width: 80px;
                      height: 81px;
                      object-fit: cover;
                      object-fit: cover;
                      -o-object-position: 53% 0%;
                      object-position: 53% 0%;
                    "
                  >
                </div>
                <div class="column box-list">
                  <div class="student-name">
                    tes
                  </div>

                  <div class="petra-review">
                    <div class="box-review">
                      asdasd
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-narrow right-side-faction">
          <div class="columns is-gapless grown-card">
            <div class="column is-narrow">
              <img src="~/assets/images/faction/Crown.png" class="logo-crown">
            </div>
            <div class="column is-narrow" style="margin-left: 15px">
              <div class="text-lead">
                Current leading faction
              </div>
              <div class="text-growth">
                GROWTH
              </div>
            </div>
          </div>
          <div class="columns is-gapless no-select current-progress">
            <div class="column is-narrow left-current">
              <div class="text-current">
                Next Level Reward
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div class="next-level-card">
            <div class="columns is-gapless">
              <div class="column is-narrow left-img" />
              <div class="column is-narrow right-img" />
            </div>
            <div class="card-user">
              <div class="user-avatar">
                USER AVATAR
              </div>
              <div class="user-strategy">
                THE STRATEGISTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FactionDetailPage',
  layout: 'default',

  data () {
    return {
      value1: 2.7,
      value2: 3.8,
      value3: 1.6,
      value4: 5.4,
      value5: 8.2,
      selected1: true,
      selected2: false,
      selected3: false
    }
  },
  methods: {
    goBack () {
      this.$router.push('/faction')
    },
    tab (id) {
      if (id === 1) {
        this.selected1 = true
        this.selected2 = false
        this.selected3 = false
      }
      if (id === 2) {
        this.selected1 = false
        this.selected2 = true
        this.selected3 = false
      }
      if (id === 3) {
        this.selected1 = false
        this.selected2 = false
        this.selected3 = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-img {
  background-image: url('~@/assets/images/faction/background.png');
  height: 100%;
  width: 100%;
  z-index: 2;
  background-size: cover;
  background-position: center;
  .header-module {
    width: 100%;
    height: 120px;
    .card-title {
      position: relative;
      top: 30px;
      left: 100px;
      .background-button {
        position: absolute;
        top: 0px;
        z-index: 5;
        width: 379px;
        height: 78px;
      }
      .logo-faction {
        position: absolute;
        top: -12px;
        left: 21px;
        z-index: 6;
      }
      .name-card {
        z-index: 6;
        position: absolute;
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        color: #0071bc;
        text-shadow: 0px 1px 1px #cff0ff;
        top: 13px;
        left: 99px;
        width: 240px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .detail-box {
        position: absolute;
        top: 52px;
        left: 55px;
        z-index: 4;
        width: 351px;
        height: 20px;
      }
    }
    .btn-back {
      position: absolute;
      cursor: pointer;
      top: 100px;
      right: 50px;
    }
  }
  .content-faction {
    margin-left: 135px;
    .tab-petra {
      cursor: pointer;
      position: relative;
      padding-bottom: 0px;
      height: 30px;
      .icon-button {
        height: 30px;
      }
      .text-petra {
        position: absolute;
        top: 3px;
        color: white;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        font-weight: 500;
        font-size: 15px;
        text-align: center;
      }
    }
    .left-side-faction {
      height: 100%;
      width: 739px;
      background: rgba(255, 255, 255, 0.85);
      border: 2px solid #d4eaff;
      padding: 15px !important;
      .current-progress {
        .left-current {
          background: #2e5799;
          transform: skew(-18deg);
          height: 26px;
          width: 182px;
          color: white;
          .text-current {
            text-align: center;
            padding-top: 1px;
            color: #ffffff;
            font-size: 14px;
            transform: skew(18deg);
          }
        }
        .right-current {
          transform: skew(-18deg);
          background: #fff380;
          height: 26px;
          width: 12px;
          margin-left: 4px;
        }
      }
      .progress-skill {
        background: #2c6ec2;
        border: 1px solid #a8f5ff;
        height: 51px;
        width: 700px;
        transform: skew(-18deg);
        padding-left: 20px;
        .icon-faction {
          height: 51px;
          width: 51px;
          transform: skew(18deg);
        }
        .sub-prog {
          background-color: #d7faff;
          border-radius: 5px;
          padding: 0px;
          margin-left: 5px;
          z-index: 1;
          margin-top: 18px;
          margin-bottom: 16px;
          .sub-det {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            // height: 22px;
          }
          .sub-filled {
            background-color: #fff380;
          }
          .sub-no-width {
            height: 100%;
            border-radius: 5px;
          }
        }

        .lvl-prog {
          color: white;
          margin-top: 10px;
          font-size: 21px;
          margin-left: 30px;
          transform: skew(18deg);
        }
      }
      .petra-content {
        // background: rgba(44, 110, 194, 0.85);
        // border: 2px solid #d4eaff;
        width: 470px;
        height: 500px;
        margin-left: 25px;
        overflow-y: scroll;
        .pic-petra {
          height: 100px;
        }
        .box-list {
          position: relative;
          background-color: white;
          width: 100%;
          height: 100%;
          object-fit: cover;
          --g: #000, #0000 1deg 179deg, #000 180deg;

          --mask: conic-gradient(from -45deg at top 18px right 18px, var(--g))
              100% 0 /51% 100% no-repeat,
            conic-gradient(from -225deg at bottom 18px left 18px, var(--g)) 0
              100%/51% 100% no-repeat;
          -webkit-mask: var(--mask);
          mask: var(--mask);
          .student-name {
            background-color: #2e5799;
            width: 196.45px;
            height: 24.04px;
            object-fit: cover;
            --g: #000, #0000 1deg 179deg, #000 180deg;
            --mask: conic-gradient(
                from 45deg at bottom 18px right 18px,
                var(--g)
              )
              100% 100%/100% 100% no-repeat;
            -webkit-mask: var(--mask);
            mask: var(--mask);
            color: white;
            font-size: 13.9056px;
            color: #d4eaff;
            padding: 2px 10px 0px 10px;
          }

          .rating-bg {
            position: absolute;
            top: 1px;
            right: 31px;
          }
          .rating-card {
            position: absolute;
            top: 16px;
            right: 56px;
            font-style: normal;
            font-weight: 500;
            font-size: 15.6103px;
            color: #ffffff;
          }
          .petra-review {
            padding: 15px 20px 20px 30px;
            // position: relative;
            // min-height: 88px;
            .box-review {
              background: #f2f2f2;
              min-height: 88px;
              width: 100%;
              --g: #000, #0000 1deg 179deg, #000 180deg;
              --mask: conic-gradient(from -45deg at top 5px right 5px, var(--g))
                  100% 0 /51% 100% no-repeat,
                conic-gradient(from -225deg at bottom 5px left 5px, var(--g)) 0
                  100%/51% 100% no-repeat;
              -webkit-mask: var(--mask);
              mask: var(--mask);
              font-size: 12px;
              padding: 10px;
            }
            .content-text {
              position: absolute;
              top: 23px;
              left: 41px;
              font-size: 12px;
              width: 480px;
              //   right: 10px;
            }
          }
        }
      }
    }
    .right-side-faction {
      margin-left: 10px;
      .grown-card {
        height: 77px;
        width: 294px;
        background: #2c6ec2;
        border: 1px solid #a8f5ff;
        padding-top: 10px;
        padding-left: 15px;
        .logo-crown {
          height: 58px;
          width: 66px;
        }
        .text-lead {
          font-weight: 600;
          font-size: 15px;
          color: #ffffff;
          line-height: 16px;
          padding-top: 5px;
        }
        .text-growth {
          font-weight: 700;
          line-height: 35px;
          font-size: 30px;
          color: #bdff83;
        }
      }
      .current-progress {
        margin-bottom: 12px;
        margin-left: 5px;
        .left-current {
          background: #2e5799;
          transform: skew(-18deg);
          height: 26px;
          width: 182px;
          color: white;
          .text-current {
            text-align: center;
            padding-top: 1px;
            color: #ffffff;
            font-size: 14px;
            transform: skew(18deg);
          }
        }
        .right-current {
          transform: skew(-18deg);
          background: #fff380;
          height: 26px;
          width: 12px;
          margin-left: 4px;
        }
      }
      .next-level-card {
        background: rgba(255, 255, 255, 0.8);
        height: 267px;
        width: 295px;
        margin-left: 5px;
        padding: 10px;

        .left-img {
          margin-left: 5px;
          background-color: #d1c1ff;
          height: 130px;
          width: 130px;
          border-radius: 0px;
        }
        .right-img {
          background-color: #80cbeb;
          height: 130px;
          width: 130px;
          margin-left: 4px;
          border-radius: 0px;
        }
        .card-user {
          text-align: Center;
          width: 100%;
          height: 57px;
          padding-top: 5px;
          background: rgba(155, 210, 234, 0.5);
          .user-avatar {
            font-weight: 600;
            font-size: 14px;
            color: #0071bc;
          }
          .user-strategy {
            font-weight: 700;
            font-size: 18px;
            color: #0071bc;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>
