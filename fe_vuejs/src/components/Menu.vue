<template>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }">
                <span>
                    <UserOutlined class="me-1" />Tài khoản
                </span>
            </router-link>
        </a-menu-item>

        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }">
                <span>
                    <TagOutlined class="me-1" />Vai trò
                </span>
            </router-link>
        </a-menu-item>

        <a-menu-item key="admin-settings">
            <router-link :to="{ name: 'admin-settings' }">
                <span>Cài đặt</span>
            </router-link>
        </a-menu-item>
    </a-menu>
</template>


<script>
import { UserOutlined, TagOutlined } from '@ant-design/icons-vue';
import { useMenu } from '../stores/use-menu';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        UserOutlined,
        TagOutlined
    },
    setup() {
        const store = useMenu();

        return {
            ...storeToRefs(store),
        };
    },
});
</script>