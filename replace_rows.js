const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/shafn/Development/JagoCV-V2/src/components/views';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  if (c.includes('rows="')) {
    c = c.replace(/rows="(\d+)"/g, 'rows={$1}');
    fs.writeFileSync(p, c);
  }
});
