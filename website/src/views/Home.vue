<template>
    <div>
        <v-card elevation="0" class="ma-4">
            <v-row>
                <v-col cols="8">
                    <v-card elevation="14" class="mb-4 rounded-xl">
                        <v-card-title class="text-h4 text-decoration-underline">{{ $t('Home.WhatToFindTitle') }}</v-card-title>
                        <v-card-text class="body-1 text--primary text-justify" v-html="$t('Home.WhatToFindContent')"> </v-card-text>
                    </v-card>
                    <v-card elevation="14" class="rounded-xl">
                        <v-card-title class="text-h4 text-decoration-underline">{{ $t('Home.AboutMeTitle') }}</v-card-title>
                        <v-card-text class="body-1 text--primary text-justify" v-html="$t('Home.AboutMeContent')"></v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4" class="d-flex">
                    <v-card oultined elevation="14" height="100%" width="100%" class="d-inline-flex rounded-xl" color="rgb(0, 0, 0, 0.0)">
                        <v-img :src="require('@/assets/img/me_light.jpg')"></v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
