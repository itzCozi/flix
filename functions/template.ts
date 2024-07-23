export function getTemplate({
  redirectPath,
  withError
}: {
  redirectPath: string;
  withError: boolean;
}): string {
  return `
  <!doctype html>
    <html lang="en" data-theme="light">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Authentication</title>
      <meta name="description" content="This is password protected. (sorry :3)">
      <link rel="icon" href="https://i.postimg.cc/RZ9dhRyr/locked-padlock.png">

      <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">

      <style>
        body > main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 1rem 0;
          margin: 0 auto;
          max-width: 55em;
        }
        
        h1 + h2 {
          margin-top: 0.5rem;
        }

        .error {
          background: #5f9ae8;
          border-radius: 0.35em;
          color: #fefefe;
          padding: 0.5em;
          box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.2);
        }

        h2 { color: var(--color-h2); }
      </style>
    </head>

    <body>
      <main>
        <article>
          <hgroup>
            <h1>Guard</h1>
            <h2>Enter the correct string to continue...</h2 >
          </hgroup>
          ${withError ? `<p class="error">Incorrect entry, access denied.</p>` : ''}
          <form method="post" action="/cfp_login">
            <input type="hidden" name="redirect" value="${redirectPath}" />
            <input type="password" name="password" placeholder="********" aria-label="Password" autocomplete="current-password" required autofocus>
            <button type="submit" class="contrast">Continue</button>
          </form>
        </article>
      </main>
    </body>

  </html>
  `;
}
