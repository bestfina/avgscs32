function smoothFn(id: string): void {
  const element = document.getElementById(id);
  if (element !== null) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default smoothFn;
