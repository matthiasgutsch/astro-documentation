export type DocVersion = {
  value: string;
  label: string;
  isCurrent?: boolean;
};

export type ComponentVersion = {
  value: string;
  label: string;
  isCurrent?: boolean;
  /** Absolute URL path to this version's docs page. */
  path: string;
};

/** Per-component version history. Key = component slug (matches the URL segment). */
export const COMPONENT_VERSIONS: Record<string, ComponentVersion[]> = {
  button: [
    {
      value: "v2.0.0",
      label: "v2.0.0 (current)",
      isCurrent: true,
      path: "/components/button/",
    },
    { value: "v1.0.0", label: "v1.0.0", path: "/components/button/v1-0-0/" },
  ],
};

// Single source of truth for published docs tracks.
// To release a new version:
//   1. Set isCurrent: true on the new entry.
//   2. Remove isCurrent from the old current entry.
//   3. Copy the current /components/ docs into /src/content/docs/vNN/ for the old track.
export const DOC_VERSIONS: DocVersion[] = [
  { value: "v23", label: "v23 (current)", isCurrent: true },
  { value: "v22", label: "v22" },
  { value: "v21", label: "v21" },
  { value: "v20", label: "v20" },
];

export const UNVERSIONED_VERSION =
  DOC_VERSIONS.find((v) => v.isCurrent)?.value ??
  DOC_VERSIONS[0]?.value ??
  "v1";
