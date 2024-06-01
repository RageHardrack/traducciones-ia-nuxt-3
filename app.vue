<script setup lang="ts">
const article = ref("");

const handleSubmit = async () => {};
</script>

<template>
  <section
    class="flex flex-col items-center justify-center h-screen bg-slate-700 max-w-screen"
  >
    <UContainer>
      <UCard as="article">
        <template #header>
          <header class="flex items-center justify-between w-full gap-4">
            <UTextarea
              v-model="article"
              placeholder="Agregue aquí su artículo"
            />
            
            <UButton @click="handleSubmit">Enviar</UButton>
          </header>
        </template>

        <p></p>
      </UCard>
    </UContainer>
  </section>
</template>
