export class DifyService {
  private readonly _baseUrl: string = useRuntimeConfig().difyBaseUrl;
  private readonly _apiKey: string = useRuntimeConfig().difyApiKey;

  async getTraduccion(article: string): Promise<string> {
    try {
      const { answer } = await $fetch("/completion-messages", {
        method: "POST",
        baseURL: this._baseUrl,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this._apiKey}`,
        },
        body: {
          inputs: {
            article,
          },
          response_mode: "streaming",
          user: "abc-123",
        },
      });

      return answer;
    } catch (error) {
      console.error(error);
    }
  }
}
