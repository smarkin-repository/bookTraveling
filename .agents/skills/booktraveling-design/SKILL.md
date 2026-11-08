---
name: booktraveling-design
description: Use for BookTraveling UI/UX experiments, style selection, visual canvas and screen flows, Agentation feedback, or promoting an approved prototype into the product UI.
---

Read [the design workflow](../../../docs/design-workflow.md), [the UI spec](../../../docs/ui-spec.md) and the current [design decisions](../../../design/DESIGN.md). Open the setup guide only when configuring a tool. Use the separate UI/UX Pro Max skill, when installed, for design recommendations.

1. Identify the target screen, state, stable UI ID and intended user outcome. Check the current flow before adding a screen or transition.
2. If the user is choosing a visual direction, show options and record the decision. Use Penpot or OpenPencil for a requested canvas trial. Use the runnable prototype to verify behavior.
3. Apply exploratory changes in `frontend/prototype/` with synthetic data. Translate Agentation selectors to stable IDs and confirm the target in context. Keep screen links and the flow map consistent.
4. Run the prototype build and replay the affected journey, including the relevant error, empty or spoiler-boundary state. Report the preview route, changed behavior and verification.
5. Record an accepted prototype commit and the relevant screen IDs in the handoff. Change product UI or backend only for an explicitly approved implementation. Data access and spoiler enforcement belong on the server.
