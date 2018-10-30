<template>
    <header class="vHeader">
        <h1 class="title">TITLE</h1>
        <nav class="nav"><ul>
            <li><router-link to="/illustrations" class="nav_button">ILLUSTRATIONS</router-link></li>
            <li><router-link to="/event" class="nav_button">EVENTS</router-link></li>
            <li><router-link to="/goods" class="nav_button">GOODS</router-link></li>
            <li><router-link to="/contact" class="nav_button">CONTACT</router-link></li>
        </ul></nav>
        <div class="sns"><ul>
            <li>
            <svg width="30px" height="30px" viewBox="0 0 50 50">
                <path id="Twitter_Social_Icon_Circle_White" d="M50,25c0,13.8-11.2,25-25,25S0,38.8,0,25S11.2,0,25,0C38.8,0,50,11.2,50,25
                C50,25,50,25,50,25z M20.4,38.2c11.1,0,17.1-9.2,17.1-17.1c0-0.3,0-0.5,0-0.8c1.2-0.9,2.2-1.9,3-3.1c-1.1,0.5-2.3,0.8-3.5,1
                c1.3-0.8,2.2-1.9,2.7-3.3c-1.2,0.7-2.5,1.2-3.8,1.5c-2.3-2.4-6.1-2.5-8.5-0.3c-1.2,1.1-1.9,2.7-1.9,4.4c0,0.5,0.1,0.9,0.2,1.4
                c-4.8-0.2-9.4-2.5-12.4-6.3c-1.6,2.8-0.8,6.3,1.9,8c-1,0-1.9-0.3-2.7-0.8v0.1c0,2.9,2,5.3,4.8,5.9c-0.5,0.1-1.1,0.2-1.6,0.2
                c-0.4,0-0.8,0-1.1-0.1c0.8,2.5,3,4.1,5.6,4.2c-2.1,1.7-4.8,2.6-7.5,2.6c-0.5,0-1,0-1.4-0.1C14,37.2,17.2,38.2,20.4,38.2"/>
            </svg>
            </li>
            <li>
                <svg width="30px" height="30px" viewBox="0 0 50 50">
                    <path d="M34.9,30.1c2-2,3.2-4.8,3.1-7.7c0.1-3-1-5.8-3-8c-2.2-2.3-5.2-3.5-8.3-3.4c-3.2,0-6.2,0.9-8.9,2.6v18
                        c2.8,1.2,5.8,1.8,8.9,1.7C29.8,33.4,32.7,32.2,34.9,30.1z"/>
                    <path d="M50,25C50,11.2,38.8,0,25,0S0,11.2,0,25s11.2,25,25,25S50,38.8,50,25z M27.1,8.9c4.1-0.1,8.1,1.2,11.3,3.8l0,0
                        c2.8,2.4,4.4,6,4.4,9.7c0,3.7-1.7,7.2-4.7,9.5c-3.2,2.4-7,3.6-11,3.5c-3.2-0.1-6.3-0.7-9.3-1.8v5.7c0.8,0.2,2.2,0.8,1.3,1.6h-6.5
                        c-0.9-0.8,0.4-1.4,1.3-1.6v-24c-1.6,1.1-2.9,2.6-3.9,4.2c0.7,2.1-0.6,2-0.6,2l-2.3-3.6C7.2,18.1,15.3,8.9,27.1,8.9z"/>
                </svg>
            </li>
            <li>
                <svg width="30px" height="30px" viewBox="0 0 50 50">
                    <path d="M25,0C11.2,0,0,11.2,0,25c0,13.8,11.2,25,25,25c13.8,0,25-11.2,25-25C50,11.1,38.8,0,25,0z M32.5,39.4h-4.9c-4.4,0-7.6-2.3-7.6-7.6v-8.6h-4v-4.7c4.4-1.1,6.2-4.9,6.4-8.2H27v7.4h5.3v5.4H27v7.5c0,2.3,1.1,3,2.9,3h2.6V39.4z"/>
                </svg>
            </li>
        </ul></div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.vHeader
    display: flex
    justify-content: space-between
    padding: 50px

    .nav,
    .sns
        ul
            display: flex

        li
            list-style-type: none

        a
            text-decoration: none
            color: inherit
            padding-bottom: 10px

    .nav
        li + li
            padding-left: 100px

        .nuxt-link-active
            border-bottom: 1px solid #000

    .sns
        li + li
            padding-left: 20px


</style>
