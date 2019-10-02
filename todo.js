
function app() {

pjs.defineDisplay("display", "todo.json");

var list = pjs.query("SELECT * FROM todo")

display.grid.replaceRecords(list);

while(true){
display.todoScreen.execute();
  if (add) addItem(display.grid, newItem);
  removeItems(display.grid);
  }

}

function addItem(grid, newItem){
  grid.push({item: newItem});
  pjs.query("INSERT INTO todo SET ?", {item: newItem})
}

function removeItems(grid){
  var recordsToRemove = grid.filter(entry => entry.remove);
  recordsToRemove.forEach(record => pjs.query("DELETE FROM todo WHERE item = ?", record.item));
  grid.applyFilter(entry => !entry.remove);
}

exports.default = app;