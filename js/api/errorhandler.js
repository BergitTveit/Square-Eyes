export function handleError(message = "Unknown error occured.") {
  return `<div class="error">"Error:"${message}</div>`;
}
