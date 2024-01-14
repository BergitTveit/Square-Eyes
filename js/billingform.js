// js/billingform.js
function createElement(tag, attributes = {}, text = "") {
  const element = document.createElement(tag);
  Object.assign(element, attributes);
  if (text) {
    element.textContent = text;
  }
  return element;
}

function createInput(id, name, placeholder, type) {
  return createElement("input", { id, name, placeholder, type });
}

function createLabel(text, htmlFor) {
  const label = createElement("label", { textContent: text, htmlFor });
  label.classList.add("visually-hidden");
  return label;
}

function createFormInput(
  labelText,
  inputId,
  inputName,
  inputPlaceholder,
  inputType
) {
  const inputLabel = createLabel(labelText, inputId);
  const input = createInput(inputId, inputName, inputPlaceholder, inputType);
  const wrapperDiv = createElement("div");
  wrapperDiv.appendChild(inputLabel);
  wrapperDiv.appendChild(input);
  return wrapperDiv;
}

function createForm() {
  const section = createElement("section");
  const form = createElement("form");
  form.action = "/submit-form";
  form.method = "POST";

  const billingInfoHeading = createElement("h2", {
    textContent: "Billing information",
  });
  const billingInfoDiv = createElement("div");
  const customerInfoHeading = createElement("h2", {
    textContent: "Customer Information",
  });
  const customerInfoDiv = createElement("div");

  const billingInputs = [
    {
      label: "Credit Card Number:",
      id: "credit-card",
      name: "credit-card",
      placeholder: "Credit Card Number",
      type: "text",
    },
    { label: "CVV:", id: "CVV", name: "CVV", placeholder: "CVV", type: "text" },
    {
      label: "Expiration Date (MM/YY):",
      id: "expiration-date",
      name: "expiration-date",
      placeholder: "Expiration Date (MM/YY)",
      type: "text",
    },
  ];

  const customerInputs = [
    {
      label: "Full Name:",
      id: "name",
      name: "name",
      placeholder: "Full Name",
      type: "text",
    },
    {
      label: "Email Address:",
      id: "email",
      name: "email",
      placeholder: "Email Address",
      type: "email",
    },
    {
      label: "Phone Number:",
      id: "phone",
      name: "phone",
      placeholder: "Phone Number",
      type: "tel",
    },
    {
      label: "Billing Address:",
      id: "address",
      name: "address",
      placeholder: "Billing Address",
      type: "text",
    },
    {
      label: "City:",
      id: "city",
      name: "city",
      placeholder: "City",
      type: "text",
    },
    {
      label: "State:",
      id: "state",
      name: "state",
      placeholder: "State",
      type: "text",
    },
    {
      label: "ZIP/Postal Code:",
      id: "zip",
      name: "zip",
      placeholder: "ZIP/Postal Code",
      type: "text",
    },
    {
      label: "Country:",
      id: "country",
      name: "country",
      placeholder: "Country",
      type: "text",
    },
  ];

  billingInputs.forEach((inputData) => {
    billingInfoDiv.appendChild(
      createFormInput(
        inputData.label,
        inputData.id,
        inputData.name,
        inputData.placeholder,
        inputData.type
      )
    );
  });

  customerInputs.forEach((inputData) => {
    customerInfoDiv.appendChild(
      createFormInput(
        inputData.label,
        inputData.id,
        inputData.name,
        inputData.placeholder,
        inputData.type
      )
    );
  });

  const cancelButton = createElement("button", {
    textContent: "Cancel",
    type: "button",
    className: "cta cta-s color",
  });
  cancelButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  const buyButton = createElement("button", {
    textContent: "Buy",
    type: "button",
    className: "button-style1",
  });
  buyButton.addEventListener("click", function () {
    window.location.href = "checkout.html";
  });

  form.append(
    billingInfoHeading,
    billingInfoDiv,
    customerInfoHeading,
    customerInfoDiv,
    cancelButton,
    buyButton
  );
  section.appendChild(form);

  document.body.appendChild(section);
}

document.addEventListener("DOMContentLoaded", function () {
  createForm();
});
