<template>
    <v-app>
        <v-app-bar app elevate-on-scroll elevation="15" rounded color="grey" class="rounded-lg">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" width="70"></v-app-bar-nav-icon>
            <v-card max-height="60" elevation="0" flat class="pa-1 text-no-wrap" color="rgb(0, 0, 0, 0.0)">
                <v-card-title class="pa-0 ma-0 text-h5">{{ $t('App.HomeTitle') }}</v-card-title>
                <v-card-subtitle class="pa-0 ma-0 text--primary text-subtitle-1">{{ $t('App.HomeSubtitle') }}</v-card-subtitle>
            </v-card>

            <v-spacer></v-spacer>
            <v-btn @click="changeTheme" icon
                ><v-icon>{{ theme_icon }}</v-icon></v-btn
            >
            <v-btn @click="changeLanguage" icon large><v-img height="40px" width="35px" class="rounded-circle" :src="lang_icon"></v-img></v-btn>
        </v-app-bar>

        <v-navigation-drawer app temporary v-model="drawer" class="rounded-lg">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">{{ $t('App.NavigationTitle') }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list nav>
                <v-list-item :to="item.route" v-for="item in items" :key="item.title" @click="scrollToTop">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import store from '@/store/vuex'

export default {
    name: 'App',

    components: {},

    data() {
        return {
            drawer: false,
        }
    },
    computed: {
        items: function () {
            return [
                { title: this.$t('App.HomePageLabel'), icon: 'mdi-home', route: '/' },
                { title: this.$t('App.ProfessionalPageLabel'), icon: 'mdi-briefcase', route: '/prof' },
                { title: this.$t('App.PersonnalPageLabel'), icon: 'mdi-account-heart', route: '/pers' },
            ]
        },
        lang_icon: function () {
            console.log('store.state.locale:', store.state.locale)
            return store.state.locale === 'en'
                ? 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png'
                : 'https://png-5.vector.me/files/images/1/4/145604/flags_of_the_united_states_and_the_united_kingdom_clip_art_preview.jpg'
        },
        theme_icon: function () {
            return this.$vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
        },
    },

    methods: {
        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
        changeLanguage() {
            console.log('changeLanguage')
            if (store.state.locale == 'en') {
                store.dispatch('changeLocale', 'fr')
            } else {
                store.dispatch('changeLocale', 'en')
            }
        },
        scrollToTop() {
            window.scrollTo(0, 0)
        },
    },
}
</script>

<style scoped></style>
