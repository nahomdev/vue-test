<template>
  <div id="app">
    <div>
      <input
        type="radio"
        id="en"
        value="en"
        v-model="$i18n.locale"
        @change="setLocale($i18n.locale)"
      />
      <label for="en">English</label>
    </div>
    <div>
      <input
        type="radio"
        id="amh"
        value="amh"
        v-model="$i18n.locale"
        @change="setLocale($i18n.locale)"
      />
      <label for="fr">Amharic</label>
    </div>
    <h1>{{ $t("welcome") }}</h1>
    <p>{{ $t("greeting") }}</p>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
