interface Rectangle {
	kind: "rectangle";
	width: number;
	height: number;
}
interface Circle {
	kind: "circle";
	radius: number;
}
interface Triangle {
	kind: "triangle";
	side1: number;
	side2: number;
	side3: number;
}

type SimpleShape = Triangle | Rectangle | Circle;


function simpleShapeArea(s: SimpleShape): number {
	switch (s.kind) {
		case "rectangle": return s.height * s.width;
		case "circle": return Math.PI * s.radius ** 2;
		case "triangle": //Heron's formula 
			return Math.sqrt((s.side1 + s.side2 + s.side3) +
				(-s.side1 + s.side2 + s.side3) +
				(s.side1 - s.side2 + s.side3) +
				(s.side1 + s.side2 - s.side3)
			) / 4;
	}
}