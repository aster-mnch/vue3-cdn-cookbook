import { ref } from 'vue';

export default {
  setup() {
    const drawer = ref();
    return {
      drawer,
    };
  },
  template: /*html*/`
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <!--  -->
      </v-navigation-drawer>

      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <!--  -->
      </v-main>
    </v-app>
  `,
};
