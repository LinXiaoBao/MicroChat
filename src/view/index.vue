<template>
    <div>
        <topbar></topbar>
        <div class="content-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import topbar from '../component/topbar.vue'

export default {
    components: {
        topbar: topbar
    }
}
</script>
