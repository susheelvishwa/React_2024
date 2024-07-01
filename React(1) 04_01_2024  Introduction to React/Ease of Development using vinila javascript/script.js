function App() {
  const app = document.createElement("div");
  app.classList = "App";
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  h1.textContent = "Hello World!";
  h2.textContent = "This is my App!";
  app.append(h1, h2);
  return app;
}

document.body.append(App());
