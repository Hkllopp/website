<template>
    <div>
        <v-card elevation="0" class="ma-4">
            <v-row>
                <v-col cols="8">
                    <v-card elevation="14" class="mb-4 rounded-xl">
                        <v-card-title class="text-h4 text-decoration-underline">{{ $t('Pro.Resume.Education.Title') }}</v-card-title>
                        <!-- <v-card-text><List :items="$t('Pro.Resume.Education.Content')" /> </v-card-text> -->
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card flat class="d-inline-flex rounded-xl" color="rgb(0, 0, 0, 0.0)" max-height="100px">
                        <v-img :src="img"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <v-card elevation="14" class="mb-4 rounded-xl">
                <v-card-title class="text-h4 text-decoration-underline">{{ $t('Pro.Resume.Experiences.Title') }}</v-card-title>
                <v-card-text><List :items="$t('Pro.Resume.Experiences.Content')" /> </v-card-text>
            </v-card>
        </v-card>
    </div>
</template>

<script>
import List from '@/components/List.vue'

export default {
    data() {
        return {
            img: require('@/assets/img/pro_light.jpg'),
        }
    },
    components: {
        List,
    },
    computed: {},
}
</script>
