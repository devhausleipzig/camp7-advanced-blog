export function titleToSlug(title: string) {
  return title.toLowerCase().split(" ").join("-");
}
