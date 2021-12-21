<template>
    <v-row justify="center" class="pa-4">
        <v-expansion-panels popout flat focusable hover inset multiple>
            <v-expansion-panel v-for="i in items" :key="i">
                <div class="my-2 rounded-pill">
                    <v-expansion-panel-header ripple class="text-h6 rounded-xl" color="rgba(0,0,0,0.1)"
                        ><div class="text-decoration-underline">{{ i.Title }}</div></v-expansion-panel-header
                    >
                </div>

                <v-expansion-panel-content v-for="contentItem in i.Content" :key="contentItem">{{ contentItem }} </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
</template>

<script>
export default {
    name: 'List',
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>
