export type ShallowLocations = {
  count: number;
  next: string | null;     // رابط الصفحة التالية
  previous: string | null; // رابط الصفحة السابقة
  results: { name: string; url: string }[]; // قائمة الـ 20 منطقة
};

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  // دالة جلب المناطق
  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    const response = await fetch(url); // استخدام fetch لجلب البيانات
    if (!response.ok) {
      throw new Error("Failed to fetch locations");
    }
    return await response.json() as ShallowLocations;
  }
}
