describe("<Page />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the Home page
    cy.visit("/");

    // The new page should contain an h1 with "Home"
    cy.get("h1").contains("Hello world!");
  });
});
