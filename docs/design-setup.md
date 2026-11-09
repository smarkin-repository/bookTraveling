# Настройка дизайн-инструментов

Для первого прохода нужны Git, Node.js 22.12+ или 24, npm, браузер и локальный Codex. Python 3 нужен для поиска рекомендаций UI/UX Pro Max. Docker понадобится позднее для продуктового приложения или локального Penpot.

## Запустить прототип и подготовить Codex

Открой локальную копию `bookTraveling` в Codex Desktop либо запусти `codex` из её корня. Команды ниже выполняются из корня репозитория.

```bash
git rev-parse --show-toplevel
npm --prefix frontend ci
bash scripts/setup-design-skill.sh
npm --prefix frontend run dev:prototype
```

Открой [прототип](http://127.0.0.1:5174/) или [карту](http://127.0.0.1:5174/#/flow). Остановить Vite можно через Ctrl+C. Проверить сборку можно командой `npm --prefix frontend run build:prototype`. Продуктовый интерфейс запускается отдельно по инструкции в [README](../README.md).

Начни новую сессию Codex после установки. Пример задания: «Примени `$booktraveling-design`. Прочитай дизайн-процесс и предложи два визуальных направления для экрана главы. Пока работаем с прототипом».

Репозиторный навык уже доступен в `.agents/skills/booktraveling-design/`. Скрипт добавляет только UI/UX Pro Max из CLI версии 2.15.0. Остальные навыки, которые создаёт установщик, остаются во временной папке. Установленные файлы UI/UX Pro Max локальные и исключены из Git. Скрипт сохраняет существующую установку. Для обновления сначала проверь текущую папку и перенеси её за пределы репозитория, затем измени закреплённую версию в скрипте.

## GradientDeck и UI/UX Pro Max

1. Открой [GradientDeck UI](https://ui.gradientdeck.com/) и выбери два референса. Зафиксируй ссылки и принципы, которые подходят сценарию чтения, например контраст основного текста и плотность карточек.
2. Попроси Codex применить `$ui-ux-pro-max` и предложить палитру, типографику, поля, кнопки, состояния ошибки и загрузки. Для запуска поиска вручную:

```bash
python3 .agents/skills/ui-ux-pro-max/scripts/search.py \
  "personal book research app, readable long-form content, chapter evidence" \
  --design-system -p BookTraveling
```

3. Зафиксируй принятые правила в [design/DESIGN.md](../design/DESIGN.md). Чтобы сохранить рекомендации отдельно как черновик, добавь `--persist --output-dir "$PWD"`. Источник: [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).

## Agentation

Agentation работает в Chrome как панель внутри страницы React. Для поддерживаемой интеграции установи компонент в проект. В BookTraveling он уже подключён в `frontend/prototype/src/main.tsx` и загружается только в режиме разработки.

1. Запусти `npm --prefix frontend ci`, если зависимости ещё не установлены, затем `npm --prefix frontend run dev:prototype`.
2. Открой [экран главы](http://127.0.0.1:5174/#/chapter) в Chrome. Нажми значок панели в правом нижнем углу, выбери «Показать источник», добавь заметку и нажми Copy.
3. Вставь заметку в Codex. Укажи маршрут `/#/chapter`, ID `chapter.evidence.open` и ожидаемый результат. Для копирования MCP не требуется.

Если панели нет, проверь, что открыт порт 5174 и запущен именно `dev:prototype`. В статической сборке и на продуктовой странице панель не загружается.

Для прямой передачи в отдельном терминале:

```bash
codex mcp add agentation -- npx -y agentation-mcp server
codex mcp list
```

Останови запущенный прототип и подними его с локальным endpoint:

```bash
VITE_AGENTATION_ENDPOINT=http://localhost:4747 npm --prefix frontend run dev:prototype
```

Начни новую сессию Codex, добавь пробное замечание и попроси агента перечислить ожидающие замечания Agentation. Если порт занят, проверь конфигурацию. Если MCP недоступен, используй Copy. Справка: [Agentation](https://www.agentation.com/install), [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp?surface=cli).

## Penpot

1. Создай тестовый файл в [Penpot](https://design.penpot.app/) либо на локальном экземпляре по [инструкции Docker](https://help.penpot.app/technical-guide/getting-started/docker/). Для облачного эксперимента используй вымышленную книгу и нейтральный макет.
2. Создай boards для библиотеки, книги, главы, источника и ошибки. В режиме Prototype свяжи кнопки с досками, затем проверь переходы в View mode.
3. Для локального MCP запусти `npx @penpot/mcp@stable` и оставь процесс работать. В файле Penpot открой Plugins → Load from URL, введи `http://localhost:4400/manifest.json` и подключи плагин. Если браузер блокирует локальное соединение, проверь его разрешение на локальную сеть.
4. Зарегистрируй `codex mcp add penpot --url http://localhost:4401/mcp`, открой новую сессию и попроси перечислить доски активной страницы. Затем выбери один слой и попроси изменить его текст.
5. Для удалённого MCP используй URL из Your account → Integrations → MCP Server. Он содержит ключ. Добавляй его только в личную конфигурацию Codex. См. [Penpot MCP](https://help.penpot.app/mcp/) и [прототипирование](https://help.penpot.app/user-guide/prototyping-testing/prototyping/).

## React Flow

В Penpot связывай доски и проверяй переходы в View mode. Для нескольких экранов кодового прототипа достаточно карты ссылок `/#/flow`. React Flow пригодится, если нужно регулярно находить ветки и открывать реальные состояния прототипа с масштабируемой схемы. Попробуй его в отдельной экспериментальной ветке:

```bash
npm --prefix frontend install --save-exact @xyflow/react
```

Подключи [React Flow](https://reactflow.dev/learn) только к экрану карты прототипа. Построй узлы и рёбра из `frontend/prototype/src/flow.ts`, а клик по узлу свяжи с соответствующим hash-маршрутом. Например, «Ошибка загрузки» открывает `/#/error`. Переходы храни в `flow.ts`, чтобы карта не расходилась с прототипом. Сравни с текущим списком, сколько времени занимает найти нужную ветку и открыть её.

Граф персонажей, событий и предметов — отдельный продуктовый сценарий. Для него узлы и связи приходят из API, которое ограничивает данные текущей границей чтения.
