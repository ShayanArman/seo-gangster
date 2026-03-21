#!/usr/bin/env python3

from __future__ import annotations

import re
import sys
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

EDITORIAL_ITEMS = [
    ("src/content/news/ai-seo-agents.md", "thumbnail"),
    ("src/content/news/what-website-should-i-use-for-seo.md", "thumbnail"),
    ("src/content/news/seo-is-two-steps.md", "thumbnail"),
    ("src/content/news/why-freshness-beats-stale-sites.md", "thumbnail"),
    ("src/content/news/ai-agents-running-your-seo.md", "thumbnail"),
    ("src/content/news/why-seo-gangster.md", "thumbnail"),
    ("src/content/videos/weekly-seo-updates.md", "posterImage"),
]

THUMBNAIL_RE = re.compile(r'^thumbnail:\s*"([^"]+)"', re.MULTILINE)
POSTER_IMAGE_RE = re.compile(r'^posterImage:\s*"([^"]+)"', re.MULTILINE)


def read_match(path: Path, pattern: re.Pattern[str], label: str) -> str:
    content = path.read_text(encoding="utf-8")
    match = pattern.search(content)
    if not match:
        raise ValueError(f"{path.relative_to(ROOT)} is missing {label}")
    return match.group(1)


def main() -> int:
    failures: list[str] = []
    usage: dict[str, list[str]] = defaultdict(list)

    for rel_path, label in EDITORIAL_ITEMS:
        path = ROOT / rel_path
        pattern = THUMBNAIL_RE if label == "thumbnail" else POSTER_IMAGE_RE

        try:
            image_path = read_match(path, pattern, label)
        except ValueError as exc:
            failures.append(str(exc))
            continue

        usage[image_path].append(rel_path)

    duplicates = {
        image_path: owners
        for image_path, owners in sorted(usage.items())
        if len(owners) > 1
    }

    if duplicates:
        failures.append("Duplicate footer editorial images found:")
        for image_path, owners in duplicates.items():
            failures.append(f"  {image_path}")
            for owner in owners:
                failures.append(f"    - {owner}")

    if failures:
        print("\n".join(failures))
        return 1

    print(
        "Editorial image check passed: "
        f"{len(EDITORIAL_ITEMS)} surfaced editorial entries use unique images."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
