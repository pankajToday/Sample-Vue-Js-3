<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link :to="{name:'Home'}" class="nav-link active" aria-current="page" href="#">Home</router-link>
       
        </li>
        <li class="nav-item">
            <router-link :to="{name:'About'}" class="nav-link" aria-current="page" href="#">About</router-link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</template>