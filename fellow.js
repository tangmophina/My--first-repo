// Array of fellow profiles
let fellows = [
  {
    name: "John",
    role: "Frontend Developer",
    points: 85
  },
  {
    name: "Mary",
    role: "Backend Developer",
    points: 92
  },
  {
    name: "David",
    role: "UI Designer",
    points: 78
  }
];

// Add a new fellow
fellows.push({
  name: "Sarah",
  role: "Data Analyst",
  points: 88
});

// Print a formatted summary of each fellow
for (let fellow of fellows) {
  console.log(
    `Name: ${fellow.name} | Role: ${fellow.role} | Points: ${fellow.points}`
  );
}