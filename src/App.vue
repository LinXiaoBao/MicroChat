<template>
    <div>
        <topbar></topbar>
        <div class="content-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import topbar from './component/topbar.vue'

export default {
    data() {
            return {
                message: 'Hello LinXiaoBao'
            }
        },
        components: {
            topbar: topbar
        }
}
</script>
