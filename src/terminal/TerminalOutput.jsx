export function TerminalOutput({ result }) {
  if (!result) return null;

  if (result.type === "error") {
    return (
      <p style={{ color: "oklch(65% 0.18 25)" }}>
        command not found:{" "}
        <span style={{ color: "var(--color-text-faint)" }}>{result.cmd}</span>
        {" — type "}
        <span style={{ color: "oklch(73.7% 0.12 145)" }}>help</span>
        {" for available commands."}
      </p>
    );
  }

  if (result.type === "lines") {
    return (
      <div className="space-y-1 transition-all duration 300 hover:translate-x-1.5 ">
        {result.lines.map((line, i) =>
          line.text === "" ? (
            <div key={i} className="h-2" />
          ) : (
            <p
              key={i}
              style={{
                color:
                  line.style === "label"
                    ? "var(--color-text-faint)"
                    : line.style === "muted"
                      ? "var(--color-text-dark)"
                      : "var(--color-text-dark)",
                fontWeight: line.style === "label" ? 600 : 400,
                opacity: line.style === "muted" ? 0.5 : 1,
                letterSpacing: line.style === "label" ? "0.1em" : "normal",
              }}
            >
              {line.text}
            </p>
          ),
        )}
      </div>
    );
  }

  if (result.type === "table") {
    return (
      <div className="space-y-1.5 transition-all duration 300 hover:translate-x-1.5">
        <p
          className="text-xs tracking-widest uppercase mb-3 opacity-50"
          style={{ color: "var(--color-text-faint)" }}
        >
          available commands
        </p>
        {result.rows.map(([cmd, desc], i) => (
          <div key={i} className="flex gap-4">
            <span
              className="w-24 shrink-0"
              style={{ color: "oklch(73.7% 0.12 145)" }}
            >
              {cmd}
            </span>
            <span style={{ color: "var(--color-text-dark)", opacity: 0.7 }}>
              {desc}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (result.type === "entries") {
    return (
      <div className="space-y-5 transition-all duration 300 hover:translate-x-1.5">
        {result.items.map((item, i) => (
          <div key={i}>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span
                className="font-semibold"
                style={{ color: "var(--color-text-faint)" }}
              >
                {item.title}
              </span>
              <span style={{ color: "oklch(73.7% 0.12 145)" }}>
                @ {item.company}
              </span>
              <span
                className="text-xs opacity-50"
                style={{ color: "var(--color-text-dark)" }}
              >
                {item.period}
              </span>
            </div>
            <p
              className="mt-1 text-sm opacity-70"
              style={{ color: "var(--color-text-dark)" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (result.type === "projects") {
    return (
      <div className="space-y-5  transition-all duration 300 hover:translate-x-1.5">
        {result.items.map((item, i) => (
          <div key={i}>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span
                className="font-semibold"
                style={{ color: "var(--color-text-faint)" }}
              >
                {item.name}
              </span>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs underline opacity-50 hover:opacity-100 transition-opacity"
                  style={{ color: "oklch(73.7% 0.12 145)" }}
                >
                  ↗ visit
                </a>
              )}
            </div>
            <p
              className="mt-1 text-sm opacity-70"
              style={{ color: "var(--color-text-dark)" }}
            >
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.stack.map((s, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "oklch(22% 0.006 107.1)",
                    color: "oklch(73.7% 0.12 145)",
                    border: "1px solid oklch(28% 0.006 107.1)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (result.type === "tags") {
    return (
      <div className="space-y-3  transition-all duration 300 hover:translate-x-1.5">
        {result.groups.map((group, i) => (
          <div key={i} className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span
              className="text-xs uppercase tracking-widest w-20 shrink-0 opacity-50"
              style={{ color: "oklch(73.7% 0.12 145)" }}
            >
              {group.label}
            </span>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {group.items.map((item, j) => (
                <span
                  key={j}
                  className="text-sm"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  {item}
                  {j < group.items.length - 1 && (
                    <span
                      style={{
                        color: "var(--color-text-dark)",
                        opacity: 0.3,
                        marginLeft: "6px",
                      }}
                    >
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (result.type === "contact") {
    return (
      <div className="space-y-2  transition-all duration 300 hover:translate-x-1.5">
        {result.items.map((item, i) => (
          <div key={i} className="flex gap-4">
            <span
              className="w-20 shrink-0 text-xs uppercase tracking-widest opacity-50"
              style={{ color: "oklch(73.7% 0.12 145)" }}
            >
              {item.label}
            </span>
            <span style={{ color: "var(--color-text-faint)" }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
