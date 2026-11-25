// Groan-Off entry: one original dad joke, told deadpan at the dinner table.
const JOKE =
  "I told my fridge to chill — now it gives me the cold shoulder every morning.";

const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(`${outDir}/entry.txt`, JOKE);
console.log(`Groan delivered: ${JOKE.length} characters into ${outDir}/entry.txt`);
