<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app floating
            styles="height: calc(100% - 2rem); top: 0px; max-height: calc(100% - 0px)">
            <router-link to="/" class="no-underline success--text">
                <v-flex align-self-center class="text-center justify-center align-center" style="height: 33px">
                    <h4 class="my-6">Postify</h4>
                </v-flex>
            </router-link>
            <v-list :lines="false" nav>
                <slot v-for="item in items">
                    <v-list-group v-if="item.items && item.items.length && item.to === null" :value="item.title"
                        active-color="primary">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" :title="item.title" :prepend-icon="item.icon"></v-list-item>
                        </template>

                        <v-list-item v-for="child in item.items" :key="child.title" :title="child.title"
                            :prepend-icon="child.icon" :value="child.title" active-color="primary"
                            :to="child.to"></v-list-item>
                    </v-list-group>

                    <v-list-item v-else :key="item.title" :to="item.to" exact :ripple="false" active-color="primary">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item>
                </slot>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar :color="isDark ? 'default' : 'white'" :dark="isDark" elevation="8" app class="px-4" elevate-on-scroll>
            <v-app-bar-nav-icon :class="drawer ? '' : 'menu-toggle'" @click.stop="drawer = !drawer" />
            <v-spacer />
            <v-btn small icon @click.stop="setTheme">
                <!-- <v-btn icon @click.stop="handledarkmode"> -->
                <v-icon>mdi-invert-colors</v-icon>
            </v-btn>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" small icon>
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in menu" :key="index" :value="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LayoutApp',
    data: () => ({
        drawer: true,
        miniVariant: true,
        isActive: false,
        isDark: false,
        items: [
            {
                icon: 'mdi-apps',
                title: 'Dashboard',
                to: '/'
            },
            {
                icon: 'mdi-chart-bar',
                title: 'Charts',
                to: '/charts'
            },
            {
                icon: 'mdi-table-large',
                title: 'Tables',
                to: '/tables'
            },
            {
                icon: 'mdi-message-bulleted',
                title: 'Forms',
                to: '/forms'
            },
            {
                icon: 'mdi-cards',
                title: 'Cards',
                to: '/cards'
            },
            {
                icon: 'mdi-account',
                title: 'Authentication',
                to: null,
                items: [
                    {
                        icon: 'mdi-login-variant',
                        title: 'Sign In',
                        to: '/sign-in'
                    },
                    {
                        icon: 'mdi-account-plus',
                        title: 'Sign Up',
                        to: '/sign-up'
                    },
                    {
                        icon: 'mdi-account-key',
                        title: 'Forgot Password',
                        to: '/forgot-password'
                    }
                ]
            },
            {
                icon: 'mdi-flag',
                title: 'Filters',
                to: '/filters'
            },
            {
                icon: 'mdi-material-ui',
                title: 'Icons',
                to: '/icons'
            },
            {
                icon: 'mdi-pencil-box',
                title: 'Typography',
                // to: '/typography',
                to: null,
                items: [
                    {
                        icon: 'mdi-pencil-lock',
                        title: 'Paragraph',
                        to: '/paragraph'
                    },
                    {
                        icon: 'mdi-pencil',
                        title: 'Headings',
                        to: '/headings'
                    },
                    {
                        icon: 'mdi-grease-pencil',
                        title: 'Typographies',
                        to: '/typography'
                    }
                ]
            },
            {
                icon: 'mdi-book-multiple',
                title: 'Landing',
                to: '/landing'
            }
        ],
        menu: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
    }),
});

</script>