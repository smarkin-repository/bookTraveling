---
name: booktraveling-design
description: Use for BookTraveling UI/UX work and team handoffs between Penpot, the React prototype, its screen map, Vite review, and product implementation. Covers Agentation feedback and resuming work from a handoff.
---

Read [the design workflow](../../../docs/design-workflow.md), [the UI spec](../../../docs/ui-spec.md) and [design decisions](../../../design/DESIGN.md). Read the setup guide when configuring tools. Use UI/UX Pro Max, when installed, for design recommendations.

1. Find the current record in `design/handoff/`. If none exists for this change, start one from [the template](../../../design/handoff/TEMPLATE.md). Identify the requested stage, screen ID, state, user outcome and next owner. The same person can fill several roles.
2. **Canvas.** Use Penpot as the default editor. Record the file or export reference, version and frame or layer. Capture the visual change and behavior separately. If MCP is unavailable, use a screenshot or export. Record missing inputs rather than guessing the design.
3. **Prototype.** Transfer the agreed scope into `frontend/prototype/` with synthetic data. Treat exported JSX as a starting point. Keep stable `data-ui-id` values and preserve interactions outside the requested change. Update `frontend/prototype/src/flow.ts` when routes or transitions change. Use the existing map, or React Flow if it is already connected, to open the affected states.
4. **Review.** Run `npm --prefix frontend run build:prototype`, open the Vite preview and replay the affected path, including relevant error, empty and spoiler-boundary states. Resolve Agentation notes against the screen, state and element ID. Record actual checks, limitations and preview routes. Send failed design checks back to Canvas, behavior checks back to Prototype.
5. **Handoff.** Record who accepted what and the exact prototype commit. Product implementation is a separate stage after explicit approval. Verify the agreed behavior against the real API, including server enforcement of the reading boundary. Mark unverified or blocked steps in the record and give the next owner one concrete action.

At the end of each stage, update the record with the outcome, evidence, next owner and next action. Make only the requested transition. An implementation request for the prototype does not approve the product implementation.
