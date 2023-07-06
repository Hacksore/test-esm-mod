// this is ran in the console
const mods = [
  await import("http://localhost:5173/src/main.ts"),
  await import("http://localhost:5173/src/main.ts"),
]

// activate all modules
let i = 1;
for (const m of mods) {
  const module = await m.activate(i)
  console.log(module)
  i++;
}

