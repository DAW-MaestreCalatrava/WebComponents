# First Web Component Exercise

## 1. MiTarjeta Component

My `mi-tarjeta` component is a custom web component that implements an interactive card with a title and a counter.

### HTML Structure
The component is used in HTML as follows:

```html
<mi-tarjeta titulo="My Card" buttonText="Like">
    <p>This is my card content</p>
</mi-tarjeta>
```

### Attributes
- `titulo`: Sets the card's title text
- `buttonText`: Sets the text of the button that will be displayed next to the counter

### Features
- Accepts child elements that will be displayed in the card body
- Maintains an internal state (counter) that increments each time the button is clicked
- Uses Shadow DOM for style encapsulation
- Implements responsive design with CSS

### Styles
- Rounded borders and soft shadow
- Interactive button with hover effect
- Blue color scheme for the button
- Consistent internal spacing and margins

### Implementation
- Shadow DOM for encapsulation
- HTML Templates for rendering
- Attribute observation for reactive updates