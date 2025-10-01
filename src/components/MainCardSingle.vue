<script setup>
import { faker } from '@faker-js/faker'
const fullname = faker.person.fullName()
const firstname = faker.person.firstName()
const lastname = faker.person.lastName()
const jobtitle = faker.person.jobTitle()
const bio = faker.lorem.lines(2)
//const username = faker.internet.userName({ firstName: firstName, lastName: lastname }).toLowerCase()

</script>

<template>
    <!-- {{ fullname }} <br /> -->

    <div class="border border-gray-400 rounded-lg shadow bg-gray-200 h-full">
        <img class="object-fill h-480 w-960"
            v-bind:src="faker.image.urlLoremFlickr({ category: 'cat', height: 480, width: 960 })" />
        <div class="p-4">
            <p class="mb-2 text-2xl font-bold">{{ fullname }}</p>
            <p class="mb-3 font-normal text-gray-700">{{ jobtitle }}</p>
            <p class="mb-3 font-normal text-gray-700">{{ bio }}</p>
        </div>
    </div>






</template>