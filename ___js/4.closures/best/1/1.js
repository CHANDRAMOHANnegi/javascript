function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  console.log(help);
  return () => {
    showHelp(help);
  }
}

function setupHelp() {
  var helpText = [
    { 'id': 'email', 'help': 'Your e-mail address' },
    { 'id': 'name', 'help': 'Your full name' },
    { 'id': 'age', 'help': 'Your age (you must be over 16)' }
  ];

  for (var i = 0; i < helpText.length; i++) {
    const item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();