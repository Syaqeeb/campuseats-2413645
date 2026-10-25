# Week 1 Reflection

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
   Imperative programming requires writing step-by-step instructions telling the browser _how_ to update the DOM elements manually. Declarative programming (React) involves describing _what_ the UI should look like for the current state, and React automatically handles the DOM updates when the state changes.

2. Why must a component name start with a capital letter?
   React treats lowercase tag names as standard HTML elements (like `<div>` or `<p>`). Capitalized names signal to JSX that it is a custom React component so React knows to render it properly.

3. What does a fragment <>...</> do, and why not just use a <div>?
   A fragment lets you group multiple sibling elements together without adding an extra node to the DOM tree. Using a `<div>` adds an unnecessary HTML wrapper element that can accidentally disrupt CSS layouts like Flexbox or Grid.

4. Name one benefit of splitting the UI into small components.
   It improves code reusability and maintainability, making it much easier to isolate bugs, test specific features, and collaborate on code.
