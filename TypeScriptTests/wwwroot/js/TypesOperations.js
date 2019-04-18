function simpleShapeArea(s) {
    switch (s.kind) {
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        case "triangle": //Heron's formula 
            return Math.sqrt((s.side1 + s.side2 + s.side3) +
                (-s.side1 + s.side2 + s.side3) +
                (s.side1 - s.side2 + s.side3) +
                (s.side1 + s.side2 - s.side3)) / 4;
    }
}
//# sourceMappingURL=TypesOperations.js.map