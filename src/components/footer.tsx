export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/40" dir="ltr">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Amirreza Mahmoudi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
