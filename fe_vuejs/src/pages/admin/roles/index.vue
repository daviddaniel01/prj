<template>
    Trang quản lí role
</template>

<script>
import { useMenu } from '../../../stores/use-menu';
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-roles"]);
    },
}
</script>