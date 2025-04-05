<template>
  <button
    class="absolute right-6 top-6 h-6 w-6 text-gray-400"
    @click.prevent="close"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  </button>
  <div>
    <template v-if="isSuccess">
      <div
        class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white"
      >
        <Icon name="heroicons-outline:check" />
      </div>
      <!-- Title -->
      <DialogTitle
        as="h3"
        class="text-lg font-medium leading-6 text-gray-50 sm:text-center"
      >
        Hotovo
      </DialogTitle>
      <div class="my-4">
        <p class="text-sm text-gray-300">
          Díky, vaše zpráva dorazila. Ozvu se vám co nejdříve.
        </p>
      </div>
    </template>
    <template v-if="isError">
      <!-- On error -->
      <div
        class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white"
      >
        <Icon name="heroicons-outline:exclamation" />
      </div>
      <DialogTitle
        as="h3"
        class="text-lg font-medium leading-6 text-gray-50 sm:text-center"
      >
        Chyba
      </DialogTitle>
      <div class="my-4">
        Něco se rozbilo. Napište mi prosím na
        <a
          class="text-blue-800 underline hover:no-underline"
          :href="`mailto:${emailAddress}`"
        >
          {{ emailAddress }}
        </a>
      </div>
    </template>
    <template v-if="!isSuccess && !isError">
      <!-- Title -->
      <DialogTitle
        as="h3"
        class="text-lg font-medium leading-6 text-gray-50"
      >
        Napište mi co vás zajímá
      </DialogTitle>
      <div class="my-4">
        <p class="text-sm text-gray-300">
          Konzultace je nezávazná a bezplatná. Odpovím brzo.
        </p>
      </div>
      <!-- Form -->
      <FormKit
        type="form"
        id="formContact"
        @submit="handleSubmit"
        :actions="false"
        #default="{ disabled }"
      >
        <div class="grid grid-cols-8 gap-x-6 mt-6">
          <div
            class="grid grid-cols-8 col-span-8 gap-x-6"
            :class="props.large ? 'col-span-8' : 'col-span-8'"
          >
            <!-- Email -->
            <div
              class="relative"
              :class="props.large ? 'col-span-8' : 'col-span-8'"
            >
              <FormKit
                type="email"
                :label="$t('formContact.labelEmail')"
                name="email"
                id="email"
                autocomplete="email"
                validation="required|email"
                :classes="{ outer: 'max-w-none' }"
                maxlength="100"
              />
            </div>
          </div>
          <!-- Message -->
          <div
            :class="props.large ? 'col-span-8 lg:col-span-4' : 'col-span-8'"
            class="sm:flex sm:flex-col"
          >
            <FormKit
              type="textarea"
              :label="$t('formContact.labelMessage')"
              name="message"
              id="message"
              validation="required"
              :classes="{ outer: 'max-w-none' }"
            />
          </div>
          <div class="col-span-8 flex justify-end">
            <FormKit
              type="submit"
              :disabled="disabled"
              :classes="{ outer: 'grow-0 !mb-0', input: '!mb-0'}"
            >
              {{ $t("formContact.buttonSend") }}
            </FormKit>
          </div>
        </div>
      </FormKit>
    </template>
  </div>
</template>

<script setup>
import axios from "axios";
import { reset } from '@formkit/core'
import {
  DialogTitle,
} from '@headlessui/vue'

const { close } = useDialogContact()

const props = defineProps({
  large: {
    type: Boolean,
    default: false,
  },
});

const isSuccess = ref(false);
const isError = ref(false);
const emailAddress = "simon.macek@portadesign.cz";

async function handleSubmit({ form }) {
  const axiosConfig = {
    header: { "Content-Type": "application/x-www-form-urlencoded" },
  };
  const response = await axios.post(
    "/",
    encodeData({
      "form-name": "contact-form",
      ...form,
    }),
    axiosConfig
  );
  if (response.status === 200) {
    reset('formContact')
    // Display confirmation
    isSuccess.value = true;
  } else {
    isError.value = true;
  }
}

function encodeData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

</script>
