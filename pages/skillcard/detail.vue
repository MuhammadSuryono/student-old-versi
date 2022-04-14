<template>
  <div class="main-detail">
    <div class="header-skillcard">
      <div class="card-profile">
        <img src="~/assets/images/bg-button.png" class="background-button">
        <img
          src="~/assets/images/skillcard/icon_skillcard.png"
          class="icon-button"
        >
        <div class="name-card">
          Emotional Intelligence
        </div>
        <div class="column profile-container">
          <div class="btn-profile">
            <img
              src="~/assets/images/bg-profile.png"
              style="width: 257.32px; height: 30px"
            >
            <div class="text-profile">
              Skill Score
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/skillcard" class="btn-back">
        <IconBackBtn />
        <div class="text-btn">
          BACK
        </div>
      </NuxtLink>
    </div>
    <div class="content-skillcard">
      <div class="card-title1">
        <img
          src="~/assets/images/skillcard/detail-name.svg"
          class="background-button"
        >
        <div class="name-card">
          What is “Emotional Intelligence”?
        </div>
      </div>
      <div class="card-title2">
        <img
          src="~/assets/images/skillcard/detail-description.svg"
          class="background-button"
        >
        <div class="columns">
          <div class="column is-narrow skillcard1">
            <div class="card-title1">
              <img
                src="~/assets/images/skillcard/skillscore.svg"
                class="background-button"
              >
              <div class="name-card">
                Skill Score
              </div>
              <div class="score-card">
                29.2%
              </div>
            </div>
            <img
              src="~/assets/images/skillcard/detail-progress.png"
              style="position: absolute; top: 69px; left: 64px; z-index: 6"
            >
          </div>
          <div class="column skillcard2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse. sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div class="tab-menu-skillcard">
        <IconTabSkill class="tab1-menu" />
        <IconTabSkill2 class="tab2-menu" />
        <IconTabSkill2 class="tab3-menu" />
      </div>
      <div
        class="content-menu-skillcard"
        style="margin-left: 20px; margin-top: 10px"
      >
        <v-row no-gutters style="width: 900px">
          <v-col v-for="i in 6" :key="i" cols="12" sm="4">
            <img src="~/assets/images/skillcard/AchievementFrame.png">
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-detail {
  z-index: 2;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-size: cover;
  background-position: center;
  background-image: url('../../assets/images/skillcard/bg-detail.svg');
  .header-skillcard {
    .card-profile {
      position: relative;
      left: 80px;
      top: 0px;
      .background-button {
        top: 20px;
        position: absolute;
        left: 22px;
        z-index: 5;
      }
      .icon-button {
        z-index: 6;
        top: 15px;
        left: 39px;
        height: 45px;

        position: absolute;
      }
      .name-card {
        font-style: normal;
        font-weight: 600;
        z-index: 6;
        position: absolute;
        top: 26px;
        left: 77px;
        font-size: 21.6px;
        color: #ffffff;
      }
      .profile-container {
        z-index: 1;
        position: relative;
        .btn-profile {
          top: 54px;
          left: 34px;

          position: relative;
          .text-profile {
            position: absolute;
            top: 2.4px;
            left: 40px;
            font-weight: 400;
            font-size: 16px;
            display: flex;
            align-items: center;
            color: #000000;
            text-align: center;
          }
        }
      }
    }
    .btn-back {
      top: -40px;
      right: 22px;
      position: relative;
      float: right;
      z-index: 10;
      cursor: pointer;
      .text-btn {
        top: 11px;
        z-index: 1000;
        left: 70px;
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        position: absolute;

        color: #c7d6fd;
      }
    }
  }
  .content-skillcard {
    width: 100%;
    height: 100%;
    margin-right: 84px;
    margin-left: 174px;
    margin-top: -45px;
    background-image: url('~@/assets/images/skillcard/bg-detail2.svg');
    .card-title1 {
      position: relative;
      top: 100px;
      left: -15px;
      .background-button {
        position: absolute;
        left: 22px;
        z-index: 5;
        width: 302px;
        height: 30.4px;
      }
      .name-card {
        z-index: 6;
        position: absolute;
        top: 1.4px;
        left: 44px;
        font-size: 25.6px;
        color: #ffffff;
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
      }
    }
    .card-title2 {
      position: relative;
      top: 150px;
      width: 990px;
      .background-button {
        position: absolute;
        left: 0px;
        z-index: 5;
        height: 90px;
        width: 100%;
      }
      .skillcard1 {
        width: 280px;
        .card-title1 {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 221px;
          height: 48px;
          .background-button {
            position: absolute;
            left: 49px;
            top: 20px;
            z-index: 5;
            width: 100%;
            height: 100%;
          }
          .name-card {
            z-index: 6;
            position: absolute;
            top: 32px;
            left: 77px;
            font-size: 25.6px;
            color: #ffffff;
            font-family: 'Barlow';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
          }
          .score-card {
            z-index: 6;
            position: absolute;
            top: 21px;
            left: 170px;
            font-size: 25.6px;
            color: #ffcf24;
            font-family: 'Barlow';
            font-style: normal;
            font-weight: 600;
            font-size: 27px;
          }
        }
      }
      .skillcard2 {
        font-family: 'Barlow';
        font-style: italic;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        z-index: 10;
        color: #ffffff;
      }
    }
    .tab-menu-skillcard {
      margin-top: 200px;
      margin-left: 30px;
      .tab1-menu {
        cursor: pointer;
      }
      .tab2-menu {
        cursor: pointer;
        margin-left: -17px;
      }
      .tab3-menu {
        cursor: pointer;
        margin-left: -17px;
      }
    }
  }
}
</style>
