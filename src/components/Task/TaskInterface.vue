<template>
	<div class="mb-[22px] flex justify-between">
		<div class="relative ml-[96.23px] block text-left">
			<label class="inline-flex w-full justify-center rounded-[5px] border border-primary-gray bg-white py-[10px] px-[14px] text-sm font-bold text-primary-dark">
				<input type="checkbox" class="hidden" v-model="tasks.isDropDown" />

				{{ tasks.selectedOption }}

				<svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
				</svg>
			</label>

			<div :class="['absolute left-1/2 z-10 mt-2 h-[80px] w-[288px] -translate-x-1/2 rounded-[5px] border border-primary-gray bg-white']" v-show="tasks.isDropDown">
				<ul class="h-full w-full py-1">
					<li class="block cursor-pointer border-b border-primary-gray px-4 py-2 text-sm font-bold text-gray-700 last:border-none" @click="tasks.selectedOption = 'Personal Errands'">Personal Errands</li>
					<li class="block cursor-pointer border-b border-primary-gray px-4 py-2 text-sm font-bold text-gray-700 last:border-none" @click="tasks.selectedOption = 'Urgent To-Do'">Urgent To-Do</li>
				</ul>
			</div>
		</div>

		<button class="rounded-[5px] bg-primary-blue px-[14px] py-[10px] font-bold text-white hover:bg-primary-blue/80" @click="tasks.addTodo()">New Task</button>
	</div>

	<!-- Todo -->
	<div class="ml-[11px] mb-[22.5px] border-b border-primary-gray last:border-none" v-for="todo in tasks.todoList" :key="todo.id">
		<div class="flex items-start justify-between">
			<label class="mb-[17px] flex w-1/2 items-center">
				<input type="checkbox" v-model="todo.isDone" class="hidden" />

				<img src="@/assets/todo_unchecked.svg" alt="unchecked todo" class="block" v-if="!todo.isDone" />
				<img src="@/assets/todo_checked.svg" alt="checked todo" class="block" v-else />

				<span :class="['ml-[22px] block font-bold text-primary-dark', { 'text-primary-gray line-through': todo.isDone }]"> {{ todo.title }}</span>
				<!-- <input type="text" :class="['ml-[22px] w-full font-bold text-primary-dark', { 'text-primary-gray line-through': todo.isDone }]" v-model="todo.title" /> -->
			</label>

			<div class="flex items-center">
				<p :class="['px-[10px] font-bold text-indicator-red', { hidden: todo.isDone }]">2 Days Left</p>
				<p class="px-[10px]">{{ todo.dateline }}</p>

				<div class="flex">
					<img src="@/assets/todo_expand.svg" alt="todo expand" :class="['mx-[5px] cursor-pointer transition', { 'rotate-180': !todo.isDetailShowed }]" @click="todo.isDetailShowed = !todo.isDetailShowed" />

					<img src="@/assets/more_dots.svg" alt="todo option" class="mx-[15px] cursor-pointer" />
				</div>
			</div>
		</div>

		<div :class="['pl-[41.67px]', { hidden: !todo.isDetailShowed }]">
			<div class="mb-[11px] flex items-center">
				<img src="@/assets/todo_schedule.svg" alt="todo schedule" />

				<input type="date" class="ml-[20px] rounded-[5px] border border-primary-gray px-[15px] py-[7px] text-primary-dark outline-none" />
			</div>

			<div class="flex items-start">
				<img src="@/assets/todo_pencil.svg" alt="todo pencil" class="w-[18px]" />

				<textarea class="ml-[20px] w-3/4 resize-none rounded-[5px] text-primary-dark outline-none placeholder:text-primary-dark" placeholder="No Description"></textarea>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useTaskStore } from '@/stores/task.js';
	const tasks = useTaskStore();
</script>
