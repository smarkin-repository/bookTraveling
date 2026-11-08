#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
skill_dir="$repo_root/.agents/skills/ui-ux-pro-max"
if [[ -e "$skill_dir" || -L "$skill_dir" ]]; then
  echo "UI/UX Pro Max already exists at $skill_dir; leaving it in place."
  exit 0
fi

staging_dir="$(mktemp -d)"
trap 'rm -rf -- "$staging_dir"' EXIT
(
  cd "$staging_dir"
  npx --yes ui-ux-pro-max-cli@2.15.0 init --ai codex
)
installed_skill="$staging_dir/.agents/skills/ui-ux-pro-max"
test -f "$installed_skill/SKILL.md"
mkdir -p -- "$(dirname "$skill_dir")"
cp -R -- "$installed_skill" "$skill_dir"
echo "Installed UI/UX Pro Max in $skill_dir. Start a new Codex session."
