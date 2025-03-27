<template>
  <div @click="openLink" class="link-card">
    <div class="title line-clamp-1">{{ icon || "🍀" }} {{ desc }}</div>
    <div class="link line-clamp-1">{{ link }}</div>
  </div>
</template>

<script setup lang="ts">
const { desc, link, icon } = defineProps(["desc", "link", "icon"]);
function openLink() {
  window.open(link, "_blank");
}
</script>

<style>
.link-card {
  padding: 12px 18px;
  border: 1px solid #4f46e5;
  border-radius: 8px;
  background-color: rgba(79, 70, 229, 0.08);
  box-shadow: 0 1px 2px rgba(79, 70, 229, 0.3);
  transition: all 0.3s;
  cursor: pointer;
}

.link-card:hover {
  background-color: rgba(79, 70, 229, 0.06);
  transform: scale(1.01);
}

.title {
  margin-bottom: 8px;
  font-size: 18px;
}

.link {
  margin-top: 0.25rem;
  transition: all 0.3s;
  color: #bcc0ff;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
