<template>
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  >
    <ul class="navbar-nav ml-auto">
  
      
      <div class="topbar-divider d-none d-sm-block"></div>

      <li class="nav-item dropdown no-arrow">
          <NuxtLink to="/login">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
      
        >
      
          <span class="mr-2 d-none d-lg-inline text-gray-600 small"
            >Login</span
          >
        
        </a>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods:{

        ...mapMutations(['SET_IS_AUTH']),
      async  logout(){

         await this.$auth.logout();
         this.SET_IS_AUTH(false);
          this.$router.push('/login');
        }

    }
}
</script>