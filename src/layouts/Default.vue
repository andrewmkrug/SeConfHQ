<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

* {
  box-sizing: border-box;
}

body {
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-contrast: rgb(0, 0, 0);
  --color-contrast-1: rgb(43, 43, 43);
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

body.dark {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}

h1 {
  letter-spacing: -0.01em;
}

.layout {
  padding: 0;
}

.layout.sticky-header {
  padding: 6rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}


$chicago: #4C8DBF !default
$bangalore: #40AF49 !default
$tokyo: #BC002D !default
$selenium: #28A82E !default

$selenium-invert: #fff;
$bangalore-invert: findColorInvert($bangalore);
$chicago-invert: findColorInvert($chicago);
$tokyo-invert: findColorInvert($tokyo);

$primary: #28A82E;
// Add a serif family
$family-serif: "Merriweather", "Georgia", serif;

// 3. Set the derived variables
// Use the new pink as the primary color
$primary: #28A82E;
$primary-invert: $selenium-invert;
// Use the existing orange as the danger color
//$danger: $orange;
// Use the new serif family
//$family-primary: $family-serif;

// 4. Setup your Custom Colors
$linkedin: #0077b5;
$linkedin-invert: findColorInvert($linkedin);
$twitter: #55acee;
$twitter-invert: findColorInvert($twitter);
$github: #333;
$github-invert: findColorInvert($github);

// 5. Add new color variables to the color map.
// @import "../sass/utilities/derived-variables";
$addColors: (
        "twitter":($twitter, $twitter-invert),
        "linkedin": ($linkedin, $linkedin-invert),
        "github": ($github, $github-invert),
        "bangalore": ($bangalore $bangalore-invert),
        "chicago": ($chicago, $chicago-invert),
        "selenium": ($selenium, $selenium-invert),
        "tokyo": ($tokyo, $white),
        "primary":($selenium, $selenium-invert),
        "grey": ($grey-lighter, $white)
);
$colors: map-merge($colors, $addColors);

// 6. Import the rest of Bulma
// @import "../sass/bulma";
$primary: $selenium;
$primary-invert: $selenium-invert;
// Custom
.navbar-brand {
  font-weight: bold;
}

.post-card {

  .post-title {
    font-size: 1.6em;
  }

  .post-categories {
    margin-bottom: 5px;
  }
}
* {font-family: 'Titillium Web', sans-serif; }
#bangalore {
  background: url("/assets/static/uploads/bangalore.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .title{
    color: $bangalore;
  }
  .subtitle{ color: $black;}
  button {
    background-color: $bangalore;
  }

}

div.conference.hero-body.column.is-half.level {
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .subtitle{ color: $black;}
}

#chicago{
  background: url("/images/Optimized-jeff-brown-246391.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .title{
    color: $chicago;
  }
  .subtitle{ color: $black;}
  button{
    background-color: $chicago;
  }
}

#tokyo{
  background: url("/images/TokyoTower(recommended).jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .title{
    color: $tokyo;
  }
  .subtitle{ color: $black;}
  button{
    background-color: $tokyo;
    color: $white;
  }
}
.hero-body{ padding: 0;}

.info{padding: 10rem 0;
  .button{
    margin-bottom: 5px;
  }}
.box{
  background-color: hsla(0, 0%, 94%, 0.75);
}

#seconficon{width: 52px; height:52px;}
</style>
