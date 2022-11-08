<template>
	<div class="relative flex w-full items-start border-b border-primary-gray py-[22px] last:border-none">
		<div
			class="relative mr-[34px] grid h-[34px] w-[34px] place-items-center rounded-full bg-person-gray after:absolute after:left-[17px] after:grid after:h-[34px] after:w-[34px] after:place-items-center after:rounded-full after:bg-primary-blue after:content-person">
			<img src="@/assets/person_gray.svg" alt="person icon" class="h-[12px] w-[12px]" />
		</div>

		<div>
			<div class="flex">
				<span class="mr-[16px] max-w-[414.73px] text-base font-bold text-primary-blue">101010-Naturalizition</span>
				<span class="font-light text-primary-dark">Januari 1,2022 19:23</span>
			</div>

			<div class="text-primary-dark">
				<p class="text-sm font-bold">Cameron Phillips:</p>

				<p class="text-sm font-light">Please Checkout this out!</p>
			</div>
		</div>

		<span v-show="false" class="absolute right-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-indicator-red"></span>
	</div>
</template>
