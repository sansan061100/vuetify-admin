<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      styles="height: calc(100% - 2rem); top: 0px; max-height: calc(100% - 0px)"
    >
      <v-flex
        align-self-center
        class="text-center justify-center align-center"
        style="height: 33px"
      >
        <h3 class="my-6" color="primary">Postify</h3>
      </v-flex>
      <v-list :lines="false" nav>
        <div v-for="item in items" :key="item.title">
          <v-list-group
            v-if="item.items && item.items.length && item.to === null"
            :value="item.title"
            active-color="primary"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="item.title"
                :prepend-icon="item.icon"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="child in item.items"
              :key="child.title"
              :title="child.title"
              :prepend-icon="child.icon"
              :value="child.title"
              active-color="primary"
              :to="child.to"
            ></v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            :key="item.title"
            :to="item.to"
            exact
            :ripple="false"
            active-color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :color="isDark ? 'default' : 'white'"
      :dark="isDark"
      app
      class="px-4"
    >
      <v-app-bar-nav-icon
        :class="drawer ? '' : 'menu-toggle'"
        @click.stop="drawer = !drawer"
      />
      <v-spacer />
      <!-- <v-btn small icon @click.stop="setTheme">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn> -->
      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar small icon>
              <v-icon>mdi-account</v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar>
                <span class="text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn variant="text"> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn variant="text"> Logout </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
      <v-footer height="auto" class="app--footer">
        <span class="caption"
          >&copy; {{ new Date().getFullYear() }} Postify</span
        >
        <v-spacer></v-spacer>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppAdminLayout",
  data: () => ({
    drawer: true,
    miniVariant: true,
    isActive: false,
    isDark: false,
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com",
    },
    items: [
      {
        icon: "mdi-apps",
        title: "Dashboard",
        to: "/",
      },
      {
        icon: "mdi-chart-bar",
        title: "Charts",
        to: "/charts",
      },
      {
        icon: "mdi-table-large",
        title: "Tables",
        to: "/tables",
      },
      {
        icon: "mdi-message-bulleted",
        title: "Forms",
        to: "/forms",
      },
      {
        icon: "mdi-cards",
        title: "Cards",
        to: "/cards",
      },
      {
        icon: "mdi-account",
        title: "Authentication",
        to: null,
        items: [
          {
            icon: "mdi-login-variant",
            title: "Sign In",
            to: "/sign-in",
          },
          {
            icon: "mdi-account-plus",
            title: "Sign Up",
            to: "/sign-up",
          },
          {
            icon: "mdi-account-key",
            title: "Forgot Password",
            to: "/forgot-password",
          },
        ],
      },
      {
        icon: "mdi-flag",
        title: "Filters",
        to: "/filters",
      },
      {
        icon: "mdi-material-ui",
        title: "Icons",
        to: "/icons",
      },
      {
        icon: "mdi-pencil-box",
        title: "Typography",
        // to: '/typography',
        to: null,
        items: [
          {
            icon: "mdi-pencil-lock",
            title: "Paragraph",
            to: "/paragraph",
          },
          {
            icon: "mdi-pencil",
            title: "Headings",
            to: "/headings",
          },
          {
            icon: "mdi-grease-pencil",
            title: "Typographies",
            to: "/typography",
          },
        ],
      },
      {
        icon: "mdi-book-multiple",
        title: "Landing",
        to: "/landing",
      },
    ],
    menu: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
});
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
.app--footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
