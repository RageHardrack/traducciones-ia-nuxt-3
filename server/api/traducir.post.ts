import { DifyResponse } from "~/interface";

export default defineEventHandler(async (event) => {
  const { difyApiKey, difyBaseUrl, difyProjectName } = useRuntimeConfig();

  const body = await readBody(event);

  try {
    const response = await $fetch<DifyResponse>("/completion-messages", {
      method: "POST",
      baseURL: difyBaseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${difyApiKey}`,
      },
      body: {
        inputs: body,
        response_mode: "blocking",
        user: difyProjectName,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
});
