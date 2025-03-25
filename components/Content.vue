<template>
    <div class="relative overflow-x-auto">
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
                <tr>
                    <th scope="col" class="px-6 py-3 text-center">Currency</th>
                    <th scope="col" class="px-6 py-3"></th>
                    <th scope="col" class="px-6 py-3"></th>
                    <th scope="col" class="px-6 py-3">Buy</th>
                    <th scope="col" class="px-6 py-3">Sell</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <div class="flex justify-center items-start">
                            <NuxtImg
                                src="/images/country/USD.png"
                                width="30"
                                class="mr-2"
                            />
                            <p class="text-2xl">USD</p>
                        </div>
                        <div class="text-center">United States</div>
                    </th>
                    <td></td>
                    <td class="px-6 py-4">
                        <NuxtImg src="/images/dollar/USD.png" width="100" />
                    </td>
                    <td class="px-6 py-4 text-2xl text-green-500">
                        <div>33.76</div>
                    </td>
                    <td class="px-6 py-4 text-2xl text-red-500">33.90</td>
                </tr>
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <div class="flex justify-center items-start">
                            <NuxtImg
                                src="/images/country/EUR.png"
                                width="30"
                                class="mr-2"
                            />
                            <p class="text-2xl">EUR</p>
                        </div>
                        <div class="text-center">European Union</div>
                    </th>
                    <td></td>
                    <td>
                        <NuxtImg src="/images/dollar/EUR.png" width="100" />
                    </td>
                    <td class="px-6 py-4 text-2xl text-green-500">
                        <div>36.40</div>
                    </td>
                    <td class="px-6 py-4 text-2xl text-red-500">36.65</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
// import currency from '~/assets/currency.json'
</script>
