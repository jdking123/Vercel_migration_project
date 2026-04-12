/**
 * Stub SearchDialog — will be replaced with full implementation in Phase 2.
 */

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[20vh] bg-black/50"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="bg-card border border-border rounded-lg shadow-xl w-full max-w-lg mx-4 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          autoFocus
          type="search"
          placeholder="Search resources and articles…"
          className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm"
        />
        <p className="text-xs text-muted-foreground mt-3">Search coming soon — Phase 2</p>
      </div>
    </div>
  );
}
