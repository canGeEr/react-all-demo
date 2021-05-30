export default function importAll(context) {
  //  需要注意的是context的context(key)任然是一个模块，并不是普通的import的值，可以尝试打印查看
  const map = {};
  context.keys().forEach((key) => {
    let match = key.match(/\/(\w+).jsx$/);
    if (match) {
      match = match[1];
      map[match[0].toLowerCase() + match.slice(1)] = context(key);
    }
  });
  return map;
}
