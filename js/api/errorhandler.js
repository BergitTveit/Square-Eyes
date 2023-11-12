export function handleError(message = "Unknown error occured.") {
  return `<div class="error">"Error:"${message}</div>`;
}
export function handleErrorByNavigationToHomepage(
  message = "Unknown error occured."
) {}
