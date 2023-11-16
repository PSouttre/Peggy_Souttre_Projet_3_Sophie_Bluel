export const logout = () => {
  const logout = document.querySelector(".logout");
  logout.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
};
