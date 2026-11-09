import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { readScreen, screens, type Screen } from "./flow";
import "./style.css";

const Feedback = import.meta.env.DEV
  ? lazy(async () => ({ default: (await import("agentation")).Agentation }))
  : null;

function Link({ to, children, uiId }: { to: Screen; children?: ReactNode; uiId?: string }) {
  return <a href={`#/${to}`} data-ui-id={uiId}>{children ?? screens[to].title}</a>;
}

function ScreenContent({ screen }: { screen: Screen }) {
  switch (screen) {
    case "library":
      return <><p>Одна демонстрационная книга.</p><Link to="book">Маяк на краю бухты</Link></>;
    case "book":
      return <>
        <p>Маяк на краю бухты. Граница чтения — глава 1.</p>
        <p><Link to="chapter" uiId="book.chapter.open">Открыть главу 1</Link></p>
        <p><Link to="error">Открыть главу 1 с тестовой ошибкой</Link></p>
        <p>Глава 2 · пока скрыта</p>
      </>;
    case "chapter":
      return <>
        <p>Глава 1. Лида замечает, что фонарь погас.</p>
        <p><strong>Наблюдение:</strong> свет в башне исчез к вечеру.</p>
        <p><strong>Интерпретация:</strong> это может быть сигналом. Подтверждения пока нет.</p>
        <p><Link to="source" uiId="chapter.evidence.open">Показать источник</Link></p>
        <Link to="book">К книге</Link>
      </>;
    case "source":
      return <>
        <p>Глава 1, фрагмент 2</p>
        <blockquote>К вечеру Лида увидела, что окно башни больше не светится.</blockquote>
        <Link to="chapter">К главе</Link>
      </>;
    case "error":
      return <>
        <p role="alert" data-ui-id="chapter.load.error">Глава не загрузилась.</p>
        <p><Link to="chapter" uiId="chapter.load.retry">Повторить</Link></p>
        <Link to="book">К книге</Link>
      </>;
    case "flow":
      return <ul>
        {(Object.keys(screens) as Screen[]).filter((id) => id !== "flow").map((id) => (
          <li key={id}>
            <Link to={id} />
            <ul>{screens[id].next.map((next) => <li key={next}><Link to={next} /></li>)}</ul>
          </li>
        ))}
      </ul>;
  }
}

function App() {
  const [screen, setScreen] = useState(readScreen);

  useEffect(() => {
    const onHashChange = () => setScreen(readScreen());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return <>
    <header>
      <strong>BookTraveling · ПРОТОТИП</strong>
      <nav aria-label="Навигация прототипа"><Link to="library" /><Link to="flow" /></nav>
    </header>
    <main data-screen={screen}>
      <p className="notice">Демонстрационные данные · рабочий макет</p>
      <h1>{screens[screen].title}</h1>
      <ScreenContent screen={screen} />
    </main>
    {Feedback && (
      <Suspense fallback={null}>
        <Feedback endpoint={import.meta.env.VITE_AGENTATION_ENDPOINT || undefined} />
      </Suspense>
    )}
  </>;
}

const root = document.getElementById("root");
if (!root) throw new Error("Root element is missing");
createRoot(root).render(<App />);
