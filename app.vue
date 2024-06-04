<script setup lang="ts">
import type { DifyResponse } from "./interface";

const article = ref("");
const res = ref("");
const isLoading = ref(false);

const handleSubmit = async () => {
  isLoading.value = true;
  const response = await $fetch<DifyResponse>("/api/traducir", {
    method: "POST",
    body: { article: article.value },
  });

  res.value = response.answer;
  isLoading.value = false;
};
</script>

<template>
  <section
    class="relative flex items-center justify-center h-screen gap-4 p-8 overflow-hidden bg-slate-700 max-w-screen"
  >
    <div class="w-1/4">
      <UCard as="article">
        <template #header>
          <h2>Traducir Artículos Científicos</h2>
        </template>

        <UFormGroup class="w-full" label="Agrega aquí tu texto a traducir">
          <UTextarea textareaClass="w-full h-96" v-model="article" />
        </UFormGroup>

        <div class="flex justify-end w-full mt-4">
          <UButton :loading="isLoading" @click="handleSubmit">Enviar</UButton>
        </div>
      </UCard>
    </div>

    <div class="relative w-3/4 h-full">
      <UCard as="article" class="absolute inset-0 overflow-x-hidden">
        <template #header>
          <h2>Traducción</h2>
        </template>

        <pre class="overflow-y-auto">{{ res }}</pre>
      </UCard>
    </div>
  </section>
</template>
