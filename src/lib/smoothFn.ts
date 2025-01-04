function smoothFn(url: string, currentPath: string | null): void {
  const [path, id] = url.split("#");

  if (path === currentPath && id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Элемент с id "${id}" не найден.`);
    }
  } else if (path) {
    // Если нужно перейти на другую страницу
    window.location.href = url;
  }
}

export default smoothFn;
