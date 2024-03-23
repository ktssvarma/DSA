

// Define the coordinates of the three points.
const x_1 = 1;
const y_1 = 1;
const x_2 = 2;
const y_2 = 2;
const x_3 = 3;
const y_3 = 3;

const isIn_Line = (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): boolean => {
    // Calculate the slope of the line between the first two points.
    const slope = (y2 - y1) / (x2 - x1);

    // Calculate the difference in y-coordinate for the third point if it were on the line.
    const yDiff = slope * (x3 - x1) - (y3 - y1);

    // Check if the difference is close to zero (within a tolerance).
    return Math.abs(yDiff) <= 1e-6;
}

// Check if the three points are collinear.
if (isIn_Line(x_1, y_1, x_2, y_2, x_3, y_3)) {
    console.log("The three points are collinear.");
} else {
    console.log("The three points are not collinear.");
}