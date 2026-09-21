// Base API simulated client with Promise delays
export const apiDelay = (ms = 300): Promise<void> => new Promise((res) => setTimeout(res, ms));

export class ApiService {
  static async get<T>(data: T, delayMs = 200): Promise<T> {
    await apiDelay(delayMs);
    return data;
  }

  static async post<T, R>(payload: T, mockResponse: R, delayMs = 300): Promise<R> {
    await apiDelay(delayMs);
    return mockResponse;
  }
}
