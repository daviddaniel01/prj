<template>
    Trang quản lí setting
</template>

<script>
import { useMenu } from '../../../stores/use-menu';
export default {
    setup() {
        const store = useMenu();
        store.onSelectedKeys(["admin-settings"]);
    },
}
</script>