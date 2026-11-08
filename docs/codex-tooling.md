# Codex: инструменты и workflow

Для задач UI используйте репозиторный `booktraveling-design` и [инструкции по установке UI/UX Pro Max, Agentation и холстов](design-setup.md). Ниже — дополнительные инструменты для других этапов проекта. Подбирайте только нужные текущей задаче.

- [Build Web Apps](https://github.com/openai/plugins/tree/main/plugins/build-web-apps): UI-концепция, React и визуальные проверки.
- [OpenAI Developers](https://github.com/openai/plugins/tree/main/plugins/openai-developers): интеграция и документация OpenAI API.
- [Context7](https://github.com/upstash/context7/tree/master/plugins/codex/context7): прицельная документация библиотек; требует внешний сервис и настройку.
- [Superpowers](https://github.com/obra/superpowers): попробовать последовательный план и проверки; ограничивать расходы.
- [Официальный FastAPI Skill](https://github.com/fastapi/fastapi/blob/master/fastapi/.agents/skills/fastapi/SKILL.md): при реализации backend, сверять с выбранной версией.
- [Serena MCP](https://github.com/oraios/serena): опционально по мере роста кода, подключать по инструкции авторов.

В Codex CLI `/plugins` открывает каталог. `codex plugin list --available --json` показывает доступность; после установки нужна новая сессия. Инструкции по настройке Context7 — в README указанного проекта. Не подключать полный набор автоматически.

Сохранять план и прогресс в Git; `codex exec resume --last` продолжает сессию, но не обеспечивает автоматический перезапуск после сбоя. Долгий цикл требует ограничений по времени и бюджету.
