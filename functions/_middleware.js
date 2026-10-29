export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "dzielnica24.pages.dev") {
    const target = `https://www.dzielnica24.pl${url.pathname}${url.search}`;
    return Response.redirect(target, 301);
  }
  return context.next();
}
