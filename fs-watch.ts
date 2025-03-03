let watcher = Deno.watchFs("./");

for await (const event of watcher) {
  console.log(">>>> event", event);
  watcher.close();
}
import { debounce } from "jsr:@std/async/debounce";
const log = debounce((event: Deno.FsEvent) => {
  console.log("[%s] %s", event.kind, event.paths[0]);
}, 200);

watcher = Deno.watchFs("./");

for await (const event of watcher) {
  log(event);
}
