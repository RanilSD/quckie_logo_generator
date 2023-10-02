class Shape {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }

  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  setText(text) {
    this.text = text;
  }
}
class Square extends Shape {
  render() {
    return `
      <svg 
        version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" height="200" width="200" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `
      <svg 
        version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="50%" cy="50%" r="100" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `
      <svg 
        version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="135" font-size="48" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };