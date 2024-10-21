const Footer = () => {
  return (
    <footer className="md:px-8 md:py-0 bg-slate-400">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/sk3316"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Shitanshu Priyadarshi
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/sk3316"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
