export const screens = {
  library: { title: "Библиотека", next: ["book"] },
  book: { title: "Книга", next: ["chapter", "error"] },
  chapter: { title: "Глава", next: ["source", "book"] },
  source: { title: "Источник", next: ["chapter"] },
  error: { title: "Ошибка загрузки", next: ["chapter", "book"] },
  flow: { title: "Карта экранов", next: [] },
} as const;

export type Screen = keyof typeof screens;

export function readScreen(): Screen {
  const id = window.location.hash.slice(2);
  return Object.hasOwn(screens, id) ? (id as Screen) : "library";
}
