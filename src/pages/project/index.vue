<template>
  <div class="projects-container">
    <ul>
        <li @click="isToggle()" v-for="i in 4" :key=i class="is-loaded">
            <div class="cd-title">
                <h2>
                    商铺位置
                </h2>
            </div>
        </li>
    </ul>
</div> 
</template>

<script>
  export default {
    name: "index",
    data() {
      return {

      }
    },
    methods:{
      isToggle() {
      // var selectedProject = $(this),
      //     toggle = !selectedProject.hasClass('is-full-width');
      // if (toggle)
      //     toggleProject($(this), $('.projects-container'), toggle);
      // }
      }
    }
  }
</script>

<style scoped>
 .projects-container {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.projects-container::before {
  content: 'mobile';
  display: none;
}
.projects-container li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.4s;
  transform: translateX(-100%);
}
.projects-container li::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 25vh;
  width: 100%;
  background-image: url("../../statics/img/img-1-small.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: opacity 0.5s, height 0.4s;
}
.projects-container li::before {
  content: url('../../statics/img/img-1-small.jpg');
  display: none;
}
.projects-container li:nth-of-type(2) {
  top: 25vh;
}
.projects-container li:nth-of-type(2)::after {
  background-image: url("../../statics/img/img-2-small.jpg");
}
.projects-container li:nth-of-type(2)::before {
  content: url('../../statics/img/img-2-small.jpg');
}
.projects-container li:nth-of-type(3) {
  top: 50vh;
}
.projects-container li:nth-of-type(3)::after {
  background-image: url("../../statics/img/img-3-small.jpg");
}
.projects-container li:nth-of-type(3)::before {
  content: url('../../statics/img/img-3-small.jpg');
}
.projects-container li:nth-of-type(4) {
  top: 75vh;
}
.projects-container li:nth-of-type(4)::after {
  background-image: url("../../statics/img/img-4-small.jpg");
}
.projects-container li:nth-of-type(4)::before {
  content: url('../../statics/img/img-4-small.jpg');
}
.projects-container li.is-loaded {
  transform: translateX(0);
}
.projects-container li.is-full-width {
  top: 0;
  height: auto;
  z-index: 1;
  cursor: auto;
  transition: z-index 0s 0s, top 0.4s 0s;
}
.projects-container li.is-full-width::after {
  height: 100vh;
}
@media only screen and (min-width: 1024px) {
  .projects-container::before {
    content: 'desktop';
  }
  .projects-container li {
    width: 25vw;
    height: 100%;
    opacity: 0;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: width 0s;
    -moz-transition: width 0s;
    transition: width 0s;
  }
  .projects-container li:first-of-type::before {
    content: url('../../statics/img/img-1-large.jpg');
  }
  .projects-container li:first-of-type::after {
    background-image: url("../../statics/img/img-1-large.jpg");
  }
  .projects-container li:nth-of-type(2) {
    top: 0;
    left: 25vw;
  }
  .projects-container li:nth-of-type(2)::before {
    content: url('../../statics/img/img-2-large.jpg');
  }
  .projects-container li:nth-of-type(2)::after {
    background-image: url("../../statics/img/img-2-large.jpg");
  }
  .projects-container li:nth-of-type(3) {
    top: 0;
    left: 50vw;
  }
  .projects-container li:nth-of-type(3)::before {
    content: url('../../statics/img/img-3-large.jpg');
  }
  .projects-container li:nth-of-type(3)::after {
    background-image: url("../../statics/img/img-3-large.jpg");
  }
  .projects-container li:nth-of-type(4) {
    top: 0;
    left: 75vw;
  }
  .projects-container li:nth-of-type(4)::before {
    content: url('../../statics/img/img-4-large.jpg');
  }
  .projects-container li:nth-of-type(4)::after {
    background-image: url("../../statics/img/img-4-large.jpg");
  }
  .projects-container li::after {
    height: 100vh;
    width: 100%;
    opacity: 0;
  }
  .projects-container li.is-loaded {
    /* show items when background images have been loaded */
    opacity: 1;
  }
  .projects-container li.is-loaded::after {
    opacity: 1;
  }
  .projects-container li.is-full-width {
    /* selected item */
    left: 0vw;
    width: 100vw;
    -webkit-transition: width 0.4s 0s, z-index 0s 0s, left 0.4s 0s;
    -moz-transition: width 0.4s 0s, z-index 0s 0s, left 0.4s 0s;
    transition: width 0.4s 0s, z-index 0s 0s, left 0.4s 0s;
  }
}
@media only screen and (min-width: 1170px) {
  .projects-container li::after {
    background-attachment: fixed;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: -webkit-transform 0.8s, opacity 0.5s;
    -moz-transition: -moz-transform 0.8s, opacity 0.5s;
    transition: transform 0.8s, opacity 0.5s;
  }
  .projects-container li.is-loaded::after {
    opacity: 0;
  }
  .no-touch .projects-container li:hover::after, .projects-container li.is-full-width.is-loaded::after {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}

.cd-title {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 12.5vh;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}
.is-full-width .cd-title {
  top: 50vh;
  -webkit-transition: opacity 0s, top 0.4s;
  -moz-transition: opacity 0s, top 0.4s;
  transition: opacity 0s, top 0.4s;
}
.cd-title > * {
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.cd-title h2 {
  font-size: 2.5rem;
  line-height: 1.5;
  font-weight: 700;
}
.cd-title p {
  font-size: 1.4rem;
  font-family: "Merriweather", serif;
  font-style: italic;
  line-height: 1.2;
  padding: .4em 2em;
  display: none;
  opacity: .6;
}
@media only screen and (min-width: 1024px) {
  .cd-title {
    top: 50vh;
    width: 25vw;
    opacity: 0;
    -webkit-transform: translateY(-50%) translateX(-20px);
    -moz-transform: translateY(-50%) translateX(-20px);
    -ms-transform: translateY(-50%) translateX(-20px);
    -o-transform: translateY(-50%) translateX(-20px);
    transform: translateY(-50%) translateX(-20px);
  }
  .is-loaded .cd-title {
    opacity: 1;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: -webkit-transform 0.6s, opacity 0.6s, left 0.4s;
    -moz-transition: -moz-transform 0.6s, opacity 0.6s, left 0.4s;
    transition: transform 0.6s, opacity 0.6s, left 0.4s;
  }
  .is-loaded.is-full-width .cd-title {
    left: 37.5vw;
    -webkit-transition: -webkit-transform 0.6s, opacity 0s, left 0.4s;
    -moz-transition: -moz-transform 0.6s, opacity 0s, left 0.4s;
    transition: transform 0.6s, opacity 0s, left 0.4s;
  }
  .cd-title p {
    display: block;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-title h2 {
    font-size: 3.6rem;
  }
}

.cd-project-info {
  clear: both;
  visibility: hidden;
  opacity: 0;
  margin-top: 100vh;
  padding: 4em 0;
  cursor: auto;
  background-color: #ffffff;
  color: #3f538e;
  -webkit-transition: opacity 0.4s 0s, visibility 0s 0.4s;
  -moz-transition: opacity 0.4s 0s, visibility 0s 0.4s;
  transition: opacity 0.4s 0s, visibility 0s 0.4s;
}
.is-full-width .cd-project-info {
  visibility: visible;
  opacity: 1;
}
.cd-project-info p {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  line-height: 2;
}
@media only screen and (min-width: 1024px) {
  .cd-project-info {
    position: relative;
    z-index: 1;
  }
}

@-webkit-keyframes cd-translate {
  0% {
    -webkit-transform: translateX(-50%) scale(1);
  }
  50% {
    -webkit-transform: translateY(10px) translateX(-50%) scale(1);
  }
  100% {
    -webkit-transform: translateX(-50%) scale(1);
  }
}
@-moz-keyframes cd-translate {
  0% {
    -moz-transform: translateX(-50%) scale(1);
  }
  50% {
    -moz-transform: translateY(10px) translateX(-50%) scale(1);
  }
  100% {
    -moz-transform: translateX(-50%) scale(1);
  }
}
@keyframes cd-translate {
  0% {
    -webkit-transform: translateX(-50%) scale(1);
    -moz-transform: translateX(-50%) scale(1);
    -ms-transform: translateX(-50%) scale(1);
    -o-transform: translateX(-50%) scale(1);
    transform: translateX(-50%) scale(1);
  }
  50% {
    -webkit-transform: translateY(10px) translateX(-50%) scale(1);
    -moz-transform: translateY(10px) translateX(-50%) scale(1);
    -ms-transform: translateY(10px) translateX(-50%) scale(1);
    -o-transform: translateY(10px) translateX(-50%) scale(1);
    transform: translateY(10px) translateX(-50%) scale(1);
  }
  100% {
    -webkit-transform: translateX(-50%) scale(1);
    -moz-transform: translateX(-50%) scale(1);
    -ms-transform: translateX(-50%) scale(1);
    -o-transform: translateX(-50%) scale(1);
    transform: translateX(-50%) scale(1);
  }
}
</style>
