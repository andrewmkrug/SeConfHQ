<template>
  <section class="hero is-primary">
    <div class="is-gapless">
      <div class="container is-fluid columns is-gapless">
        <div v-for="item in conferences" :key="item.node.id">
          <g-image
            :src="item.node.thumbnail"
            :alt="item.node.title"
            type="conference"
            :id="item.node.name"
            class="conference hero-body column level thumbnail"
          >
            <div class="info is-centered has-text-centered columns is-mobile">
              <div class="box column is-half">
                <h1 class="title" style="color: #item.node.color">
                  {{ item.node.location }}
                </h1>
                <h2 class="subtitle" v-html="item.node.content"></h2>

                <a
                  v-for="button in item.node.buttons"
                  :key="item.node.buttons.id"
                  href="button.link"
                  style="background-color: #item.node.color"
                >
                  <b-button class="button is-item.node.conference">{{
                    button.text
                  }}</b-button>
                </a>
              </div>
            </div>
          </g-image>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    conferences: {
      type: Array,
      required: true
    }
  }
};
</script>
