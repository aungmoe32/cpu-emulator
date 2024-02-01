<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0">
	    <div class="container-fluid">
	        <span class="navbar-brand">8bit Cpu Emulator</span>
	        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
	            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	            <span class="navbar-toggler-icon"></span>
	        </button>
	        <div class="collapse navbar-collapse" id="navbarNav">
	            <ul class="navbar-nav">
	                <li class="nav-item">
	                    <router-link to='/' class="nav-link">Home</router-link>
	                </li>
	                <li class="nav-item">
	                    <router-link to='/docs' class="nav-link">Docs</router-link>
	                </li>
	                <li class="nav-item">
	                    <router-link to='/about' class="nav-link">About</router-link>
	                </li>
	            </ul>
	        </div>
	    </div>
	</nav>
</template>