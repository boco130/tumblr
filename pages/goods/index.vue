<template>
<div class="eventPage">
  <article
    v-for="event in eventData"
    v-bind:key="event.name"
    class="eventItem">
    <div class="imageBox">
      <img :src="event.img" :alt="event.title + 'のサークルカット'" class="image">
    </div>
    <div class="contentBox">
      <h2 class="title">{{ event.title }}</h2>
      <p class="date">{{ event.date }}</p>
      <p class="place">{{ event.place }}</p>
    </div>
  </article>
  <!-- {{ eventData[0] }} -->
</div>
</template>

<script>
export default {
  pageTitle: 'GOODS',
  head () {
    return {
      title: this.pageTitle,
    }
  },
  data: function () {
    return {
      eventData : [
        {
          title: "COMITIA123",
          date: "2018 / 11 / 25",
          place: "有明・東京ビッグサイト東4・5・6ホール",
          img: "https://pbs.twimg.com/media/DmFmBeHUwAYhGoR.jpg",
        },
        {
          title: "COMITIA123",
          date: "2018/11/25",
          place: "有明・東京ビッグサイト東4・5・6ホール",
          img: "https://pbs.twimg.com/media/DmFmBeHUwAYhGoR.jpg",
        },
      ]
    }
  },
  components: {
  }
}
</script>

<style lang="sass" scoped>
.eventPage
  max-width: 1110px
  margin: 180px auto 0

  .eventItem
    width: 100%
    position: relative

    .imageBox
      overflow: hidden
      width: 730px
      height: 500px
      position: relative
      .image
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
    .contentBox
      .title
        font-size: 36px
        padding-bottom: 10px
      .date,
      .place
        font-size: 20px
    @media (min-width: 831px)
      .contentBox
        position: absolute
        transform: translateY(-50%)
        top: 50%
        right: 0
        text-align: right
        .title
          font-size: 36px
          padding-bottom: 10px
        .date,
        .place
          font-size: 20px
      &:nth-child(2n)
        .imageBox
          margin-left: auto
        .contentBox
          left: 0
          right: initial
          text-align: left
    & + article
      margin-top: 200px

@media (max-width: 1210px)
  .eventPage
    margin: 180px 50px 0
@media (max-width: 860px)
  .eventPage
    margin: 30px 20px 0
    .eventItem
      .imageBox
        width: 100%
        height: 250px
      .contentBox
        margin-top: 20px
      & + article
        margin-top: 50px
</style>
