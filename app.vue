<script setup lang="ts">
import type { DifyResponse } from "./interface";
import { marked } from "marked";

const article = ref("");
const res = ref("");
const isLoading = ref(false);

const handleSubmit = async () => {
  isLoading.value = true;
  const response = await $fetch<DifyResponse>("/api/traducir", {
    method: "POST",
    timeout: 60000,
    body: { article: article.value },
  });

  res.value = await marked(response.answer);
  isLoading.value = false;
};

useHead({
  title: "Traducir Artículos Científicos | Daniel Colmenares",
});
</script>

<template>
  <section
    class="relative flex items-center justify-center h-screen gap-4 p-8 overflow-hidden bg-slate-700 max-w-screen"
  >
    <div class="w-1/4">
      <UCard as="article">
        <template #header>
          <h1 class="text-xl font-bold dark:text-white text-slate-700">
            Traductor de Artículos Científicos
          </h1>
        </template>

        <UFormGroup
          class="w-full scroll"
          label="Agrega aquí tu texto a traducir"
        >
          <UTextarea
            :disabled="isLoading"
            textareaClass="w-full h-96 scroll"
            v-model="article"
            placeholder="Artículo"
          />
        </UFormGroup>

        <div class="flex justify-end w-full mt-4">
          <UButton :loading="isLoading" @click="handleSubmit">Enviar</UButton>
        </div>
      </UCard>
    </div>

    <div class="relative w-3/4 h-full">
      <UCard
        as="article"
        class="absolute inset-0 overflow-x-hidden overflow-y-auto scroll"
      >
        <template #header>
          <h2 class="text-xl font-bold dark:text-white text-slate-700">
            {{ isLoading ? "Cargando respuesta..." : "Resultado" }}
          </h2>
        </template>

        <article v-if="isLoading" class="flex flex-col gap-4">
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-full h-4" />
          <USkeleton class="w-1/2 h-4" />
        </article>

        <article
          v-else
          class="prose"
          style="max-width: 100%"
          v-html="res"
        ></article>
      </UCard>
    </div>
  </section>
</template>

<style scoped>
/* Custom scrollbar styles */
textarea::-webkit-scrollbar {
  width: 0.5rem;
  background-color: transparent;
}

textarea::-webkit-scrollbar-thumb {
  background-color: #16a34a;
  border-radius: 0.25rem;
}

textarea::-webkit-scrollbar-track {
  background-color: transparent;
}

.scroll::-webkit-scrollbar {
  width: 0.5rem;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: #16a34a;
  border-radius: 0.25rem;
}

.scroll::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
